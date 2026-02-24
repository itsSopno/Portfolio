import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiLinkedin, FiGithub, FiPhoneCall, FiArrowUpRight } from 'react-icons/fi';
import "./contact-blueprint.css";

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_n2mvuk9', 'template_3gki68h', form.current, 'aEjem3aBcHbTwlbbr')
      .then(() => {
        setIsSending(false);
        setFeedback("Protocol: Success // Message Transmitted");
        form.current.reset();
        setTimeout(() => setFeedback(""), 5000);
      }, () => {
        setIsSending(false);
        setFeedback("Error: Transmission Failed");
      });
  };

  return (
    <section id="contact" className="contact-blueprint-section">
      <div className="contact-container">
        {/* Left Panel: Information */}
        <div className="contact-info-panel">
          <div>
            <span className="contact-label">Module_05 // Communication</span>
            <h2 className="contact-title">Establish<br />Contact</h2>
            <p className="text-white/40 text-xs uppercase tracking-widest max-w-xs leading-relaxed mb-12">
              Ready to initialize new collaborations or discuss architectural systems.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {[
              { label: "Email_Link", val: "nabiltalukderbd@gmail.com", href: "mailto:nabiltalukderbd@gmail.com", icon: <FiMail /> },
              { label: "Network_ID", val: "LinkedIn", href: "https://www.linkedin.com/in/nabil-hasan-sopno", icon: <FiLinkedin /> },
              { label: "Secure_Line", val: "+880 1779 616 662", href: "tel:+8801779616662", icon: <FiPhoneCall /> },
              { label: "Codebase_Root", val: "GitHub", href: "https://github.com/itsSopno", icon: <FiGithub /> },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-link-item group">
                <span className="link-icon">{link.icon}</span>
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-20 group-hover:opacity-100 transition-opacity">{link.label}</span>
                  <span className="text-sm font-bold tracking-tight uppercase group-hover:text-[#c6ff33] transition-colors">{link.val}</span>
                </div>
                <FiArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          <div className="mt-20 border-t border-white/5 pt-10">
            <span className="text-[8px] font-mono opacity-10">LOC: 23.8103° N, 90.4125° E // SYNC: GLOBAL</span>
          </div>
        </div>

        {/* Right Panel: Protocol Submission */}
        <div className="contact-form-panel">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <div className="relative">
              <span className="blueprint-label">Initial_User_Source</span>
              <input type="text" name="from_name" required placeholder="IDENTIFY_NAME" className="blueprint-input" />
            </div>

            <div className="relative">
              <span className="blueprint-label">Communication_Endpoint</span>
              <input type="email" name="user_email" required placeholder="USER_@_DOMAIN.COM" className="blueprint-input" />
            </div>

            <div className="relative">
              <span className="blueprint-label">Transmission_Payload</span>
              <textarea name="message" required rows="4" placeholder="DESCRIBE_SYSTEM_REQUIREMENTS..." className="blueprint-input resize-none" />
            </div>

            <button type="submit" disabled={isSending} className="blueprint-btn">
              {isSending ? "INITIALIZING..." : <>Transmit_Protocol <FiSend /></>}
            </button>

            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 border border-[#c6ff33]/20 bg-[#c6ff33]/5 text-[#c6ff33] text-[10px] font-black tracking-[0.2em] uppercase text-center"
                >
                  {feedback}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
