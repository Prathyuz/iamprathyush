import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeRing, setActiveRing] = useState(null);

  const skillCategories = [
    {
      name: "Frontend",
      color: "#22d3ee",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5", level: 90 },
      ],
    },
    {
      name: "Design",
      color: "#ec4899",
      skills: [
        { name: "Poster Design", level: 85 },
        { name: "UI/UX", level: 80 },
        // { name: "Typography", level: 75 },
      ],
    },
    {
      name: "Tools",
      color: "#a855f7",
      skills: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 95 },
        // { name: "Figma", level: 70 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              My Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A visual representation of my technical capabilities
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Circular skill visualization - Fixed sizing and positioning */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
            {skillCategories.map((category, index) => {
              // Adjusted radii for better spacing
              const radii = [80, 60, 40]; // Inner to outer
              const circumference = 2 * Math.PI * radii[index];
              const offset = circumference - (circumference * category.skills.reduce((a, b) => a + b.level, 0) / (category.skills.length * 100));
              return (
                <motion.svg
                  key={category.name}
                  className="absolute"
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 200"
                  initial={{ rotate: -90 }}
                  animate={{
                    rotate: activeRing === index ? -60 : -90,
                    scale: activeRing === index ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <circle
                    cx="100"
                    cy="100"
                    r={radii[index]}
                    fill="transparent"
                    stroke={`${category.color}20`}
                    strokeWidth="10"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r={radii[index]}
                    fill="transparent"
                    stroke={category.color}
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, delay: index * 0.3 }}
                  />
                </motion.svg>
              );  
            })}

            <motion.div
              className="absolute flex items-center justify-center"
              animate={{
                scale: activeRing !== null ? 0.9 : 1,
                opacity: activeRing !== null ? 0.7 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-cyan-400/10 to-pink-400/10 border-2 border-cyan-400/20 flex items-center justify-center">
                <span className="text-cyan-400 text-sm md:text-base font-bold">Skills</span>
              </div>
            </motion.div>
          </div>

          {/* Skill category details */}
          <div className="w-full max-w-md space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="relative p-5 rounded-xl backdrop-blur-sm border border-gray-800"
                style={{
                  backgroundColor: `rgba(17, 24, 39, 0.5)`,
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setActiveRing(index)}
                onMouseLeave={() => setActiveRing(null)}
                whileHover={{
                  borderColor: `${category.color}50`,
                  boxShadow: `0 0 20px ${category.color}20`,
                }}
              >
                <h3
                  className="text-xl font-bold mb-3 flex items-center"
                  style={{ color: category.color }}
                >
                  <span
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: category.color }}
                  ></span>
                  {category.name}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <motion.div
                          className="h-1.5 rounded-full"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.3 + 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;