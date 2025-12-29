import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            NABIL HASAN
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Frontend Developer focused on building clean, scalable, and
            high-performance web applications.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:mx-auto"
        >
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/project">Projects</Link></li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:ml-auto"
        >
          <h4 className="text-white font-medium mb-3">Connect</h4>
          <div className="flex gap-4">
            {[
              { Icon: Github, link: "https://github.com/itsSopno" },
              { Icon: Linkedin, link: "https://linkedin.com/in/yourname" },
              { Icon: Mail, link: "nabiltalukderbd@gmail.com" },
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full border border-zinc-800 hover:border-zinc-600 transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500"
      >
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
