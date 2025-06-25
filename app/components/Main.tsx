"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TimeDisplay from "./TimeDisplay";
import { useEffect, useState } from "react";

export default function Main() {
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const opacity = useTransform(scrollY, [0, 1000], [1, isDesktop ? 0 : 1]);

  const y = useTransform(
    scrollY,
    [0, 1000],
    isDesktop ? [0, 250] : [0, 0], // If not desktop, y will always be 0
    {
      ease: (t: number) => t * (2 - t), // Custom easing function
    }
  );

  return (
    <main className="flex flex-col items-center justify-center w-full h-auto lg:h-lvh md:h-auto sm:h-auto p-6 ">
      <motion.div
        className="w-full max-w-7xl"
        style={{
          opacity,
          y,
          // This ensures smoother parallax movement
          willChange: "transform",
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="wordmark-container overflow-hidden">
          <Image
            className="wordmark"
            src="/images/wordmark.svg"
            alt="Ïsaiah Quindo"
            width={1000}
            height={0}
          ></Image>
        </div>
        <p className="subtitle text-left text-2xl mt-4 mb-12">
          Product Designer & Frontend Developer
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-8 mt-8 overflow-hidden ">
          <div className="overflow-hidden row-span-3">
            <Image
              src="/images/isaiah-quindo.jpg"
              alt="Ïsaiah Quindo"
              width={500}
              height={500}
              className="profile-image rounded-lg filter grayscale w-1/2 sm:w-full mx-auto"
            />
          </div>
          <div>
            <p className="description">
              I&apos;m a product designer and frontend developer driven by a
              passion for creating user-centric experience.
            </p>
          </div>
          <div className="flex flex-col items-stretch justify-stretch">
            <Link
              href="https://linkedin.com/in/isaiahquindo"
              className="linkedin flex flex-col flex-grow-1"
            >
              <div className="flex flex-row flex-grow-1 gap-4 items-center rounded-lg border border-gray-600 hover:border-blue-300 transition-all duration-300 p-4">
                <Image
                  src="/images/techstack/linkedin.svg"
                  alt="LinkedIn"
                  width={100}
                  height={100}
                  className="oa-logomark"
                />
                Let&apos;s connect on Linkedin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 self-start"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="techstack-container row-span-3 lg:row-span-3 md:row-span-1 sm:row-span-1 flex flex-col gap-2 rounded-lg border border-gray-600 hover:border-blue-300 transition-all duration-300 p-4">
            <p className="w-full mb-2">Technologies I use</p>
            <div className="flex flex-row flex-wrap gap-3">
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/react.svg"
                  alt="React"
                  width={24}
                  height={24}
                />
                React
              </div>
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/next.svg"
                  alt="Next"
                  width={24}
                  height={24}
                />
                Next
              </div>
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/tailwindcss.svg"
                  alt="TailwindCSS"
                  width={24}
                  height={24}
                />
                TailwindCSS
              </div>
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/javascript.svg"
                  alt="JavaScript"
                  width={24}
                  height={24}
                />
                JavaScript
              </div>
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/typescript.svg"
                  alt="TypeScript"
                  width={24}
                  height={24}
                />
                TypeScript
              </div>
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/nodejs.svg"
                  alt="Node.js"
                  width={24}
                  height={24}
                />
                Node.js
              </div>
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/mongodb.svg"
                  alt="MongoDB"
                  width={24}
                  height={24}
                />
                MongoDB
              </div>
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
                GitHub
              </div>
              <div className="techstack-item flex flex-row gap-2 self-start rounded-lg border border-gray-400 py-2 px-4">
                <Image
                  src="/images/techstack/figma.svg"
                  alt="Figma"
                  width={24}
                  height={24}
                  className="figma-icon"
                />
                Figma
              </div>
            </div>
          </div>
          <div className="row-span-2 col-span-1 flex flex-col items-stretch justify-items-stretch gap-4">
            <div className="current-work flex flex-col flex-grow-1 justify-between rounded-lg border border-gray-600 hover:border-blue-300 transition-all duration-300 p-4">
              <div className="flex flex-row flex-grow-0 self-start items-center justify-center gap-2 mb-4">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-sm">Currently working at</p>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <Image
                  src="/images/oa-logomark.svg"
                  alt="Open Architects"
                  width={100}
                  height={100}
                  className="oa-logomark"
                />
                <p className="text-center">
                  <span className="font-bold">Open Architects</span> <br /> as a
                  Senior Product Designer
                </p>
              </div>
            </div>
            <Link
              href="https://github.com/isaiah-quindo"
              className="github-link"
            >
              <div className="flex flex-row flex-grow-1 gap-4 items-center rounded-lg border border-gray-600 hover:border-blue-300 transition-all duration-300 p-4">
                <Image
                  src="/images/techstack/github.svg"
                  alt="Github"
                  width={100}
                  height={100}
                  className="oa-logomark"
                />
                View my work on Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 self-start"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="row-span-2 col-span-1 flex flex-col items-stretch justify-items-stretch gap-4">
            <TimeDisplay />
            <p className="about-me flex-grow">
              I specialise in crafting exceptional digital interfaces for
              websites and mobile apps. My passion lies in creating seamless and
              captivating user experiences, where I strive to make the
              interaction effortless and enjoyable.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
