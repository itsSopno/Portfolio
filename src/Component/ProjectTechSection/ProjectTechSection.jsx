import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3 } from "react-icons/fa6";
import { RiHtml5Line } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import './project.css'
import Technologies from "../Tech/Tech";
const techs = [
  { name: "HTML5", icon: RiHtml5Line },
  { name: "CSS3", icon: FaCss3 },
  { name: "JavaScript", icon: TbBrandJavascript },
  { name: "React", icon: IoLogoReact },
  { name: "Git", icon: SiGithub },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: DiMongodb },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hoverCard = {
  rest: {
    y: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    y: -6,
    boxShadow: "0 25px 50px rgba(163,230,53,0.12)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TechnologyOnly = () => {
  return (
    <>
    <section className="text-zinc-300 px-4 sm:px-6 py-28 flex flex-col justify-center items-center">
      <div className="max-w-6xl pl-[40px]">

        {/* Section Title mx-auto*/}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
           style={{ fontFamily: "Smooch Sans" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-[100px] font-extrabold text-white mb-20"
        >
          TECHNOLOGIES I USE
        </motion.h2>

        {/* Tech Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {techs.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={item}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={hoverCard}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden bg-zinc-950 border border-zinc-800
                         rounded-2xl p-6 flex flex-col items-center justify-center transition-colors"
            >
              {/* Glow effect */}
              <div className="
                pointer-events-none absolute inset-0
                opacity-0 hover:opacity-100 transition duration-700
                bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.15),transparent_60%)]
              " />

              <Icon size={32} className="text-lime-400 mb-4" />
              <p className="text-sm sm:text-base font-medium text-white">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <section>
        <Technologies></Technologies>
    </section>
    </>
  );
};

export default TechnologyOnly;
