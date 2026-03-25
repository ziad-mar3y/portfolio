"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CaseStudy() {
  const project = {
    title: "Developer Portfolio Website",
    image: "/images/PortfolioPhoto.png",
    live: "https://your-portfolio-link.vercel.app/",
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
            alt="Portfolio Project"
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
            A modern developer portfolio built to showcase my projects, skills,
            and case studies in a clean and professional way. The goal was to
            create a strong personal brand and improve presentation for job
            applications.
          </p>
        </section>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">❗ Problem</h2>
          <p className="text-gray-300">
            Many developers struggle to present their work in a structured and
            professional way. Simple project lists do not effectively communicate
            skills or real-world impact.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">💡 Solution</h2>
          <p className="text-gray-300">
            I designed and built a modern portfolio with dynamic case study pages,
            smooth animations, and structured storytelling to clearly present each
            project like a real product case study.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🚀 Key Features</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Dynamic case study routing system</li>
            <li>• Modern animated UI with Framer Motion</li>
            <li>• Project-based architecture</li>
            <li>• Fully responsive design</li>
            <li>• Clean developer-focused layout</li>
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
              "Framer Motion",
              "Lucide Icons",
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
            <li>• Improved personal branding and presentation</li>
            <li>• Structured showcase of development skills</li>
            <li>• Recruiter-friendly project storytelling</li>
            <li>• Scalable system for future projects</li>
          </ul>
        </section>

      </div>
    </div>
  );
}