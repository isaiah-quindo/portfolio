"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InvestaTradingGrounds() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0 : 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full z-50"
      >
        <header>
          <nav className="max-w-7xl m-auto py-8">
            <Link
              href="/"
              className="flex flex-row gap-4 items-center hover:text-blue-300 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
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
              />
            </Link>
          </nav>
        </header>
      </motion.div>
      <main className="main-case-study min-h-lvh px-6 pt-30">
        <div className="max-w-7xl m-auto">
          <h1 className="text-4xl font-bold">Investa Trading Grounds</h1>
          <Image
            src="/images/itg-showcase.jpg"
            alt="Investa Trading Grounds"
            width={1280}
            height={100}
            className="rounded-4xl mt-10"
          />
        </div>
      </main>
    </>
  );
}
