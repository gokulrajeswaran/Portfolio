import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            window.history.pushState(null, '', `/#${id}`);
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-black border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

                {/* Logo with Clamp Typography */}
                <a
                    href="#home"
                    onClick={(e) => handleScroll(e, 'home')}
                    style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
                    className="text-white font-bold tracking-widest cursor-pointer whitespace-nowrap"
                >
                    GOKULRAJ E
                </a>

                {/* Desktop Nav Links - Hidden on Mobile */}
                <div className="hidden md:flex gap-8 text-sm tracking-wide">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleScroll(e, link.id)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button - Hidden on Desktop */}
                <button
                    className="md:hidden text-white flex flex-col gap-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* Mobile Dropdown Menu */}
                <div className={`absolute top-16 left-0 right-0 bg-black border-b border-gray-800 flex flex-col items-center gap-6 py-8 transition-all duration-300 md:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleScroll(e, link.id)}
                            className="text-gray-400 hover:text-white text-lg tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;