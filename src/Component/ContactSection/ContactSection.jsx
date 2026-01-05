import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare,FiLinkedin,FiGithub,FiPhoneCall,FiExternalLink } from 'react-icons/fi'; // icons use korle beshi bhalo lagbe
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    // ... আপনার আগের emailjs লজিক ঠিক আছে ...
    emailjs.sendForm('service_n2mvuk9', 'template_3gki68h', form.current, 'aEjem3aBcHbTwlbbr')
    .then(() => {
        setIsSending(false);
        setFeedback("Message Sent Successfully!");
        form.current.reset();
        setTimeout(() => setFeedback(""), 5000);
    }, () => {
        setIsSending(false);
        setFeedback("Error! Try again.");
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden flex justify-center items-center px-4 bg-[#0a0a0a]">
      {/* Background Glow - background a ekta neon vibe dibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c6ff33]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl grid md:grid-cols-2 bg-white/[0.02] border border-white/10 rounded-[2rem] backdrop-blur-2xl overflow-hidden shadow-2xl"
      >
        {/* Left Side: Info */}
        <div className="p-8 md:p-12 bg-[#c6ff33]/5 flex flex-col justify-between">
          <div>
            <h2 className="text-[#c6ff33] text-sm tracking-[0.4em] font-bold uppercase mb-4">Contact</h2>
            <h3 className="text-white text-6xl font-bold leading-tight" style={{ fontFamily: "Smooch Sans" }}>
              LET'S <br /> CREATE <br /> SOMETHING <br /> NEW.
            </h3>
          </div>
        <div className="mt-12 space-y-6">
  {/* Email */}
  <a 
    href="mailto:nabiltalukderbd@gmail.com" 
    className="group flex items-center gap-4 text-white/60 hover:text-[#c6ff33] transition-colors"
  >
    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#c6ff33]/10 transition-colors">
      <FiMail className="text-[#c6ff33] text-xl" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-white/30">Email Me</span>
      <span className="text-sm font-medium">nabiltalukderbd@gmail.com</span>
    </div>
  </a>

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/nabil-hasan-sopno" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex items-center gap-4 text-white/60 hover:text-[#c6ff33] transition-colors"
  >
    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#c6ff33]/10 transition-colors">
      <FiLinkedin className="text-[#c6ff33] text-xl" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-white/30">Connect</span>
      <span className="text-sm font-medium flex items-center gap-1">LinkedIn <FiExternalLink className="text-[10px]" /></span>
    </div>
  </a>

  {/* Phone */}
  <a 
    href="tel:+8801779616662" 
    className="group flex items-center gap-4 text-white/60 hover:text-[#c6ff33] transition-colors"
  >
    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#c6ff33]/10 transition-colors">
      <FiPhoneCall className="text-[#c6ff33] text-xl" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-white/30">Call Anytime</span>
      <span className="text-sm font-medium">01779-616662</span>
    </div>
  </a>

  {/* GitHub */}
  <a 
    href="https://github.com/itsSopno" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group flex items-center gap-4 text-white/60 hover:text-[#c6ff33] transition-colors"
  >
    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#c6ff33]/10 transition-colors">
      <FiGithub className="text-[#c6ff33] text-xl" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-white/30">Check Projects</span>
      <span className="text-sm font-medium flex items-center gap-1">GitHub <FiExternalLink className="text-[10px]" /></span>
    </div>
  </a>
</div>
        </div>

        {/* Right Side: Form */}
        <form ref={form} onSubmit={sendEmail} className="p-8 md:p-12 flex flex-col gap-6 bg-black/40 justify-center npm">
          <div className="relative group">
            <FiUser className="absolute left-0 top-4 text-white/20 group-focus-within:text-[#c6ff33] transition-colors" />
            <input 
              type="text" name="from_name" required placeholder="Full Name"
              className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-white outline-none focus:border-[#c6ff33] transition-all placeholder:text-white/10"
            />
          </div>

          <div className="relative group">
            <FiMail className="absolute left-0 top-4 text-white/20 group-focus-within:text-[#c6ff33] transition-colors" />
            <input 
              type="email" name="user_email" required placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-white outline-none focus:border-[#c6ff33] transition-all placeholder:text-white/10"
            />
          </div>

          <div className="relative group">
            <FiMessageSquare className="absolute left-0 top-4 text-white/20 group-focus-within:text-[#c6ff33] transition-colors" />
            <textarea 
              name="message" required rows="3" placeholder="Project Details"
              className="w-full bg-transparent border-b border-white/10 py-4 pl-8 text-white outline-none focus:border-[#c6ff33] transition-all resize-none placeholder:text-white/10"
            />
          </div>

          <button 
            type="submit" disabled={isSending}
            className="group relative mt-4 overflow-hidden bg-[#c6ff33] text-black font-bold py-4 rounded-xl transition-all active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSending ? "SENDING..." : <>SEND MESSAGE <FiSend /></>}
            </span>
            <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                style={{ opacity: 0.2 }}
            />
          </button>

          <AnimatePresence>
            {feedback && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0 }}
                className={`text-center text-xs font-bold uppercase tracking-widest ${feedback.includes("Success") ? "text-[#c6ff33]" : "text-red-500"}`}
              >
                {feedback}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;