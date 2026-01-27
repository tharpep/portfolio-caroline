export default function Footer() {
    return (
        <footer className="mt-auto py-8 px-6 border-t border-slate-200 bg-white">
            <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm space-y-2">
                <p>© {new Date().getFullYear()} Caroline Wiggins</p>
                <p>
                    Built by{" "}
                    <a
                        href="https://pryce-tharpe.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                        Pryce Tharpe
                    </a>
                </p>
            </div>
        </footer>
    );
}
