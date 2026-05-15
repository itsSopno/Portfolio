import React from "react";
import { motion } from "framer-motion";
import react from './react-icon.svg';
import node from './node.png';
import gsapIcon from './gsap.png';
import framer from './framer.png';
import mongo from './mongo.svg';
import Tailwind from "./tailwindcss.svg";
import "./tech-blueprint.css";

const techStack = [
  { name: "React_JS", icon: react, version: "18.3" },
  { name: "Node_Server", icon: node, version: "20.x" },
  { name: "Mongo_DB", icon: mongo, version: "Atlas" },
  { name: "Tailwind_CSS", icon: Tailwind, version: "4.0" },
  { name: "GSAP_Motion", icon: gsapIcon, version: "3.12" },
  { name: "Framer_Fluid", icon: framer, version: "11.0" },
];

const Technologies = () => {
  return (
    <section className="tech-blueprint-section">
      <div className="tech-header">
        <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">Module_03 // Logic_Stack</span>
        <h2 className="tech-title">Integrated_Tech</h2>
      </div>

      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="tech-node group"
          >
            <span className="node-serial">ID: 0x0{index + 1}</span>
            <img src={tech.icon} alt={tech.name} className="node-icon" />
            <span className="node-name">{tech.name}</span>
            <div className="absolute bottom-4 right-4 text-[7px] font-mono opacity-10 group-hover:opacity-30 transition-opacity">
              {tech.version}
            </div>
          </motion.div>
        ))}
        {/* Placeholder Nodes for Blueprint Effect */}
        {[1, 2].map((_, i) => (
          <div key={i} className="tech-node opacity-[0.02]">
            <div className="w-10 h-10 border border-white/20 rounded-full animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
