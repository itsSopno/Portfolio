import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./about.css";
import image from './IMG_20250913_210855_522.jpg';
import image2 from './secend.jpeg'
const About = () => {
  // const [project, setLoading] = useState(null);
  //  useEffect(() => {fetch("https://server-1-1-6g3a.onrender.com/project")
  //   .then((res) => res.json())
  //   .then((data) => { setLoading(data);
  // }, []);
 const [project, setProject] = useState(null);

useEffect(() => {
  fetch("https://server-1-1-6g3a.onrender.com/project")
    .then(res => res.json())
    .then(data => {
      setProject(data[0]); // বা find করে নিলে ভালো
    })
    .catch(console.error);
}, []);
if (!project || !Array.isArray(project.technology)) {
  return (
    <section className="about-section">
      <p className="text-white p-20">Loading stack...</p>
    </section>
  );
}

 const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="about-section rounded-tr-4xl rounded-tl-4xl rounded-br-4xl rounded-bl-4xl ">
      
      {/* LEFT CONTENT */}
      <div className="about-left">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          INTRO
        </motion.h1>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          I’m a <span>MERN Stack Developer(Junior)</span> focused on building scalable,
          performance-driven web applications with clean architecture and
          intuitive user experiences.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          I enjoy working across the full stack — from crafting responsive
          front-end interfaces in React to designing robust backend systems with
          Node.js, Express, and MongoDB.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          My goal is to turn complex ideas into reliable, maintainable digital
          products that deliver real value.
        </motion.p>

        {/* LINKS */}
        <div className="about-links">
          <motion.a
            href="nabiltalukderbd@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            Email ↗
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          >
            LinkedIn ↗
          </motion.a>
          <motion.a
            href="https://github.com/itsSopno"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          >
            GitHub ↗
          </motion.a>
        </div>
         {project && (
  <motion.div variants={fadeInUp} className="md:col-span-4 md:col-start-9">
    <h3 className="text-[50px] pt-[20px] uppercase tracking-[0.4em] text-gray-600 mb-8 font-bold italic">
      Skills I have
    </h3>

    <div className="flex flex-wrap gap-2">
      {project.technology.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[20px] uppercase tracking-[0.2em] text-gray-400 hover:bg-white hover:text-black transition-all"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
)}

      </div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="about-right"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div className="image-wrapper">
          <img src={image2} alt="Profile" />
        </div>
      </motion.div>

    </section>
  );
};

export default About;
