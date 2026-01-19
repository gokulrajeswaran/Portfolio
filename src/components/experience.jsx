import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="experience" className="min-h-[calc(100vh-4rem)] bg-black text-white flex items-center py-24 px-6 pt-32 md:pt-24 overflow-hidden">
            <div className="mx-auto max-w-[1150px] w-full">

                {/* Centered Header Section */}
                <div
                    className="text-center mb-20"
                    data-aos="fade-zoom-in"
                    data-aos-delay="200"
                >
                    <h1
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
                        className="font-bold tracking-tighter uppercase leading-none"
                    >
                        Professional Milestone.
                    </h1>
                    <div className="h-[1px] w-24 bg-zinc-800 mx-auto mt-10"></div>
                </div>

                {/* Unified Content Area */}
                <div
                    className="space-y-12"
                    data-aos="fade-zoom-in"
                    data-aos-delay="400"
                >
                    {/* Top Row: Year, Company & Duration */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-900 pb-8">
                        <div>
                            <span className="text-5xl md:text-6xl font-black text-zinc-900 leading-none block mb-2">
                                2026
                            </span>
                            <h3 className="text-2xl md:text-3xl font-semibold text-white">CloudsBySunil</h3>
                            <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1 italic">
                                Internship - 0.5 years [Dec - May] 2026
                            </p>
                        </div>
                    </div>

                    {/* Description: Natural Narrative Style */}
                    <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg max-w-4xl">
                        <p>
                            At <span className="text-white">CloudsBySunil</span>, I worked as an intern and focused on building real-world applications, specifically working on
                            <span className="text-white font-medium italic"> ALAMAL</span> and <span className="text-white font-medium italic"> GoldElevate</span>.
                            My role takes these projects from development to a fully functional website.
                        </p>

                        <p>
                            I gained great experience in <span className="text-white">independent deployment</span>. I learned how to host and manage the frontend and backend as separate services for maintaining clean and professional production environments.
                        </p>

                        <p>
                            A major part of my work was <span className="text-white">debugging errors</span>. I became proficient at finding logic errors across the entire MERN stack.
                        </p>
                    </div>

                    {/* Minimal Tech Stack Indicator Line */}
                    <hr className="border-zinc-800" />
                </div>
            </div>
        </section>
    );
};

export default Experience;