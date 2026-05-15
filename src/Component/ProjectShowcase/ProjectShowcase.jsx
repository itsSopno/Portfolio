import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./marquee.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    fetch("https://server-1-1-6g3a.onrender.com/project")
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        if (data.success) {
          setProjects(data.projects);
        }
        setIsLoading(false); 
=======
        if (isMounted) {
          const projectData = Array.isArray(data) ? data : (data.data || [data]);
          setProjects(projectData);
          setIsLoading(false);
        }
>>>>>>> 7d76c30eb4258a5690c30edcd6a45ed43d5a1489
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        if (isMounted) setIsLoading(false);
      });
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (!isLoading && projects.length > 0) {
      const scrollWidth = sectionRef.current.offsetWidth - window.innerWidth;
      const pin = gsap.to(
        sectionRef.current,
        {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, [isLoading, projects]);

  if (isLoading) return (
    <div className="h-screen flex items-center justify-center bg-[#050505]">
      <span className="text-[10px] font-black tracking-[0.5em] animate-pulse">SYNCING_PROJECT_DATA...</span>
    </div>
  );

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="projects-marquee-container">
          {/* Header Module */}
          <div className="flex-shrink-0 w-screen h-full flex flex-col justify-center px-10">
            <h2 className="text-[20vw] font-black italic leading-[0.8] tracking-tighter uppercase opacity-5 select-none absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none" style={{ fontFamily: "Smooch Sans" }}>
              Blueprint
            </h2>
            <div className="z-10">
              <span className="text-[10px] font-black tracking-[0.5em] text-[#c6ff33] mb-4 block">MODULE_02 // WORKS</span>
              <h1 className="text-[10vw] font-black italic leading-[0.85] tracking-tight uppercase" style={{ fontFamily: "Smooch Sans" }}>
                Selected<br />Architecture
              </h1>
            </div>
            <div className="mt-20 border-l border-white/10 pl-6 max-w-xs opacity-50">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                Technical showcase of production-ready systems and interactive experiences.
              </p>
            </div>
          </div>

          {/* Project Loop */}
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="marquee-card group"
              whileHover={{ y: -10 }}
            >
              <img src={project.image} alt={project.title} className="card-image" />
              <div className="card-info">
                <span className="card-id">PRJ_0{index + 1}</span>
                <h3 className="card-title">{project.title}</h3>
              </div>
              <div className="card-tech">
                {project.category && (
                  <span className="tech-tag border-[#c6ff33]/30 text-[#c6ff33]">{project.category}</span>
                )}
                <span className="tech-tag">Blueprint_V.01</span>
              </div>

              {/* Overlay Details on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-[#c6ff33]/5 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="border border-[#c6ff33] p-10 flex flex-col items-center gap-6">
                  <span className="text-[10px] font-black tracking-[0.4em] text-[#c6ff33]">INITIALIZE_LINK</span>
                  <div className="flex gap-4">
                    <a href={project.live} target="_blank" className="px-6 py-3 bg-[#c6ff33] text-black font-black text-[10px] tracking-widest uppercase">Live_Demo</a>
                    <a href={project.clientRepo} target="_blank" className="px-6 py-3 border border-white/20 text-white font-black text-[10px] tracking-widest uppercase">Source_Code</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* End Module */}
          <div className="flex-shrink-0 w-screen h-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-6 opacity-20">
              <div className="w-[1px] h-40 bg-white" />
              <span className="text-[10px] font-black tracking-[1em] uppercase">End_Of_Transmission</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
