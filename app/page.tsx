"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import { useState } from "react";





const projects = [

  {
    title: "Association of Kerala Medical and Dental Graduates (AKMG)",
    description:
      "The AKMG Global website was designed and developed as a modern, professional digital platform for the Association of Kerala Medical and Dental Graduates (AKMG) Global, a worldwide network of medical and dental professionals of Keralan origin. The primary objective was to create a user-friendly, responsive, and visually engaging website that strengthens the organization's global presence, facilitates member engagement, and showcases its initiatives, events, and healthcare contributions. The project also includes a comprehensive Admin Panel (CMS), enabling administrators to efficiently manage website content, member information, events, news, galleries, directories, and other dynamic sections without requiring technical expertise. The platform was built with a focus on performance, scalability, security, and ease of content management, ensuring seamless administration while delivering an intuitive experience for members and visitors across all devices.",
    image: "/AKMG.png",
    url: "https://akmgglobal.org/",
    category: "Figma Design & Dev",
  },


  {
    title: "German Cars",
    description:
      "A premium automotive website concept designed to celebrate the excellence of German engineering. This project features a modern, responsive UI with immersive visuals, smooth animations, and an elegant user experience inspired by iconic luxury brands. The design emphasizes performance, precision, and innovation while delivering seamless navigation across all devices",
    image: "/Germancars.png",
    url: "https://german-car-brand.vercel.app/",
    category: "Next.js",
  },




  {
    title: "Nothing X App",
    description:
      "A modern mobile app concept inspired by Nothing's signature minimalist design philosophy. The interface combines a clean layout, bold typography, and intuitive interactions to create a seamless user experience. Designed with a focus on simplicity, functionality, and visual clarity, the app delivers smooth navigation, engaging micro-interactions, and a premium aesthetic while maintaining consistency across every screen. The concept emphasizes usability, modern UI trends, and a distinctive design language that reflects the innovative identity of the Nothing brand.",
    image: "/Nothing.png",
    url: "https://www.figma.com/proto/tfbHZIVLOe6TQsYzAA7lHD/Nothing-X?node-id=3-114&t=I8bBSKUlePmEvW6t-1",
    category: "Figma",
  },




  {
    title: "Lexus Website Concept",
    description:
      "A premium website concept crafted to reflect the elegance, innovation, and performance of the Lexus brand. The design features a sophisticated user interface with immersive visuals, refined typography, and smooth animations that create a luxurious browsing experience. Built with a focus on responsive design and intuitive navigation, the website showcases vehicle collections, brand heritage, and advanced automotive technology while delivering a seamless experience across desktop, tablet, and mobile devices.",
    image: "/Lexus.png",
    url: "https://www.figma.com/proto/sM5fGyEGWCTDaIzvzZ5ykU/Lexus?node-id=6-248&t=pzCtHg9BBP3LeGdN-1",
    category: "Figma",
  },


  {
    title: "Lays Hero Concept",
    description:
      "A vibrant hero section concept designed for the Lay's brand, featuring bold visuals, energetic colors, and engaging animations that instantly capture attention. The design highlights the product with a modern layout, eye-catching typography, and a playful user experience that reflects the brand's fun and youthful personality.",
    image: "/lays.jpg",
    url: "https://www.figma.com/proto/4nyhAc3jfiGXnnOSCWob9m/Lays-Home-Animation-Co?node-id=1-4&t=a30B0nnEG6zOJS77-1",
    category: "Figma",
  },


  {
    title: "Chatbot Agents",
    description:
      "A modern AI chatbot platform concept designed to deliver intelligent, fast, and seamless conversational experiences. The interface features a clean, user-friendly design with intuitive navigation, real-time messaging, and a scalable dashboard for managing AI agents. Focused on usability and productivity, the concept includes smart automation, conversation analytics, and responsive layouts that provide a consistent experience across desktop and mobile devices. The design emphasizes efficiency, accessibility, and a premium user experience for businesses and customer support solutions.",
    image: "/engineering.jpg",
    url: "https://www.figma.com/proto/b6rAaTeTuVaU9xY46vDlTH/Engineering-Aide-Web?node-id=1-2&page-id=0%3A1&starting-point-node-id=1%3A2&t=Uj98kKwKbsWX1eUF-1",
    category: "Figma",
  },

  {
    title: "Promised Land Appraisal",
    description:
      "A professional website concept designed for a real estate appraisal company, focused on trust, accuracy, and a seamless user experience. The design features a clean and modern interface with intuitive navigation, responsive layouts, and clear service presentation.",
    image: "/Promised Land Appraisal.png",
    url: "https://www.figma.com/proto/gcQCYLQC2KcpUbZIzGTRcg/Promised-Land-Appraisal?node-id=1-31&t=rAatuLmIZ2rEsJmd-1",
    category: "Figma",
  },

  {
    title: "Sparkfit Agency",
    description:
      "A premium website concept designed for Sparkfit Agency, a Dubai-based digital marketing company helping businesses grow their online presence across the UAE and beyond. The design combines modern aesthetics, strategic layouts, and engaging visuals to create a professional, conversion-focused user experience. Showcasing services including SEO, social media marketing, Google Ads, branding, web design, and performance marketing, the website is built to generate leads, strengthen brand credibility, and deliver seamless performance across desktop, tablet, and mobile devices.",
    image: "/sparkfit..jpg",
    url: "https://sparkfitagency.com/",
    category: "HTMl, Bootstrap, Javascript",
  },

  {
    title: "Grand Flow",
    description:
      "A modern corporate website concept designed for Grand Management, focused on professionalism, efficiency, and a strong digital presence. The design features a clean and sophisticated interface with intuitive navigation, responsive layouts, and engaging visuals that effectively communicate the company's services and expertise.",
    image: "/Grand.jpg",
    url: "https://www.figma.com/proto/l85dHUKSbwtFAl9WNZXiP0/Grant-Flow?node-id=2-219&t=PTtcw5rdJx8msQXs-1",
    category: "Figma",
  },


  {
    title: "Tech Website",
    description:
      "A modern hero page concept designed for a technology brand, featuring a sleek interface, bold typography, and immersive visuals that create a powerful first impression. The design combines clean layouts, engaging animations, and clear call-to-action elements to effectively showcase innovative products, services, or digital solutions.",
    image: "/tech.png",
    url: "https://www.figma.com/proto/UmrtTzAmfy3rkiBWW9gKx5/Tech?node-id=1-2&t=bjOUqiUuRHRRdnnk-1",
    category: "Figma",
  },


  {
    title: "Church Website",
    description:
      "A modern and welcoming website concept designed for a church, focused on fostering community, faith, and meaningful connections. The design features a clean, elegant interface with intuitive navigation, calming visuals, and responsive layouts that provide a seamless experience across all devices.",
    image: "/sharon.png",
    url: "https://xd.adobe.com/view/e7c42a41-56ac-4966-9a78-3b71037a9417-b297/",
    category: "Adobe XD, PS",
  },



  {
    title: "Chatbot",
    description:
      "A modern chatbot interface concept designed to deliver fast, intuitive, and engaging conversational experiences. The UI features a clean layout, responsive messaging components, and a user-friendly design that enhances communication between users and AI.",
    image: "/chatbot1.jpg",
    url: "",
    category: "Figma",
  },

  {
    title: "Grand Management",
    description:
      "A modern dashboard concept designed with a clean two-color theme to create a professional, visually balanced, and user-friendly experience. The interface combines intuitive navigation, responsive layouts, interactive analytics, and organized management tools to simplify daily operations. Built with a focus on clarity, efficiency, and scalability, the dashboard enables users to monitor performance, manage workflows, and access key insights effortlessly while maintaining a consistent and elegant design across desktop and tablet devices.",
    image: "/dashboard.png",
    url: "https://www.figma.com/proto/l85dHUKSbwtFAl9WNZXiP0/Grant-Flow?node-id=44-2&t=GFQRpCupBS1wD4dV-1",
    category: "Figma",
  },



  {
    title: "Green Color Palette",
    description:
      "A thoughtfully crafted green color palette designed to help clients build a fresh, trustworthy, and memorable brand identity. The carefully selected shades create a modern and professional look while conveying growth, reliability, and innovation. Suitable for websites, mobile apps, dashboards, and marketing materials, this palette ensures visual consistency, enhances user experience, and provides a strong foundation for creating engaging digital products that resonate with your audience.",
    image: "/color pallets.png",
    url: "https://www.figma.com/proto/BZUCsjVbYHpKDufvuB2SND/Green-Color-Chart-Palette-%E2%80%A2-All-Editable-with-Codes--Community-?node-id=0-24&t=EhItqCkeCguNGbHf-1",
    category: "Figma",
  },










];

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 5);
  return (




    <main className="relative min-h-screen overflow-hidden bg-[#08130F] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-[140px]" />
        <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-amber-400/10 blur-[170px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-20">


        <div className="relative mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-20 lg:flex-row">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="flex-1"
          >

            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-5 py-2 text-sm tracking-[0.25em] text-emerald-300">
              UI/UX Designer & Developer
            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight md:text-7xl">
              Ebenezer&nbsp;
              <span className="text-white/40">
                C Lalu
              </span>
            </h1>

            <div className="mt-8 h-[2px] w-32 bg-gradient-to-r from-emerald-400 to-transparent" />

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
              Creating premium digital products through
              <span className="font-semibold text-emerald-400">
                {" "}UI/UX Design
              </span>,
              modern web development, and interactive user experiences.

              With over
              <span className="font-semibold text-emerald-400"> 3+ years </span>
              of experience and
              <span className="font-semibold text-emerald-400"> 50+ successful projects </span>
              delivered across various industries, I build elegant digital products that combine creativity, usability, and performance.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="inline-flex rounded-full bg-emerald-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Explore Projects
              </a>

              <a
                href="/Ebenezer C Lalu Resume.pdf"
                download
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                Download Resume
              </a>

            </div>

            {/* <div className="mt-16 flex items-center justify-between gap-4">

              <div className="text-center">
                <h2 className="text-3xl font-black text-white sm:text-5xl">
                  3+
                </h2>
                <p className="mt-2 text-xs text-gray-400 sm:text-base">
                  Years Experience
                </p>
              </div>

              <div className="h-10 w-px bg-white/10 sm:h-14" />

              <div className="text-center">
                <h2 className="text-3xl font-black text-white sm:text-5xl">
                  50+
                </h2>
                <p className="mt-2 text-xs text-gray-400 sm:text-base">
                  Projects
                </p>
              </div>

              <div className="h-10 w-px bg-white/10 sm:h-14" />

              <div className="text-center">
                <h2 className="text-3xl font-black text-white sm:text-5xl">
                  100%
                </h2>
                <p className="mt-2 text-xs text-gray-400 sm:text-base">
                  Clients
                </p>
              </div>

            </div> */}

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative flex-1 flex justify-center"
          >

            {/* Main Card */}

            <div className="relative w-[430px] rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">

              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-emerald-500 blur-3xl opacity-40" />

              <img
                src="/Ebenezer C Lalu Pro image.png"
                alt=""
                className="mx-auto h-[420px] w-full rounded-3xl object-cover"
              />

              <div className="mt-8 flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    Ebenezer C Lalu
                  </h3>

                  <p className="text-gray-400">
                    MCA Graduate
                  </p>

                </div>

                <div className="rounded-xl bg-emerald-500 px-4 py-2 text-black font-semibold">
                  Available
                </div>

              </div>

            </div>



            {/* Border */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear"
              }}
              className="absolute h-[560px] w-[560px] rounded-full border border-dashed border-emerald-500/20"
            />

          </motion.div>

        </div>
      </section>


      {/* Projects */}
      <section
        id="projects"
        className="relative overflow-hidden py-15"
      ><div className="relative mx-auto w-[92%] max-w-7xl">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="mb-20 text-center"
          >
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm tracking-[0.2em] text-emerald-300">
              MY PROJECTS
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Featured Work
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              Selected projects designed and developed for companies,
              startups and freelance clients.
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects
              .slice(0, showAll ? projects.length : 5)
              .map((project, index) => (
                <motion.a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="group block"
                >
                  {/* Browser Window */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101916] shadow-[0_25px_60px_rgba(0,0,0,.45)] transition-all duration-500 group-hover:border-emerald-500/40">

                    {/* Browser Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#0b1311] px-6 py-4">

                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500"></span>
                        <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-400">
                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                        <span>{project.title}</span>
                      </div>

                      <div className="text-emerald-400  text-sm font-medium">
                        Live
                      </div>

                    </div>

                    {/* Screenshot */}

                    <div className="overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full transition duration-700 group-hover:scale-105"
                      />
                    </div>

                  </div>

                  {/* Bottom Content */}
                  <div className="mt-8 border-t border-white/10 pt-8">

                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                      {/* Left Content */}
                      <div>

                        <div className="mb-4 flex items-center gap-3">

                          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-300">
                            {project.category}
                          </span>

                        </div>

                        <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-emerald-400">
                          {project.title}
                        </h3>

                        <p className="mt-5 max-w-3xl text-base leading-8 text-gray-400">
                          {project.description}
                        </p>

                      </div>

                      {/* Right Link */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-medium text-white transition-all duration-300 hover:gap-3 hover:text-emerald-400"
                      >
                        Visit Website
                        <ArrowUpRight size={18} strokeWidth={2.2} />
                      </a>

                    </div>

                  </div>


                </motion.a>
              ))}
          </div>

          {projects.length > 5 && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group rounded-full border border-emerald-500/30 bg-emerald-500/10 px-8 py-4 text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-black"
              >
                {showAll ? "Show Less" : "View All Projects"}
              </button>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}