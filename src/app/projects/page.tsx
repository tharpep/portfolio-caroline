import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects, type Project } from "@/lib/getProjects";

export const metadata: Metadata = {
    title: "Projects – Caroline Wiggins",
    description: "Marketing and strategy projects.",
};

export default function Projects() {
    const projects = getAllProjects();

    return (
        <main className="text-slate-900 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">
                        Projects
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Marketing and strategy projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-sky-500/50 transition-colors overflow-hidden"
        >
            {/* Image Section */}
            <div className="aspect-video bg-slate-200 border-b-2 border-slate-300 relative">
                {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full">
                        <span className="text-slate-500 text-sm">[Project image]</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                        <span className={`w-2 h-2 rounded-full ${project.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'}`} />
                        <span className="text-xs text-slate-500">
                            {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                    </div>
                </div>
                <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-white text-sky-600 rounded border border-sky-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
