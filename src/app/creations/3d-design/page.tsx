"use client";

import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";

const models = [
  {
    title: "3D Product Render",
    description: "High-quality product render created in Blender.",
    image: "/creations/3d/3d1.jpg",
  },
  {
    title: "Environment Model",
    description: "Low-poly environment design.",
    image: "/creations/3d/3d2.jpg",
  },
];

export default function ThreeDPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-10">
          3D Design
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((m, i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden">
              <Image src={m.image} alt={m.title} width={600} height={400} />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="text-gray-300 mt-2">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
