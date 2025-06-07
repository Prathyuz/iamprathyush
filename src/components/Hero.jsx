import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaPhoneAlt, FaUser, FaVoicemail } from "react-icons/fa";

const Hero = () => {
  const textRef = useRef(null);
  const colors = [
    "#3B82F6", // blue-500
    "#EC4899", // pink-500
    "#10B981", // emerald-500
    "#F59E0B", // amber-500
    "#8B5CF6", // violet-500
    "#EF4444", // red-500
    "#06B6D4", // cyan-500
  ];

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("span");

    letters.forEach((letter, i) => {
      // Skip spaces
      if (letter.innerHTML !== "\u00A0") {
        letter.style.color = colors[i % colors.length];
        letter.style.textShadow = `0 0 10px ${
          colors[i % colors.length]
        }, 0 0 20px rgba(255,255,255,0.3)`;
        letter.style.animation = `glow 2s ease-in-out infinite ${i * 0.05}s`;
      }
    });
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden font-sans bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-500/20 to-violet-500/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0.1,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Glitch Text Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              <span ref={textRef} className="glitch-text">
                {"Crafting Modern Web Interface".split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block hover:scale-125 transition-transform duration-300"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>

            {/* Glitch layers */}
            <div className="glitch-layers absolute top-0 left-0 w-full h-full">
              <div className="glitch-layer"></div>
              <div className="glitch-layer"></div>
            </div>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-violet-500 mb-8 max-w-3xl mx-auto font-medium"
          >
            Transforming Ideas into Interactive Digital Experiences
          </motion.p>

          {/* Floating Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <motion.a
              href="/projects"
              className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 transition-all duration-500 relative overflow-hidden group shadow-lg shadow-blue-500/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl"><FaUser /></span>
                View My Work
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </motion.a>

            <motion.a
              href="/contact"
              className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 transition-all duration-500 relative overflow-hidden group shadow-lg shadow-pink-500/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-xl"><FaPhoneAlt /></span>
                Contact Me
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-all duration-1000"></span>
            </motion.a>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 1, 0],
            y: [20, 0, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-14 border-4 border-cyan-400 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
