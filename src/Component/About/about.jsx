import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import image2 from './secend.jpeg'
const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="about-title italic"
        >
          INTRO
        </motion.h1>
        <span className="about-version">Ver. 4.0.2</span>
      </div>

      <div className="about-grid">
        <div className="about-left-side">
          <div className="about-text-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="about-paragraph"
            >
              Hi, I’m Nabil Hasan, a <span>MERN Stack Architect</span> specializing in high-performance web applications.
              I build digital blueprints that bridge the gap between technical precision and fluid user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="about-paragraph"
            >
              I work across the full stack — crafting responsive front-end interfaces with <span>React & Tailwind</span>,
              and building secure, efficient backend systems using <span>Node.js, Express, and MongoDB</span>.
            </motion.p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-label">Core_Logic</span>
                <span className="stat-value text-[#c6ff33]">Node.js / React</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Database_Stack</span>
                <span className="stat-value">MongoDB / SQL</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Auth_Protocol</span>
                <span className="stat-value">JWT / Firebase</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Dev_Status</span>
                <span className="stat-value animate-pulse">Available_For_Hire</span>
              </div>
            </div>

            <div className="flex gap-8 mt-10">
              {["GitHub", "LinkedIn", "Email"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  whileHover={{ opacity: 1, color: "#c6ff33" }}
                  className="text-[10px] uppercase font-black tracking-[0.3em] transition-all"
                >
                  {link} // ↗
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="about-image-side"
        >
          <div className="image-frame">
            <img src={image2} alt="Technical Portrait" />
            <div className="absolute bottom-6 left-6 flex flex-col gap-1 opacity-50">
              <span className="text-[8px] font-black uppercase tracking-widest">Subject: Nabil Hasan</span>
              <span className="text-[8px] font-black uppercase tracking-widest">Type: Full_Stack_Dev</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-40">
        <h3 className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase mb-10 border-b border-white/5 pb-4">
          Integrated_Tech_Stack
        </h3>
        <div className="flex flex-wrap gap-4">
          {["React", "Node", "Tailwind", "GSAP", "Framer", "Express", "Mongo"].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 border border-white/5 bg-white/[0.01] text-[10px] font-black uppercase tracking-widest hover:border-[#c6ff33]/50 hover:text-[#c6ff33] transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
