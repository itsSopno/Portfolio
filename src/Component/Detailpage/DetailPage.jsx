
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import "./detail.css"
const DetailPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://t-mark-4.onrender.com/api/project/all");
        const data = await response.json();
        if (data.success) {
          setProjects(data.projects);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return (
    <div className="h-screen bg-[#080808] flex items-center justify-center font-asimovian">
      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-[10px] tracking-[1em] text-white">
        LOADING_SYSTEM
      </motion.div>
    </div>
  );

  return (
    <main className="bg-[#080808] text-white font-asimovian font-[400]">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-baseline mix-blend-difference">
        <Link to="/" className="text-xs tracking-[0.5em] hover:line-through transition-all">HOME</Link>
        <div className="text-[9px] tracking-[0.3em] opacity-50">SCROLL TO EXPLORE</div>
      </nav>

      {projects.map((project, index) => (
        <ProjectSection key={project._id || index} project={project} index={index} />
      ))}

      <footer className="h-[50vh] flex flex-col items-center justify-center border-t border-white/5">
         <h2 className="text-[10vw] font-bold opacity-5 select-none tracking-tighter">FINISH</h2>
         <Link to="/" className="text-xs tracking-[1em] mt-[-2vw] hover:text-gray-400 transition-colors">BACK TO START</Link>
      </footer>
    </main>
  );
};


const ProjectSection = ({ project, index }) => {
  return (
    <section className="head relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 md:px-20 border-b border-white/5 overflow-hidden">
      
      {/* Background Floating Number (Asimovian Font) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[40vw] leading-none font-bold">0{index + 1}</span>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left: Project Branding & Meta */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-4 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase">Project / 0{index + 1}</span>
            <h2 className="text-6xl md:text-8xl font-normal leading-[0.8] uppercase tracking-tighter">
              {project.projectName.split(' - ')[0]}
            </h2>
            <div className="flex gap-4">
              <span className="px-3 py-1 border border-white/20 text-[9px] rounded-full uppercase italic">{project.year}</span>
              <span className="px-3 py-1 border border-white/20 text-[9px] rounded-full uppercase">Stable_Build</span>
            </div>
          </div>

          <div className="pt-10 lg:pt-0 space-y-6">
            <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-xs">
              {project.projectDescription}
            </p>
            <div className="flex flex-col gap-3">
               <a href={project.projectLiveLink} target="_blank" className="text-[10px] tracking-[0.4em] underline decoration-white/20 hover:decoration-white transition-all uppercase">Open_Live_System</a>
               <a href={project.projectGitHubLink} target="_blank" className="text-[10px] tracking-[0.4em] opacity-40 hover:opacity-100 transition-all uppercase">View_Source_Code</a>
            </div>
          </div>
        </motion.div>

        {/* Right: Immersive Image with Reveal Effect */}
        <motion.div 
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="lg:col-span-8 group relative"
        >
          <div className="overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl">
             <motion.img 
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 1 }}
               src={project.projectImage} 
               alt={project.projectName} 
               className="w-full h-auto object-cover"
             />
             {/* Overlay Text on Hover */}
             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-[10px] tracking-[1em] translate-y-4 group-hover:translate-y-0 transition-transform font-bold">DISCOVER DETAILS</p>
             </div>
          </div>
          
          {/* Tech Stack floating below image */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 opacity-30">
            {project.Tech?.map((tech, i) => (
              <span key={i} className="text-[9px] uppercase tracking-widest">{tech}</span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom Strategy Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-10"
      >
        <div className="max-w-xl">
          <h4 className="text-[9px] tracking-[0.5em] text-gray-600 mb-4 uppercase italic">Technical_Approach</h4>
          <p className="text-xl md:text-3xl font-light leading-[1.2] text-gray-200 uppercase tracking-tighter">
            {project.projectType}
          </p>
        </div>
        <div className="hidden md:block text-[8px] text-gray-800 tracking-[0.5em] vertical-text">
          ESTD. 2026 // SYSTEM_DESIGN
        </div>
      </motion.div>
    </section>
  );
};

export default DetailPage;