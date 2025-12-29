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
import ContactSection from "./Component/ContactSection/ContactSection";

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
     {/* Hero Section */}
<section className="section-one relative w-full min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden rounded-3xl px-4 sm:px-6 lg:px-10">

  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="absolute top-10 left-6 sm:left-10 flex items-center gap-3 bg-white/5 py-2 px-4 rounded-full border border-white/10 backdrop-blur-sm"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6ff33] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c6ff33]"></span>
    </span>
    <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-bold">
      Available for Hire
    </span>
  </motion.div>

  {/* Main Name */}
  <motion.h1
    className="text-[72px] sm:text-[100px] md:text-[140px] lg:text-[180px] xl:text-[220px] font-bold text-white text-center leading-none tracking-tighter"
    style={{ fontFamily: "Smooch Sans" }}
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    NABIL HASAN
  </motion.h1>

  {/* Professional Role Title */}
  <motion.h2
    className="text-[18px] sm:text-[22px] md:text-[26px] text-[#c6ff33] font-medium tracking-[0.15em] mb-6 text-center uppercase"
    style={{ fontFamily: "Smooch Sans" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    MERN Stack & Frontend Focused
  </motion.h2>

  {/* Power Description - Highlight Core Strengths */}
  <motion.p
    className="max-w-2xl text-[16px] sm:text-[19px] md:text-[21px] text-white/70 text-center leading-relaxed"
    style={{ fontFamily: "Smooch Sans" }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    I build <span className="text-white border-b border-white/30">production-ready</span> applications with 
    React, Tailwind, and Node.js. My focus is on writing **clean, reusable code** and 
    implementing **secure authentication** to create seamless user experiences.
  </motion.p>

  {/* CTA Buttons */}
  <motion.div
    className="mt-8 flex flex-col sm:flex-row gap-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    <Link to="projectt" className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-[#c6ff33] hover:scale-105 transition-all duration-300 shadow-lg uppercase text-xs tracking-widest">
      View Project
    </Link>
    <button className="px-8 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300 text-xs tracking-widest uppercase">
      Download Resume
    </button>
     <Link to="/contact" className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-[#c6ff33] hover:scale-105 transition-all duration-300 shadow-lg uppercase text-xs tracking-widest">
      Contact
    </Link>
  </motion.div>

  {/* Background */}
  <TriangleBG />
</section>

        {/* Section Wrapper for Animations */}
        <div className="section-two"><About /></div>
        <div className="section-three"><Education /></div>
        <div className="section-four"><ProjectTechSection /></div>
        <section><ProjectShowcase /></section>
<section><ContactSection></ContactSection></section>
      </LenisScroll>

      {/* Background Watermark */}
      <div className="fixed bottom-[-5%] left-[-5%] text-[20vw] font-black text-white/[0.03] pointer-events-none select-none italic">
        NABIL
      </div>
    </>
  );
}

export default Body;