"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      {/* Connect With Me Section */}
      <motion.section
        className="flex flex-col items-center justify-center px-6 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      ><br>
      </br><br></br>
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Connect With Me</h2>
        <p className="text-gray-300 mb-6 text-center max-w-lg">
          Feel free to reach out through any of the following platforms or send a message directly.
        </p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Facebook Personal */}
          <motion.a
            href="https://www.facebook.com/koshala.lakshan.31"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-cyan-500 transition"
          >
            <FaFacebook className="text-white text-xl" />
            <span className="text-white font-medium">Facebook Personal</span>
          </motion.a>

          {/* Facebook Page */}
          <motion.a
            href="https://www.facebook.com/share/1ENFjMzwR3/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-cyan-500 transition"
          >
            <FaFacebook className="text-white text-xl" />
            <span className="text-white font-medium">Facebook Page</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/kosala-lakshan-samararathna-833aa5357/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-cyan-500 transition"
          >
            <FaLinkedin className="text-white text-xl" />
            <span className="text-white font-medium">LinkedIn</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/94740442004"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-cyan-500 transition"
          >
            <FaWhatsapp className="text-white text-xl" />
            <span className="text-white font-medium">WhatsApp</span>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="flex flex-col items-center justify-center flex-1 px-6 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Contact Me Via Website</h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-cyan-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white focus:outline-cyan-400 resize-none"
            rows={5}
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      <ContactFooter />
    </div>
  );
}
