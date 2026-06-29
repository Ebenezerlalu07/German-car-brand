"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            lerp: 0.08,

            // Desktop
            smoothWheel: true,
            wheelMultiplier: 0.7,

            // Mobile
            syncTouch: true,
            syncTouchLerp: 0.08,
            touchMultiplier: 1,
        });

        let rafId;

        function raf(time) {
            lenis.raf(time); // Automatically uses the device refresh rate (60Hz/90Hz/120Hz/144Hz)
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return null;
}