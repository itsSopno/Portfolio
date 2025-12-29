import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "HOME", path: "/" },
  { name: "INTRO", path: "/about" },
  { name: "PROJECTS", path: "/projectt" },
];

const RekorderNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Animation variants for the container
  const containerVars = {
    initial: { width: 0, opacity: 0 },
    animate: { 
      width: "auto", 
      opacity: 1,
      transition: { 
        width: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.2 },
        staggerChildren: 0.1, // This creates the "one-by-one" reveal
        delayChildren: 0.2
      }
    },
    exit: { 
      width: 0, 
      opacity: 0,
      transition: { 
        width: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.1 }
      }
    }
  };

  // Animation variants for individual links
  const itemVars = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        layout // Smoothly animates the layout change when the pill expands
        className="flex items-center bg-[#c6ff33] rounded-full px-5 py-2.5 shadow-[0_10px_30px_rgba(198,255,51,0.3)] border border-white/20"
      >
        {/* Brand/Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-black text-sm font-black tracking-tighter select-none px-2"
        >
          PORTFOLIO
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="overflow-hidden flex items-center"
            >
              <div className="h-4 w-[1px] bg-black/20 ml-4 mr-2" /> {/* Divider */}
              
              <div className="flex items-center gap-1">
                {menu.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <motion.div key={item.name} variants={itemVars}>
                      <Link
                        to={item.path}
                        className="relative px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase transition-colors"
                      >
                        {active && (
                          <motion.span
                            layoutId="active-pill"
                            className="absolute inset-0 bg-black rounded-full"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className={`relative z-10 ${active ? "text-[#c6ff33]" : "text-black/70 hover:text-black"}`}>
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default RekorderNavbar;