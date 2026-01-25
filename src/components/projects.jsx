import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    // Initialize AOS locally
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const projectData = [
        {
            title: "GoldElevate Website",
            description: "A comprehensive full-stack platform built using the MERN stack for scalable performance and efficient data management.",
            tech: ["MongoDB", "Express", "React", "Node JS"],
            github: "#",
            live: "https://goldelevate.shop",
            image: "/projects/goldelevate.png"
        },

        {
            title: "11:11 Photo Studio",
            description: "A professional photography studio website featuring a clean and responsive layout to showcase services and booking options.",
            tech: ["React JS", "Tailwind CSS"],
            github: "https://github.com/gokulrajeswaran/11-11-PhotoStudio",
            live: "https://venerable-twilight-9d6eba.netlify.app/",
            image: "/projects/1111.png"
        },

        {
            title: "AL AMAL Website",
            description: "A modern web application developed with a focus on high-performance frontend architecture and styling.",
            tech: ["ReactJS", "Tailwind CSS"],
            github: "#",
            live: "https://demo-alamal.onrender.com",
            image: "/projects/alamal.png"
        },
        {
            title: "Sri Dharshana Yoga and Nature cure Sanatorium (Beta)",
            description: "A modern frontend application built using React and Tailwind CSS, focused on responsive design, performance, and clean user experience.",
            tech: ["ReactJS", "Tailwind CSS"],
            github: "#",
            live: "https://zingy-cuchufli-b27625.netlify.app/",
            image: "/projects/sri.png"
        }
    ];

    return (
        <section id="projects" className="min-h-screen bg-black text-white py-24 px-6 pt-32 md:pt-24 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Header Section with Clamp Typography */}
                <div
                    className="text-center mb-16"
                    data-aos="fade-zoom-in"
                    data-aos-delay="200"
                >
                    <h2
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
                        className="font-bold mb-4 text-white tracking-tighter"
                    >
                        Projects
                    </h2>
                    <div className="h-[2px] w-24 bg-white mx-auto mb-6"></div>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto opacity-90">
                        A showcase of my recent work and technical applications
                    </p>
                </div>

                {/* Project Card Grid - Staggered Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            data-aos="fade-zoom-in"
                            data-aos-delay={300 + (index * 100)}
                            className="bg-[#111114] border border-zinc-800 rounded-2xl overflow-hidden group hover:border-white transition-all duration-300 flex flex-col"
                        >

                            {/* Image Section */}
                            <div className="h-48 relative overflow-hidden bg-[#1c1c21]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Project+Image"; }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300"></div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <div className="flex gap-4">
                                        {project.github !== "#" && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-colors">
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                        {project.live !== "" && (
                                            <a href={project.live} target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-colors">
                                                <FaExternalLinkAlt size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tag, tIndex) => (
                                        <span key={tIndex} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#1c1c21] border border-zinc-800 rounded-full text-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;