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
    <section className="min-h-screen  text-white py-32 px-6  font-[400]">
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
            <span className="text-xs tracking-[0.6em] text-lime-400 uppercase font-bold">Background & Interests</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: EDUCATION (8 Units) */}
          <div className="lg:col-span-7 space-y-10">
            <h2 className="text-2xl tracking-[0.3em] uppercase mb-10 border-b border-white/10 pb-4 w-fit">Education_Log</h2>
            
            {/* SPI Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="group p-8 border border-white/5 bg-zinc-950/40 relative overflow-hidden transition-all"
                style={{ fontFamily: "Smooch Sans" }} 
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-lime-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase">2022 - Ongoing</span>
              <h3 className="text-3xl md:text-5xl uppercase mt-2 mb-4">Diploma in Engineering</h3>
              <p className="text-lime-400/80 mb-6 text-sm tracking-widest uppercase">Computer Science & Technology (CST)</p>
              <p className="font-sans text-zinc-400 leading-relaxed text-base">
                Studying at <span className="text-white">Shariatpur Polytechnic Institute</span>. 
                   My focus is on programming fundamentals, databases, and modern web technologies. 
              </p>
            </motion.div>

            {/* Programming Hero Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="group p-8 border border-white/5 bg-zinc-950/40 relative overflow-hidden transition-all"
                style={{ fontFamily: "Smooch Sans" }} 
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] text-zinc-500 tracking-[0.4em] uppercase">Web Development Journey </span>
              <h3 className="text-3xl md:text-5xl uppercase mt-2 mb-4">MERN Stack Developer</h3>
              <p className="text-zinc-500 mb-6 text-sm tracking-widest uppercase italic underline decoration-zinc-800 underline-offset-8">Programming Hero</p>
              <p className="font-sans text-zinc-400 leading-relaxed text-base">
              I started my web development journey with<span className="text-white">HTML & CSS</span>. Later, I joined the{" "}
            <span className="text-white">Programming Hero</span> course, where I
 learned through hands-on projects and continuous practice. 
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: HOBBIES / GAMING (5 Units) */}
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-2xl tracking-[0.3em] uppercase mb-10 border-b border-white/10 pb-4 w-fit">Hobby_Systems</h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-lime-400 p-8 rounded-sm text-black flex flex-col justify-between min-h-[400px]"
                style={{ fontFamily: "Smooch Sans" }} 
            >
              <div>
                <h3 className="text-5xl font-bold uppercase leading-none mb-6">Digital_ <br/> Escape</h3>
                <p className="text-sm font-bold uppercase tracking-widest mb-10 opacity-70">Esports & AAA Experiences</p>
              </div>

              <div className="space-y-6">
                <div className="border-t border-black/20 pt-6">
                  <p className="text-[9px] uppercase tracking-widest font-bold mb-2">Competitive_Title</p>
                  <p className="text-xl uppercase font-bold tracking-tighter">Valorant</p>
                </div>
                
                <div className="border-t border-black/20 pt-6">
                  <p className="text-[9px] uppercase tracking-widest font-bold mb-2">Immersive_AAA_Masterpieces</p>
                  <div className="flex flex-col gap-1">
                    <span className="text-lg uppercase font-bold tracking-tighter leading-none">Red Dead Redemption 2</span>
                    <span className="text-lg uppercase font-bold tracking-tighter leading-none">Ghost of Tsushima</span>
                    <span className="text-lg uppercase font-bold tracking-tighter leading-none">Black Myth: Wukong</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
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