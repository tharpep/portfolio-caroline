import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume – Caroline Wiggins",
    description: "Resume for Caroline Wiggins - Marketing professional specializing in brand strategy and digital marketing.",
};

export default function Resume() {
    return (
        <main className="text-slate-900 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">
                    Caroline Wiggins
                </h1>
                <p className="text-slate-600 mb-8">
                    caroline.wiggins@example.com ·{" "}
                    <a href="https://linkedin.com/in/caroline-wiggins" className="text-sky-600 hover:text-sky-700">
                        linkedin.com/in/caroline-wiggins
                    </a>
                </p>

                <div className="w-full h-px bg-slate-200 mb-10" />

                {/* Education */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Education
                    </h2>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                            <h3 className="font-bold text-slate-900">[University Name]</h3>
                            <span className="text-slate-600 text-sm">[Date Range]</span>
                        </div>
                        <p className="text-slate-700 italic mb-2">
                            Bachelor of Science in Marketing
                        </p>
                        <p className="text-slate-600 text-sm">
                            <span className="text-sky-600">[Add relevant details: GPA, honors, relevant coursework, etc.]</span>
                        </p>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Experience
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-slate-900">[Job Title] — [Company Name]</h3>
                                <span className="text-slate-600 text-sm">[Date Range]</span>
                            </div>
                            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                                <li><span className="text-sky-600">[Add your experience bullet points here]</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects / Campaigns */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Projects & Campaigns
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-slate-900">[Project/Campaign Name]</h3>
                                <span className="text-slate-600 text-sm">[Date Range]</span>
                            </div>
                            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                                <li><span className="text-sky-600">[Add project details and results]</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Skills
                    </h2>
                    <div className="p-4 rounded-xl border-2 border-slate-200 bg-slate-50">
                        <p className="text-slate-700">
                            <span className="text-sky-600">[List key skills: Digital Marketing, SEO, Social Media Management, Google Analytics, Content Creation, Brand Strategy, etc.]</span>
                        </p>
                    </div>
                </section>

                {/* Download PDF */}
                <div className="text-center pt-4">
                    <a
                        href="/Caroline_Wiggins_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Download PDF Resume
                    </a>
                    <p className="text-slate-500 text-sm mt-3">
                        [Add compiled PDF to /public/Caroline_Wiggins_Resume.pdf]
                    </p>
                </div>
            </div>
        </main>
    );
}
