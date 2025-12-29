import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TriangleBG from "./Component/Triangleee/Triangle ";
import LenisScroll from "./lenisScroll";
import TriangleLoader from "./TriangleLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./Component/About/about";
import "./App.css";
import { Link } from "react-router-dom";
import Technologies from "./Component/Tech/Tech";
import Education from "./Component/Education/Education";
import ProjectTechSection from "./Component/ProjectTechSection/ProjectTechSection";
import ProjectShowcase from "./Component/ProjectShowcase/ProjectShowcase";

function Body() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    gsap.registerPlugin(ScrollTrigger);

    const sections = [".section-two", ".section-three", ".section-four"];

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        // Advanced "Reveal" Animation
        gsap.fromTo(
          section,
          { 
            opacity: 0, 
            y: 100, 
            scale: 0.95,
            clipPath: "inset(10% 0% 10% 0%)" // Modern "curtain" reveal effect
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 40%",
              scrub: 1, // Smoothly follows scroll
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <TriangleLoader />;

  return (
    <>
      <LenisScroll>
        {/* Hero Section */}
        <section className="section-one relative w-full min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden rounded-3xl px-4">
          
          {/* Enhanced Branding */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="absolute top-10 text-white/20 tracking-[0.5em] text-xs uppercase"
          >
            Based in Bangladesh • Available for Hire
          </motion.div>

          <motion.h1
            className="text-[72px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] font-bold mb-2 text-white text-center leading-none"
            style={{ fontFamily: "Smooch Sans" }}
            initial={{ opacity: 0, y: 100, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            NABIL HASAN
          </motion.h1>

          <motion.h2
            className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-cyan-400 font-medium tracking-[0.2em] mb-4 text-center uppercase"
            style={{ fontFamily: "Smooch Sans" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Architecting Digital Experiences
          </motion.h2>

          <motion.p
            className="max-w-2xl text-[16px] sm:text-[18px] md:text-[20px] text-white/60 text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Full-stack MERN Developer specializing in building 
            <span className="text-white"> high-performance </span> 
            applications that turn complex problems into 
            <span className="text-white"> seamless solutions.</span>
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:row gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex gap-4">
               <Link to="projectt" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                View My Work
              </Link>
              <button className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition">
                Let's Talk
              </button>
            </div>
          </motion.div>

          <TriangleBG />
        </section>

        {/* Section Wrapper for Animations */}
        <div className="section-two"><About /></div>
        <div className="section-three"><Education /></div>
        <div className="section-four"><ProjectTechSection /></div>
        <section><ProjectShowcase /></section>

      </LenisScroll>

      {/* Background Watermark */}
      <div className="fixed bottom-[-5%] left-[-5%] text-[20vw] font-black text-white/[0.03] pointer-events-none select-none italic">
        NABIL
      </div>
    </>
  );
}

export default Body;