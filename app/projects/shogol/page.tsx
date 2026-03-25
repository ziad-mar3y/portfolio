"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CaseStudy() {
  const project = {
    title: "Shogol - Job Marketplace",
    image: "/images/Shogol.png",
    live: "https://shoogl.vercel.app",
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
            A full-stack job marketplace connecting companies with freelancers
            through a modern and intuitive interface.
          </p>
        </section>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">❗ Problem</h2>
          <p className="text-gray-300">
            Many job platforms are cluttered and slow, making it difficult for
            users to find relevant opportunities and manage applications
            efficiently.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">💡 Solution</h2>
          <p className="text-gray-300">
            I designed and developed a fast and user-friendly platform with
            separate dashboards for companies and freelancers, focusing on
            performance and usability.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🚀 Key Features</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Role-based authentication system</li>
            <li>• Job posting and application workflow</li>
            <li>• Freelancer profiles and proposals</li>
            <li>• Real-time UI updates with React Query</li>
          </ul>
        </section>

        {/* Tech */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🛠 Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "Tailwind CSS",
              "React Query",
              "NextAuth",
              "Zod",
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
            <li>• Improved user experience with clean UI</li>
            <li>• Faster data loading using React Query</li>
            <li>• Scalable structure for future features</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
