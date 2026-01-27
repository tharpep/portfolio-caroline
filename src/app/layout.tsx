import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-display",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Caroline Wiggins - Marketing | Purdue University Daniels School of Business",
    description: "Marketing student passionate about design, branding, Asian advocacy, technology, luxury cars, and entertainment—diverse interests connected through business.",
    keywords: ["Caroline Wiggins", "Marketing", "Purdue University", "Brand Strategy", "Design", "Entrepreneurship"],
    authors: [{ name: "Caroline Wiggins" }],
    creator: "Caroline Wiggins",
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Caroline Wiggins - Marketing | Purdue University Daniels School of Business',
        description: 'Marketing student passionate about design, branding, and connecting diverse interests through business.',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
} as const;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900`}
            >
                <Nav />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
