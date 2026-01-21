"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-32 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/30"
        >
          <Image
            src="/kosala.png" // 
            alt="Kosala Lakshan"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </motion.div>

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
          ICT Undergraduate | Multimedia Enthusiast | Future Developer And Designer
        </motion.h2>

        <motion.p
          className="mt-6 max-w-xl text-gray-400 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1 }}
        >
          I’m passionate about creating innovative digital experiences by blending creativity with technology. I am currently focusing on  {" "}
          <span className="text-cyan-400">UI/UX designing</span> while developing my skills in  <span className="text-cyan-400"> Graphic designing, 3D modeling </span> and at the same time{" "}
          <span className="text-cyan-400">Digital Marketing</span>.
        </motion.p>

        <motion.a
          href="/projects"
          className="mt-10 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Projects
        </motion.a>
      </main>

      {/* Contact Footer */}
      <div className="absolute bottom-0 w-full">
        <ContactFooter />
      </div>
    </div>
  );
}
