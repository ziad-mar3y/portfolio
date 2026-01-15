"use client";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Palette,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Social Media Platform",
      description:
        "A modern social networking application built with cutting-edge technologies. Features real-time interactions, user profiles, and seamless content sharing capabilities.",
      image:
       "/images/SocialMediaPhoto.PNG",
      tech: ["Next.js", "React", "Tailwind CSS"],
      liveUrl: "https://social-three-eta.vercel.app/",
      category: "Web Application",
    },
    {
      id: 2,
      title: "E-Commerce Shop",
      description:
        "A fully functional online shopping platform with modern UI/UX. Includes product browsing, shopping cart functionality, and responsive design for all devices.",
      image: "/images/E-commercePhoto.PNG",
      tech: ["Next.js", "React", "Tailwind CSS"],
      liveUrl: "https://shop-site-hazel.vercel.app/",
      category: "E-Commerce",
    },
    {
      id: 3,
      title: "Bookmarker",
      description:
        "Developed a web-based bookmark management application that allows users to save, organize, and access their favorite websites efficiently. The application features a clean, intuitive interface with full CRUD (Create, Read, Update, Delete) functionality for managing bookmarks.",
      image: "/images/BookmarkerPhoto.PNG",
      tech: ["HTML", "CSS", "JS"],
      liveUrl: "https://third-assin-js.vercel.app/",
      category: "BookMarker",
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
    { name: "Next.js", icon: <Code className="w-6 h-6" /> },
    { name: "React", icon: <Zap className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
    { name: "Responsive Design", icon: <Palette className="w-6 h-6" /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Portfolio
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-purple-400 transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-purple-400 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-purple-400 transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-purple-400 transition"
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 hover:bg-purple-500/20 rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 hover:bg-purple-500/20 rounded"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-3 py-2 hover:bg-purple-500/20 rounded"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 hover:bg-purple-500/20 rounded"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ziad Mohamed
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            a Frontend Developer passionate about crafting beautiful and functional web experiences. I specialize in transforming ideas into reality using modern technologies like React, Next.js, and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full font-semibold transition"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                I'm a passionate developer who loves creating beautiful and
                functional web applications. With expertise in modern frameworks
                and a keen eye for design, I transform ideas into reality.
              </p>
              <p className="text-gray-300 text-lg">
                My focus is on writing clean, efficient code and delivering
                outstanding user experiences that make a difference.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition transform hover:scale-105"
                >
                  <div className="text-purple-400 mb-2">{skill.icon}</div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center ">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-purple-500/20"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-purple-400 text-sm font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    View Live <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ziadmar3y1@gmail.com"
              className="bg-slate-700 hover:bg-slate-600 p-4 rounded-full transition transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/ziad-mar3y"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 p-4 rounded-full transition transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Your Name. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
