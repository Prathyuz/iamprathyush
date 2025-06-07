import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiFigma,
  FiTwitter,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: <FiMail className="text-2xl" />,
      name: "Email",
      url: "mailto:prathyushraji25@gmail.com",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <FiLinkedin className="text-2xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prathyush2004/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: <FiGithub className="text-2xl" />,
      name: "GitHub",
      url: "https://github.com/Prathyuz",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      name: "Location",
      url: "https://www.google.com/maps/place/Thozilpettai+Bus+Stop/@10.6572455,77.0422177,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba83763a236204d:0x30b105baab80a402!8m2!3d10.6572455!4d77.0422177!16s%2Fg%2F11gmbxybxy?entry=ttu",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <FiPhone className="text-2xl" />,
      name: "Phone",
      url: "tel:+919566778205",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: <FiTwitter className="text-2xl" />,
      name: "Twitter",
      url: "https://x.com/Prathyuuz",
      color: "from-purple-500 to-fuchsia-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900/30 to-gray-900"
    >
      {/* Floating gradient elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-float-delay"></div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-400/10 rounded-full mix-blend-overlay filter blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-pink-400/10 rotate-45 mix-blend-overlay filter blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-text-gradient">
              Let's Connect
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Ready to collaborate or just want to say hi? My inbox is always
            open!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-3xl opacity-30 blur-lg animate-pulse-slow"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30 shadow-2xl shadow-cyan-400/20 overflow-hidden">
              {/* Form background pattern */}
              <div className="absolute inset-0 opacity-5 pattern-crosses text-cyan-400/10"></div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: { duration: 1.5, repeat: Infinity },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-300 max-w-md mx-auto">
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2 rounded-full bg-gray-800 text-gray-300 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    ref={formRef}
                    className="space-y-8 relative z-10"
                  >
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6">
                      Send Me a Message
                    </h3>

                    {[
                      { name: "name", label: "Your Name", type: "text" },
                      { name: "email", label: "Email Address", type: "email" },
                      {
                        name: "message",
                        label: "Your Message",
                        type: "textarea",
                      },
                    ].map((field) => (
                      <motion.div
                        key={field.name}
                        className="relative"
                        whileHover={{ y: -3 }}
                      >
                        {field.type === "textarea" ? (
                          <>
                            <motion.textarea
                              id={field.name}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              onFocus={() => setActiveField(field.name)}
                              onBlur={() => setActiveField(null)}
                              className="w-full px-5 py-4 bg-gray-800/70 border-2 rounded-xl focus:outline-none focus:ring-2 resize-none min-h-[150px] backdrop-blur-sm"
                              style={{
                                borderColor:
                                  activeField === field.name
                                    ? "#22d3ee"
                                    : "#3f3f46",
                                background:
                                  activeField === field.name
                                    ? "rgba(34, 211, 238, 0.05)"
                                    : "rgba(63, 63, 70, 0.3)",
                              }}
                              required
                            />
                            <motion.label
                              htmlFor={field.name}
                              className={`absolute left-4 transition-all duration-300 ${
                                formData[field.name] ||
                                activeField === field.name
                                  ? "top-0 px-2 text-xs transform -translate-y-1/2 bg-gray-900"
                                  : "top-4 text-gray-400"
                              }`}
                              style={{
                                color:
                                  activeField === field.name
                                    ? "#22d3ee"
                                    : "#9CA3AF",
                              }}
                            >
                              {field.label}
                            </motion.label>
                          </>
                        ) : (
                          <>
                            <motion.input
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              onFocus={() => setActiveField(field.name)}
                              onBlur={() => setActiveField(null)}
                              className="w-full px-5 py-4 bg-gray-800/70 border-2 rounded-xl focus:outline-none focus:ring-2 backdrop-blur-sm"
                              style={{
                                borderColor:
                                  activeField === field.name
                                    ? "#22d3ee"
                                    : "#3f3f46",
                                background:
                                  activeField === field.name
                                    ? "rgba(34, 211, 238, 0.05)"
                                    : "rgba(63, 63, 70, 0.3)",
                              }}
                              required
                            />
                            <motion.label
                              htmlFor={field.name}
                              className={`absolute left-4 transition-all duration-300 ${
                                formData[field.name] ||
                                activeField === field.name
                                  ? "top-0 px-2 text-xs transform -translate-y-1/2 bg-gray-900"
                                  : "top-4 text-gray-400"
                              }`}
                              style={{
                                color:
                                  activeField === field.name
                                    ? "#22d3ee"
                                    : "#9CA3AF",
                              }}
                            >
                              {field.label}
                            </motion.label>
                          </>
                        )}
                      </motion.div>
                    ))}

                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-400 text-gray-900 font-bold hover:from-pink-400 hover:to-cyan-400 transition-all duration-500 group relative overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center">
                        <span className="mr-3">Send Message</span>
                        <motion.span
                          animate={{
                            x: [0, 5, 0],
                            transition: { duration: 1.5, repeat: Infinity },
                          }}
                        >
                          <FiSend className="group-hover:rotate-12 transition-transform" />
                        </motion.span>
                      </span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/30 shadow-2xl shadow-pink-400/20 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 rounded-full filter blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/10 rounded-full filter blur-xl"></div>

              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-8">
                Find Me On
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-xl p-4 backdrop-blur-sm transition-all duration-500 bg-gradient-to-br ${link.color} hover:shadow-lg`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
                    <div className="relative z-10 flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4 text-white">
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-sm text-white/80">{link.name}</p>
                        <p className="text-white font-medium truncate max-w-[160px]">
                          {link.url.replace(/^mailto:|^https?:\/\//, "")}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <motion.div
              className="bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl shadow-cyan-400/20 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <a
                href="https://www.google.com/maps/place/Thozilpettai+Bus+Stop/@10.6572455,77.0422177,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba83763a236204d:0x30b105baab80a402!8m2!3d10.6572455!4d77.0422177!16s%2Fg%2F11gmbxybxy?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-400/10 to-purple-400/10 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Earth */}
                  <motion.div
                    className="text-[10rem] md:text-[12rem] lg:text-[14rem]"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    🌍
                  </motion.div>

                  {/* Location pin */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-8 h-8 bg-red-500 rounded-full shadow-lg cursor-pointer z-10"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-400/20 rounded-full"
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/3 right-1/4 w-6 h-6 bg-pink-400/20 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-900/80 to-gray-900/50">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Based in Pollachi,Tamil Nadu,India.
                  </h4>
                  <p className="text-gray-300">
                    Click the Earth to view on Google Maps
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Available for remote work worldwide
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
    </section>
  );
};

export default Contact;
