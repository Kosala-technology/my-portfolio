"use client";

import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";
import { motion } from "framer-motion";

const uiuxCreations = [
  {
    title: "Food Ordering App – UI/UX Design",
    description:
      "A complete mobile UI/UX case study including user flows, wireframes, and high-fidelity designs.",
    image: "/creations/uiux/behance-cover.jpg",
    behanceLink: "https://www.behance.net/gallery/242203731/Food-Ordering-App-UIUX-Case-Study",
  },
];

export default function UIUXPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-20 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
        >
          UI / UX Design
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {uiuxCreations.map((item, index) => (
            <motion.a
              key={index}
              href={item.behanceLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl cursor-pointer group"
            >
              {/* Cover Image */}
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:opacity-90 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {item.description}
                </p>

                <span className="inline-block text-cyan-400 font-medium">
                  View on Behance →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
