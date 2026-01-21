"use client";

import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const uiScreens = [
  {
    title: "Splash Screen",
    description:
      "A clean and minimal entry screen that establishes brand identity and prepares users for the app experience.",
    image: "/uiux/food-ordering/intro.png",
  },
  {
    title: "Login Screen",
    description:
      "Simple and distraction-free login interface with clear call-to-action buttons for quick access.",
    image: "/uiux/food-ordering/ui-02.jpg",
  },
  {
    title: "Sign Up Screen",
    description:
      "User-friendly registration flow with minimal required inputs to reduce friction during onboarding.",
    image: "/uiux/food-ordering/ui-03.jpg",
  },
  {
    title: "Home Screen",
    description:
      "The main dashboard showing featured food items, categories, and promotions for quick discovery.",
    image: "/uiux/food-ordering/home.png",
  },
  {
    title: "Food Categories",
    description:
      "Clearly separated food categories allowing users to browse meals efficiently.",
    image: "/uiux/food-ordering/ui-05.jpg",
  },
  {
    title: "Product Listing",
    description:
      "Displays food items with images, prices, and ratings to help users make informed decisions.",
    image: "/uiux/food-ordering/ui-06.jpg",
  },
  {
    title: "Product Details",
    description:
      "Detailed view of selected food items including description, ingredients, and customization options.",
    image: "/uiux/food-ordering/ui-07.jpg",
  },
  {
    title: "Cart Screen",
    description:
      "Shows selected items with quantity control and total price for easy order management.",
    image: "/uiux/food-ordering/ui-08.jpg",
  },
  {
    title: "Checkout Screen",
    description:
      "A streamlined checkout experience with address selection and payment options.",
    image: "/uiux/food-ordering/checkout.png",
  },
  {
    title: "Order Confirmation",
    description:
      "Confirms successful order placement and provides feedback to reassure users.",
    image: "/uiux/food-ordering/ui-10.jpg",
  },
  {
    title: "Order Tracking",
    description:
      "Allows users to track their order status in real time, increasing transparency and trust.",
    image: "/uiux/food-ordering/ui-11.jpg",
  },
];

export default function FoodOrderingUIUXPage() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!viewerOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((i) => (i + 1) % uiScreens.length);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((i) => (i - 1 + uiScreens.length) % uiScreens.length);
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
          Food Ordering App – UI/UX Case Study
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          This project focuses on designing a seamless and intuitive mobile food
          ordering experience. The goal was to reduce user effort, improve
          navigation clarity, and create an engaging visual interface that
          encourages users to complete orders effortlessly.
        </motion.p>
      </section>

      {/* ================= UX Overview ================= */}
      <section className="px-6 pb-24 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Problem",
            text: "Users often face complex navigation and slow ordering processes in food delivery apps.",
          },
          {
            title: "Solution",
            text: "A clean UI with clear CTAs, minimal steps, and visual hierarchy for faster decision-making.",
          },
          {
            title: "Process",
            text: "User research → wireframes → high-fidelity UI → usability refinement.",
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

      {/* ================= UI Screens ================= */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">
          UI Screens Overview
        </h2>

        <div className="space-y-20">
          {uiScreens.map((ui, index) => (
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
                className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl cursor-pointer"
              >
                <Image
                  src={ui.image}
                  alt={ui.title}
                  fill
                  className="object-contain bg-black"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                  {ui.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {ui.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= External Links ================= */}
      <section className="pb-24 flex justify-center gap-6">
        <a
          href="https://www.figma.com/"
          target="_blank"
          className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
        >
          View Figma Prototype
        </a>

        <a
          href="https://www.behance.net/"
          target="_blank"
          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition"
        >
          View on Behance
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
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {/* Previous */}
            <button
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + uiScreens.length) % uiScreens.length
                )
              }
              className="absolute left-6 text-white text-4xl"
            >
              ‹
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
              <Image
                src={uiScreens[currentIndex].image}
                alt="Fullscreen UI"
                fill
                className="object-contain"
              />
            </div>

            {/* Next */}
            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % uiScreens.length)
              }
              className="absolute right-6 text-white text-4xl"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactFooter />
    </div>
  );
}
