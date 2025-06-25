import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Isaiah Quindo",
    description: "Product Designer & Frontend Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <svg
                    className="pointer-events-none absolute cursor-none"
                    xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence type="turbulence" baseFrequency="0.5" />
                        <feColorMatrix
                            type="saturate"
                            values="0"></feColorMatrix>
                    </filter>
                </svg>
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
