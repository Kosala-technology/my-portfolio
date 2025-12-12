"use client";

import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function ContactFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-white">

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-gray-300 text-sm md:text-base">
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
            <MdEmail className="text-cyan-400 text-xl" /> kosalainfor2002@gmail.com
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
            <MdPhone className="text-cyan-400 text-xl" /> +94 74-044 2004
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer">
            <FaWhatsapp className="text-cyan-400 text-xl" />{" "}
            <a href="https://wa.me/94740442004" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-4 md:mt-0 text-2xl">
          <a
            href="https://www.facebook.com/koshala.lakshan.31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/kosala-lakshan-samararathna-833aa5357/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </footer>
  );
}
