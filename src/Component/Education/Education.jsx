import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const card = {
  rest: {
    y: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    y: -6,
    boxShadow: "0 30px 60px rgba(163,230,53,0.12)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Education = () => {
  return (
    <section className="education min-h-screen bg-black text-zinc-300 px-4 sm:px-6 py-24">
      <div className="max-w-6xl pl-[40px]">

        {/* Title */}
        <motion.h1
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
            style={{ fontFamily: "Smooch Sans" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[150px] 
                     font-extrabold text-white mb-20"

        >
          EDUCATION
        </motion.h1>

        {/* Card */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          variants={card}
            style={{ fontFamily: "Smooch Sans" }}
          className="
            relative overflow-hidden
            bg-zinc-950 border border-zinc-800
            rounded-2xl p-6 sm:p-10 mb-16
          "
        >
          {/* Glow layer */}
          <div className="
            pointer-events-none absolute inset-0
            opacity-0 hover:opacity-100 transition duration-700
            bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.12),transparent_60%)]
          " />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
            Diploma in Engineering
          </h2>

          <p className="text-lime-400 mt-2 text-base sm:text-lg">
            Computer Science & Technology (CST)
          </p>

          <p className="mt-6 text-sm sm:text-base text-zinc-400 leading-relaxed">
            I am currently pursuing a <span className="text-white">Diploma in Engineering</span> 
            in <span className="text-white">Computer Science & Technology</span> at{" "}
            <span className="text-white">Shariatpur Polytechnic Institute</span>.
            My focus is on programming fundamentals, databases, and modern web technologies.
          </p>
        </motion.div>

        {/* Journey */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          variants={card}
            style={{ fontFamily: "Smooch Sans" }}
          className="
            relative overflow-hidden
            bg-zinc-950 border border-zinc-800
            rounded-2xl p-6 sm:p-10 mb-16
          "
        >
          <div className="
            pointer-events-none absolute inset-0
            opacity-0 hover:opacity-100 transition duration-700
            bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.12),transparent_60%)]
          " />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6">
            Web Development Journey
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            I started my web development journey with{" "}
            <span className="text-white">HTML & CSS</span>. Later, I joined the{" "}
            <span className="text-white">Programming Hero</span> course, where I
            learned through hands-on projects and continuous practice.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
