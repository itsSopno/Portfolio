// 
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const EducationAndHobbies = () => {
  return (
    <section className="min-h-screen text-white py-32 px-6 font-[400]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={reveal}
          className="mb-24 overflow-hidden"
          style={{ fontFamily: "Smooch Sans" }} 
        >
          <h1 className="text-[15vw] leading-none uppercase tracking-tighter opacity-10 select-none -mb-10">
            PROFILE
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-20 bg-lime-400" />
            <span className="text-xs tracking-[0.6em] text-lime-400 uppercase font-bold">The Blueprint & The Soul</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: EDUCATION & PERSONALITY */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* PERSONALITY STATEMENT - NEW ADDITION */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={reveal}
               style={{ fontFamily: "Smooch Sans" }} 
              className="mb-16"
            >
              <h2 className="text-2xl tracking-[0.3em] uppercase mb-6 border-b border-white/10 pb-4 w-fit">Personality _</h2>
              <p className="text-3xl md:text-4xl leading-tight font-light text-zinc-300 italic">
                "I design with <span className="text-white font-bold">purpose</span>, build with <span className="text-lime-400 font-bold italic">care</span>, and focus on clean, user-first experiences."
              </p>
              <p className="mt-6 text-zinc-500 tracking-widest uppercase text-xs">
                Curious • Detail-focused • UI Enthusiast
              </p>
            </motion.div>

            <h2 className="text-2xl tracking-[0.3em] uppercase mb-10 border-b border-white/10 pb-4 w-fit">Education_Log</h2>
            
            {/* SPI Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="group p-8 border border-white/5 bg-zinc-950/40 relative overflow-hidden transition-all"
              style={{ fontFamily: "Smooch Sans" }} 
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-lime-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase">Academic Foundation | 2022 - Present</span>
              <h3 className="text-3xl md:text-5xl uppercase mt-2 mb-4">Diploma in Engineering</h3>
              <p className="text-lime-400/80 mb-6 text-sm tracking-widest uppercase font-bold">Computer Science & Technology (CST)</p>
              <p className="font-sans text-zinc-400 leading-relaxed text-base">
                Currently honing my technical skills at <span className="text-white">Shariatpur Polytechnic Institute</span>. 
                My focus lies at the intersection of programming logic, database architecture, and the future of web ecosystems.
              </p>
            </motion.div>

            {/* Programming Hero Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="group p-8 border border-white/5 bg-zinc-950/40 relative overflow-hidden transition-all"
              style={{ fontFamily: "Smooch Sans" }} 
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase">Professional Skillset</span>
              <h3 className="text-3xl md:text-5xl uppercase mt-2 mb-4">MERN Stack Developer</h3>
              <p className="text-zinc-500 mb-6 text-sm tracking-widest uppercase italic underline decoration-zinc-800 underline-offset-8">Programming Hero Certified</p>
              <p className="font-sans text-zinc-400 leading-relaxed text-base">
                Transformed from a curious learner to a developer through rigorous, project-based training. 
                I specialize in crafting <span className="text-white font-medium">high-performance interfaces</span> using React, Node.js, and modern CSS frameworks.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: HOBBIES / GAMING */}
          <div className="lg:col-span-5 space-y-10 lg:mt-32">
            <h2 className="text-2xl tracking-[0.3em] uppercase mb-10 border-b border-white/10 pb-4 w-fit">Hobby_Systems</h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-lime-400 p-8 rounded-sm text-black flex flex-col justify-between min-h-[450px]"
              style={{ fontFamily: "Smooch Sans" }} 
            >
              <div>
                <h3 className="text-5xl font-extrabold uppercase leading-none mb-6">Digital_ <br/> Escape</h3>
                <p className="text-sm font-bold uppercase tracking-widest mb-10 opacity-70">Strategic Thinking & Art Appreciation</p>
              </div>

              <div className="space-y-6">
                <div className="border-t border-black/20 pt-6">
                  <p className="text-[9px] uppercase tracking-widest font-bold mb-2">Competitive_Focus</p>
                  <p className="text-xl uppercase font-bold tracking-tighter">Valorant (Tactical Precision)</p>
                </div>
                
                <div className="border-t border-black/20 pt-6">
                  <p className="text-[9px] uppercase tracking-widest font-bold mb-2">Visual_Storytelling (AAA)</p>
                  <div className="flex flex-col gap-1">
                    <span className="text-lg uppercase font-bold tracking-tighter leading-none italic">Red Dead Redemption 2</span>
                    <span className="text-lg uppercase font-bold tracking-tighter leading-none italic">Ghost of Tsushima</span>
                    <span className="text-lg uppercase font-bold tracking-tighter leading-none italic">Black Myth: Wukong</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-end">
                 <div className="text-[8px] leading-tight font-bold uppercase opacity-60">
                    Gaming fuels my <br/> attention to detail.
                 </div>
                 <span className="text-[8px] border border-black px-2 py-1 font-bold uppercase tracking-widest">Active_Session</span>
              </div>
            </motion.div>

            {/* Gaming Quote */}
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] leading-relaxed text-center px-4">
              "Every frame is a choice, every choice is a build."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationAndHobbies;