import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_n2mvuk9', 
      'template_3gki68h', 
      form.current, 
      'aEjem3aBcHbTwlbbr'
    )
    .then((result) => {
        setIsSending(false);
        setFeedback("Success! Your message reached Nabil.");
        form.current.reset();
        setTimeout(() => setFeedback(""), 5000); 
    }, (error) => {
        setIsSending(false);
        setFeedback("Something went wrong. Please try again.");
        console.log(error.text);
    });
  };

  return (
    <section id="contact" className="py-24  flex flex-col items-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-xl bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl"
      >
        <div className="mb-10 text-center">
          <h2 className="text-[#c6ff33] text-sm tracking-[0.4em] font-bold uppercase mb-2">Hire Me</h2>
          <h3 className="text-white text-5xl font-bold" style={{ fontFamily: "Smooch Sans" }}>GET IN TOUCH</h3>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="group">
            <input 
              type="text" 
              name="from_name" 
              required 
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-[#c6ff33] transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="group">
            <input 
              type="email" 
              name="user_email"
              required 
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-[#c6ff33] transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="group">
            <textarea 
              name="message" 
              required 
              rows="4"
              placeholder="Your Project Details or Job Inquiry"
              className="w-full bg-transparent border-b border-white/20 py-4 text-white outline-none focus:border-[#c6ff33] transition-colors resize-none placeholder:text-white/20"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSending}
            className="mt-6 w-full bg-[#c6ff33] text-black font-black py-5 rounded-full hover:scale-[1.03] active:scale-95 transition-all uppercase tracking-widest text-[10px]"
          >
            {isSending ? "Sending Signal..." : "Send Message"}
          </button>

          {feedback && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className={`text-center text-[10px] font-bold uppercase tracking-widest ${feedback.includes("Success") ? "text-[#c6ff33]" : "text-red-500"}`}
            >
              {feedback}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;