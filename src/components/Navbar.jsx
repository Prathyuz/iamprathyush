// src/components/Navbar.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { name: "About", action: () => scrollToSection(refs.aboutRef) },
    { name: "Projects", action: () => scrollToSection(refs.projectsRef) },
    { name: "Skills", action: () => scrollToSection(refs.skillsRef) },
    { name: "Contact", action: () => scrollToSection(refs.contactRef) },
  ];

  const socialIcons = [
    { icon: <FaGithub />, href: "https://github.com/Prathyuz" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/prathyush2004/",
    },
    { icon: <FaTwitter />, href: "https://x.com/Prathyuuz" },
  ];

  const handleNavigation = (action) => {
    action();
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-sm z-40 border-b border-indigo-500/20"
      >
        <div className="md:mx-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-start justify-start"
            >
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center group"
              >
                <img
                  src="/logo1.png"
                  alt="Portfolio Logo"
                  className="h-16 md:h-20 w-full pt-10 mb-10 object-contain transition-transform duration-300 group-hover:rotate-6"
                />
                <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-montserrat tracking-tighter transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-400">
                  rathyush
                </span>
              </button>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <button
                      onClick={item.action}
                      className="px-1 py-2 text-lg font-medium text-gray-300 hover:text-white relative"
                    >
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2 text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          ▹
                        </span>
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-purple-900/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex space-x-6 ml-6">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-400 hover:text-white relative p-2 group"
                  >
                    {social.icon}
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 focus:outline-none group hover:bg-indigo-900/50 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2 bg-pink-500" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2 bg-pink-500" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Separate from nav for better z-index control */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-30 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ paddingTop: "5rem" }}
      >
        <div className="h-full px-2 pb-4 space-y-6 sm:px-3 flex flex-col items-center overflow-y-auto">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.action)}
              className="block px-8 py-4 rounded-full text-2xl font-bold text-white hover:bg-gradient-to-r from-indigo-500/20 to-purple-500/20 transition-all w-full max-w-xs text-center relative overflow-hidden"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <span className="absolute left-4 text-indigo-400">▹</span>
              {item.name}
            </button>
          ))}

          <div className="flex justify-center space-x-8 pt-10">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-3xl text-gray-400 hover:text-white p-3 rounded-full bg-gray-800/50 transition-all duration-300 hover:bg-indigo-900/30 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
