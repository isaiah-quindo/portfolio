"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;

export default function CaseStudyReveal({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            initial={{
                y: "8%",
                borderTopLeftRadius: "5rem",
                borderTopRightRadius: "5rem",
            }}
            animate={{
                y: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
            }}
            transition={{ duration: 0.9, ease: EASE_OUT_QUINT }}
            className={`bg-black text-white overflow-hidden ${className}`}>
            {children}
        </motion.div>
    );
}

export function RevealItem({
    children,
    delay = 0,
    scaleIn = false,
    className = "",
}: {
    children: ReactNode;
    delay?: number;
    scaleIn?: boolean;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: scaleIn ? 1.04 : 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.75,
                ease: EASE_OUT_QUINT,
                delay,
            }}
            className={className}>
            {children}
        </motion.div>
    );
}
