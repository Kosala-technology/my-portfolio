"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        
        {/* Profile + Name Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400">
            <Image
              src="/avatar.jpg"
              alt="Kosala Lakshan Samararathna"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <h6 className="text-lg font-semibold text-cyan-400">
            Kosala Lakshan Samararathna
          </h6>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
