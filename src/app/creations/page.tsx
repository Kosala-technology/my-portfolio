"use client";

import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type WorkItem = {
  id: string;
  title: string;
  description: string;
  thumb?: string;
  link?: string;
  tags?: string[];
};

export default function CreationsPage() {
  // --- Example data (replace with your real creations) ---
  const animations: WorkItem[] = [
    {
      id: "anim-01",
      title: "Short Animation: The Clock",
      description: "A 30s character animation exploring timing and easing.",
      thumb: "/creations/anim1.jpg",
      link: "/creations/anim1.mp4",
      tags: ["After Effects", "Cinema 4D"],
    },
    {
      id: "anim-02",
      title: "Loop: Neon Particle",
      description: "A seamless neon particle loop for background usage.",
      thumb: "/creations/anim2.jpg",
      link: "/creations/anim2.mp4",
      tags: ["Blender", "After Effects"],
    },
  ];

  const models3D: WorkItem[] = [
    {
      id: "3d-01",
      title: "Retro Radio (3D)",
      description: "Low poly retro radio model with PBR textures.",
      thumb: "/creations/3d1.jpg",
      link: "/creations/3d1.jpg",
      tags: ["Blender", "GLTF"],
    },
    {
      id: "3d-02",
      title: "Product Mock (3D)",
      description: "High quality render for a product mockup.",
      thumb: "/creations/3d2.jpg",
      link: "/creations/3d2.jpg",
      tags: ["Blender", "Cycles"],
    },
  ];

  const motionGraphics: WorkItem[] = [
    {
      id: "m-01",
      title: "Title Sequence",
      description: "Dynamic title animation for short films.",
      thumb: "/creations/motion1.jpg",
      link: "/creations/motion1.mp4",
      tags: ["After Effects"],
    },
  ];

  const experiments: WorkItem[] = [
    {
      id: "exp-01",
      title: "WebGL Experiment",
      description: "Interactive shader experiment using three.js.",
      thumb: "/creations/exp1.jpg",
      link: "/creations/exp1.mp4",
      tags: ["three.js", "GLSL"],
    },
  ];

  // --- Reusable section component ---
  const Section = ({
    title,
    items,
    cta,
  }: {
    title: string;
    items: WorkItem[];
    cta?: { text: string; href: string };
  }) => (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto mb-12"
    >
      {/* --- Section Header --- */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300">
          {title}
        </h3>
        {cta && (
          <Link
            href={cta.href}
            className="text-sm md:text-base text-cyan-400 hover:underline"
          >
            {cta.text} →
          </Link>
        )}
      </div>

      {/* --- Cards Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => {
          const isExternal =
            item.link &&
            (item.link.startsWith("http") ||
              item.link.endsWith(".mp4") ||
              item.link.endsWith(".jpg") ||
              item.link.endsWith(".png"));

          const Wrapper = isExternal ? "a" : Link;
          const wrapperProps = isExternal
            ? { href: item.link, target: "_blank", rel: "noreferrer" }
            : { href: item.link || "#" };

          return (
            <motion.article
              key={item.id}
              whileHover={{ scale: 1.02, y: -6 }}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden group"
            >
              {/* --- Clickable image --- */}
              <Wrapper {...(wrapperProps as any)}>
                <div className="relative h-40 w-full bg-gray-700 cursor-pointer">
                  {item.thumb ? (
                    <Image
                      src={item.thumb}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                      No image
                    </div>
                  )}
                </div>
              </Wrapper>

              {/* --- Card Content --- */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex gap-2 flex-wrap mt-4">
                  {item.tags?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );

  // --- Page Layout ---
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-8"
        >
          🎨 My Creations
        </motion.h1>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          This section showcases my animations, 3D models, motion graphics, and
          experiments. Click any image to view the work or visit the dedicated
          collection pages.
        </p>

        <Section
          title="Animations"
          items={animations}
          cta={{ text: "All animations", href: "/creations/animations" }}
        />
        <Section
          title="3D Models"
          items={models3D}
          cta={{ text: "All 3D models", href: "/creations/3d" }}
        />
        <Section
          title="Motion Graphics"
          items={motionGraphics}
          cta={{ text: "More motion work", href: "/creations/motion-graphics" }}
        />
        <Section
          title="Experiments & Demos"
          items={experiments}
          cta={{ text: "All experiments", href: "/creations/experiments" }}
        />
      </main>

      <ContactFooter />
    </div>
  );
}
