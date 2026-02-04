import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://server-1-1-6g3a.onrender.com/project/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="tracking-[0.5em] uppercase text-xs"
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black overflow-hidden font-sans">
      
      {/* Back Button */}
      <nav className="p-8">
        <Link to="/" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-all duration-300">
          ← Back to HOME
        </Link>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ fontFamily: "Smooch Sans" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10 pb-20"
        >
          {/* Left Side Meta Info */}
          <motion.div variants={fadeInUp} className="md:col-span-3 space-y-10 order-2 md:order-1 border-l border-white/10 pl-6">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Year</p>
              <p className="text-sm font-light italic">{project.year}</p> 
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Live Site</p>
              <a href={project.live} target="_blank" rel="noreferrer" className="text-sm font-light hover:line-through transition-all">
                Project Link ↗
              </a>
                
            </div>
             <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Client Repo</p>
              <a href={project.clientRepo} target="_blank" rel="noreferrer" className="text-sm font-light hover:line-through transition-all">
                Github Repo ↗
              </a>
                
            </div>
          </motion.div>

          {/* Right Side Title */}
          <motion.div variants={fadeInUp} className="md:col-span-9 order-1 md:order-2">
            <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-10">
              {project.title.split('–')[0]} <br />
              <span className="text-gray-600 font-light lowercase text-4xl md:text-6xl tracking-tight">
                {project.title.split('–')[1] || "Case Study"}
              </span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </motion.section>

        {/* Hero Image Section with Zoom Effect */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "Smooch Sans" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 overflow-hidden rounded-2xl"
        >
          <div className="relative bg-[#111] p-4 md:p-12 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </motion.section>

        {/* Info Grid */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ fontFamily: "Smooch Sans" }}
          variants={staggerContainer}
          className="grid md:grid-cols-12 gap-12 pb-32 border-t border-white/5 pt-16"
        >
          <motion.div variants={fadeInUp} className="md:col-span-7">
            <h3 className="text-xs uppercase tracking-[0.4em] text-gray-600 mb-8 font-bold italic">Strategy</h3>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-snug">
              {project.use}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-4 md:col-start-9">
            <h3 className="text-xs uppercase tracking-[0.4em] text-gray-600 mb-8 font-bold italic">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:bg-white hover:text-black transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
            <motion.div 
           animate={{ opacity: [0.3, 1, 0.3] }} 
           transition={{ duration: 3, repeat: Infinity }}
           style={{ fontFamily: "Smooch Sans" }}
           className="text-[30px] uppercase tracking-[0.8em] text-gray-700"
         >
           {project.status}
         </motion.div>
        </motion.section>
      </div>

      {/* Aesthetic Footer */}
      <footer className="py-12 flex justify-center border-t border-white/5">
         <motion.div 
           animate={{ opacity: [0.3, 1, 0.3] }} 
           transition={{ duration: 3, repeat: Infinity }}
           style={{ fontFamily: "Smooch Sans" }}
           className="text-[10px] uppercase tracking-[0.8em] text-gray-700"
         >
           Scrolling To Next Project
         </motion.div>
      </footer>
    </main>
  );
};

export default ProjectDetailPage;