import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-1-1-6g3a.onrender.com/project")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-32 px-6 md:px-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-indigo-500 uppercase tracking-[0.6em] text-[10px] font-bold"
        >
          Selected Works
        </motion.span>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mt-4 italic"
        >
          PROJECT <span className="text-zinc-800">ARCHIVE</span>
        </motion.h1>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80" />
              
              {/* Floating Tech Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {project.technology?.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-[8px] px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full uppercase tracking-widest text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/link"
                >
                  Live View 
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
                
                <Link 
                  to={`/project/${project._id}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  ↗
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
     
      <div className="fixed bottom-[-5%] left-[-5%] text-[20vw] font-black text-white/[0.02] pointer-events-none select-none italic">
        WORKS
      </div>
    </section>
  );
};

export default ProjectPage;