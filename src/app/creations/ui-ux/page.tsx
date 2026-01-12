"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const uiuxWorks = [
  {
    title: "Food Ordering App UI",
    description: "Modern mobile UI design for a food ordering application.",
    images: [
      "/creations/uiux/food-1.jpg",
      "/creations/uiux/food-2.jpg",
      "/creations/uiux/food-3.jpg",
      "/creations/uiux/food-4.jpg",
    ],
  },
  {
    title: "Portfolio Website UI",
    description: "Clean and minimal portfolio interface design.",
    images: ["/creations/uiux/portfolio-ui.jpg"],
  },
];

export default function UIUXPage() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (images: string[], index: number) => {
    setActiveImages(images);
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);

  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1
    );

  /* ✅ KEYBOARD CONTROLS */
  useEffect(() => {
    if (!viewerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeViewer();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewerOpen, activeImages]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-12">
          UI / UX Design
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {uiuxWorks.map((work, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <div
                className="relative h-64 cursor-pointer"
                onClick={() => openViewer(work.images, 0)}
              >
                <Image
                  src={work.images[0]}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-sm">
                    Click or use arrow keys to view
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{work.title}</h3>
                <p className="text-gray-300 mt-2">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <ContactFooter />

      {/* 🔍 FULLSCREEN IMAGE VIEWER */}
      <AnimatePresence>
        {viewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          >
            {/* Close */}
            <button
              onClick={closeViewer}
              className="absolute top-6 right-6 text-3xl"
            >
              ✕
            </button>

            {/* Prev */}
            {activeImages.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-6 text-5xl"
              >
                ‹
              </button>
            )}

            {/* Image */}
            <div className="relative w-[90vw] h-[85vh]">
              <Image
                src={activeImages[currentIndex]}
                alt="UI Preview"
                fill
                className="object-contain"
              />
            </div>

            {/* Next */}
            {activeImages.length > 1 && (
              <button
                onClick={next}
                className="absolute right-6 text-5xl"
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
