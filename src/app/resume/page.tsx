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
                    Indianapolis, Indiana, United States ·{" "}
                    <a href="https://www.linkedin.com/in/carolinewiggins" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">
                        linkedin.com/in/carolinewiggins
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
                            <h3 className="font-bold text-slate-900">Purdue University Daniels School of Business</h3>
                            <span className="text-slate-600 text-sm">August 2024 - December 2027</span>
                        </div>
                        <p className="text-slate-700 italic mb-2">
                            Bachelor of Science, Marketing
                        </p>
                        <p className="text-slate-600 text-sm">
                            Design & Innovation Minor · Entrepreneurship Certificate
                        </p>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {/* TJX Companies */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-slate-900">Retail Associate — The TJX Companies, Inc.</h3>
                                <span className="text-slate-600 text-sm">January 2024 - August 2024</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-2">Whitestown, Indiana, United States</p>
                            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                                <li>Contributed to store operations and customer experience by coordinating merchandise organization, assisting shoppers with personalized support, and leveraging inventory software to maintain accuracy and efficiency.</li>
                            </ul>
                        </div>

                        {/* Pearson Ford */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-slate-900">Technician Intern — Pearson Ford</h3>
                                <span className="text-slate-600 text-sm">March 2023 - August 2024</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-2">Zionsville, Indiana, United States</p>
                            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                                <li>Shadowed technicians in daily operations conducting multi-point inspections, car maintenance, and repairs. Accompanied technician to gather car parts, relocate cars, and close out finished projects to the service representatives.</li>
                            </ul>
                        </div>

                        {/* Ivy Tech */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-slate-900">ASA President & Co-Founder — Ivy Tech Community College</h3>
                                <span className="text-slate-600 text-sm">October 2023 - May 2024</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-2">Indianapolis, Indiana, United States</p>
                            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                                <li>Founded and led the Asian Student Alliance at Ivy Tech&apos;s downtown campus—reviving digital presence, planning cultural events, and promoting the organization to statewide groups to expand visibility and outreach.</li>
                            </ul>
                        </div>

                        {/* Chick-fil-A Team Lead */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-slate-900">Team Lead — Chick-fil-A Restaurants</h3>
                                <span className="text-slate-600 text-sm">December 2021 - October 2022</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-2">Whitestown, Indiana, United States</p>
                            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                                <li>Promoted to leadership role focused on training and onboarding new team members. Led 5+ orientations, sourced uniforms, and guided peers through Pathway training. Ensured adherence to Chick-fil-A&apos;s Core 4 principles while delivering exceptional service through the HEARD method.</li>
                            </ul>
                        </div>

                        {/* Chick-fil-A Team Member */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                <h3 className="font-bold text-slate-900">Team Member — Chick-fil-A Restaurants</h3>
                                <span className="text-slate-600 text-sm">April 2021 - December 2021</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-2">Whitestown, Indiana, United States</p>
                            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
                                <li>Supported front- and back-of-house operations by preparing food, delivering orders, and maintaining a clean, welcoming environment. Practiced the HEARD method to resolve guest concerns with care, while encouraging team morale and continuously improving through training and feedback.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Certifications
                    </h2>
                    <div className="space-y-2">
                        <p className="text-slate-700">Foundations of AR</p>
                        <p className="text-slate-700">Digital Fashion Mindset</p>
                        <p className="text-slate-700">NYU Stern Future Business Leaders Program</p>
                    </div>
                </section>

                {/* Honors & Awards */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Honors & Awards
                    </h2>
                    <div className="space-y-2">
                        <p className="text-slate-700">Dean&apos;s List & Semester&apos;s Honors</p>
                        <p className="text-slate-700">John Martinson Honors College</p>
                        <p className="text-slate-700">Equitable Excellence Scholar</p>
                        <p className="text-slate-700">Presidential Scholar</p>
                        <p className="text-slate-700">Alpha Lambda Delta Phi Eta Sigma</p>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold font-display text-sky-600 mb-4 pb-2 border-b-2 border-sky-200">
                        Top Skills
                    </h2>
                    <div className="p-4 rounded-xl border-2 border-slate-200 bg-slate-50">
                        <p className="text-slate-700">
                            Microsoft Word, Microsoft PowerPoint, Microsoft Excel
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
