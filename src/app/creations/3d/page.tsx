"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Models3DPage() {
  const models = [
    {
      id: "model-01",
      title: "3D Car Model",
      description:
        "A realistic 3D car model with lighting and reflection mapping using Blender.",
      thumb: "/creations/model1-thumb.jpg",
      link: "/creations/model1.jpg",
    },
    {
      id: "model-02",
      title: "Futuristic City",
      description:
        "A sci-fi cityscape created with low-poly architecture and cinematic fog effects.",
      thumb: "/creations/model2-thumb.jpg",
      link: "/creations/model2.mp4",
    },
    {
      id: "model-03",
      title: "Character Model",
      description:
        "A fully rigged and textured human character ready for animation.",
      thumb: "/creations/model3-thumb.jpg",
      link: "/creations/model3.jpg",
    },
  ];

  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const isVideo = (file: string) => file.endsWith(".mp4") || file.endsWith(".webm");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <motion.h2
        className="text-4xl font-bold text-cyan-400 text-center mt-20 mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🧊 3D Models
      </motion.h2>

      <section className="flex-1 flex flex-col items-center px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {models.map((model) => (
            <motion.div
              key={model.id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/30 transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={model.thumb}
                alt={model.title}
                width={600}
                height={400}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{model.title}</h3>
              <p className="text-gray-300 mb-4">{model.description}</p>
              <button
                onClick={() => setSelectedMedia(model.link)}
                className="text-cyan-400 hover:underline font-medium"
              >
                🔗 View Model
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full"
          >
            {isVideo(selectedMedia) ? (
              <video src={selectedMedia} controls autoPlay className="rounded-lg w-full max-h-[80vh] mx-auto" />
            ) : (
              <Image src={selectedMedia} alt="Selected Model" width={1200} height={800} className="rounded-lg w-full max-h-[80vh] object-contain mx-auto" />
            )}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-2 right-2 bg-cyan-500 text-black px-3 py-1 rounded-lg hover:bg-cyan-400 transition"
            >
              ✖ Close
            </button>
          </motion.div>
        </div>
      )}

      <ContactFooter />
    </div>
  );
}
