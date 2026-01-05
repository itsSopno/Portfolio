// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const DetailPage = () => {
//   const [projects, setProjects] = useState([]); // নাম পরিবর্তন করে projects (Array) রাখা হয়েছে
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("https://server-1-1-6g3a.onrender.com/project");
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch projects data');
//         }
        
//         const data = await response.json();
//         setProjects(Array.isArray(data) ? data : [data]); 
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="tracking-[0.5em] uppercase text-xs animate-pulse">Loading All Projects...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center p-10 text-center">
//         <div>
//           <h2 className="text-xl mb-4">Error</h2>
//           <p className="text-gray-400 mb-6">{error}</p>
//           <Link to="/" className="text-xs uppercase tracking-widest text-white border-b border-white pb-1">← Back to HOME</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans">
      
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full p-8 z-50 bg-gradient-to-b from-[#0a0a0a] to-transparent">
//         <Link to="/" className="text-[10px] uppercase tracking-[0.4em] text-gray-500 hover:text-white transition-all">
//           ← Back to HOME
//         </Link>
//       </nav>

//       {/* Projects Wrapper */}
//       <div className="pt-20">
//         {projects.map((project, index) => (
//           <section key={project._id || index} className="border-b border-white/5 last:border-none mb-32">
//             <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              
//               {/* Header Section */}
//               <motion.div 
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={staggerContainer}
//                 className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10 pb-16"
//               >
//                 {/* Meta Info */}
//                 <motion.div variants={fadeInUp} className="md:col-span-3 space-y-8 order-2 md:order-1 border-l border-white/10 pl-6">
//                   <div>
//                     <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 mb-1">Year</p>
//                     <p className="text-sm italic text-gray-400">{project.year}</p> 
//                   </div>
//                   <div>
//                     <p className="text-[9px] uppercase tracking-[0.3em] text-gray-600 mb-2">Links</p>
//                     <div className="flex flex-col gap-2">
//                         <a href={project.live} target="_blank" rel="noreferrer" className="text-xs hover:line-through transition-all w-fit">Live Project ↗</a>
//                         <a href={project.clientRepo} target="_blank" rel="noreferrer" className="text-xs hover:line-through transition-all w-fit">Source Code ↗</a>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Title & Description */}
//                 <motion.div variants={fadeInUp} className="md:col-span-9 order-1 md:order-2">
//                   {/* <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-10">
//                     {project.title}
//                   </h2> */}
//                    <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-10">
//               {project.title.split('–')[0]} <br />
//               <span className="text-gray-600 font-light lowercase text-4xl md:text-6xl tracking-tight">
//                 {project.title.split('–')[1] || "Case Study"}
//               </span>
//             </h1>
//                   <p className="max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
//                     {project.description}
//                   </p>
//                 </motion.div>
//               </motion.div>

//               {/* Image Section */}
//               <motion.div 
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1 }}
//                 className="mb-20 overflow-hidden rounded-xl bg-white/5 p-2 md:p-6"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-auto rounded shadow-2xl"
//                 />
//               </motion.div>

//               {/* Stack & Strategy */}
//               <motion.div 
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={staggerContainer}
//                 className="grid md:grid-cols-12 gap-10 pb-20"
//               >
//                 <motion.div variants={fadeInUp} className="md:col-span-7">
//                   <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-600 mb-6 font-bold italic underline decoration-gray-800 underline-offset-8">The Approach</h3>
//                   <p className="text-xl text-gray-300 font-light leading-snug">
//                     {project.use}
//                   </p>
//                 </motion.div>

//                 <motion.div variants={fadeInUp} className="md:col-span-4 md:col-start-9">
//                   <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-600 mb-6 font-bold italic underline decoration-gray-800 underline-offset-8">Core Tech</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technology?.map((tech, i) => (
//                       <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-widest text-gray-400">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </section>
//         ))}
//       </div>

//       <footer className="py-20 text-center">
//          <div className="text-[9px] uppercase tracking-[1em] text-gray-800">End of Portfolio</div>
//       </footer>
//     </main>
//   );
// };

// export default DetailPage;
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
        const response = await fetch("https://server-1-1-6g3a.onrender.com/project");
        const data = await response.json();
        setProjects(Array.isArray(data) ? data : [data]);
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
              {project.title.split('–')[0]}
            </h2>
            <div className="flex gap-4">
              <span className="px-3 py-1 border border-white/20 text-[9px] rounded-full uppercase italic">{project.year}</span>
              <span className="px-3 py-1 border border-white/20 text-[9px] rounded-full uppercase">Stable_Build</span>
            </div>
          </div>

          <div className="pt-10 lg:pt-0 space-y-6">
            <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-xs">
              {project.description}
            </p>
            <div className="flex flex-col gap-3">
               <a href={project.live} target="_blank" className="text-[10px] tracking-[0.4em] underline decoration-white/20 hover:decoration-white transition-all uppercase">Open_Live_System</a>
               <a href={project.clientRepo} target="_blank" className="text-[10px] tracking-[0.4em] opacity-40 hover:opacity-100 transition-all uppercase">View_Source_Code</a>
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
               src={project.image} 
               alt={project.title} 
               className="w-full h-auto object-cover"
             />
             {/* Overlay Text on Hover */}
             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-[10px] tracking-[1em] translate-y-4 group-hover:translate-y-0 transition-transform font-bold">DISCOVER DETAILS</p>
             </div>
          </div>
          
          {/* Tech Stack floating below image */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 opacity-30">
            {project.technology?.map((tech, i) => (
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
            {project.use}
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