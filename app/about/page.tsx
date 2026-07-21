"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, secondsToMilliseconds } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { div, section } from "framer-motion/client";





export default function aboutpage() {

    return (

        <section className="px-5 py-50 text-xl leading-tight sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl "  >
            <h1 className="absolute" > Hello About</h1>

        </section>

    );

}