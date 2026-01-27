import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About – Caroline Wiggins",
    description: "About Caroline Wiggins - Marketing professional specializing in brand strategy and digital marketing.",
};

export default function About() {
    return (
        <main className="text-slate-900 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-8">
                    About
                </h1>

                {/* Bio */}
                <section className="mb-12">
                    <p className="text-lg text-slate-700 leading-relaxed">
                        <span className="text-sky-600">[Write a short bio here - 2-3 sentences about yourself, your passion for marketing, and what drives you. Keep it personal but professional.]</span>
                    </p>
                </section>

                {/* Skills Grid */}
                <section>
                    <h2 className="text-2xl font-bold font-display text-slate-900 mb-6">
                        Skills
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Digital Marketing */}
                        <div className="p-5 rounded-xl border-2 border-slate-200 bg-slate-50">
                            <h3 className="text-sky-600 font-semibold mb-3">Digital Marketing</h3>
                            <div className="flex flex-wrap gap-2">
                                {["SEO", "SEM", "Social Media", "Email Marketing", "Content Strategy"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-white text-slate-700 rounded-lg border border-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Analytics & Tools */}
                        <div className="p-5 rounded-xl border-2 border-slate-200 bg-slate-50">
                            <h3 className="text-sky-600 font-semibold mb-3">Analytics & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Google Analytics", "HubSpot", "Hootsuite", "Canva", "Adobe Creative Suite"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-white text-slate-700 rounded-lg border border-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Brand Strategy */}
                        <div className="p-5 rounded-xl border-2 border-slate-200 bg-slate-50">
                            <h3 className="text-sky-600 font-semibold mb-3">Brand Strategy</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Brand Development", "Market Research", "Consumer Insights", "Campaign Planning"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-white text-slate-700 rounded-lg border border-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Content Creation */}
                        <div className="p-5 rounded-xl border-2 border-slate-200 bg-slate-50">
                            <h3 className="text-sky-600 font-semibold mb-3">Content Creation</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Copywriting", "Graphic Design", "Video Editing", "Photography"].map((skill) => (
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
