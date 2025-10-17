"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimationsPage() {
  // 🎬 Sample animation items
  const animations = [
    {
      id: "anim-01",
      title: "Logo Reveal Animation",
      description:
        "A smooth 3D logo reveal with cinematic lighting, reflections, and particles.",
      thumb: "/creations/animation1-thumb.jpg",
      link: "/creations/animation1.jpg", // image preview
    },
    {
      id: "anim-02",
      title: "Text Kinetic Motion",
      description:
        "Dynamic kinetic typography synced perfectly to music beats.",
      thumb: "/creations/animation2-thumb.jpg",
      link: "/creations/animation2.mp4", // video preview
    },
    {
      id: "anim-03",
      title: "Character Walk Cycle",
      description:
        "2D animated character walk cycle built with frame-by-frame animation.",
      thumb: "/creations/animation3-thumb.jpg",
      link: "/creations/animation3.jpg",
    },
  ];

  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  // helper function to check if it's a video
  const isVideo = (file: string) => file.endsWith(".mp4") || file.endsWith(".webm");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* 🌐 Navbar */}
      <Navbar />

      {/* 🎨 Header */}
      <motion.h2
        className="text-4xl font-bold text-cyan-400 text-center mt-20 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎞️ My Animations
      </motion.h2>

      {/* 🎥 Animations Grid */}
      <section className="flex-1 flex flex-col items-center px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {animations.map((anim) => (
            <motion.div
              key={anim.id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/30 transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={anim.thumb}
                alt={anim.title}
                width={600}
                height={400}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
                {anim.title}
              </h3>
              <p className="text-gray-300 mb-4">{anim.description}</p>
              <button
                onClick={() => setSelectedMedia(anim.link)} // 👈 open modal
                className="text-cyan-400 hover:underline font-medium"
              >
                🔗 View Animation
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🪞 Modal for preview */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)} // click anywhere to close
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full"
          >
            {/* ✨ Detect video or image automatically */}
            {isVideo(selectedMedia) ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="rounded-lg w-full max-h-[80vh] mx-auto"
              />
            ) : (
              <Image
                src={selectedMedia}
                alt="Selected Animation"
                width={1200}
                height={800}
                className="rounded-lg w-full max-h-[80vh] object-contain mx-auto"
              />
            )}

            {/* ❌ Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-2 right-2 bg-cyan-500 text-black px-3 py-1 rounded-lg hover:bg-cyan-400 transition"
            >
              ✖ Close
            </button>
          </motion.div>
        </div>
      )}

      {/* 📞 Footer */}
      <ContactFooter />
    </div>
  );
}
