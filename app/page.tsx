"use client";
import { useState } from "react";
import {
  Github,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Shogol",
      description:
        "A modern job marketplace platform connecting companies with freelancers. Built with Next.js, Tailwind CSS, and React Query for a seamless user experience.",
      image: "/images/Shogol.png",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "React",
        "Framer Motion",
        "React Query",
        "Zod",
        "NextAuth",
      ],
      liveUrl: "https://shoogl.vercel.app",
      category: "Marketplace",
    },
    {
      id: 2,
      title: "E-Commerce Shop",
      description:
        "A fully functional e-commerce platform with cart, authentication, and responsive modern UI.",
      image: "/images/E-commercePhoto.PNG",
      tech: [
        "Next.js",
        "Tailwind",
        "React",
        "Framer Motion",
        "radix",
        "NextAuth",
        "Zod",
        "react-hook-form",
      ],
      liveUrl: "https://shop-site-hazel.vercel.app/",
      category: "E-Commerce",
    },
    {
      id: 3,
      title: "Social Media",
      description:
        "A social media app with modern UI, profiles, and smooth interactions.",
      image: "/images/SocialMediaPhoto.PNG",
      tech: ["Next.js", "React", "Tailwind"],
      liveUrl: "https://social-three-eta.vercel.app/",
      category: "App",
    },
    {
      id: 4,
      title: "Portfolio",
      description:
        "This portfolio website was crafted using Next.js and Tailwind CSS, showcasing not just my projects but also my approach to modern web development. Every element—from the smooth scrolling navigation to the responsive layout—demonstrates my commitment to creating exceptional user experiences.",
      image: "/images/PortfolioPhoto.PNG",
      tech: ["Next.js", "Tailwind CSS", "React"],
      liveUrl: "https://portfolio-blush-pi-58.vercel.app/",
      category: "Portfolio",
    },
  ];

  const skills = [
    { name: "Next.js", icon: <Code /> },
    { name: "React", icon: <Zap /> },
    { name: "Tailwind", icon: <Palette /> },
    { name: "JavaScript", icon: <Code /> },
    { name: "TypeScript", icon: <Code /> },
    { name: "Responsive Design", icon: <Palette /> },
  ];

  const scrollToSection = (id: any) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-lg border-b border-white/10 z-50 ">
  <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center ">
    
    {/* Logo */}
    <h1 className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      My portfolio
    </h1>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-8 text-white  ">
      {["Home", "About", "Projects", "Contact"].map((sec) => (
        <button
          key={sec}
          onClick={() => scrollToSection(sec)}
          className="hover:text-purple-400 transition"
        >
          {sec}
        </button>
      ))}
    </div>

    {/* Mobile Button */}
    <button className="md:hidden text-white " onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <X /> : <Menu />}
    </button>
  </div>

  {/* Mobile Menu Dropdown */}
  {isMenuOpen && (
    <div className="md:hidden bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4">
      {["Home", "About", "Projects", "Contact"].map((sec) => (
        <button
          key={sec}
          onClick={() => {
            scrollToSection(sec);
            setIsMenuOpen(false); // close menu after click
          }}
          className="block w-full text-left text-white hover:text-purple-400 transition"
        >
          {sec}
        </button>
      ))}
    </div>
  )}
</nav>

      {/* Hero */}
      <section id="Home" className="pt-40 pb-32 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-block px-4 py-2 bg-white/10 rounded-full text-sm">
            🚀 Available for Freelance
          </div>

          <h1 className="text-6xl font-extrabold mb-6">
            Hi, I'm
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ziad Mohamed
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Frontend Developer specialized in building modern, fast, and
            interactive web applications.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30"
            >
              View Projects
            </button>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="About" className="py-32 px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <p className="text-gray-300 text-lg">
            I build modern UI with smooth animations and clean code. My goal is
            to create products that feel fast and look beautiful.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
              >
                <div className="text-purple-400 mb-2">{s.icon}</div>
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="Projects" className="py-32 px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition"
            >
              <img src={p.image} className="h-48 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-300 mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/20 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a href={p.liveUrl} target="_blank" className="flex gap-2">
                    Live Demo
                    <ExternalLink />
                  </a>
                  <Link
                    href={`/projects/${p.title.toLowerCase().replace(/\s+/g, "")}`}
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="Contact" className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:ziadmar3y1@gmail.com">
            <Mail />
          </a>
          <a href="https://github.com/ziad-mar3y">
            <Github />
          </a>
        </div>
      </section>
    </div>
  );
}
