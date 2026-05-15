import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://server-1-1-6g3a.onrender.com/project")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.projects);
        }
        setIsLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setIsLoading(false);
      });
  }, []);

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <main className="min-h-screen text-white py-32 px-6 md:px-12 selection:bg-white selection:text-black">
      {/* Header Section */}
      <header className="max-w-[1400px] mx-auto mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "Smooch Sans" }}
        >
          <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-none">
            Selected <br /> <span className="text-gray-600">Works</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{ fontFamily: "Smooch Sans" }}
          className="max-w-xs"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Portfolio 2024</p>
          <p className="text-gray-400 font-light leading-relaxed">
            A curated selection of B2B platforms and digital experiences focused on utility and aesthetics.
          </p>
        </motion.div>
      </header>

     
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-2xl font-light tracking-widest uppercase text-gray-500"
            style={{ fontFamily: "Smooch Sans" }}
          >
            Server is waking up... Please wait a moment.
          </motion.p>
          <p className="text-xs text-gray-600 mt-4 italic">Render free tier might take 15-30 seconds to spin up.</p>
        </div>
      ) : (
       
        <motion.section 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ fontFamily: "Smooch Sans" }}
          className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-40"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project._id} 
              variants={itemVars}
              className={`${index % 2 !== 0 ? "md:mt-32" : ""}`}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.section>
      )}

      {/* Footer Info */}
      <footer className="mt-40 text-center">
        <p className="text-[10px] uppercase tracking-[0.6em] text-gray-800">End of Portfolio</p>
      </footer>
    </main>
  );
};

export default ProjectsPage;