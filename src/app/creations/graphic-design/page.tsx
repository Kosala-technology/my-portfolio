"use client";

import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Image from "next/image";

const graphics = [
  {
    title: "not listed",
    description: "Promotional poster design for a music event.",
    image: "/creations/graphic/g1.jpg",
  },
  {
    title: "not listed",
    description: "Facebook and Instagram banner design.",
    image: "/creations/graphic/g1.jpg",
  },
];

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-10">
          Graphic Design
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {graphics.map((g, i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden">
              <Image src={g.image} alt={g.title} width={600} height={400} />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{g.title}</h3>
                <p className="text-gray-300 mt-2">{g.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
