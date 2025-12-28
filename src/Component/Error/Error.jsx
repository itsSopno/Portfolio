import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black px-6">
      
      {/* Error Code */}
      <motion.h1
        className="text-[120px] sm:text-[160px] md:text-[200px] font-bold text-white mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Error Message */}
      <motion.p
        className="text-white/80 text-center text-lg sm:text-xl md:text-2xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      {/* Home Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Go Back Home
      </motion.button>

    </div>
  );
};

export default ErrorPage;
