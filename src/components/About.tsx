"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-gray-100 px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-cyan-400 mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
        {/* Profile Image */}
        <motion.img
          src="/profile.jpg" // profile photo
          alt="Profile Picture"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Description */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed text-gray-300">
            Hello! I’m <span className="text-cyan-400 font-semibold">Kosala</span>, 
            an <span className="text-cyan-400">ICT undergraduate student</span> from 
            Sri Lanka, specializing in <span className="text-cyan-400">Multimedia Technology</span>.  
            I’m passionate about blending creativity and technology to design engaging digital experiences.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Currently, I’m learning <span className="text-cyan-400">Spring Boot</span> 
            and exploring <span className="text-cyan-400">modern web frameworks</span> 
            like Next.js and React to become a full-stack developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
