// src/App.jsx
import { useEffect, lazy, Suspense, memo, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Project"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Navbar = lazy(() => import("./components/Navbar"));
const ParticleBackground = lazy(() =>
  import("./components/ParticleBackground")
);

// Loading component for Suspense fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

// Memoized App component to prevent unnecessary re-renders
const App = memo(function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quart",
      once: false,
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        <ParticleBackground />
        <motion.div style={{ scaleX }} />
        <Navbar
          scrollToSection={scrollToSection}
          refs={{ aboutRef, projectsRef, skillsRef, contactRef }}
        />

        <Hero scrollToContact={() => scrollToSection(contactRef)} />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>

        <div className="cursor-trailer fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference bg-white"></div>
      </Suspense>
    </div>
  );
});

export default App;
