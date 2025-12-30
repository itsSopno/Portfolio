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
  href="mailto:nabiltalukderbd@gmail.com" 
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
  <motion.div 
    variants={fadeInUp} 
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="md:col-span-4 md:col-start-9 p-4"
  >
    <h3 className="text-3xl md:text-5xl pt-4 uppercase tracking-widest text-gray-500 mb-8 font-extrabold italic opacity-80">
      Skills I have
    </h3>

    {/* Skills Container */}
    <div className="flex flex-wrap gap-3">
      {/* এখানে আপনার নির্দিষ্ট স্কিলগুলো সরাসরি বসিয়ে দেওয়া হয়েছে */}
      {["React JS", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Authentication"].map((tech, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm md:text-base uppercase tracking-wider text-gray-300 backdrop-blur-sm cursor-default hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-xl"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </motion.div>

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
