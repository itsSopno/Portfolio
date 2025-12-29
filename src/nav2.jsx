import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import './nav.css'
const menu = [
  { name: "HOME", path: "/" },
  { name: "INTRO", path: "/about" },
  { name: "PROJECT", path: "/projectt" },
];

const RekorderNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className=" navbar fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        onMouseEnter={() => window.innerWidth >= 768 && setOpen(true)}
        onMouseLeave={() => window.innerWidth >= 768 && setOpen(false)}
        className="flex items-center bg-[#c6ff33] backdrop-blur-md rounded-full px-6 py-3 shadow-xl"
      >
        {/* Logo */}
        <button
          onClick={() => setOpen(!open)}
          className="text-black text-lg font-semibold select-none"
        >
          PROTFOLIO
        </button>

        {/* Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden ml-6"
            >
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                {menu.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="relative px-4 py-2 text-xs md:text-sm font-medium"
                    >
                      {active && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 bg-black/50 rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      <span className={`relative z-10 ${active ? "text-white" : "text-black/80 hover:text-black"}`}>
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RekorderNavbar;
