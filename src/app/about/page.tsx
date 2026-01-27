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
                        Jack of all trades? Working on it.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mt-4">
                        I&apos;m passionate about design, branding, Asian advocacy, technology, luxury cars, and entertainment—diverse interests that I have connected through business. My love for problem-solving led me to pursue a marketing major, design & innovation minor, and an entrepreneurship certificate. With these, I get to merge creativity with strategy, much like piecing together a 1,000-piece puzzle (something I&apos;ve enjoyed since childhood).
                    </p>
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
                                {["Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel"].map((skill) => (
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
                                {["Marketing", "Design & Innovation", "Entrepreneurship"].map((skill) => (
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
