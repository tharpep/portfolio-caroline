export interface Project {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    timeline: string;
    category: string;
    status: 'completed' | 'in-progress';
}

export interface ProjectCategory {
    id: string;
    name: string;
    description: string;
    projects: Project[];
}

const projects: Project[] = [
    // Campaigns
    {
        slug: "brand-campaign-example",
        title: "Brand Campaign Example",
        description: "[Add your campaign description here - describe the campaign goals, target audience, and key strategies used.]",
        technologies: ["Social Media", "Content Strategy", "Brand Development"],
        timeline: "[Date Range]",
        category: "campaigns",
        status: "completed",
    },
    // Brand Strategy
    {
        slug: "brand-strategy-project",
        title: "Brand Strategy Project",
        description: "[Add your brand strategy project description - include market research, positioning, and brand identity work.]",
        technologies: ["Market Research", "Brand Development", "Consumer Insights"],
        timeline: "[Date Range]",
        category: "brand-strategy",
        status: "completed",
    },
    // Content Creation
    {
        slug: "content-creation-project",
        title: "Content Creation Project",
        description: "[Add your content creation project - describe the content type, platform, and results achieved.]",
        technologies: ["Copywriting", "Graphic Design", "Social Media"],
        timeline: "[Date Range]",
        category: "content",
        status: "completed",
    },
];

export function getAllProjects(): Project[] {
    return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(): ProjectCategory[] {
    const categories: ProjectCategory[] = [
        {
            id: "campaigns",
            name: "Campaigns",
            description: "Marketing campaigns and promotional initiatives.",
            projects: projects.filter((p) => p.category === "campaigns"),
        },
        {
            id: "brand-strategy",
            name: "Brand Strategy",
            description: "Brand development and strategic marketing work.",
            projects: projects.filter((p) => p.category === "brand-strategy"),
        },
        {
            id: "content",
            name: "Content Creation",
            description: "Content marketing and creative projects.",
            projects: projects.filter((p) => p.category === "content"),
        },
    ];

    return categories.filter((c) => c.projects.length > 0);
}

export function getFeaturedProjects(): Project[] {
    return projects.slice(0, 3);
}
