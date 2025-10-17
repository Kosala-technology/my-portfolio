"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";


const skills = [
  { name: "Multimedia Technology", level: 90 },
  { name: "React / Next.js", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Spring Boot", level: 50 },
  { name: "Java / TypeScript", level: 75 },
  { name: "Git / GitHub", level: 80 },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 rounded-xl p-5 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-cyan-400 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right mt-1 text-gray-300">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </section>
      <ContactFooter />
    </div>
  );
}
