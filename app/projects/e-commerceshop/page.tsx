"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function CaseStudy() {
  const project = {
    title: "E-Commerce Platform",
    image: "/images/E-commercePhoto.PNG",
    live: "https://shop-site-hazel.vercel.app/",
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

          <img src={project.image} className="rounded-2xl shadow-2xl mb-6" />

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
            A modern e-commerce platform designed to deliver a smooth and
            intuitive shopping experience. Built with performance and
            responsiveness in mind, the platform allows users to browse products,
            manage carts, and complete actions seamlessly.
          </p>
        </section>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">❗ Problem</h2>
          <p className="text-gray-300">
            Many e-commerce websites suffer from slow performance, cluttered
            interfaces, and poor mobile responsiveness, leading to bad user
            experiences and lower engagement.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">💡 Solution</h2>
          <p className="text-gray-300">
            I built a clean and responsive interface with optimized state
            management and smooth navigation. The focus was on creating a fast,
            user-friendly experience that works across all devices.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🚀 Key Features</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Product browsing with clean UI</li>
            <li>• Shopping cart functionality</li>
            <li>• User authentication system</li>
            <li>• Fully responsive design</li>
            <li>• Smooth animations for better UX</li>
          </ul>
        </section>

        {/* Tech */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">🛠 Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "Tailwind CSS",
              "React",
              "Framer Motion",
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
            <li>• Improved user experience with intuitive UI</li>
            <li>• Faster page transitions and interactions</li>
            <li>• Mobile-friendly design for wider accessibility</li>
            <li>• Scalable structure for adding future features</li>
          </ul>
        </section>
      </div>
    </div>
  );
}