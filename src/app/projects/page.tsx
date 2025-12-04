"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ContactFooter from "@/components/ContactFooter";

export default function ProjectsPage() {
  // 🧱 Your project data
  const individualProjects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion to showcase my skills and projects.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/Kosala-technology",
    },
    
  ];

  const groupProjects = [
    {
      title: "Multimedia Short Film Project",
      description:
        "A 10-minute emotional short film produced with a team of four, showcasing skills in video production, editing, and storytelling.",
      tech: ["Premiere Pro", "After Effects"],
      link: "https://github.com/Kosala-technology",
    },
    {
      title: "Citizen-Voice",
      description:
        "A web-based platform that allows citizens to report public issues and communicate with authorities through an easy, transparent, and secure complaint system.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "PostgreSQL"],
      link: "https://github.com/Kosala-technology",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center flex-1 px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-10 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Individual Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-5xl mb-16"
        >
          <h3 className="text-3xl font-semibold text-cyan-300 mb-6">
            💻 Individual Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {individualProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-cyan-400/40 transition transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-3">
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  🔗 View Project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Group Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-5xl mb-16"
        >
          <h3 className="text-3xl font-semibold text-cyan-300 mb-6">
            🤝 Group Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {groupProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-cyan-400/40 transition transform hover:-translate-y-2"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-3">
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  🔗 View Project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🎨 My Creations Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <h3 className="text-3xl font-semibold text-cyan-300 mb-4">
            🎨 My Creations
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Explore my creative side — animations, motion graphics, and 3D
            modeling work that showcase my multimedia skills.
          </p>

          <motion.a
            href="/creations"
            className="inline-block px-8 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400/50 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            🎬 View My Creations
          </motion.a>
        </motion.div>
      </section>

      <ContactFooter />
    </div>
  );
}
