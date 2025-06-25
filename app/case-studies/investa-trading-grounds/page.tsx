/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function InvestaTradingGrounds() {
    return (
        <>
            <Header />
            <div className="main-case-study min-h-lvh px-6 pt-40 px-6">
                <div className="max-w-7xl m-auto">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <h1 className="text-4xl font-bold">
                                Investa Trading Grounds
                            </h1>
                            <p className="text-gray-400">Web and Mobile</p>
                        </div>

                        <Image
                            src="/images/itg-showcase.jpg"
                            alt="Investa Trading Grounds"
                            width={1280}
                            height={720}
                            className="rounded-4xl h-auto"
                        />

                        <div className="flex flex-col gap-4 max-w-3xl">
                            <h2 className="text-2xl font-bold">Overview</h2>
                            <p className="text-gray-400">
                                Investagrams aimed to transform its image from a
                                serious stock trading platform to a more
                                engaging and educational experience. To achieve
                                this, we developed Trading Grounds, a gamified
                                environment where users can learn stock trading
                                by competing in a charting game.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <h2 className="text-2xl font-bold">The Problem</h2>
                            <p className="text-gray-400">
                                We wanted to engage{" "}
                                <span className="font-bold text-gray-300">
                                    newcomers and students
                                </span>{" "}
                                by transforming their stock charting mini-game
                                into a more compelling learning tool. Our
                                existing game, Trading Grounds, allowed users to
                                predict chart directions but it looked and felt
                                like a basic finance dashboard, not a game.
                            </p>
                            <blockquote className="text-lg italic font-semibold text-gray-300 border-l-4 border-gray-500 pl-4">
                                <p>
                                    &quot;It works—but it&apos;s not fun,&quot;
                                    said one user in early feedback.
                                </p>
                            </blockquote>
                            <p className="text-gray-400">
                                <span className="font-bold text-gray-300">
                                    Our Goal:
                                </span>{" "}
                                Make Trading Grounds feel like a true
                                game—something users would enjoy playing and
                                learn from, without changing the core mechanics.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-black pb-40 px-6">
                    <div className="max-w-7xl m-auto">
                        <div className="flex flex-col gap-10">
                            <Image
                                src="/images/itg-old.png"
                                alt="Investa Trading Grounds"
                                width={1280}
                                height={720}
                                className="rounded-4xl w-full h-auto"
                            />
                            <div className="flex flex-col gap-4 max-w-3xl">
                                <h2 className="text-2xl font-bold">My Role</h2>
                                <ul className="list-disc list-none flex flex-col gap-4">
                                    <li className="text-gray-400 flex flex-row gap-2 self-start items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6 text-gray-500">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                                            />
                                        </svg>
                                        Redesigning the visual identity and user
                                        interface.
                                    </li>
                                    <li className="text-gray-400 flex flex-row gap-2 self-start items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6 text-gray-500">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                                            />
                                        </svg>
                                        Prototyping layouts for web and mobile
                                        using Figma.
                                    </li>
                                    <li className="text-gray-400 flex flex-row gap-2 self-start items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6 text-gray-500">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                                            />
                                        </svg>
                                        Implementing the front-end in React +
                                        Boostrap.
                                    </li>
                                    <li className="text-gray-400 flex flex-row gap-2 self-start items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6 text-gray-500">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                                            />
                                        </svg>
                                        Collaborating daily with our illustrator
                                        and developers for a polished final
                                        product.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4 max-w-3xl">
                                <h2 className="text-2xl font-bold">
                                    The Process
                                </h2>
                                <p className="text-gray-400">
                                    We followed a streamlined design process:
                                </p>
                                <h3 className="text-xl font-bold">
                                    1. Research
                                </h3>
                                <ul className="list-disc list-inside mb-4">
                                    <li className="text-gray-400">
                                        Analyzed top-performing mobile games to
                                        identify UX patterns
                                    </li>
                                    <li className="text-gray-400">
                                        Collected feedback from Trading Grounds
                                        users and early testers.
                                    </li>
                                    <li className="text-gray-400">
                                        Defined our user persona: Beginner
                                        traders aged 18–30, often students or
                                        hobbyists with zero trading experience
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold">2. Design</h3>
                                <p className="text-gray-400">
                                    We created a sci-fi themed interface to
                                    evoke the feeling of a futuristic training
                                    simulator:
                                </p>
                                <ul className="list-disc list-inside mb-4">
                                    <li className="text-gray-400">
                                        Added HUD-style panels, glowing buttons,
                                        and animated rewards.
                                    </li>
                                    <li className="text-gray-400">
                                        Designed medal icons and banners that
                                        visually indicate progress.
                                    </li>
                                    <li className="text-gray-400">
                                        Built dark and neon variants for mobile
                                        screens to enhance contrast and feel
                                        &quot;game-like.&quot;
                                    </li>
                                </ul>
                            </div>
                            <Image
                                src="/images/itg-solution-1.png"
                                alt="Investa Trading Grounds - Solution 1"
                                width={1280}
                                height={720}
                                className="rounded-4xl w-full h-auto"
                            />
                            <Image
                                src="/images/itg-solution-2.png"
                                alt="Investa Trading Grounds - Solution 2"
                                width={1280}
                                height={720}
                                className="rounded-4xl w-full h-auto"
                            />
                            <Image
                                src="/images/itg-solution-3.png"
                                alt="Investa Trading Grounds - Solution 3"
                                width={750}
                                height={720}
                                className="rounded-4xl mx-auto w-full h-auto"
                            />
                            <div className="flex flex-col gap-4 max-w-3xl">
                                <h3 className="text-xl font-bold">
                                    3. Development
                                </h3>
                                <ul className="list-disc list-inside mb-4">
                                    <li className="text-gray-400">
                                        Built the UI in React with Boostrap.
                                    </li>
                                    <li className="text-gray-400">
                                        Ensured responsiveness across
                                        breakpoints using component-based
                                        layouts.
                                    </li>
                                    <li className="text-gray-400">
                                        Integrated animations using Framer
                                        Motion for reward popups, transitions,
                                        and loading screens.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4 max-w-3xl">
                                <h2 className="text-2xl font-bold">Results</h2>
                                <p className="text-gray-400">
                                    The relaunch of Trading Grounds led to clear
                                    engagement wins:
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col flex-grow-1 gap-2 justify-between rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-6">
                                        +70% increase in daily active users
                                    </div>
                                    <div className="flex flex-col flex-grow-1 gap-2 justify-between rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-6">
                                        3× longer session durations
                                    </div>
                                    <div className="flex flex-col flex-grow-1 gap-2 justify-between rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-6">
                                        Over 1,500 games played per day within
                                        the first month
                                    </div>
                                </div>
                                <p>
                                    We also hosted our first live tournament at
                                    the 2019 Investagrams Summit with over 2,000
                                    players joined the seasonal leaderboard.
                                </p>
                            </div>
                            <Image
                                src="/images/itg-tournament.png"
                                alt="Investa Trading Grounds - Tournament"
                                width={1280}
                                height={720}
                                className="rounded-4xl w-full h-auto"
                            />
                            <div className="flex flex-col gap-4 max-w-3xl">
                                <h2 className="text-2xl font-bold">
                                    What I've Learned
                                </h2>
                                <p className="text-gray-400">
                                    This project taught me how to translate
                                    complex financial concepts into approachable
                                    gameplay. The real win was seeing beginners
                                    genuinely enjoy learning technical analysis
                                    because the UI didn&apos;t intimidate them,
                                    it invited them in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
