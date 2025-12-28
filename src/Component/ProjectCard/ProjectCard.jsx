import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project._id}`} className="group block">
      <div className="relative overflow-hidden rounded-sm bg-[#111] aspect-[4/3]">
        {/* Project Image */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={project.image}
          alt={project.title}
           style={{ fontFamily: "Smooch Sans" }}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Overlay with subtle info (optional) */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Project Text Info */}
      <div className="mt-8 flex justify-between items-start">
        <div className="max-w-[80%]">
          <h3 className="text-3xl font-bold uppercase tracking-tighter group-hover:italic transition-all">
            {project.title.split('–')[0]}
          </h3>
          <p className="text-sm text-gray-500 mt-2 font-light uppercase tracking-widest leading-tight">
            {project.technology.slice(0, 3).join(" • ")}
          </p>
        </div>
        
        <div className="text-2xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          ↗
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;