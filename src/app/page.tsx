"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Photo with Overlay */}
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          src="/my-photo.jpg"
          alt="Kosala Lakshan"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-55"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black/50" /> {/* overlay */}
      </div>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-32 relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Kosala Lakshan 👋
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-medium text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          ICT Undergraduate | Multimedia Enthusiast | Future Developer
        </motion.h2>

        <motion.p
          className="mt-6 max-w-xl text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1 }}
        >
          I’m passionate about creating innovative digital experiences that combine
          creativity and technology. Currently focusing on{" "}
          <span className="text-cyan-400">multimedia technology</span> and learning
          modern frameworks like <span className="text-cyan-400">3D modeling, animation</span> and at the same time{" "}
          <span className="text-cyan-400"> Spring Boot and Next.js.</span>.
        </motion.p>

        <motion.a
          href="/projects"
          className="mt-10 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </main>

      {/* Contact Footer */}
      <div className="absolute bottom-0 w-full">
        <ContactFooter />
      </div>
    </div>
  );
}
