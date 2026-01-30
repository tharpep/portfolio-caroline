import type { Metadata } from "next";
import { getContent } from "@/lib/getContent";

export const metadata: Metadata = {
    title: "About – Caroline Wiggins",
    description: "About Caroline Wiggins - Marketing professional specializing in brand strategy and digital marketing.",
};

export default function About() {
    const content = getContent();

    return (
        <main className="text-slate-900 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
            <div className="max-w-4xl mx-auto animate-page-enter">
                {/* Header */}
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-8">
                    About
                </h1>

                {/* Bio */}
                <section className="mb-12">
                    <div className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                        {content.about.bio}
                    </div>
                </section>

                {/* Strategy Approach */}
                <section className="mb-12">
                    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700 p-8 md:p-10 border border-slate-500/50">
                        {/* Lightbulb Icon with Animation */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                                    <svg className="w-10 h-10 text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                                    </svg>
                                </div>
                                <div className="absolute -inset-3 rounded-full bg-amber-300/20 -z-10 animate-ping" style={{ animationDuration: '2s' }}></div>
                            </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold font-display text-white text-center mb-8">
                            How I Approach Strategy Problems
                        </h2>

                        {/* Three Steps */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {/* Step 1 */}
                            <div className="bg-white rounded-xl p-5 relative shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mt-4">
                                    What tension faced by the company is most damaging, that would provide a strategic advantage if addressed, and what is affirming that this is the best opportunity?
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white rounded-xl p-5 relative shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mt-4">
                                    Does the solution I am choosing justify leaving the next best idea, and is it worth what is needed to execute it?
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white rounded-xl p-5 relative shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mt-4">
                                    How will the change affect the company operations and how will the company address that adjustment?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Grid */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">
                        Skills
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Top Skills */}
                        <div className="p-5 rounded-xl border-2 border-slate-200 bg-slate-50">
                            <h3 className="text-sky-600 font-semibold mb-3">Top Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {content.about.topSkills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-white text-slate-700 rounded-lg border border-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Academic Focus */}
                        <div className="p-5 rounded-xl border-2 border-slate-200 bg-slate-50">
                            <h3 className="text-sky-600 font-semibold mb-3">Academic Focus</h3>
                            <div className="flex flex-wrap gap-2">
                                {content.about.academicFocus.map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-white text-slate-700 rounded-lg border border-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
