"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="case-studies w-full bg-black text-black overflow-hidden">
      <div className="case-studies-container h-auto rounded-t-4xl p-6">
        <div className="max-w-7xl m-auto py-15 flex flex-col gap-18">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 100,
            }}
            transition={{ duration: 1 }}
            className="mb-0"
          >
            <h2 className="text-5xl font-bold uppercase ">Case Studies</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Access to Justice */}
            <div className="flex flex-col gap-4 order-1 xl:order-1">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 100,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold uppercase">
                  Law Advisor&apos;s Access to Justice
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 100,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="flex-grow-1"
              >
                <p className="text-md text-gray-500">
                  LawAdvisor is changing the way to access legal services by
                  connecting everyday people and businesses with expert and easy
                  to understand legal advice and support.
                </p>
              </motion.div>
              <Link href="/case-studies/law-advisor-access-to-justice">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 100,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                    ease: "easeInOut",
                  }}
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
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 100,
              }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: "easeInOut",
              }}
              className="flex flex-col order-2 xl:order-2"
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
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 100,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="order-3 xl:order-3"
            >
              <Image
                src="/images/a2j-thumb.png"
                alt="Access to Justice"
                width={500}
                height={0}
                className="rounded-lg w-full"
              />
            </motion.div>
          </div>

          {/* Investa Trading Grounds */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 100,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="order-3 xl:order-1"
            >
              <Image
                src="/images/itg-showcase.jpg"
                alt="Investa Trading Grounds"
                width={500}
                height={0}
                className="rounded-lg w-full"
              />
            </motion.div>
            <div className="flex flex-col gap-4 order-1 xl:order-2">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 100,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold uppercase">
                  Investa Trading Grounds
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 100,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="flex-grow-1"
              >
                <p className="text-md text-gray-500">
                  Investa Trading Grounds is a fun and interactive game where
                  you can learn stock market trading by challenging players in a
                  charting game.
                </p>
              </motion.div>

              <Link href="/case-studies/investa-trading-grounds">
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
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 100,
              }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: "easeInOut",
              }}
              className="flex flex-col order-2 xl:order-2"
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
                    React + Bootstrap
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Personal Project */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 order-1 xl:order-1">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 100,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-2xl font-bold uppercase">
                  Personal Project: Lost and Found PH
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 100,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="flex-grow-1"
              >
                <p className="text-md text-gray-500">
                  Full-stack web application for the Lost and Found items. This
                  is a personal project that I built to help people find their
                  lost items.
                </p>
              </motion.div>
              <Link
                href="https://lost-and-found-ph-83d720ab6d69.herokuapp.com"
                target="_blank"
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 100,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-4 flex flex-row gap-2 justify-between">
                    Visit live site
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
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 100,
              }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
              className="flex flex-col order-2 xl:order-3"
            >
              <div className="flex flex-col flex-grow-1 gap-2 justify-between rounded-lg border border-gray-300 hover:border-blue-300 transition-all duration-300 p-6">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">Features:</p>
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
                      Authentication
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
                      Image Upload and Storage with AWS S3
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
                      MVC Architecture
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-gray-500">Tech Stack:</p>
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
                    MongoDB, Mongoose, Express, Node.js, React, Next,
                    TailwindCSS, Preline UI
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 100,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="order-3 xl:order-3"
            >
              <Image
                src="/images/lost-and-found-thumb.png"
                alt="Lost and Found PH"
                width={500}
                height={0}
                className="rounded-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
