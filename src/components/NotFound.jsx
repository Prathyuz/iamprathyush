// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900/30 to-gray-900 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Animated 404 text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-[120px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 leading-none">
          404
        </h1>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-cyan-400/30 pointer-events-none"
        ></motion.div>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 max-w-md"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Lost in Digital Space
        </h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to safety.
        </p>

        {/* Home button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-gray-900 font-bold hover:from-pink-400 hover:to-cyan-400 transition-all duration-500"
          >
            <FiArrowLeft className="mr-2" />
            Return Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.8,
          }}
          animate={{
            y: [0, Math.random() * 60 - 30],
            x: [0, Math.random() * 60 - 30],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
