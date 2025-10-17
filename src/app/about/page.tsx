"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactFooter from "@/components/ContactFooter";
import { Download } from "lucide-react"; // Icon for the button

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col relative">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 py-20 md:space-x-16 text-center md:text-left">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-0"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Kosala Lakshan Samararathna"
              width={224}
              height={224}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m{" "}
            <span className="text-cyan-400">Kosala Lakshan Samararathna</span>, an
            ICT undergraduate student at Faculty of Technology, University of Sri Jayewardenepura, Sri Lanka,
            specializing in{" "}
            <span className="text-cyan-400">Multimedia Technology</span>. <br />
            <br />
            I’m passionate about combining creativity and technology to design
            engaging digital experiences. I’m currently learning{" "}
            <span className="text-cyan-400">Spring Boot</span> and exploring how
            backend technologies can enhance interactive web applications. <br />
            <br />
            I aim to build modern, user-focused applications that merge
            functionality and aesthetics.
          </p>

          {/* 🌟 Creative Download CV Button */}
          <motion.a
            href="/Kosala-Lakshan-CV.pdf"
            download="Kosala-Lakshan-CV.pdf"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-full shadow-lg hover:shadow-cyan-400/50 hover:from-cyan-300 hover:to-blue-400 transition-all duration-500"
            whileHover={{ scale: 1.07, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>
      </section>

      {/* Contact Footer */}
      <ContactFooter />
    </div>
  );
}
