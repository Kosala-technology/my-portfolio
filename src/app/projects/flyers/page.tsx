"use client";

import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const flyerDesigns = [
  {
    title: "Event Flyer 1",
    description:
      "",
    image: "/flyers/flyer-01.png",
  },
  {
    title: "Event Flyer 2",
    description:
      "",
    image: "/flyers/flyer-02.png",
  },
  {
    title: "Event Flyer 3",
    description:
      "",
    image: "/flyers/flyer-03.png",
  },
  
];

export default function FlyerDesignsPage() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!viewerOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((i) => (i + 1) % flyerDesigns.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((i) => (i - 1 + flyerDesigns.length) % flyerDesigns.length);
      }
      if (e.key === "Escape") {
        setViewerOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [viewerOpen]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      {/* ================= Hero Section ================= */}
      <section className="px-6 pt-28 pb-20 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6"
        >
          Flyer Design Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          A collection of creative and impactful flyer designs created for various
          events, promotions, and businesses. Each design focuses on visual
          hierarchy, brand consistency, and effective communication to engage the
          target audience.
        </motion.p>
      </section>

      {/* ================= Design Overview ================= */}
      <section className="px-6 pb-24 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Approach",
            text: "Understanding client goals and target audience to create designs that communicate effectively and drive action.",
          },
          {
            title: "Design Focus",
            text: "Strong visual hierarchy, balanced composition, and strategic use of typography and color to maximize impact.",
          },
          {
            title: "Deliverables",
            text: "Print-ready designs with proper bleeds, multiple format options, and brand-consistent variations.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ================= Flyer Designs ================= */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">
          Featured Designs
        </h2>

        <div className="space-y-20">
          {flyerDesigns.map((flyer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div
                onClick={() => {
                  setCurrentIndex(index);
                  setViewerOpen(true);
                }}
                className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src={flyer.image}
                  alt={flyer.title}
                  fill
                  className="object-contain bg-black"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                  {flyer.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {flyer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= External Links (Optional) ================= */}
      <section className="pb-24 flex justify-center gap-6">
        
        <a
          href="/contact"
          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition"
        >
          Get in Touch
        </a>
      </section>

      {/* ================= Fullscreen Viewer ================= */}
      <AnimatePresence>
        {viewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          >
            {/* Close */}
            <button
              onClick={() => setViewerOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400 transition"
            >
              ✕
            </button>

            {/* Previous */}
            <button
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + flyerDesigns.length) % flyerDesigns.length
                )
              }
              className="absolute left-6 text-white text-4xl hover:text-cyan-400 transition"
            >
              ‹
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
              <Image
                src={flyerDesigns[currentIndex].image}
                alt="Fullscreen Flyer"
                fill
                className="object-contain"
              />
            </div>

            {/* Next */}
            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % flyerDesigns.length)
              }
              className="absolute right-6 text-white text-4xl hover:text-cyan-400 transition"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {flyerDesigns.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactFooter />
    </div>
  );
}
