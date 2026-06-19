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
    pt-32 md:pt-44
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

          <div className="hidden md:flex mt-8 gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-black">
              <span>Discover</span>
              <ChevronsRight size={18} />
            </button>

            <button className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3 text-white backdrop-blur-sm">
              <span>Get in Touch</span>
              <ChevronsRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider Indicator */}
        <div className="absolute bottom-36 left-10 z-20 hidden md:flex items-center gap-4">
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

              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md">
                <ChevronDown size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">



        </div>
      </section>
    </>
  );
}