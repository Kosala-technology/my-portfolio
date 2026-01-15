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
    behanceLink:
      "https://www.behance.net/gallery/242203731/Food-Ordering-App-UIUX-Case-Study",
    figmaLink:
      "https://www.figma.com/design/YZZrBEq6cjBFagEjdl4U7l/food-ordering-app?node-id=0-1&m=dev&t=NaBVeUnjhlN56JsF-1",
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
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
            >
              {/* Cover Image */}
              <div className="relative w-full h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {item.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={item.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-medium transition"
                  >
                    View on Behance 👉
                  </a>

                  <a
                    href={item.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 font-medium transition"
                  >
                    View on Figma Project 👉
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
