import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-slate-900 min-h-screen flex items-center justify-center px-6 bg-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold font-display text-sky-600 mb-4">404</h1>
                <p className="text-xl text-slate-600 mb-8">Page not found</p>
                <Link
                    href="/"
                    className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
                >
                    Go Home
                </Link>
            </div>
        </main>
    );
}
