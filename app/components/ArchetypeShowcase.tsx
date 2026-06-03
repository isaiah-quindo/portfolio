"use client";
import {
    motion,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { CodeSquare02, Figma } from "@untitled-ui/icons-react";
import Image from "next/image";
import { useRef } from "react";

/**
 * Static card that displays four reference component strips side-by-side.
 * Sources live under public/images/archetype/ with their original filenames
 * so the assets stay traceable.
 *
 * Reading order (left → right):
 *   01b → buttons / save / delete states
 *   01a → team selects, invitation card, comment, chat input
 *   01d → label pills, every color
 *   01e → sidebar navigation + stat cards
 */

const COLUMNS = [
    {
        src: "/images/archetype/col-1-archetype-v5.png",
        alt: "Archetype UI Button variants, Checkbox and Radio states",
        width: 322,
        height: 1421,
    },
    {
        src: "/images/archetype/col-2.png",
        alt: "Archetype UI Select dropdowns, invitation card, comment, and Archie AI chat",
        width: 720,
        height: 3034,
    },
    {
        src: "/images/archetype/69abfca15f04f871f0f505d9_features-01d.webp",
        alt: "Label pills in every color variant",
        width: 214,
        height: 2688,
    },
    {
        src: "/images/archetype/col-4.png",
        alt: "Archetype UI Open Architects sidenav with Attendance and Engagement stat cards",
        width: 672,
        height: 2640,
    },
];

// `reverse` is accepted for parity with the CaseStudyCard caller but unused.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ArchetypeShowcase({ reverse }: { reverse: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    // Subscribe to the Lenis-bridged window scrollY (SmoothScroll.tsx wires it up).
    const { scrollY } = useScroll();
    // Local progress motion value (0 = card entering from below, 1 = card leaving above).
    const progress = useMotionValue(0);

    useMotionValueEvent(scrollY, "change", () => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const raw = (vh - rect.top) / (vh + rect.height);
        progress.set(Math.max(0, Math.min(1, raw)));
    });

    // Adjacent columns drift opposite directions, and each drift follows the
    // column's tilted axis (-8° CCW means "up" is up-and-slightly-left).
    const TILT_DEG = 8;
    const Y_TRAVEL = 80;
    const X_TRAVEL = Y_TRAVEL * Math.sin((TILT_DEG * Math.PI) / 180); // ≈ 11.13

    const y0 = useTransform(progress, [0, 1], [Y_TRAVEL, -Y_TRAVEL]);
    const x0 = useTransform(progress, [0, 1], [X_TRAVEL, -X_TRAVEL]);
    const y1 = useTransform(progress, [0, 1], [-Y_TRAVEL, Y_TRAVEL]);
    const x1 = useTransform(progress, [0, 1], [-X_TRAVEL, X_TRAVEL]);
    const y2 = useTransform(progress, [0, 1], [Y_TRAVEL, -Y_TRAVEL]);
    const x2 = useTransform(progress, [0, 1], [X_TRAVEL, -X_TRAVEL]);
    const y3 = useTransform(progress, [0, 1], [-Y_TRAVEL, Y_TRAVEL]);
    const x3 = useTransform(progress, [0, 1], [-X_TRAVEL, X_TRAVEL]);
    const ys = [y0, y1, y2, y3];
    const xs = [x0, x1, x2, x3];

    // Magnetic pull for the floating "Built with" pill. The listener lives on the
    // card so the pill itself can stay pointer-events-none (never blocks the card
    // link). Offset is measured from the wrapper's resting center, which doesn't
    // move when the pill transforms — so there's no feedback jitter.
    const MAGNET_STRENGTH = 0.3;
    const pillRef = useRef<HTMLDivElement>(null);
    const magnetX = useSpring(0, { stiffness: 150, damping: 20, mass: 0.6 });
    const magnetY = useSpring(0, { stiffness: 150, damping: 20, mass: 0.6 });

    const handlePillMagnet = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!pillRef.current) return;
        const rect = pillRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        magnetX.set((e.clientX - cx) * MAGNET_STRENGTH);
        magnetY.set((e.clientY - cy) * MAGNET_STRENGTH);
    };

    const resetMagnet = () => {
        magnetX.set(0);
        magnetY.set(0);
    };

    return (
        <div ref={ref} className="relative aspect-[4/3] w-full">
            <div
                onMouseMove={handlePillMagnet}
                onMouseLeave={resetMagnet}
                className="relative h-full w-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
                {/* Diagonal stripes — matches the untitledui hero plane */}
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, transparent 0 16px, rgba(15,23,42,0.04) 16px 17px)",
                    }}
                />

                {/* 4 reference image columns, sized proportional to their source widths.
                    Each image renders at its natural aspect ratio (height auto), so the
                    bottom of each tall strip gets clipped by the card's overflow-hidden. */}
                <div className="absolute inset-4 flex items-center justify-center gap-3 sm:inset-5 sm:gap-4">
                    {COLUMNS.map((col, idx) => (
                        <motion.div
                            key={col.src}
                            className={`relative min-w-0 ${idx === 0 ? "self-start" : ""}`}
                            style={{
                                flexGrow: col.width,
                                flexShrink: 1,
                                flexBasis: 0,
                                rotate: -8,
                                x: xs[idx],
                                y: ys[idx],
                            }}>
                            <Image
                                src={col.src}
                                alt={col.alt}
                                width={col.width}
                                height={col.height}
                                sizes="(max-width: 1024px) 25vw, 18vw"
                                className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                                priority
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Floating center pill */}
                <div
                    ref={pillRef}
                    className="pointer-events-none absolute top-1/2 left-0 right-0 z-10 flex -translate-y-1/2 justify-center px-4">
                    <motion.div
                        style={{ x: magnetX, y: magnetY }}
                        className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl border border-gray-200 bg-white/95 px-3 py-1.5 shadow-2xl backdrop-blur will-change-transform sm:gap-x-2.5 sm:rounded-full sm:px-4 sm:py-2">
                        <span className="whitespace-nowrap text-[10px] font-medium text-gray-500 sm:text-xs">
                            Built with
                        </span>
                        <span className="inline-flex items-center gap-1 whitespace-nowrap text-[10px] font-semibold text-gray-900 sm:text-xs">
                            <Figma
                                className="size-3 sm:size-3.5"
                                strokeWidth={2}
                            />
                            Figma
                        </span>
                        <span className="text-gray-300">·</span>
                        <span className="inline-flex items-center gap-1 whitespace-nowrap text-[10px] font-semibold text-gray-900 sm:text-xs">
                            <CodeSquare02
                                className="size-3 sm:size-3.5"
                                strokeWidth={2}
                            />
                            Claude Code
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
