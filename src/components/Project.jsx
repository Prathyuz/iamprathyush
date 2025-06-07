import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "UShop Grocery",
      description:
        "Full responsive e-commerce platform for grocery shopping with product categories, search, and cart functionality.",
      tags: ["React", "Tailwind CSS", "Responsive Design", "CSS Animations"],
      link: "https://myushoponline.com",
      github: null,
      image: "/project/ushop.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "Southindies Restaurant",
      description:
        "Elegant static website for a vegetarian restaurant showcasing their menu and ambiance.",
      tags: [
        "React",
        "Tailwind CSS",
        "responsive design",
        "Framer Motion",
        "CSS Animations",
      ],
      link: "https://southindiesveg.com",
      github: null,
      image: "/project/southindiesveg.png",
    },
    {
      id: 3,
      title: "Shanmuga Mahal",
      description:
        "Event pavilion contact website with location details and inquiry functionality.",
      tags: ["React", "Tailwind CSS", "Responsive Design", "CSS Animations"],
      link: "https://shanmugamahal.com/",
      github: null,
      image: "/project/shanmugamahal.png",
    },
    {
      id: 4,
      title: "Iktha Maternity",
      description:
        "Fashion collection website for maternity wear with lookbook gallery and contact form.",
      tags: ["React", "Tailwind CSS", "Responsive Design", "CSS Animations"],
      link: "https://www.ikthamaternitycollection.com/",
      github: null,
      image: "/project/iktha.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-indigo-900/10 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.5, 0.1],
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
            My Creations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Each project represents a unique challenge and learning opportunity
            in my development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 border border-gray-800"
            >
              {/* Project image with overlay */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Project tags floating on image */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-400/10 backdrop-blur-sm rounded-full text-xs text-cyan-400 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 relative">
                {/* Project title and description */}
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>

                {/* Project links */}
                <div className="flex gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                    >
                      <FiGithub /> Code
                    </motion.a>
                  )}
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/30 rounded-xl pointer-events-none transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-500 relative overflow-hidden group shadow-lg shadow-cyan-500/30"
          >
            <span className="relative z-10">
              Have a project in mind? Let's talk
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
