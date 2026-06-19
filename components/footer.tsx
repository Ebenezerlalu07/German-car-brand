"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className=" mx-auto py-10 px-5 lg:py-12">
                {/* Top */}
                <div className="grid lg:grid-cols-[1fr_500px] gap-8 lg:gap-12 items-center">
                    {/* Left */}
                    <div>
                        {/* Navbar */}
                        <div className="flex items-center gap-5 mb-10">
                            <Image
                                src="/Logo.png"
                                alt="Logo"
                                width={35}
                                height={35}
                                className="w-8 h-8 object-contain"
                            />

                            <div className="flex flex-wrap gap-3 lg:gap-3 text-sm lg:text-[15px] text-white">
                                <Link href="/about">About</Link>
                                <Link href="/service">Service</Link>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="max-w-7xl space-y-2 text-[10px] lg:text-[12px] leading-relaxed text-white/70">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since 1966, when designers at
                                Letraset and James Mosley, the librarian at St Bride Printing
                                Library in London, took a 1914 Cicero translation and
                                scrambled it to make dummy text for Letraset's Body Type
                                sheets.
                            </p>

                            <p>
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters. standard dummy text ever since 1966, when designers at
                                Letraset and James Mosley, the librarian at St Bride Printing
                                Library in London, took a 1914 Cicero translation and
                                scrambled it to make dummy text for Letraset's Body Type
                                sheets.
                            </p>
                        </div>
                    </div>

                    {/* Car */}
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/porsche-1..png"
                            alt="Porsche"
                            width={700}
                            height={280}
                            className="w-full max-w-[700px] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-8 lg:my-10"></div>

                {/* Bottom */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* Heading */}
                    <div className="max-w-xl">
                        <h2 className="text-sm sm:text-lg md:text-xl lg:text-[15px] leading-[1.1] font-light">
                            Where German luxury meets timeless performance,
                            <br className="hidden lg:block" />
                            creating extraordinary automotive experiences.
                        </h2>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                        {/* Links */}
                        <div className="flex gap-6 lg:gap-10 text-[11px] sm:text-xs lg:text-sm text-white/90">
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/terms">Terms of Use</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

