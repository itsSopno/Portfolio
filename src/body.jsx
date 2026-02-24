import { useEffect, useState, useRef } from "react";
import React from "react";
import TriangleBG from "./Component/Triangleee/Triangle ";
import LenisScroll from "./lenisScroll";
import TriangleLoader from "./TriangleLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "./hero-v2.css";

gsap.registerPlugin(ScrollTrigger);
import About from "./Component/About/about";
import "./App.css";
import { Link } from "react-router-dom";
import Technologies from "./Component/Tech/Tech";
import Education from "./Component/Education/Education";
import ProjectShowcase from "./Component/ProjectShowcase/ProjectShowcase";
import ContactSection from "./Component/ContactSection/ContactSection";

function Body() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      // Hero Boot Sequence
      const tl = gsap.timeline();
      tl.to(".scanner-line", { top: "100%", duration: 2, ease: "power2.inOut", repeat: -1 })
        .from(".hero-title-v2 .reveal-mask span", {
          y: "110%",
          stagger: 0.1,
          duration: 1.5,
          ease: "expo.out"
        }, 0.5)
        .to(".hero-subtitle-v2", { opacity: 1, letterSpacing: "0.5em", duration: 1 }, "-=0.5")
        .from(".meta-node", { opacity: 0, scale: 0.8, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5")
        .from(".control-module", { x: -50, opacity: 0, duration: 1 }, "-=1");

      // Parallax Watermark
      gsap.to(".watermark", {
        scrollTrigger: {
          trigger: ".hero-v2-container",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 200,
        rotate: 10,
        opacity: 0.05
      });
    }
  }, [loading]);

  if (loading) return <TriangleLoader />;

  return (
    <>
      <LenisScroll>
        <section ref={containerRef} className="hero-v2-container">
          {/* Schematic Background Assets */}
          <div className="schematic-bg">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
              <circle cx="500" cy="500" r="400" stroke="white" strokeWidth="0.5" strokeDasharray="10 10" />
              <circle cx="500" cy="500" r="300" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
              <line x1="100" y1="500" x2="900" y2="500" stroke="white" strokeWidth="0.5" />
              <line x1="500" y1="100" x2="500" y2="900" stroke="white" strokeWidth="0.5" />
              <path d="M700 300L800 200M800 200H750M800 200V250" stroke="#c6ff33" strokeWidth="1" />
            </svg>
            <div ref={scannerRef} className="scanner-line" />
          </div>

          {/* Floating Metadata Nodes */}
          <motion.div style={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }} className="meta-node top-[20%] left-[15%]">
            <span className="meta-label">Protocol</span>
            <span className="meta-value">MERN_STACK_V4</span>
          </motion.div>
          <motion.div style={{ x: mousePos.x * -0.3, y: mousePos.y * -0.4 }} className="meta-node top-[30%] right-[10%]">
            <span className="meta-label">Status</span>
            <span className="meta-value">SYSTEM_ACTIVE</span>
          </motion.div>
          <motion.div style={{ x: mousePos.x * 0.8, y: mousePos.y * 0.2 }} className="meta-node bottom-[25%] right-[20%]">
            <span className="meta-label">Build</span>
            <span className="meta-value">PROD_READY_0XF4</span>
          </motion.div>

          {/* Center Content */}
          <div className="flex flex-col items-center">
            <h1 className="hero-title-v2">
              <span className="reveal-mask block"><span className="inline-block">Nabil</span></span>
              <span className="reveal-mask block text-[#c6ff33] mt-[-2vw]">
                <span className="inline-block glitch-text" data-text="Blueprint">Hasan</span>
              </span>
            </h1>
            <p className="hero-subtitle-v2">MERN Stack Developer</p>
          </div>

          {/* Control Module (Actions) */}
          <div className="control-module">
            <div className="module-header">Initialization_Sequence</div>
            <div className="flex gap-4">
              <Link to="projectt" className="px-8 py-4 bg-[#c6ff33] text-black font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all">
                Access_Work
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest hover:bg-white/5 transition-all">
                Establish_Sync
              </Link>
            </div>
          </div>

          {/* System Coordinate Decor */}
          <div className="absolute bottom-10 right-10 text-[8px] font-mono opacity-20 text-right flex flex-col gap-1">
            <span>COORD_X: {mousePos.x.toFixed(2)}</span>
            <span>COORD_Y: {mousePos.y.toFixed(2)}</span>
            <span>ZOOM_FAC: 1.0482</span>
          </div>
        </section>

        <div className="section-two"><About /></div>
        <div className="section-three"><Education /></div>
        <div className="section-four"><Technologies /></div>
        <ProjectShowcase />
        <ContactSection />
      </LenisScroll>

      {/* Perspective Shifting Watermark */}
      <motion.div
        style={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        className="watermark fixed bottom-[-10%] right-[-5%] text-[30vw] font-black text-white/[0.02] pointer-events-none select-none italic leading-none"
      >
        NABIL
      </motion.div>
    </>
  );
}

export default Body;