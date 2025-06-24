"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { useScroll } from "framer-motion";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1,
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
