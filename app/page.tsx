"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";


import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronsRight,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  Car,
  Wrench,
  ShieldCheck,
  Handshake,
  Settings,
  Headset,
} from "lucide-react";




export default function Hero() {

  const slides = [

    {
      image: "/benz-hero.jpg",
      logo: "/benz-logo.png",
      title: "Where German Luxury Automotive Brands Connect and Grow",
      description:
        "Partnering with Mercedes-Benz enables us to bring world-class luxury experiences.",
    },
    {
      image: "/bmw-hero.jpg",
      logo: "/bmw-logo.png",
      title: "Driving Innovation Through Premium Automotive Partnerships",
      description:
        "Partnering with BMW allows us to deliver performance-driven luxury experiences.",
    },
    {
      image: "/Porsche-hero.jpg",
      logo: "/porsche-logo.png",
      title: "Connecting Visionary Automotive Leaders Worldwide",
      description:
        "Partnering with Porsche creates opportunities for advanced mobility and innovation.",
    },



  ];




  const brands = [
    { name: "Audi", logo: "/audi-logo.png" },
    { name: "Mercedes-Benz", logo: "/benz-logo.png" },
    { name: "BMW", logo: "/bmw-logo.png" },
    { name: "Porsche", logo: "/porsche-logo.png" },
    { name: "Volkswagen", logo: "/Volkswagen-logo.png" },
    { name: "Alpina", logo: "/Alpina-Logo.png" },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const contentY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <>



      {/* Hero Section */}
      <section className="relative min-h-[100svh] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-black">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{
                opacity: 0,
                scale: 1.03,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1,
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 5,
                  ease: "linear",
                },
              }}
            >
              <Image
                src={slides[currentSlide].image}
                alt="Hero"
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>



          <div className="absolute inset-0 bg-black/50" />
        </div>


        {/* Main Content */}
        <div
          className="
    relative z-10
    flex min-h-[100svh]
    flex-col
    items-start md:items-center
    justify-center
    text-left md:text-center
    px-4 sm:px-8 lg:px-12
    pt-32 md:pt-88
  "
        >
          <h1
            className="
      max-w-full md:max-w-6xl
      text-white font-light tracking-tight
      text-[22px]
      sm:text-[30px]
      md:text-[34px]
      lg:text-[42px]
      xl:text-[48px]
      leading-[1.1]
    "
          >
            {slides[currentSlide].title}
          </h1>

          <div className="hidden lg:flex mt-8 gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-black">
              <span>Discover</span>
              <ChevronsRight
                size={18}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </button>

            <button className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3 text-white backdrop-blur-sm">
              <span>Get in Touch</span>
              <ChevronsRight
                size={18}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        {/* Slider Indicator */}
        <div className="absolute bottom-36 left-10 z-20 hidden lg:flex items-center gap-4">
          <span className="text-xs tracking-[0.2em] text-white/60">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${currentSlide === index
                  ? "w-20 h-[3px] bg-white/20"
                  : "w-8 h-[3px] bg-white/20 hover:bg-white/40"
                  }`}
              >
                {currentSlide === index && (
                  <motion.div
                    key={currentSlide}
                    className="absolute inset-y-0 left-0 bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 5,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <span className="text-xs tracking-[0.2em] text-white/60">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>



        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-10 pb-6">
          <div className="mb-6 h-px bg-white/20" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">



              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={nextSlide}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md"
                >
                  <ChevronRight size={18} />
                </button>
              </div>


              {/* Brand */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center">
                  <Image
                    src={slides[currentSlide].logo}
                    alt=""
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <p className="max-w-md text-sm text-white md:text-base">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-5 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-white backdrop-blur-md">
                <FaInstagram />
                <FaFacebookF />
                <FaXTwitter />
                <FaLinkedinIn />
              </div>
              <button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/10"
                aria-label="Scroll down"
              >
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </button>
            </div>

          </div>
        </div>
      </section>




      {/* About Section */}
      <FadeIn>
        <section className=" px-5 py-3" id="about">
          <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-5">

            {/* Top Content */}
            <div className="grid items-center gap-14 lg:grid-cols-2">

              {/* Left */}
              <div>
                <h2
                  className="py-3 text-1xl leading-tight sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-black/100
  "
                >
                  German Engineering, Timeless Performance
                  <span className="text-black/50"></span>
                </h2>


                <div className="max-w-7xl space-y-2 text-[10px] lg:text-[12px] leading-relaxed text-black/100">
                  <p>
                    German car brands have earned a global reputation for engineering
                    excellence, cutting-edge technology, and timeless design. Renowned for
                    their precision craftsmanship and exceptional performance, brands such
                    as Mercedes-Benz, BMW, Porsche, Audi, and Volkswagen continue to set
                    benchmarks in luxury, innovation, and driving dynamics.
                  </p>


                  <p>
                    From high-performance sports cars and premium sedans to advanced
                    electric vehicles, German manufacturers combine heritage with modern
                    innovation to deliver vehicles that offer superior comfort, safety, and
                    reliability. Their commitment to quality and continuous innovation has
                    made German automobiles a symbol of prestige and excellence worldwide.
                  </p>

                  <p>
                    From high-performance sports cars and premium sedans to advanced
                    electric vehicles, German manufacturers combine heritage with modern
                    innovation to deliver vehicles that offer superior comfort, safety, and
                    reliability. Their commitment to quality and continuous innovation has
                    made German automobiles a symbol of prestige and excellence worldwide.
                  </p>
                  <p>
                    German car brands are globally recognized for their precision engineering,
                    luxury, and innovation. Brands like Mercedes-Benz, BMW, Porsche, Audi, and
                    Volkswagen have set industry standards with their commitment to performance,
                    safety, and advanced technology. Combining timeless design with cutting-edge
                    engineering, German automobiles quality, reliability, and driving excellence
                    admired around the world.
                  </p>

                </div>

                <button
                  className="
    mt-6 md:mt-8
    group
    inline-flex
    items-center
    gap-1
    whitespace-nowrap
    rounded-full
    border border-black
    px-4 py-2
    text-xs sm:text-sm
    transition-all duration-300
    hover:bg-black
    hover:text-white
  "
                >
                  <span>Learn More</span>

                </button>
              </div>

              {/* Right */}
              <div className="pointer-events-none select-none flex justify-center">
                <video
                  src="/animation.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  className="w-full max-w-[800px] object-contain"
                  style={{
                    WebkitUserSelect: "none",
                    userSelect: "none",
                  }}
                />
              </div>
            </div>



          </div>
        </section></FadeIn>


      {/* German Cars Section */}
      <section className="px-5 py-10 md:py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-5 lg:grid-cols-[38%_62%]">

          {/* Left Card */}
          <FadeIn>
            <div className="group relative h-[420px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden rounded-[24px] lg:rounded-[30px]">

              <Image
                src="/Girl in car.jpg"
                alt="German Brands"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Top Right Arrow */}
              <div className="absolute top-5 right-5 z-20">
                <button
                  className="
        flex h-12 w-12 items-center justify-center
        rounded-full bg-white/100 text-black/80
        transition-all duration-300
        hover:scale-100
      "
                >
                  <ArrowUpRight size={24} strokeWidth={2} />
                </button>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 lg:bottom-8 lg:left-8 lg:right-8 text-white">

                <h3 className="mb-3 text-xl leading-tight sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                  15+ German Brands
                </h3>

                <p className="max-w-md text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed text-white/90">
                  Discover the excellence of German automotive engineering
                  through a curated collection of premium brands renowned
                  for luxury.
                </p>

              </div>
            </div></FadeIn>

          {/* Right Card */}
          <FadeIn>
            <div className="group relative h-[420px] sm:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden rounded-[24px] lg:rounded-[30px]">

              <Image
                src="/Girl in car 1.jpg"
                alt="Luxury"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 lg:bottom-8 lg:left-8 lg:right-8">

                <h2
                  className="
            max-w-5xl
            text-white
            font-light
            tracking-tight
            leading-[1.05]

            text-[28px]
            sm:text-[38px]
            md:text-[48px]
            lg:text-[56px]
            xl:text-[64px]
          "
                >
                  Luxury Beyond Limits,
                  <br />
                  Performance Beyond
                  <br />
                  Expectations
                </h2>

              </div>
            </div></FadeIn>

        </div>
      </section>


      {/* Logo Section */}
      <section className="relative overflow-hidden py-5 md:py-16 lg:py-10">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#8B7355]/10 blur-[120px] md:h-[450px] md:w-[450px]" />
          <div className="absolute -left-24 bottom-0 h-60 w-60 rounded-full bg-slate-400/10 blur-[100px] md:h-80 md:w-80" />
          <div className="absolute -right-20 top-20 h-60 w-60 rounded-full bg-[#8B7355]/10 blur-[100px] md:h-72 md:w-72" />
        </div>

        <div className="relative mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="mx-auto mb-10 max-w-3xl text-center md:mb-16"
          >

            <span className="inline-block rounded-full border border-[#8B7355]/20 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[4px] text-[#5C4632] shadow-sm">
              Premium Collection
            </span>

            <h2 className="mt-5 text-2xl font-semibold text-[#1f2937] sm:text-3xl md:text-4xl lg:text-5xl">
              Discover Our Brands
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base md:text-lg">
              Explore Germany's most iconic automotive manufacturers renowned for engineering excellence, innovation and timeless luxury.
            </p>

            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#5C4632] via-[#8B7355] to-slate-700" />

          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: .08,
                },
              },
            }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-6"
          >

            {brands.map((brand) => (
              <motion.div
                key={brand.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: .95,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  duration: .4,
                }}
                className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white/90
            p-4
            sm:p-5
            lg:p-6
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-[#8B7355]/40
            hover:shadow-[0_20px_50px_rgba(0,0,0,.12)]
          "
              >

                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/5 via-transparent to-slate-700/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100">
                  <div className="h-full w-full rounded-full bg-[#8B7355]/10" />
                </div>

                {/* Shine */}
                <div className="absolute -left-24 top-0 h-full w-12 rotate-12 bg-white/40 blur-md transition-all duration-1000 group-hover:left-[140%]" />

                {/* Logo */}
                <div className="relative flex h-16 items-center justify-center sm:h-20 md:h-24">

                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={150}
                    height={80}
                    className="
                h-10
                sm:h-12
                md:h-14
                lg:h-16
                w-auto
                object-contain
                transition-all
                duration-500
                group-hover:scale-110
              "
                  />

                </div>

                {/* Divider */}
                <div className="mx-auto mt-4 h-px w-8 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent opacity-0 transition-all duration-500 group-hover:w-16 group-hover:opacity-100" />

                {/* Brand */}
                <h3 className="
            mt-4
            text-center
            text-[11px]
            font-semibold
            uppercase
            tracking-[2px]
            text-gray-700
            transition
            duration-300
            sm:text-xs
            md:text-sm
            group-hover:text-[#5C4632]
          ">
                  {brand.name}
                </h3>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </section>

      {/* parlx Section */}
      <section
        ref={parallaxRef}
        className="relative min-h-[750px] overflow-hidden py-20 lg:h-[850px] lg:py-0"
      >
        {/* Background */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 scale-110"
        >
          <Image
            src="/rs7.jpg"
            alt="Luxury Car"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/80" />

        {/* Bronze Glow */}
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8B7355]/20 blur-[130px] md:h-[450px] md:w-[450px]" />

        {/* Background Text */}
        <motion.h1
          animate={{ x: ["0%", "-35%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[180px] font-black uppercase tracking-[18px] text-white/[0.04] xl:block xl:text-[240px]"
        >
          MERCEDES • BMW • AUDI • PORSCHE • MERCEDES • BMW • AUDI • PORSCHE
        </motion.h1>

        <div className="relative z-20 mx-auto flex min-h-[750px] max-w-[1800px] items-center px-5 py-12 sm:px-8 lg:min-h-[850px] lg:py-0">

          <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
              className="order-2 text-center lg:order-1 lg:text-left"
            >
              <span className="inline-flex rounded-full border border-[#8B7355]/30 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[4px] text-[#B79A74] backdrop-blur sm:text-xs">
                German Engineering
              </span>

              <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Driven by
                <br />
                <span className="text-[#B79A74]">
                  Precision &
                  <br className="hidden sm:block" />
                  Luxury
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base md:text-lg lg:mx-0 lg:mt-8">
                Experience legendary German engineering, iconic design,
                and performance that defines the world's most prestigious
                automotive brands.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

                <button className="w-full rounded-full bg-[#8B7355] px-8 py-3 font-medium text-white transition hover:bg-[#6E5943] sm:w-auto lg:py-4">
                  Explore Collection
                </button>

                <button className="w-full rounded-full border border-white/20 px-8 py-3 font-medium text-white backdrop-blur transition hover:bg-white hover:text-black sm:w-auto lg:py-4">
                  Contact Us
                </button>

              </div>
            </motion.div>

            {/* Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .2, duration: .8 }}
              viewport={{ once: true }}
              className="order-1 mx-auto w-full max-w-xs rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl sm:max-w-sm sm:p-8 lg:order-2 lg:ml-auto"
            >
              <p className="text-xs uppercase tracking-[4px] text-[#B79A74]">
                Heritage
              </p>

              <h3 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                1886
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base">
                More than a century of precision engineering, innovation,
                and timeless automotive craftsmanship.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:gap-6">

                <div>
                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    6+
                  </h4>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    Luxury Brands
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    100+
                  </h4>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    Premium Models
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Service Section */}
      <section className="relative overflow-hidden bg-[#f8f8f8] py-20 lg:py-28">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#8B7355]/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-slate-300/20 blur-[180px]" />
        </div>

        <div className="relative mx-auto max-w-[1800px] px-5">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="rounded-full border border-[#8B7355]/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-[#8B7355]">
              Premium Services
            </span>

            <h2 className="mt-6 text-3xl font-semibold text-[#1f2937] sm:text-4xl lg:text-5xl">
              Exceptional Automotive Services
            </h2>

            <p className="mt-5 text-gray-500">
              Experience world-class automotive solutions inspired by German
              engineering, innovation, and luxury craftsmanship.
            </p>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[45%_55%]">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[35px]"
            >
              <Image
                src="/Cargirl.jpg"
                alt="Luxury Services"
                width={900}
                height={900}
                className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110 md:h-[500px] lg:h-[700px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">

                <h3 className="text-3xl font-semibold text-white">
                  Precision Meets Luxury
                </h3>

                <p className="mt-4 max-w-md text-gray-300">
                  Delivering premium automotive experiences through
                  engineering excellence and personalized service.
                </p>

              </div>

            </motion.div>

            {/* Service Cards */}
            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  number: "01",
                  title: "Luxury Sales",
                  desc: "Premium German vehicles with personalized consultation."
                },
                {
                  number: "02",
                  title: "Maintenance",
                  desc: "Expert servicing using genuine manufacturer parts."
                },
                {
                  number: "03",
                  title: "Performance",
                  desc: "Enhance driving dynamics with bespoke upgrades."
                },
                {
                  number: "04",
                  title: "Brand Partnerships",
                  desc: "Strategic collaborations with world-renowned brands."
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * .15,
                    duration: .6
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02
                  }}
                  className="group rounded-[28px] border border-white bg-white p-7 shadow-sm transition-all duration-500 hover:border-[#8B7355]/30 hover:shadow-2xl"
                >

                  <span className="text-5xl font-black text-[#8B7355]/20">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold text-[#1f2937] transition group-hover:text-[#8B7355]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-500">
                    {item.desc}
                  </p>

                  <button
                    className="
    mt-6 md:mt-8
    group
    inline-flex
    items-center
    gap-1
    whitespace-nowrap
    rounded-full
    border border-black
    px-4 py-2
    text-xs sm:text-sm
    transition-all duration-300
    hover:bg-black
    hover:text-white
  "
                  >
                    <span>Learn More</span>

                  </button>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}