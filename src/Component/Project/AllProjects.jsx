
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowRight, Layers, Tag } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://t-mark-4.onrender.com/api/project/all");
        const data = await response.json();
        if (data.success) {
          setProjects(data.projects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (!isLoading && projects.length > 0) {
      gsap.fromTo(
        ".project-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, [isLoading, projects]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 md:px-12 lg:px-24 selection:bg-[#c6ff33] selection:text-black">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto mb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#c6ff33] text-xs font-black tracking-[0.5em] uppercase mb-6 block">
            Archive / 2026
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Complete <br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>Index</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-white/10 pt-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-md text-gray-400 text-lg font-light leading-relaxed"
          >
            A comprehensive collection of digital experiments, client work, and technical deep-dives across various stacks.
          </motion.p>
          <div className="flex gap-12">
             <div className="flex flex-col">
                <span className="text-gray-600 text-[10px] uppercase tracking-widest mb-2">Total Units</span>
                <span className="text-4xl font-bold">{projects.length < 10 ? `0${projects.length}` : projects.length}</span>
             </div>
             <div className="flex flex-col">
                <span className="text-gray-600 text-[10px] uppercase tracking-widest mb-2">Status</span>
                <span className="text-4xl font-bold text-[#c6ff33]">LIVE</span>
             </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {isLoading ? (
        <div className="h-[40vh] flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-xs tracking-[1em] text-[#c6ff33] font-bold"
          >
            SYNCHRONIZING_DATABASE
          </motion.div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>
      )}

      {/* Decorative Footer */}
      <footer className="mt-48 text-center border-t border-white/5 pt-20">
         <p className="text-[10px] tracking-[1em] text-white/20 uppercase font-black">END_OF_TRANSMISSION</p>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-fill-color: transparent;
        }
      `}} />
    </main>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-card group relative flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111] rounded-sm mb-8">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          src={project.projectImage}
          alt={project.projectName}
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
          <a 
            href={project.projectLiveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#c6ff33] text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"
          >
            <ExternalLink size={20} strokeWidth={3} />
          </a>
          <a 
            href={project.projectGitHubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150"
          >
            <Github size={20} strokeWidth={3} />
          </a>
        </div>

        {/* Index Number */}
        <div className="absolute top-6 left-6 text-[10px] font-black tracking-widest text-white/50 group-hover:text-[#c6ff33] transition-colors">
          / 0{index + 1}
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {project.projectType}
            </span>
            <span className="text-[10px] font-bold text-[#c6ff33] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff33] animate-pulse"></span>
                {project.projectStatus.toUpperCase()}
            </span>
        </div>

        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none group-hover:italic transition-all duration-300">
          {project.projectName}
        </h3>

        <p className="text-gray-400 font-light text-sm leading-relaxed max-w-lg mb-4">
          {project.projectDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {project.Tech.map((tech, i) => (
            <span key={i} className="text-[9px] uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
              {tech} {i !== project.Tech.length - 1 && "•"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
