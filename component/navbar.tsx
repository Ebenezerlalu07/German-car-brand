"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";

export default function Navbar() {
    const socials = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/ebenezer-c-lalu-450943231/",
            icon: <FaLinkedinIn size={17} />,
        },
        {
            name: "Behance",
            href: "https://www.behance.net/ebenezerclalu",
            icon: <FaBehance size={17} />,
        },
        {
            name: "Website",
            href: "https://ebenezeridesignstudio.framer.website/",
            icon: <Globe size={17} />,
        },
    ];

    return (
        <header className="fixed inset-x-0 top-5 z-50 px-4">
            <div className="mx-auto max-w-7xl">

                <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/10 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.35)]">

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-400/10" />

                    {/* Shine */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                    <div className="relative flex h-14 md:h-16 items-center justify-between px-4 md:px-7">

                        {/* Logo */}
                        <Link href="/">
                            <h1 className="bg-gradient-to-r from-white bg-clip-text text-lg font-bold tracking-[0.28em] text-transparent md:text-xl">
                                Ebenezer
                            </h1>
                        </Link>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2 md:gap-3">

                            {socials.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className="
                    group
                    relative
                    flex
                    h-9
                    w-9
                    md:h-11
                    md:w-11
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-gray-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-400/40
                    hover:text-white
                    hover:shadow-[0_0_30px_rgba(16,185,129,.35)]
                  "
                                >
                                    <span className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <span className="relative z-10">
                                        {item.icon}
                                    </span>
                                </a>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </header>
    );
}