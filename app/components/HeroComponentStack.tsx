"use client";
import {
    motion,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const IMAGES = [
    { src: "/images/archetype/ui-component-1.png", alt: "Archetype UI components row 1" },
    { src: "/images/archetype/ui-component-2.png", alt: "Archetype UI components row 2" },
    { src: "/images/archetype/ui-component-3.png", alt: "Archetype UI components row 3" },
    { src: "/images/archetype/ui-component-4.png", alt: "Archetype UI components row 4" },
];

const X_TRAVEL = 80;

export default function HeroComponentStack() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const progress = useMotionValue(0);

    useMotionValueEvent(scrollY, "change", () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const raw = (vh - rect.top) / (vh + rect.height);
        progress.set(Math.max(0, Math.min(1, raw)));
    });

    // Odd rows (1, 3) drift right → left; even rows (2, 4) drift left → right.
    const x0 = useTransform(progress, [0, 1], [X_TRAVEL, -X_TRAVEL]);
    const x1 = useTransform(progress, [0, 1], [-X_TRAVEL, X_TRAVEL]);
    const x2 = useTransform(progress, [0, 1], [X_TRAVEL, -X_TRAVEL]);
    const x3 = useTransform(progress, [0, 1], [-X_TRAVEL, X_TRAVEL]);
    const xs = [x0, x1, x2, x3];

    return (
        <div
            ref={ref}
            className="relative w-full rounded-4xl bg-[#F9FAFB] overflow-hidden p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl leading-tight">
                Archetype UI <span className="text-gray-400">React Components</span>
            </h2>
            <div className="mt-8 flex flex-col gap-4">
                {IMAGES.map((img, idx) => (
                    <motion.div
                        key={img.src}
                        style={{ x: xs[idx] }}
                        className="w-full will-change-transform">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={1173}
                            height={258}
                            className="w-full h-auto"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
