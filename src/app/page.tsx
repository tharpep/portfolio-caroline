import Link from "next/link";
import { getContent } from "@/lib/getContent";
import { getFeaturedProjects, type Project } from "@/lib/getProjects";

export default function Home() {
    const content = getContent();
    const featuredProjects = getFeaturedProjects();

    return (
        <main className="text-slate-900 min-h-screen animate-page-enter">
            {/* Hero Section */}
            <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative">
                {/* Left: Hero Content */}
                <div className="max-w-xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight mb-6 text-slate-900">
                        Caroline Wiggins
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-8">
                        {content.home.tagline}
                        <br />
                        <span className="text-slate-700 mt-2 inline-block">{content.home.introText}</span>
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
                        <a
                            href={content.resume.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 hover:border-sky-600 text-slate-700 hover:text-sky-600 font-semibold rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Right: Strategy Steps — absolutely positioned to center between hero and right edge */}
                <Link href="/about" className="hidden xl:flex flex-col justify-center items-center group absolute top-1/2 -translate-y-1/2 right-24 left-[48%] px-4">
                        {/* Horizontal Steps */}
                        <div className="flex items-center justify-between w-full">
                            {/* Step 1 */}
                            <div className="text-center flex-1">
                                <div className="w-28 h-28 rounded-full bg-sky-600 flex items-center justify-center mx-auto mb-5 shadow-xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 font-medium">
                                    Identify critical tensions
                                </p>
                            </div>

                            {/* Arrow 1 */}
                            <div className="flex-shrink-0 px-2">
                                <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center flex-1">
                                <div className="w-28 h-28 rounded-full bg-sky-600 flex items-center justify-center mx-auto mb-5 shadow-xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 font-medium">
                                    Evaluate opportunity cost
                                </p>
                            </div>

                            {/* Arrow 2 */}
                            <div className="flex-shrink-0 px-2">
                                <svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center flex-1">
                                <div className="w-28 h-28 rounded-full bg-sky-600 flex items-center justify-center mx-auto mb-5 shadow-xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 font-medium">
                                    Plan for adjustment
                                </p>
                            </div>
                        </div>

                    <p className="text-sky-600 group-hover:text-sky-700 font-medium text-center mt-12 transition-colors">
                        See my approach →
                    </p>
                </Link>
            </section>

            {/* Projects */}
            {featuredProjects.length > 0 && (
                <section className="px-6 sm:px-8 md:px-16 lg:px-24 py-16 border-t border-slate-200 bg-white">
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

        </main>
    );
}

function FeaturedProjectCard({ project }: { project: Project }) {
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
                        <span className="text-slate-500 text-sm">[Project image/campaign visuals]</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                    {project.title}
                </h3>
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
