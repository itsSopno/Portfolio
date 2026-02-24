import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./education-v2.css";

gsap.registerPlugin(ScrollTrigger);

const EducationAndHobbies = () => {
  const streamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-node", {
        scrollTrigger: {
          trigger: ".neural-stream-container",
          start: "top 80%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out"
      });

      gsap.from(".status-bar-fill", {
        scrollTrigger: {
          trigger: ".hobby-analysis-pane",
          start: "top 70%",
        },
        width: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out"
      });
    }, streamRef);

    return () => ctx.revert();
  }, []);

  const educationData = [
    {
      id: "ED_01",
      title: "Diploma in Engineering",
      sub: "Computer Science & Technology",
      inst: "Shariatpur Polytechnic Institute",
      year: "2022 - PRESENT",
      tech: "Algorithm Design / Database Architectures",
      status: "CORE_GROWTH"
    },
    {
      id: "ED_02",
      title: "MERN Specialization",
      sub: "Full Stack Development",
      inst: "Programming Hero",
      year: "2023 - 2024",
      tech: "Node.js / React / MongoDB Ecosystem",
      status: "COMPLETED"
    }
  ];

  const hobbyData = [
    { label: "Tactical Execution", value: "Valorant", percentage: 85, status: "PREDATOR_MINDSET" },
    { label: "Neural Narratives", value: "RDR2 / Wukong / Tsushima", percentage: 95, status: "DEEP_IMMERSION" },
    { label: "Digital Culture", value: "Technical Art / Motion Design", percentage: 70, status: "SYNC_ESTABLISHED" }
  ];

  return (
    <section className="education-v2-section">
      {/* Background Schematic */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={streamRef}>

        {/* Section Header */}
        <div className="mb-32">
          <span className="text-[10px] font-black tracking-[0.5em] text-[#c6ff33] uppercase">Module_04 // Intelligence_Sync</span>
          <h2 className="text-[12vw] font-black italic leading-[0.7] tracking-tighter uppercase opacity-5 select-none absolute -top-10 -left-6 pointer-events-none" style={{ fontFamily: "Smooch Sans" }}>
            Education
          </h2>
          <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-none mt-4" style={{ fontFamily: "Smooch Sans" }}>
            Neural<br />Growth Map
          </h1>
        </div>

        <div className="neural-stream-container">
          {/* Timeline Connector */}
          <div className="data-stream-connector" />

          {/* Left Panel: Academic Architecture */}
          <div className="space-y-10">
            {educationData.map((edu) => (
              <div key={edu.id} className="edu-node group">
                <div className="node-point" />
                <span className="node-id">{edu.id} // {edu.status}</span>
                <h3 className="node-title">{edu.title}</h3>
                <p className="text-[#c6ff33] text-[10px] font-black tracking-[0.2em] uppercase mb-4">{edu.sub}</p>
                <div className="node-meta-grid">
                  <div className="meta-field">
                    <span className="field-label">Institution</span>
                    <span className="field-value">{edu.inst}</span>
                  </div>
                  <div className="meta-field">
                    <span className="field-label">TechFocus</span>
                    <span className="field-value">{edu.sub}</span>
                  </div>
                  <div className="meta-field">
                    <span className="field-label">Timeline</span>
                    <span className="field-value">{edu.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel: Hobby Analysis Module */}
          <div className="hobby-analysis-pane">
            <div className="analysis-header">
              <div>
                <h3 className="text-4xl font-black italic uppercase leading-none" style={{ fontFamily: "Smooch Sans" }}>Sub-System<br />Analysis</h3>
                <span className="text-[8px] font-mono opacity-30 mt-2 block">SEC_ID: HOBBY_MOD_01</span>
              </div>
              <div className="radar-vibe">
                <div className="radar-sweep" />
              </div>
            </div>

            <div className="space-y-12">
              {hobbyData.map((hobby) => (
                <div key={hobby.label} className="hobby-module">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="field-label block mb-1">{hobby.label}</span>
                      <h4 className="text-xl font-bold tracking-tighter uppercase text-white/80">{hobby.value}</h4>
                    </div>
                    <span className="text-[8px] font-mono text-[#c6ff33]">{hobby.status}</span>
                  </div>
                  <div className="status-bar-bg">
                    <div className="status-bar-fill" style={{ width: `${hobby.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 border-t border-white/5 pt-10 flex justify-between items-center opacity-20">
              <span className="text-[7px] font-mono">ENCRYPTION: AES_BLUEPRINT</span>
              <span className="text-[7px] font-mono animate-pulse">CONNECTED</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationAndHobbies;
