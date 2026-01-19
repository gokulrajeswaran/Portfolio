import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  // Initialize AOS inside the component
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation happens only once while scrolling down
    });
  }, []);

  // Smooth scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `/#${id}`);
    }
  };

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] bg-black text-white flex items-center pt-24 md:pt-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left - Text (Zoom In) */}
        <div 
          className="text-center md:text-left order-2 md:order-1"
          data-aos="fade-zoom-in"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          <h1 
            style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)' }}
            className="font-extrabold tracking-widest leading-tight"
          >
            GOKULRAJ
            <br /><span className="text-zinc-500">ESWARAN</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-400 tracking-wide">
            MERN STACK DEVELOPER
          </p>

          <div className="mt-8 w-24 h-[1px] bg-gray-600 md:mx-0 mx-auto" />

          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition text-center cursor-pointer"
            >
              View Projects
            </a>

            <a
              href="/gokulraj_pg_u.pdf"
              download
              className="px-6 py-3 border border-gray-500 text-gray-300 hover:border-white hover:text-white transition text-center"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right - Image (Zoom In with delay) */}
        <div 
          className="flex justify-center md:justify-end order-1 md:order-2"
          data-aos="fade-zoom-in"
          data-aos-delay="400"
          data-aos-offset="0"
        >
          <img
            src="/profile.png"
            alt="Gokul Raj"
            style={{ 
              width: 'clamp(240px, 60vw, 320px)', 
              height: 'clamp(240px, 60vw, 320px)' 
            }}
            className="object-cover rounded-full border border-gray-700 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;