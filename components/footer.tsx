"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-auto overflow-hidden">
            <div className="mx-auto px-5 py-10 lg:py-12">
                {/* Top */}
                <div className="grid lg:grid-cols-[1fr_500px] gap-8 lg:gap-12 items-center">
                    <div>
                        {/* Logo + Nav */}
                        <div className="flex items-center gap-5 mb-10">
                            <Image
                                src="/Logo.png"
                                alt="Logo"
                                width={35}
                                height={35}
                                className="w-8 h-8 object-contain"
                            />

                            <div className="flex flex-wrap gap-3 text-sm lg:text-[15px]">
                                <Link href="/about">About</Link>
                                <Link href="/service">Service</Link>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="max-w-7xl space-y-2 text-[10px] lg:text-[12px] leading-relaxed text-white/70">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>

                            <p>
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                    </div>

                    {/* Car */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Background Text */}
                        <div className="absolute inset-0 flex items-center justify-center lg:justify-end pointer-events-none">
                            <span className=" text-[125px] md:text-[150px] lg:text-[240px] font-bold text-white/5 tracking-tight leading-none select-none">
                                GT4
                            </span>
                        </div>
                        <Image
                            src="/porsche-model 1.png"
                            alt="Porsche"
                            width={1600}
                            height={700}
                            className="relative z-10 w-full max-w-[700px] lg:w-[1200px] xl:w-[1400px] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-8 lg:my-10"></div>

                {/* Bottom */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-sm sm:text-lg md:text-xl lg:text-[15px] leading-[1.1] font-light">
                            Where German luxury meets timeless performance,
                            <br className="hidden lg:block" />
                            creating extraordinary automotive experiences.
                        </h2>
                    </div>

                    <div className="flex gap-6 lg:gap-10 text-[11px] sm:text-xs lg:text-sm text-white/90">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}