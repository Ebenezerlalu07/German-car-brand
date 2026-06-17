"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled || mobileOpen
                ? "bg-black/95 backdrop-blur-md"
                : "bg-transparent"
                }`}
        >
            <nav className="relative flex h-24 items-center px-6 lg:px-10">

                <div className="absolute left-6 lg:left-10">
                    <a href="/" className="group inline-flex flex-col items-center">
                        <Image
                            src="/Logo.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            priority
                            className="
        transition-all duration-500 ease-out
        group-hover:-translate-y-1
      "
                        />

                        <span
                            className="
        mt-1 h-[2px]
        w-0
        bg-white
        transition-all duration-500
        group-hover:w-full
      "
                        />
                    </a>
                </div>

                {/* Desktop Menu */}
                <ul className="absolute left-1/2 hidden -translate-x-1/2 lg:flex items-center gap-10 text-white">
                    <li>
                        <a href="#about" className="text-lg tracking-wide hover:opacity-70">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="text-lg tracking-wide hover:opacity-70">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-lg tracking-wide hover:opacity-70">
                            Contact
                        </a>
                    </li>
                </ul>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className="
    ml-auto
    text-white
    lg:hidden
    transition-all duration-300
    hover:scale-110
  "
                >
                    <Menu size={30} />
                </button>

            </nav>


            {/* Mobile Menu */}
            <div
                className={`
    fixed top-0 right-0 h-screen w-[85%] max-w-sm
    z-50 lg:hidden
    transform transition-all duration-500 ease-out
    ${mobileOpen ? "translate-x-0" : "translate-x-full"}
  `}
            >
                {/* Background */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />

                {/* Content */}
                <div className="relative flex h-full flex-col">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 pt-8 pb-8">

                        {/* <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                            German Cars
                        </p> */}

                        <Image
                            src="/Logo.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            priority
                            className="
        transition-all duration-500 ease-out
        group-hover:-translate-y-1
      "
                        />




                        {/* Animated Close Button */}
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="
          group
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-md
          transition-all duration-500
          hover:rotate-180
          hover:bg-white/10
        "
                        >
                            <X
                                size={22}
                                className="
            text-white
            transition-all duration-300
            group-hover:scale-110
          "
                            />
                        </button>

                    </div>

                    {/* Links */}
                    <ul className="flex flex-col px-6">

                        <li className="border-b border-white/10">
                            <a
                                href="#about"
                                onClick={() => setMobileOpen(false)}
                                className="
            block py-5 text-2xl text-white
            transition-all duration-300
            hover:translate-x-2
          "
                            >
                                About
                            </a>
                        </li>

                        <li className="border-b border-white/10">
                            <a
                                href="#services"
                                onClick={() => setMobileOpen(false)}
                                className="
            block py-5 text-2xl text-white
            transition-all duration-300
            hover:translate-x-2
          "
                            >
                                Services
                            </a>
                        </li>

                        <li className="border-b border-white/10">
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="
            block py-5 text-2xl text-white
            transition-all duration-300
            hover:translate-x-2
          "
                            >
                                Contact
                            </a>
                        </li>

                    </ul>


                    {/* Bottom Card */}
                    {/* <div className="mt-auto px-6 pb-6 shrink-0">
                        <div
                            className="
      relative overflow-hidden
      rounded-2xl
      border border-white/20
      bg-white/10
      backdrop-blur-2xl
      shadow-[0_8px_32px_rgba(255,255,255,0.08)]
      p-4 sm:p-5
    "
                        >
                      
                            <div
                                className="
        absolute inset-0
        bg-gradient-to-br
        from-white/15
        via-transparent
        to-transparent
        pointer-events-none
      "
                            />

                            <div className="relative z-10">
                                <p className="text-xs sm:text-sm text-white/60">
                                    German Luxury Automotive Network
                                </p>

                                <p className="mt-2 text-sm sm:text-base leading-relaxed text-white">
                                    Connecting premium automotive brands worldwide.
                                </p>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>

            {/* Overlay */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`
    fixed inset-0 z-30 bg-black/60 backdrop-blur-sm
    transition-all duration-300 lg:hidden
    ${mobileOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
  `}
            />
        </header >
    );
}