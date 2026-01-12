"use client";

import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CreationsPage() {
  const sections = [
    {
      title: "UI / UX Design",
      description:
        "User-centered interface designs, wireframes, and prototypes.",
      link: "/creations/ui-ux",
      image: "/creations/uiux-cover.jpg",
    },
    {
      title: "Graphic Design",
      description:
        "Posters, banners, social media designs, and branding work.",
      link: "/creations/graphic-design",
      image: "/creations/graphic-cover.jpg",
    },
    {
      title: "3D Design",
      description:
        "3D models, renders, and visual experiments.",
      link: "/creations/3d-design",
      image: "/creations/3d-cover.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-20 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-14"
        >
          My Creations
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {sections.map((sec, i) => (
            <Link key={i} href={sec.link}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={sec.image}
                    alt={sec.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
                    {sec.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {sec.description}
                  </p>

                  <span className="inline-block text-cyan-400 font-medium">
                    View Works →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
