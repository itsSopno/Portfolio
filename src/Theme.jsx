import { useState } from "react";
import { motion } from "framer-motion";
import { Html5, Css3, Javascript, ReactLogo, GitBranch } from "lucide-react";

// All techs
const techs = [
  { name: "HTML5", icon: Html5 },
  { name: "CSS3", icon: Css3 },
  { name: "JavaScript", icon: Javascript },
  { name: "React", icon: ReactLogo },
  { name: "Git", icon: GitBranch },
];

// Projects
const projects = [
  {
    name: "Portfolio Website",
    techs: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    name: "E-commerce App",
    techs: ["React", "CSS3", "Git"],
  },
  {
    name: "Blog Platform",
    techs: ["HTML5", "CSS3", "JavaScript", "Git"],
  },
];

const ProjectTechSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="bg-black text-zinc-300 px-6 py-28">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-extrabold text-white mb-16">
          Projects & Technologies
        </h2>

        {/* Tech Icons */}
        <div className="flex flex-wrap gap-6 mb-16">
          {techs.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              animate={{
                opacity:
                  !activeProject || activeProject.techs.includes(name) ? 1 : 0.2,
                scale: activeProject?.techs.includes(name) ? 1.1 : 1,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center w-20 h-20 bg-zinc-950 rounded-xl border border-zinc-800 p-4"
            >
              <Icon size={32} className="text-lime-400 mb-2" />
              <span className="text-white text-sm">{name}</span>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              onHoverStart={() => setActiveProject(project)}
              onHoverEnd={() => setActiveProject(null)}
              onTap={() => setActiveProject(project)} // Mobile tap
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 cursor-pointer
                         hover:border-lime-400/40 transition-colors"
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-zinc-400 text-sm">
                {project.techs.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTechSection;
