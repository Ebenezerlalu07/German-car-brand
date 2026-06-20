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

              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md">
                <ChevronDown size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>







      {/* About Section */}
      <section className=" px-5 py-3">
        <div className="mx-auto max-w-8xl ">

          {/* Top Content */}
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left */}
            <div>
              <h2
                className=" py-5
    text-[20px]
    leading-tight
    sm:text-[36px]
    md:text-[44px]
    lg:text-[32px]
    xl:text-[30px]
    leading-[1.05]
    font-light
    tracking-[-0.04em]
    text-black
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
    gap-1 sm:gap-1.5
    rounded-full
    border border-black
    px-4 py-2
    sm:px-5 sm:py-2.5
    lg:px-6 lg:py-3
    text-sm sm:text-base
    transition-all duration-300
    hover:bg-black
    hover:text-white
  "
              >
                Learn More
                <ChevronsRight
                  size={14}
                  className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Right */}
            <div className="pointer-events-none select-none flex justify-center">
              <video
                src="/animation.mp4"
                autoPlay
                muted
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
      </section>
    </>
  );
}