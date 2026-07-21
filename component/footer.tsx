"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
    FaLinkedinIn,
    FaBehance,
    FaGithub,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10">

            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

            <div className="relative mx-auto w-[92%] max-w-7xl py-16 md:py-20">

                {/* Heading */}
                <h2 className="text-center text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Let's Create
                    <br />
                    <span className="bg-gradient-to-r from-emerald-300 via-white to-amber-300 bg-clip-text text-transparent">
                        Something Great.
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-xl text-center text-base leading-7 text-zinc-400">
                    Based in Dubai, UAE, specializing in UI/UX Design and Front-End Development, and open to new opportunities and collaborations.
                </p>

                {/* Button */}
                <div className="mt-8 flex justify-center">
                    <Link
                        href="https://wa.me/971588144023"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 text-base font-medium text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]"
                    >
                        Connect Now

                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div>

            </div>

        </footer>
    );
}