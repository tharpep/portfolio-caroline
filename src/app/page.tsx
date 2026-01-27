import Link from "next/link";
import { getContent } from "@/lib/getContent";
import { getFeaturedProjects, type Project } from "@/lib/getProjects";

export default function Home() {
    const content = getContent();
    const featuredProjects = getFeaturedProjects();

    return (
        <main className="text-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight mb-6 text-slate-900">
                        Caroline Wiggins
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl">
                        {content.home.tagline}
                        <br />
                        <span className="text-slate-700">{content.home.introText}</span>
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/projects"
                            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/resume"
                            className="px-6 py-3 border-2 border-slate-300 hover:border-sky-600 text-slate-700 hover:text-sky-600 font-semibold rounded-lg transition-colors"
                        >
                            View Resume
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects - Large 2-Column Visual Cards */}
            {featuredProjects.length > 0 && (
                <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-16 border-t border-slate-200 bg-white">
                    <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-10">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {featuredProjects.map((project) => (
                            <FeaturedProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link
                            href="/projects"
                            className="text-sky-600 hover:text-sky-700 font-medium transition-colors"
                        >
                            View all projects →
                        </Link>
                    </div>
                </section>
            )}

            {/* Connect Section */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-16 border-t border-slate-200 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-8">
                    Connect
                </h2>
                <div className="flex flex-wrap gap-4">
                    <a
                        href={content.resume.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 border-2 border-slate-300 hover:border-sky-600 text-slate-700 hover:text-sky-600 rounded-lg transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </section>
        </main>
    );
}

function FeaturedProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-sky-500/50 transition-colors overflow-hidden"
        >
            {/* Image Placeholder */}
            <div className="aspect-video bg-slate-200 flex items-center justify-center border-b-2 border-slate-300">
                <span className="text-slate-500 text-sm">[Project image/campaign visuals]</span>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-xs text-slate-500 ml-2 flex-shrink-0">
                        {project.timeline}
                    </span>
                </div>
                <p className="text-slate-600 text-sm line-clamp-2 mb-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
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
