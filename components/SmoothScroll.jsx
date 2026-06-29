"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            lerp: 0.08,
            smoothWheel: true,
            wheelMultiplier: 0.7,

            // Mobile
            syncTouch: true,
            syncTouchLerp: 0.08,
            touchMultiplier: 1,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return null;
}