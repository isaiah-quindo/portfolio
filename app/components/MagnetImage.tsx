"use client";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    wrapperClassName?: string;
    /** Magnet pull strength (0–1). 0 = no movement, 1 = follows cursor 1:1. */
    strength?: number;
}

export default function MagnetImage({
    src,
    alt,
    width,
    height,
    className = "",
    wrapperClassName = "",
    strength = 0.18,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useSpring(0, { stiffness: 90, damping: 22, mass: 2 });
    const y = useSpring(0, { stiffness: 90, damping: 22, mass: 2 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) * strength;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) * strength;
        x.set(offsetX);
        y.set(offsetY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`will-change-transform ${wrapperClassName}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
            />
        </motion.div>
    );
}
