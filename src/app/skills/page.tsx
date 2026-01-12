"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { Code, Palette, Cpu, PenTool, Layout, GitBranch } from "lucide-react";

const skillCategories = [ {
    title: "Creative Tools",
    icon: <PenTool className="w-6 h-6 text-cyan-400" />,
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "After Effects", "Blender","Autodesk-maya", "Premiere Pro",],
  },
  {
    title: "Multimedia & Design",
    icon: <Palette className="w-6 h-6 text-cyan-400" />,
    skills: ["UI / UX Design", "Graphic Design", "Video Editing", "Animation"],
  },
  {
    title: "Backend Development - (Still Learning) ",
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    skills: ["Spring Boot", "REST APIs", "MySQL"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6 text-cyan-400" />,
    skills: ["Java","HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  }
 
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center flex-1 px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}
