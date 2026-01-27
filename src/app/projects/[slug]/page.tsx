import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/getProjects";
import type { Metadata } from "next";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: `${project.title} – Caroline Wiggins`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="text-slate-900 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 text-sm rounded-full ${project.status === 'completed'
                                ? 'bg-green-100 text-green-700 border-2 border-green-200'
                                : 'bg-amber-100 text-amber-700 border-2 border-amber-200'
                            }`}>
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                        <span className="text-slate-500 text-sm">{project.timeline}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4">
                        {project.title}
                    </h1>
                </div>

                {/* Image Placeholder */}
                <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center border-2 border-slate-300 mb-8">
                    <span className="text-slate-500">[Add project image/campaign visuals here]</span>
                </div>

                {/* Description */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-sky-600 mb-4">Overview</h2>
                    <p className="text-slate-700 leading-relaxed">
                        {project.description}
                    </p>
                    <p className="text-sky-600/80 mt-4 text-sm">
                        [Add more detailed description here - what was the challenge, your approach, and results]
                    </p>
                </section>

                {/* Technologies/Tools */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-sky-600 mb-4">Tools & Platforms</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg border-2 border-slate-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Additional Images Placeholder */}
                <section>
                    <h2 className="text-xl font-bold text-sky-600 mb-4">Gallery</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center border-2 border-slate-300">
                            <span className="text-slate-500 text-sm text-center px-4">[Additional image]</span>
                        </div>
                        <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center border-2 border-slate-300">
                            <span className="text-slate-500 text-sm text-center px-4">[Additional image]</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
