"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArchetypeShowcase from "./ArchetypeShowcase";
import {
    ArrowRight,
    ArrowUpRight,
    Atom01,
    Brush01,
    Code02,
    CodeBrowser,
    CodeSquare02,
    Figma,
    LayersThree01,
    Lock01,
    Monitor04,
    Palette,
    Phone02,
    Stars02,
    Tool02,
} from "@untitled-ui/icons-react";
import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type MetaItem = { label: string; icon: IconType };

type CaseStudy = {
    title: string;
    blurb: string;
    image: string;
    href: string;
    platforms: MetaItem[];
    roles: MetaItem[];
    tools: MetaItem[];
    isometric?: boolean;
};

type OtherProject = {
    title: string;
    blurb: string;
    image: string;
    href: string;
    tags: MetaItem[];
    stack: string;
    imagePosition?: string;
};

const caseStudies: CaseStudy[] = [
    {
        title: "Archetype UI: Designing in Code",
        blurb:
            "How AI changed our design workflow at Open Architects — a company providing data visualizations for K-12 school districts. Design moved out of Figma and into an interactive playground built in Next.js.",
        image: "/images/open-architects-archetype-hero.png",
        href: "/case-studies/open-architects-archetype-ui",
        platforms: [{ label: "Web", icon: Monitor04 }],
        roles: [
            { label: "Senior Product Designer", icon: Palette },
            { label: "AI-Assisted Workflow", icon: Stars02 },
        ],
        tools: [
            { label: "Figma", icon: Figma },
            { label: "Claude Code", icon: CodeSquare02 },
            { label: "Next.js + Tailwind", icon: Atom01 },
        ],
        isometric: true,
    },
    {
        title: "Law Advisor's Access to Justice",
        blurb:
            "LawAdvisor is changing the way to access legal services by connecting everyday people and businesses with expert and easy to understand legal advice and support.",
        image: "/images/a2j-thumb.png",
        href: "/case-studies/law-advisor-access-to-justice",
        platforms: [
            { label: "Web", icon: Monitor04 },
            { label: "Mobile", icon: Phone02 },
        ],
        roles: [{ label: "Product Design", icon: Palette }],
        tools: [{ label: "Figma", icon: Figma }],
    },
    {
        title: "Investa Trading Grounds",
        blurb:
            "Investa Trading Grounds is a fun and interactive game where you can learn stock market trading by challenging players in a charting game.",
        image: "/images/itg-showcase.jpg",
        href: "/case-studies/investa-trading-grounds",
        platforms: [
            { label: "Web", icon: Monitor04 },
            { label: "Mobile", icon: Phone02 },
        ],
        roles: [
            { label: "Product Design", icon: Palette },
            { label: "UI Development", icon: Code02 },
        ],
        tools: [
            { label: "Figma", icon: Figma },
            { label: "React + Bootstrap", icon: Atom01 },
        ],
    },
];

const otherProjects: OtherProject[] = [
    {
        title: "Ricon",
        blurb:
            "Full-stack web application for Ricon, a running events company in the Philippines that organizes races and running events.",
        image: "/images/ricon.png",
        href: "https://ricon.ph/",
        tags: [
            { label: "Auth", icon: Lock01 },
            { label: "MVC", icon: LayersThree01 },
            { label: "Server-Rendered", icon: Code02 },
        ],
        stack: "PHP · Laravel · PostgreSQL · Blade · Tailwind",
        imagePosition: "object-top",
    },
    {
        title: "Open Architects",
        blurb:
            "Webflow project for Open Architects, a company that provides data visualizations for K-12 school districts.",
        image: "/images/open-architects-webflow.png",
        href: "https://openarchitectsk12.com/",
        tags: [
            { label: "Web Design", icon: Brush01 },
            { label: "Web Development", icon: CodeBrowser },
        ],
        stack: "Figma · Webflow",
    },
];

function Pill({ icon: Icon, label }: MetaItem) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white/40 px-3 py-1 text-xs text-gray-700">
            <Icon className="size-3.5" strokeWidth={2} />
            {label}
        </span>
    );
}

function MetaGroup({ label, items }: { label: string; items: MetaItem[] }) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-wider text-gray-500">
                {label}
            </p>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <Pill key={item.label} {...item} />
                ))}
            </div>
        </div>
    );
}

function CaseStudyCard({
    study,
    reverse,
}: {
    study: CaseStudy;
    reverse: boolean;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div
                className={`lg:col-span-7 ${
                    reverse ? "lg:order-2" : "lg:order-1"
                }`}>
                <Link href={study.href} className="group block">
                    {study.isometric ? (
                        <ArchetypeShowcase reverse={reverse} />
                    ) : (
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-200">
                            <Image
                                src={study.image}
                                alt={study.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>
                    )}
                </Link>
            </div>
            <div
                className={`lg:col-span-5 flex flex-col gap-6 ${
                    reverse ? "lg:order-1" : "lg:order-2"
                }`}>
                <div className="flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                        Case Study
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold uppercase leading-tight">
                        {study.title}
                    </h3>
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                    {study.blurb}
                </p>
                <div className="flex flex-col gap-4 pt-2">
                    <MetaGroup label="Platform" items={study.platforms} />
                    <MetaGroup label="Role" items={study.roles} />
                    <MetaGroup label="Tools" items={study.tools} />
                </div>
                <Link
                    href={study.href}
                    className="group mt-2 inline-flex items-center justify-between gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
                    Read case study
                    <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2}
                    />
                </Link>
            </div>
        </motion.article>
    );
}

function OtherProjectCard({ project }: { project: OtherProject }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-5 rounded-2xl border border-gray-300 p-5 transition-colors duration-300 hover:border-gray-500">
            <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-200">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover ${
                            project.imagePosition ?? "object-center"
                        } transition-transform duration-700 group-hover:scale-[1.03]`}
                    />
                </div>
            </Link>
            <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold uppercase">{project.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {project.blurb}
                </p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <Pill key={tag.label} {...tag} />
                ))}
            </div>
            <div className="flex items-start gap-2 text-xs text-gray-500">
                <Tool02 className="size-3.5 shrink-0 mt-0.5" strokeWidth={2} />
                {project.stack}
            </div>
            <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center justify-between gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white">
                Visit live site
                <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                />
            </Link>
        </motion.article>
    );
}

export default function CaseStudies() {
    return (
        <div className="case-studies w-full bg-black text-black overflow-hidden">
            <div className="case-studies-container h-auto rounded-t-4xl p-6">
                <div className="max-w-7xl m-auto py-20 flex flex-col gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col gap-2">
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                            Selected Work
                        </p>
                        <h2 className="text-5xl lg:text-6xl font-bold uppercase">
                            Case Studies
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-24">
                        {caseStudies.map((study, i) => (
                            <CaseStudyCard
                                key={study.href}
                                study={study}
                                reverse={i % 2 === 1}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-col gap-2 pt-8 border-t border-gray-300">
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                            Also Built
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-bold uppercase">
                            Other Projects
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherProjects.map((project) => (
                            <OtherProjectCard
                                key={project.href}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
