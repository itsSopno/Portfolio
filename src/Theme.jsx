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

  const ctx = gsap.context(() => {
    gsap.from(".section-two", {
      scrollTrigger: {
        trigger: ".section-two",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      opacity: 0,
      y: 150,
      ease: "power4.out",
    });
     gsap.from(".section-three", {
      scrollTrigger: {
        trigger: ".section-three",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      opacity: 0,
      y: 150,
      ease: "power4.out",
    });
     gsap.from(".section-four", {
      scrollTrigger: {
        trigger: ".section-four",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      opacity: 0,
      y: 150,
      ease: "power4.out",
    });
  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}, [loading]);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <TriangleLoader />;

  return (
    <>
    <LenisScroll>
      {/* Hero Section */}
    
   <section className="section-one relative w-full min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] overflow-hidden rounded-3xl px-4 sm:px-6 lg:px-10">

  {/* Main Title */}
  <motion.h1
    className="
      text-[72px]
      sm:text-[100px]
      md:text-[140px]
      lg:text-[180px]
      xl:text-[220px]
      font-bold
      mb-2
      text-white
      text-center
      leading-none
    "
    style={{ fontFamily: "Smooch Sans" }}
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    PORTFOLIO
  </motion.h1>

  {/* Role */}
  <motion.h2
    className="
      text-[20px]
      sm:text-[24px]
      md:text-[28px]
      lg:text-[32px]
      text-white
      font-medium
      tracking-wide
      mb-4
      text-center
    "
    style={{ fontFamily: "Smooch Sans" }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
  >
    MERN Stack Developer
  </motion.h2>

  {/* Description */}
  <motion.p
    className="
      max-w-3xl
      text-[16px]
      sm:text-[18px]
      md:text-[20px]
      lg:text-[22px]
      text-white/75
      text-center
      leading-relaxed
    "
    style={{ fontFamily: "Smooch Sans" }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
  >
    I design and develop scalable full-stack web applications using MongoDB,
    Express.js, React, and Node.js — focusing on performance, clean architecture,
    and intuitive user experiences.
  </motion.p>

  {/* CTA Buttons */}
  <motion.div
    className="
      mt-6
      sm:mt-8
      flex
      flex-col
      sm:flex-row
      gap-4
    "
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.9 }}
  >
    <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
     <Link to="project"> View Projects</Link>
    </button>
    <button className="px-6 py-3 text-white/70 hover:text-white transition">
      Contact Me
    </button>
  </motion.div>

  {/* Background */}
  <TriangleBG />
</section>



    
      <section className="section-two bg-[#000] w-full h-auto ">
       <About></About>
      </section>
      <section className="section-three">
        <Education></Education>
      </section>
      <section className="section-four">
        <ProjectTechSection></ProjectTechSection>
      </section>
     <section>
      <ProjectShowcase></ProjectShowcase>
     </section>
    </LenisScroll>
     <div className="fixed bottom-[-5%] left-[-5%] text-[20vw] font-black text-white/[0.02] pointer-events-none select-none italic">
        NABIL
      </div>
    </>
  );
}

export default Body;
