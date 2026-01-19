import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiC } from 'react-icons/si';

const Skills = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiC className="text-blue-400" />, name: "C" },
        { icon: <FaJava className="text-red-600" />, name: "Java" }
      ]
    },
    {
      title: "Library and Frameworks",
      skills: [
        { icon: <FaReact className="text-cyan-400" />, name: "React" },
        { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" }
      ]
    },
    {
      title: "Version Control",
      skills: [
        { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
        { icon: <FaGithub className="text-white" />, name: "GitHub" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { icon: <FaNodeJs className="text-green-500" />, name: "Node JS" },
        { icon: <SiExpress className="text-white" />, name: "Express" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-24 px-6 pt-32 md:pt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div 
          className="text-center mb-16"
          data-aos="fade-zoom-in"
          data-aos-delay="200"
        >
          <h2 
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
            className="font-bold mb-4 text-white tracking-tighter"
          >
            Skills & Technologies
          </h2>
          <div className="h-[2px] w-24 bg-white mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div 
              key={index} 
              className="bg-[#111114] border border-zinc-800 p-8 rounded-2xl"
              data-aos="fade-zoom-in"
              data-aos-delay={300 + (index * 100)} // Staggered delay for each card
            >
              <h3 className="text-2xl font-semibold mb-8 tracking-tight text-white uppercase text-xs tracking-[0.2em] text-zinc-500">
                {cat.title}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, sIndex) => (
                  <div 
                    key={sIndex} 
                    className="group relative w-20 h-20 bg-[#1c1c21] rounded-xl flex items-center justify-center text-4xl border border-zinc-800 hover:border-white transition-all cursor-pointer"
                  >
                    {/* Icon - Fades out on hover */}
                    <div className="group-hover:opacity-10 transition-opacity duration-300">
                      {skill.icon}
                    </div>

                    {/* Skill Name - Fades in on hover */}
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center pointer-events-none">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;