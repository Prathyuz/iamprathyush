import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [activeTab, setActiveTab] = useState("bio");
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    { name: "React", color: "#61DAFB", icon: "⚛️", proficiency: 90 },
    { name: "JavaScript", color: "#F7DF1E", icon: "📜", proficiency: 85 },
    { name: "Tailwind CSS", color: "#38BDF8", icon: "🌀", proficiency: 95 },
    { name: "HTML5/CSS3", color: "#E34F26", icon: "🖥️", proficiency: 90 },
    { name: "Poster Design", color: "#2965F1", icon: "🎨", proficiency: 85 },
    {
      name: "Responsive Design",
      color: "#A78BFA",
      icon: "📱",
      proficiency: 95,
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900/20"
    >
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-pink-500/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-float-delay"></div>

      {/* Binary code animation background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.1, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Code. Create. Innovate.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting digital experiences that blend aesthetics with
            functionality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <motion.div
              className="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-cyan-400/20 shadow-lg shadow-cyan-400/10 p-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-semibold mb-1 text-white">
                    Hi, I'm Prathyush{" "}
                  </h3>
                  <p className="text-cyan-400">I'm a Frontend Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                {techStack.map((tech) => (
                  <div key={tech.name} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 flex items-center">
                        {tech.icon} <span className="ml-2">{tech.name}</span>
                      </span>
                      <span className="text-gray-400">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="h-2.5 rounded-full"
                        style={{ backgroundColor: tech.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Bio Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-pink-400/20 shadow-lg shadow-pink-400/10"
          >
            <div className="flex border-b border-gray-800">
              {["bio", "projects", "experience", "education"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-4 text-sm font-medium capitalize relative flex-1 ${
                    activeTab === tab
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 min-h-[400px]"
            >
              {activeTab === "bio" && (
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    I'm a passionate frontend developer specializing in React
                    and Tailwind CSS, dedicated to building responsive,
                    user-friendly web applications. With a keen eye for design
                    and a love for clean code, I transform ideas into
                    pixel-perfect digital experiences.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    My journey in web development began during my computer
                    science studies, where I discovered my passion for creating
                    interactive interfaces. Since then, I've honed my skills
                    through various projects, always staying updated with the
                    latest web technologies.
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                    <p className="text-gray-300 italic">
                      "I believe great websites should be both beautiful and
                      functional - a seamless blend of form and function."
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "projects" && (
                <div className="space-y-6">
                  <div className="relative group">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                      UShop - Grocery E-commerce
                    </h3>
                    <p className="text-gray-400 mb-2">myushoponline.com</p>
                    <p className="text-gray-300 mb-4">
                      Developed a full responsive grocery e-commerce platform
                      with React and Tailwind CSS, featuring product filtering,
                      cart functionality, and secure checkout.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-purple-400/10 text-purple-400 border border-purple-400/20">
                        Tailwind
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-green-400/10 text-green-400 border border-green-400/20">
                        Responsive Design
                      </span>
                    </div>
                  </div>

                  <div className="relative group">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                      <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                      Restaurant & Maternity Websites
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Created three static websites with custom designs:
                    </p>
                    <ul className="space-y-3 pl-5">
                      <li className="text-gray-300 relative before:content-['-'] before:absolute before:-left-4">
                        Southindies - Vegetarian restaurant website
                      </li>
                      <li className="text-gray-300 relative before:content-['-'] before:absolute before:-left-4">
                        Iktha Maternity Collections - Dress collection for
                        pregnant women
                      </li>
                      <li className="text-gray-300 relative before:content-['-'] before:absolute before:-left-4">
                        Shanmuga Mahal - Event pavilion contact site
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === "experience" && (
                <div className="space-y-6">
                  {/* Shanmuga Technovative Solutions */}
                  <div className="relative pl-8 border-l-2 border-cyan-400/30">
                    <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-cyan-400"></div>
                    <h3 className="text-xl font-medium text-white">
                      Software Engineer
                    </h3>
                    <p className="text-gray-400">
                      Shanmuga Technovative Solutions Private Limited •
                      Full-time
                    </p>
                    <p className="text-gray-400">
                      Dec 2024 - Present • 6 mos • Pollachi, Tamil Nadu, India
                      (On-site)
                    </p>
                    <ul className="text-gray-300 mt-2 space-y-2 list-disc pl-5">
                      <li>
                        Developed and maintained responsive web applications
                        using React JS and Tailwind CSS
                      </li>
                      <li>
                        Collaborated with cross-functional teams to design and
                        implement new features
                      </li>
                      <li>
                        Identified and fixed bugs, optimized code, and improved
                        application performance
                      </li>
                    </ul>

                    {/* <div className="mt-4">
                      <h4 className="text-lg font-medium text-white">
                        Key Projects:
                      </h4>
                      <div className="mt-2 space-y-4">
                        <div>
                          <h5 className="font-medium text-cyan-400">U-Shop</h5>
                          <p className="text-gray-300">
                            E-commerce website with responsive design, cart
                            functionality, and order workflow built using React
                            JS and Tailwind CSS
                          </p>
                          <a
                            href="https://myushoponline.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline text-sm"
                          >
                            myushoponline.com
                          </a>
                        </div>
                        <div>
                          <h5 className="font-medium text-cyan-400">
                            Southindies, Shanmuga Mahal
                          </h5>
                          <p className="text-gray-300">
                            Landing page with animations, responsive design, and
                            Framer Motion integration using React JS and
                            Tailwind CSS
                          </p>
                          <a
                            href="https://southindiesveg.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline text-sm"
                          >
                            southindiesveg.com
                          </a>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        React.js
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-purple-400/10 text-purple-400 border border-purple-400/20">
                        Tailwind CSS
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-green-400/10 text-green-400 border border-green-400/20">
                        Framer Motion
                      </span>
                    </div> */}
                  </div>

                  {/* Awerum IT and services */}
                  <div className="relative pl-8 border-l-2 border-purple-400/30">
                    <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-purple-400"></div>
                    <h3 className="text-xl font-medium text-white">
                      React Developer
                    </h3>
                    <p className="text-gray-400">
                      Awerum IT and services • Full-time
                    </p>
                    <p className="text-gray-400">
                      Jun 2024 - Dec 2024 • 6 mos • Pollachi, Tamil Nadu, India
                    </p>
                    <ul className="text-gray-300 mt-2 space-y-2 list-disc pl-5">
                      <li>
                        Implemented UI components, layouts, and styling using
                        Tailwind CSS
                      </li>
                    </ul>
                    {/* <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        Front-End Development
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-purple-400/10 text-purple-400 border border-purple-400/20">
                        React.js
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-purple-400/10 text-purple-400 border border-purple-400/20">
                        Tailwind CSS
                      </span>
                    </div> */}
                  </div>
                </div>
              )}
              {activeTab === "education" && (
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-pink-400/30">
                    <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400"></div>
                    <h3 className="text-xl font-medium text-white">
                      B.Sc Computer Science
                    </h3>
                    <p className="text-gray-400">NGM College • 2021-2024</p>
                    <p className="text-gray-300 mt-2">
                      Specialized in web technologies and software development
                      principles. Completed coursework in data structures,
                      algorithms, and web design.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-cyan-400/30">
                    <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"></div>
                    <h3 className="text-xl font-medium text-white">
                      Higher Secondary
                    </h3>
                    <p className="text-gray-400">
                      PGHSS • Computer Science • 2021
                    </p>
                    <p className="text-gray-300 mt-2">
                      Focused on foundational computer science concepts and
                      programming fundamentals that sparked my interest in web
                      development.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
