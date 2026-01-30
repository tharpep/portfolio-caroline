import type { Metadata } from "next";
import { getContent } from "@/lib/getContent";

export const metadata: Metadata = {
    title: "Resume – Caroline Wiggins",
    description: "Resume for Caroline Wiggins - Marketing professional specializing in brand strategy and digital marketing.",
};

export default function Resume() {
    const content = getContent();
    return (
        <main className="text-slate-900 min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">
                    Caroline Wiggins
                </h1>
                <p className="text-slate-600 mb-8">
                    <a href={content.resume.linkedIn} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">
                        {content.resume.linkedIn.replace('https://www.', '').replace('https://', '')}
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
                            <h3 className="font-bold text-slate-900">{content.resume.education.school}</h3>
                            <span className="text-slate-600 text-sm">{content.resume.education.dateRange}</span>
                        </div>
                        <p className="text-slate-700 italic mb-2">
                            {content.resume.education.degree}
                        </p>
                        <p className="text-slate-600 text-sm">
                            {content.resume.education.additionalDetails}
                        </p>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {content.resume.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                    <h3 className="font-bold text-slate-900">{exp.position} — {exp.company}</h3>
                                    <span className="text-slate-600 text-sm">{exp.dateRange}</span>
                                </div>
                                <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                                    <li>{exp.description}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Certifications
                    </h2>
                    <div className="space-y-2">
                        {content.resume.certifications.map((cert, index) => (
                            <p key={index} className="text-slate-700">{cert}</p>
                        ))}
                    </div>
                </section>

                {/* Honors & Awards */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Honors & Awards
                    </h2>
                    <div className="space-y-2">
                        {content.resume.honors.map((honor, index) => (
                            <p key={index} className="text-slate-700">{honor}</p>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Top Skills
                    </h2>
                    <div className="p-4 rounded-xl border-2 border-slate-200 bg-slate-50">
                        <p className="text-slate-700">
                            {content.resume.topSkills}
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
