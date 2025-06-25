import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="border-b border-gray-800">
            <nav className="max-w-7xl m-auto py-8">
                <Link
                    href="/"
                    className="flex flex-row gap-4 items-center hover:text-blue-300 transition-all duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>

                    <Image
                        src="/images/wordmark.svg"
                        alt="Isaiah Quindo"
                        width={250}
                        height={100}
                        className="h-auto"
                    />
                </Link>
            </nav>
        </header>
    );
}
