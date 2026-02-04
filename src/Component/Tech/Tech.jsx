import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import react from './react-icon.svg'
import node from './node.png'
import gsap from './gsap.png'
import framer from './framer.png'
import mongo from './mongo.svg'
import Tailwind from "./tailwindcss.svg"
const Technologies = () => {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <section className="tech-section h-auto flex flex-col justify-center iteams-center text-white px-6 sm:px-12 py-20">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontFamily: "Smooch Sans" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        {/* React */}
        <motion.div
          className="tech-card relative overflow-hidden rounded-xl cursor-pointer group z-10"
          style={{
            y: useTransform(scrollY, [0, 1500], [0, -60]),
            x: useTransform(scrollY, [0, 1500], [0, 30]),
            rotate: useTransform(scrollY, [0, 1500], [2, -2]),
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
        >
          <img
            src={react}
            alt="React"
            className="w-full h-32 object-contain p-6 bg-transparent rounded-xl"
          />
          <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white font-semibold text-lg">React</p>
          </motion.div>
        </motion.div>

        {/* Node.js */}
        <motion.div
          className="tech-card relative overflow-hidden rounded-xl cursor-pointer group z-10"
          style={{
            y: useTransform(scrollY, [0, 1500], [0, 60]),
            x: useTransform(scrollY, [0, 1500], [0, -30]),
            rotate: useTransform(scrollY, [0, 1500], [4, -4]),
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
        >
          <img
            src={node}
            alt="Node.js"
            className="w-full h-32 object-contain p-6 bg-transparent rounded-xl"
          />
          <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white font-semibold text-lg">Node.js</p>
          </motion.div>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          className="tech-card relative overflow-hidden rounded-xl cursor-pointer group z-10"
          style={{
            y: useTransform(scrollY, [0, 1500], [0, -40]),
            x: useTransform(scrollY, [0, 1500], [0, 20]),
            rotate: useTransform(scrollY, [0, 1500], [3, -3]),
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
        >
          <img
            src={mongo}
            alt="MongoDB"
            className="w-full h-32 object-contain p-6  rounded-xl"
          />
          <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white font-semibold text-lg">MongoDB</p>
          </motion.div>
        </motion.div>

        {/* Express.js */}
        <motion.div
          className="tech-card relative overflow-hidden rounded-xl cursor-pointer group z-10"
          style={{
            y: useTransform(scrollY, [0, 1500], [0, 50]),
            x: useTransform(scrollY, [0, 1500], [0, -20]),
            rotate: useTransform(scrollY, [0, 1500], [2, -2]),
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
        >
          <img
            src={Tailwind}
            alt="Tailwind"
            className="w-full h-32 object-contain p-6  rounded-xl"
          />
          <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white font-semibold text-lg">Tailwind</p>
          </motion.div>
        </motion.div>

       {/* gsap */}
        <motion.div
          className="tech-card relative overflow-hidden rounded-xl cursor-pointer group z-10"
          style={{
            y: useTransform(scrollY, [0, 1500], [0, 50]),
            x: useTransform(scrollY, [0, 1500], [0, -20]),
            rotate: useTransform(scrollY, [0, 1500], [2, -2]),
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
        >
          <img
            src={gsap}
            alt="GSAP"
            className="w-full h-32 object-contain p-6  rounded-xl"
          />
          <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white font-semibold text-lg">GSAP</p>
          </motion.div>
        </motion.div>
         {/* framer */}
        <motion.div
          className="tech-card relative overflow-hidden rounded-xl cursor-pointer group z-10"
          style={{
            y: useTransform(scrollY, [0, 1500], [0, 50]),
            x: useTransform(scrollY, [0, 1500], [0, -20]),
            rotate: useTransform(scrollY, [0, 1500], [2, -2]),
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 0, zIndex: 20 }}
        >
          <img
            src={framer}
            alt="Framer"
            className="w-full h-32 object-contain p-6  rounded-xl"
          />
          <motion.div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white font-semibold text-lg">Framer</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
