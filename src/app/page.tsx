import Link from "next/link";
import { getContent } from "@/lib/getContent";

export default function Home() {
    const content = getContent();

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
                            href="/about"
                            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
                        >
                            Learn More
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
