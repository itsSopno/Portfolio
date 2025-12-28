import { motion } from "framer-motion";

const TriangleLoader = () => {
  const triangleVariants = {
    hidden: { scale: 0, rotate: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      rotate: 360,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 1,
        yoyo: Infinity, // repeat infinitely
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="relative w-32 h-32 flex justify-center items-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={triangleVariants}
            initial="hidden"
            animate="visible"
            className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#c6ff33]"
            style={{
              transformOrigin: "50% 80%", // rotate around bottom center
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TriangleLoader;
