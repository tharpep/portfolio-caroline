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
            <div className="max-w-4xl mx-auto">
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
