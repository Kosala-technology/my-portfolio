"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import ContactFooter from "@/components/ContactFooter";


export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <section className="flex flex-col items-center justify-center flex-1 px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-cyan-400 mb-10 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education & Experience
        </motion.h2>

        <div className="w-full max-w-4xl space-y-12">
          {/* 🎓 Education Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
              🎓 Education
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-cyan-400">
                  BSc (Hons) in Information and Communication Technology
                </strong>{" "}
                – University of Sri Jayewardenepura (Ongoing)
                <br />
                <span className="text-sm text-gray-400">Focus Area: Multimedia Technology</span>
              </li>
              <li>
                <strong className="text-cyan-400">G.C.E. Advanced Level 2021(2022) (Engineering technology Stream)</strong> – 
                Successfully Completed. (Science for technology - A, Information and Communication Technology - A, Engineering technology - B  and / Badulla district 7 / Island 175 )
              </li>
              
            </ul>
          </motion.div>

          {/* 💼 Experience Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
              💼 Professional Experience
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-cyan-400">Upcoming Internship</strong> – 
                Seeking opportunities starting from next semester in areas of Multimedia, 
                UI/UX Designing, Graphic designing or 3D modeling.
              </li>
            </ul>
          </motion.div>

          {/* 🏦 Other Experience Section */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
              🏦 Other Experience
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-cyan-400">Trainee – People's Bank (Hali-ela)</strong>
                <br />
                <span className="text-gray-400 text-sm">
                  November 23, 2022 – July 12, 2023
                </span>
                <p className="mt-2">
                  Completed a 9-month training period at People's Bank prior to university admission.  
                  Gained experience in customer service, data handling, and banking system operations.  
                  This experience strengthened communication, teamwork, and organizational skills.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      <ContactFooter />
    </div>
  );
}
