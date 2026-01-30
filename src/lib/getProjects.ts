export interface Project {
    slug: string;
    title: string;
    description: string;
    technologies: string[];
    status: 'completed' | 'in-progress';
    image?: string;
    embedCode?: string;
    gallery?: string[];
}

const projects: Project[] = [
    {
        slug: "onesync",
        title: "OneSync: The Digital Wallet for a Shared Future",
        description: "A comprehensive marketing strategy presentation analyzing brand positioning and consumer engagement tactics. Delivered as part of the core marketing curriculum at Purdue University.",
        technologies: ["Microsoft PowerPoint", "Market Analysis", "Strategic Planning"],
        status: "completed",
        image: "/images/purdue-marketing-presentation.png",
        embedCode: '<iframe src="https://purdue0-my.sharepoint.com/personal/cwiggin_purdue_edu/_layouts/15/Doc.aspx?sourcedoc={c20c9035-c1c2-4948-8da8-0314b097a29e}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="100%" height="400px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>',
    },
    {
        slug: "dove-strategy-case",
        title: "Dove Strategy Case",
        image: "/images/Screenshot 2026-01-30 000135.png",
        description: "Dove must find a way to engage Gen Z, who demand authenticity and use brands for identity expression, without diluting the Real Beauty positioning that built trust with its existing customer base.",
        technologies: ["Strategic Analysis", "Brand Strategy", "Presentation"],
        status: "completed",
        embedCode: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSH9zQ3uIe9HZkBBrDxfv4klumjtFFu1JcZBbTyF-N8uYBVgGW8S2FkN8sq52m-DTjn1glP4J8LejXT/pubembed?start=false&loop=true&delayms=3000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
    },
];

export function getAllProjects(): Project[] {
    return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.slice(0, 3);
}
