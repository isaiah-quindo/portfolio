"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="case-studies w-full bg-black text-black ">
      <div className="case-studies-container h-auto rounded-t-4xl p-6">
        <div className="max-w-7xl m-auto py-15 flex flex-col gap-18">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 1 }}
            className="mb-0"
          >
            <h2 className="text-5xl font-bold uppercase ">Case Studies</h2>
          </motion.div>
          {/* Open Architects Platform */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
              transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
            >
              <Image
                src="/images/a2j-thumb.png"
                alt="Access to Justice"
                width={500}
                height={0}
                className="rounded-lg"
              />
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold uppercase">
                  Open Architects Platform
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="flex-grow-1"
              >
                <p className="text-md text-gray-500">
                  LawAdvisor is changing the way to access legal services by
                  connecting everyday people and businesses with expert and easy
                  to understand legal advice and support.
                </p>
              </motion.div>
              <Link href="/case-studies/investa-trading-grounds">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                >
                  <div className="rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-4 flex flex-row gap-2 justify-between">
                    Read case study
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
                </motion.div>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <div className="flex flex-col flex-grow-1 gap-2 justify-between rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-6">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">Platform:</p>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Web
                    </div>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Mobile
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">Role:</p>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Product Design
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500">Tools:</p>
                  <div className="flex flex-row gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                      />
                    </svg>
                    Figma
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Access to Justice */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold uppercase">
                  Law Advisor's Access to Justice
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="flex-grow-1"
              >
                <p className="text-md text-gray-500">
                  LawAdvisor is changing the way to access legal services by
                  connecting everyday people and businesses with expert and easy
                  to understand legal advice and support.
                </p>
              </motion.div>
              <Link href="/case-studies/investa-trading-grounds">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                >
                  <div className="rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-4 flex flex-row gap-2 justify-between">
                    Read case study
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
                </motion.div>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <div className="flex flex-col flex-grow-1 gap-2 justify-between rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-6">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">Platform:</p>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Web
                    </div>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Mobile
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">Role:</p>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Product Design
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500">Tools:</p>
                  <div className="flex flex-row gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                      />
                    </svg>
                    Figma
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
              transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
            >
              <Image
                src="/images/a2j-thumb.png"
                alt="Access to Justice"
                width={500}
                height={0}
                className="rounded-lg"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
              transition={{ duration: 1.25, delay: 0.5, ease: "easeInOut" }}
            >
              <Image
                src="/images/itg-showcase.jpg"
                alt="Investa Trading Grounds"
                width={500}
                height={0}
                className="rounded-lg"
              />
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-bold uppercase">
                  Investa Trading Grounds
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="flex-grow-1"
              >
                <p className="text-md text-gray-500">
                  Investa Trading Grounds is a fun and interactive game where
                  you can learn stock market trading by challenging players in a
                  charting game.
                </p>
              </motion.div>
              <Link href="/case-studies/investa-trading-grounds">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                >
                  <div className="rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-4 flex flex-row gap-2 justify-between">
                    Read case study
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
                </motion.div>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <div className="flex flex-col flex-grow-1 gap-2 justify-between rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-6">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">Platform:</p>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Web
                    </div>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Mobile
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">Role:</p>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      Product Design
                    </div>
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                        />
                      </svg>
                      UI Development
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500">Tools:</p>
                  <div className="flex flex-row gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                      />
                    </svg>
                    Figma
                  </div>
                  <div className="flex flex-row gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                      />
                    </svg>
                    HTML/CSS/JS
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
