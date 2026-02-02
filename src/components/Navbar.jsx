import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from '../data';
import { FaBars, FaTimes, FaCoffee } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center text-white">
                <a href="#home" className="flex items-center gap-2 text-2xl font-serif font-bold cursor-pointer">
                    <FaCoffee className="text-amber-500" />
                    <span className="tracking-wider">KopiLanding</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={`#${link.path}`}
                            className="text-stone-300 hover:text-amber-500 transition-colors uppercase text-sm tracking-widest font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-amber-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-stone-900 overflow-hidden"
                    >
                        <ul className="flex flex-col items-center gap-6 py-8">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${link.path}`}
                                        className="text-stone-300 hover:text-amber-500 text-lg uppercase tracking-widest"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
