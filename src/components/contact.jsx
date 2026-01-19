import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Contact = () => {
    // Initialize AOS locally
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="contact" className="min-h-[calc(100vh-4rem)] bg-black text-white flex items-center px-6 md:px-20 pt-24 md:pt-0 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20">

                {/* Left Side: Bold Branding - Design Maintained */}
                <div 
                    className="flex flex-col justify-center"
                    data-aos="fade-zoom-in"
                    data-aos-delay="200"
                >
                    <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6">Contact</h2>
                    <h1 
                        style={{ fontSize: 'clamp(3.5rem, 12vw, 6rem)' }}
                        className="font-bold tracking-tighter mb-8 leading-none"
                    >
                        LET'S <br /> <span className="text-zinc-500 italic">CONNECT.</span>
                    </h1>
                    <div className="flex items-center gap-4 text-zinc-500">
                        <span className="uppercase tracking-[0.2em] text-[11px]">Virudhunagar, Tamil Nadu</span>
                    </div>
                </div>

                {/* Right Side: Refined Small Text Design */}
                <div 
                    className="flex flex-col justify-center space-y-10"
                    data-aos="fade-zoom-in"
                    data-aos-delay="400"
                >

                    {/* Email Section */}
                    <div className="group border-b border-zinc-800 pb-4 hover:border-zinc-400 transition-colors duration-500">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Primary Email</p>
                        <a
                            href="mailto:gokul.riser@gmail.com"
                            className="text-lg md:text-xl font-light tracking-wide flex items-center justify-between group"
                        >
                            gokul.riser@gmail.com
                            <FaArrowUpRightFromSquare className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>

                    {/* Call Section */}
                    <div className="group border-b border-zinc-800 pb-4 hover:border-zinc-400 transition-colors duration-500">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Phone Number</p>
                        <a
                            href="tel:+916381568982"
                            className="text-lg md:text-xl font-light tracking-wide"
                        >
                            +91 6381568982
                        </a>
                    </div>

                    {/* Socials & Availability */}
                    <div className="flex flex-col gap-6 pt-2">
                        <div className="flex gap-6">
                            <a href="https://github.com/gokulrajeswaran" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                                Github
                            </a>
                            {/* <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                                LinkedIn
                            </a> */}
                        </div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                            Available for relocation & full-time roles
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;