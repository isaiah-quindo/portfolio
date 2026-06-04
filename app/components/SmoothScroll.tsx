"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

declare global {
    interface Window {
        lenis?: Lenis;
    }
}

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    const { scrollY } = useScroll();
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        });
        lenisRef.current = lenis;
        window.lenis = lenis;

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
            lenisRef.current = null;
            window.lenis = undefined;
        };
    }, [scrollY]);

    useEffect(() => {
        lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    }, [pathname]);

    return <>{children}</>;
}
