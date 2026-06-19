"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  return (


    <section className="relative h-screen px-6">


      <div className="absolute inset-0 overflow-hidden bg-black">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Image
              src={slides[currentSlide].image}
              alt="Hero"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>


      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-transparent" />

      {/* Main Content */}
      <div
        className="
          relative z-10
          flex h-full flex-col justify-center
          sm:px-8 lg:px-12
          items-start text-left
          md:items-center md:text-center
          translate-y-[8vh]
          sm:translate-y-[10vh]
          md:translate-y-[18vh]
          lg:translate-y-[22vh]
          xl:translate-y-[25vh]
        "
      >
        <h1
          className="
    max-w-full
    sm:max-w-[450px]
    md:max-w-6xl

    text-white
    font-light
    tracking-tight

    text-[22px]
    sm:text-[30px]
    md:text-[34px]
    lg:text-[42px]
    xl:text-[48px]

    leading-[1.2]
    sm:leading-[1.1]

    break-words
  "
        >
          {slides[currentSlide].title}
        </h1>

        {/* Desktop Buttons */}
        <div className="hidden md:flex mt-8 gap-4">
          <button
            className="
      group inline-flex items-center gap-2
      whitespace-nowrap
      rounded-full bg-white
      px-8 py-3
      text-base font-medium text-black
      transition-all duration-300
      hover:scale-105
    "
          >
            <span>Discover</span>
            <ChevronsRight
              size={18}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            className="
      group inline-flex items-center gap-2
      whitespace-nowrap
      rounded-full
      border border-white/30
      bg-white/5
      px-8 py-3
      text-base font-medium text-white
      backdrop-blur-sm
      transition-all duration-300
      hover:bg-white/10
    "
          >
            <span>Get in Touch</span>
            <ChevronsRight
              size={18}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>


      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-10 pb-6">

        {/* Slider Indicator */}
        <div className="hidden md:flex mb-6 items-center justify-start gap-2 sm:gap-4 w-full">
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] text-white/60">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${currentSlide === index
                  ? "w-12 sm:w-20 h-[3px] bg-white/20"
                  : "w-5 sm:w-8 h-[3px] bg-white/20 hover:bg-white/40"
                  }`}
              >
                {currentSlide === index && (
                  <div
                    key={currentSlide}
                    className="absolute inset-y-0 left-0 bg-white animate-progress"
                  />
                )}
              </button>
            ))}
          </div>

          <span className="text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] text-white/60">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px bg-white/20" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left Side */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-white/10
            bg-black/40
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:scale-110
            hover:bg-white/10
          "
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                className="
            flex h-12 w-12 items-center justify-center
            rounded-full
            border border-white/10
            bg-black/40
            text-white
            backdrop-blur-md
            transition-all duration-300
            hover:scale-110
            hover:bg-white/10
          "
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Brand Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src={slides[currentSlide].logo}
                  alt="Brand Logo"
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

          {/* Right Side */}
          <div className="flex items-center justify-between gap-4">

            {/* Social Icons */}
            <div
              className="
          flex items-center gap-5
          rounded-full
          border border-white/10
          bg-black/40
          px-5 py-3
          text-white
          backdrop-blur-md
        "
            >
              <a href="#" aria-label="Instagram">
                <FaInstagram
                  size={18}
                  className="transition hover:scale-110"
                />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebookF
                  size={16}
                  className="transition hover:scale-110"
                />
              </a>

              <a href="#" aria-label="Twitter">
                <FaXTwitter
                  size={16}
                  className="transition hover:scale-110"
                />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn
                  size={16}
                  className="transition hover:scale-110"
                />
              </a>
            </div>

            {/* Scroll Button */}
            <button
              className="
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-white/10
          bg-black/40
          text-white
          backdrop-blur-md
          transition-all duration-300
          hover:scale-110
          hover:bg-white/10
        "
            >
              <ChevronDown size={18} />
            </button>

          </div>
        </div>
      </div>





    </section>
  );
}