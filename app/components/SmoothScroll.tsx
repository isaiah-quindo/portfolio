"use client";
import { useScroll } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    const { scrollY } = useScroll();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.5,
            touchMultiplier: 0.5,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Connect Lenis scroll to Framer Motion's scroll value
        lenis.on("scroll", ({ scroll }: { scroll: number }) => {
            scrollY.set(scroll);
        });

        return () => {
            lenis.destroy();
        };
    }, [scrollY]);

    return <>{children}</>;
}
