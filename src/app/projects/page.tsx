"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function ProjectsPage() {
  // Image carousel state
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel
  const uiuxImages = [
    "/creations/uiux/food-ordering-cover.jpg",
    "/creations/uiux/image2.jpg",
    "/creations/uiux/image3.jpg",
    "/creations/uiux/image4.jpg",
    "/creations/uiux/image5.jpg",
  ];

  // Auto-switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % uiuxImages.length
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [uiuxImages.length]);

  const individualProjects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion to showcase my skills and projects.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/Kosala-technology/my-portfolio",
    },
  ];

  const groupProjects = [
    {
      title: "Citizen-Voice",
      description:
        "A web-based platform that allows citizens to report public issues and communicate with authorities through an easy, transparent, and secure complaint system.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "PostgreSQL"],
      link: "https://citizen-voice-five.vercel.app/",
      link02: "https://github.com/hashalagayendra/Citizen-Voice/tree/kosala",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center flex-1 px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* ================= Individual Projects ================= */}
        <div className="w-full max-w-5xl mb-16">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-6">
            💻 Individual Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {individualProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-cyan-400/40 transition"
              >
                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-3">
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  🔗 View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        

        {/* ================= UI / UX Projects ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mb-24"
        >
          <h3 className="text-3xl font-semibold text-cyan-300 mb-8">
            🎨 UI / UX Projects
          </h3>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-400/40 transition"
          >
            {/* Image Carousel */}
            <div className="relative w-full h-72 md:h-80 overflow-hidden">
              {uiuxImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImageIndex === index ? 1 : 0,
                    scale: currentImageIndex === index ? 1 : 1.1
                  }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={img}
                    alt={`Food Ordering App UI UX ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              ))}

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {uiuxImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "bg-cyan-400 w-8"
                        : "bg-gray-400 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h4 className="text-2xl font-semibold text-cyan-400 mb-3">
                Food Ordering App – UI/UX Design
              </h4>

              <p className="text-gray-300 mb-6 max-w-2xl">
                A complete mobile UI/UX case study focusing on user research,
                intuitive navigation, wireframes, and high-fidelity interface
                designs.
              </p>

              <Link
                // onClick={() => router.push("/projects/uiux")}
                href="/projects/uiux"
                  className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:underline"
              >
                View Project →
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= Group Projects ================= */}
        <div className="w-full max-w-5xl mb-20">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-6">
            🤝 Group Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {groupProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-cyan-400/40 transition"
              >
                <h4 className="text-2xl font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-3">
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  🔗 View Project Live
                </a>

                <br /><br />

                <a
                  href={project.link02}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  🔗 View Github
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactFooter />
    </div>
  );
}