"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    CodeSquare02,
    Figma,
    Link01,
} from "@untitled-ui/icons-react";
import type { ComponentType, SVGProps } from "react";

type Step = {
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
    image?: string;
    imageW?: number;
    imageH?: number;
    label: string;
    sub: string;
    accent: string;
    iconClass: string;
};

const STEPS: Step[] = [
    {
        icon: Figma,
        label: "Figma",
        sub: "Reference",
        accent: "bg-rose-50 ring-rose-200",
        iconClass: "text-rose-600",
    },
    {
        icon: Link01,
        label: "Figma MCP",
        sub: "Bridge",
        accent: "bg-violet-50 ring-violet-200",
        iconClass: "text-violet-600",
    },
    {
        image: "/images/archetype/claude-color.svg",
        imageW: 24,
        imageH: 24,
        label: "Claude Code",
        sub: "Generator",
        accent: "bg-orange-50 ring-orange-200",
        iconClass: "",
    },
    {
        image: "/images/archetype/logomark.png",
        imageW: 87,
        imageH: 128,
        label: "Archetype UI",
        sub: "Playground",
        accent: "bg-teal-50 ring-teal-200",
        iconClass: "",
    },
    {
        icon: CodeSquare02,
        label: "Engineering",
        sub: "Handoff",
        accent: "bg-slate-100 ring-slate-200",
        iconClass: "text-slate-700",
    },
];

// Reveal once when the diagram scrolls into view. Nodes and arrows fire in
// sequence (node 0, arrow 0, node 1, arrow 1, …) using per-element delays.
const STEP_DELAY = 0.12;

const nodeVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut", delay: i * 2 * STEP_DELAY },
    }),
};

const arrowVariants = {
    hidden: { pathLength: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
            delay: (i * 2 + 1) * STEP_DELAY,
        },
    }),
};

export default function WorkflowDiagram() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative w-full rounded-4xl bg-[#F9FAFB] overflow-hidden py-12 md:py-0 md:aspect-[16/5]">
            <div className="flex flex-col md:flex-row h-full w-full items-center justify-center gap-6 px-6 md:gap-6 md:px-12">
                {STEPS.map((step, idx) => (
                    <div
                        key={step.label}
                        className="flex flex-col md:flex-row w-full md:flex-1 items-center gap-6 md:gap-6">
                        <motion.div
                            custom={idx}
                            variants={nodeVariants}
                            className="w-full md:flex-1 flex flex-col items-center gap-3 text-center will-change-transform">
                            <div
                                className={`flex size-14 md:size-20 items-center justify-center rounded-2xl ring-1 ring-inset ${step.accent}`}>
                                {step.image ? (
                                    <Image
                                        src={step.image}
                                        alt={step.label}
                                        width={step.imageW ?? 40}
                                        height={step.imageH ?? 40}
                                        className="h-7 md:h-10 w-auto"
                                    />
                                ) : step.icon ? (
                                    <step.icon
                                        className={`size-7 md:size-10 ${step.iconClass}`}
                                        strokeWidth={1.75}
                                    />
                                ) : null}
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm md:text-base font-semibold text-gray-900">
                                    {step.label}
                                </span>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.12em] text-gray-500">
                                    {step.sub}
                                </span>
                            </div>
                        </motion.div>
                        {idx < STEPS.length - 1 && (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="size-5 md:size-6 shrink-0 rotate-90 md:rotate-0 text-gray-400">
                                <motion.path
                                    custom={idx}
                                    variants={arrowVariants}
                                    d="M2 12 H 22 M 16 6 L 22 12 L 16 18"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
