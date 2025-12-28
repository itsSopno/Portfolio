// import { motion } from "framer-motion";

// const TriangleLoader = () => {
//   const triangleVariants = {
//     hidden: { scale: 0, rotate: 0, opacity: 0 },
//     visible: (i) => ({
//       scale: 1,
//       rotate: 360,
//       opacity: 1,
//       transition: {
//         delay: i * 0.15,
//         duration: 1,
//         yoyo: Infinity, // repeat infinitely
//         ease: "easeInOut",
//       },
//     }),
//   };

//   return (
//     <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
//       <div className="relative w-32 h-32 flex justify-center items-center">
//         {[0, 1, 2].map((i) => (
//           <motion.div
//             key={i}
//             custom={i}
//             variants={triangleVariants}
//             initial="hidden"
//             animate="visible"
//             className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#c6ff33]"
//             style={{
//               transformOrigin: "50% 80%", // rotate around bottom center
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TriangleLoader;
import { motion } from "framer-motion";

const TriangleLoader = () => {
  
  const triangleVariants = {
    animate: (i) => ({
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      rotate: [0, 120, 240, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col justify-center items-center z-[10000]">
      {/* Background Subtle Glow */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full" />

      <div className="relative w-40 h-40 flex justify-center items-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={triangleVariants}
            animate="animate"
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: "30px solid transparent",
              borderRight: "30px solid transparent",
              // এখানে আপনার থিম কালার (Indigo) এবং বর্ডার থিকনেস অ্যাডজাস্ট করা হয়েছে
              borderBottom: i === 0 ? "52px solid #6366f1" : i === 1 ? "52px solid #a855f7" : "52px solid #ec4899",
              filter: "blur(1px) drop-shadow(0 0 15px rgba(99, 102, 241, 0.5))",
              mixBlendMode: "screen",
            }}
          />
        ))}

        {/* Center Core Dot */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_20px_#fff]"
        />
      </div>

      {/* Futuristic Loading Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.8em] text-zinc-500 font-bold">
          System Initializing
        </span>
        <div className="flex gap-1">
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, delay: d * 0.2 }}
              className="w-1 h-1 bg-indigo-500 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TriangleLoader;