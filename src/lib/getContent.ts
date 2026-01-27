import { readFileSync } from 'fs';
import { join } from 'path';

interface Content {
    home: {
        tagline: string;
        introText: string;
    };
    about: {
        bio: string;
        topSkills: string[];
        academicFocus: string[];
    };
    resume: {
        location: string;
        linkedIn: string;
        education: {
            school: string;
            degree: string;
            dateRange: string;
            additionalDetails: string;
        };
        experience: Array<{
            company: string;
            position: string;
            dateRange: string;
            location: string;
            description: string;
        }>;
        certifications: string[];
        honors: string[];
        topSkills: string;
    };
}

function extractSection(content: string, header: string, nextHeader?: string): string {
    const startIndex = content.indexOf(header);
    if (startIndex === -1) return '';
    
    const sectionStart = content.indexOf('\n', startIndex) + 1;
    const sectionEnd = nextHeader ? content.indexOf(nextHeader, sectionStart) : content.length;
    
    if (sectionEnd === -1) {
        return content.substring(sectionStart).trim();
    }
    
    return content.substring(sectionStart, sectionEnd).trim();
}

function extractList(content: string, header: string, nextHeader?: string): string[] {
    const section = extractSection(content, header, nextHeader);
    return section
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim())
        .filter(item => item.length > 0);
}

function parseContent(content: string): Content {
    // Home page
    const homeTagline = extractSection(content, '### Tagline', '### Intro Text');
    const homeIntro = extractSection(content, '### Intro Text', '---');
    
    // About page
    const aboutBio = extractSection(content, '### Bio', '### Top Skills');
    const aboutTopSkills = extractList(content, '### Top Skills', '### Academic Focus');
    const aboutAcademicFocus = extractList(content, '### Academic Focus', '---');
    
    // Resume page
    const resumeLocation = extractSection(content, '### Location', '### LinkedIn');
    const resumeLinkedIn = extractSection(content, '### LinkedIn', '### Education');
    
    // Education
    const educationSchool = extractSection(content, '#### School', '#### Degree');
    const educationDegree = extractSection(content, '#### Degree', '#### Date Range');
    const educationDateRange = extractSection(content, '#### Date Range', '#### Additional Details');
    const educationAdditional = extractSection(content, '#### Additional Details', '---');
    
    // Experience
    const experienceEntries: Content['resume']['experience'] = [];
    const experienceSection = extractSection(content, '### Experience', '### Certifications');
    const experienceBlocks = experienceSection.split('#### ').filter(block => block.trim());
    
    for (const block of experienceBlocks) {
        const lines = block.split('\n').filter(l => l.trim());
        if (lines.length === 0) continue;
        
        const company = lines[0].trim();
        let position = '';
        let dateRange = '';
        let location = '';
        let description = '';
        
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('**Position:**')) {
                position = line.replace('**Position:**', '').trim();
            } else if (line.startsWith('**Date Range:**')) {
                dateRange = line.replace('**Date Range:**', '').trim();
            } else if (line.startsWith('**Location:**')) {
                location = line.replace('**Location:**', '').trim();
            } else if (line.startsWith('**Description:**')) {
                description = line.replace('**Description:**', '').trim();
            }
        }
        
        if (company && position) {
            experienceEntries.push({
                company,
                position,
                dateRange,
                location,
                description,
            });
        }
    }
    
    // Certifications and Honors
    const certifications = extractList(content, '### Certifications', '---');
    const honors = extractList(content, '### Honors & Awards', '---');
    
    // Resume Top Skills (last occurrence)
    const resumeTopSkillsSection = content.split('### Top Skills');
    const resumeTopSkills = resumeTopSkillsSection[resumeTopSkillsSection.length - 1]?.split('---')[0]?.trim() || '';
    
    return {
        home: {
            tagline: homeTagline,
            introText: homeIntro,
        },
        about: {
            bio: aboutBio,
            topSkills: aboutTopSkills,
            academicFocus: aboutAcademicFocus,
        },
        resume: {
            location: resumeLocation,
            linkedIn: resumeLinkedIn,
            education: {
                school: educationSchool || 'Purdue University Daniels School of Business',
                degree: educationDegree || 'Bachelor of Science, Marketing',
                dateRange: educationDateRange || 'August 2024 - December 2027',
                additionalDetails: educationAdditional || 'Design & Innovation Minor · Entrepreneurship Certificate',
            },
            experience: experienceEntries,
            certifications,
            honors,
            topSkills: resumeTopSkills,
        },
    };
}

export function getContent(): Content {
    const filePath = join(process.cwd(), 'content.md');
    const fileContents = readFileSync(filePath, 'utf8');
    return parseContent(fileContents);
}
