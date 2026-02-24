import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "HOME", path: "/" },
  { name: "INTRO", path: "/about" },
  { name: "PROJECTS", path: "/projectt" },
  // {name:"Detail" , path:"/detail"}
];

const RekorderNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const containerVars = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end gap-4">
      <motion.div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-sm p-4 flex flex-col items-center gap-6 shadow-2xl"
      >
        <div className="flex flex-col items-center gap-1 opacity-20">
          <div className="w-1.5 h-1.5 bg-[#c6ff33] rounded-full animate-pulse" />
          <div className="w-[1px] h-10 bg-white" />
        </div>

        <button className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black tracking-[0.4em] uppercase text-white/40 hover:text-[#c6ff33] transition-colors duration-500">
          Menu_Access
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-6 py-4 overflow-hidden"
            >
              {menu.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group relative flex items-center justify-center p-2"
                  >
                    <span className={`text-[9px] font-black tracking-widest uppercase transition-all duration-500 ${active ? "text-[#c6ff33]" : "text-white/20 group-hover:text-white"} `}>
                      {item.name}
                    </span>
                    {active && (
                      <motion.div
                        layoutId="nav-dot"
                        className="absolute -right-2 w-1 h-1 bg-[#c6ff33] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col items-center gap-1 opacity-20">
          <div className="w-[1px] h-10 bg-white" />
          <div className="w-1.5 h-1.5 border border-white rounded-full" />
        </div>
      </motion.div>
    </nav>
  );
};

export default RekorderNavbar;