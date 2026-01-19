import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    // Self-contained AOS initialization
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="about" className="min-h-[calc(100vh-4rem)] bg-black text-white flex items-center pt-24 md:pt-0 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                {/* Left Side: Name and Pursuit */}
                <div 
                    data-aos="fade-zoom-in" 
                    data-aos-delay="200"
                >
                    <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">About Me</h2>
                    <h1 
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)' }} 
                        className="font-bold mb-6 leading-tight"
                    >
                        GOKULRAJ E
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                        I’m currently pursuing MCA and as a part of 4th Semester I'm also working as an intern at <span className="text-white">CloudsBySunil</span> and gaining hands-on experience on real-world projects.
                    </p>
                </div>

                {/* Right Side: Education History */}
                <div 
                    className="space-y-10 border-l border-zinc-800 pl-8"
                    data-aos="fade-zoom-in" 
                    data-aos-delay="400"
                >
                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-blue-500 mb-2 font-semibold">2024 — 2026</h3>
                        <h4 className="text-2xl font-bold">MCA</h4>
                        <p className="text-gray-400">Mepco Schlenk Engineering College, Sivakasi</p>
                        <p className="text-sm text-zinc-500 mt-1">Anna University | CGPA: 7.7</p>
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-widest text-blue-500 mb-2 font-semibold">2021 — 2024</h3>
                        <h4 className="text-2xl font-bold">B.Sc Information Technology</h4>
                        <p className="text-gray-400">VHNSN College, Virudhunagar</p>
                        <p className="text-sm text-zinc-500 mt-1">Madurai Kamaraj University | CGPA: 7.8</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;