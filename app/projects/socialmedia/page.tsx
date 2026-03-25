"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CaseStudy() {
  const project = {
    title: "Social Media Platform",
    image: "/images/SocialMediaPhoto.PNG",
    live: "https://social-three-eta.vercel.app/",
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-6 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.title}
          </h1>

          <img
            src={project.image}
            className="rounded-2xl shadow-2xl mb-6"
            alt="Social Media Project"
          />

          <a
            href={project.live}
            target="_blank"
            className="inline-flex items-center gap-2 text-purple-400"
          >
            View Live <ExternalLink />
          </a>
        </motion.div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🟣 Overview</h2>
          <p className="text-gray-300">
            A modern social media platform designed to provide users with an
            engaging and interactive experience. The goal was to build a clean,
            fast, and responsive UI that mimics real-world social applications.
          </p>
        </section>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">❗ Problem</h2>
          <p className="text-gray-300">
            Many social media applications suffer from slow interfaces, cluttered
            layouts, and poor user engagement. Users expect fast interactions and
            a smooth experience across all devices.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">💡 Solution</h2>
          <p className="text-gray-300">
            I built a responsive and interactive social platform focusing on
            performance, simplicity, and modern UI patterns. The system ensures
            smooth navigation and real-time-like interactions.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🚀 Key Features</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• User profile system</li>
            <li>• Post creation and feed layout</li>
            <li>• Interactive UI components</li>
            <li>• Fully responsive design</li>
            <li>• Clean and modern interface</li>
          </ul>
        </section>

        {/* Tech */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🛠 Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white/10 px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section>
          <h2 className="text-3xl font-bold mb-4">📈 Impact</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Improved user engagement with smooth UI</li>
            <li>• Fast and responsive interactions</li>
            <li>• Clean architecture for scalability</li>
            <li>• Mobile-friendly experience</li>
          </ul>
        </section>
      </div>
    </div>
  );
}