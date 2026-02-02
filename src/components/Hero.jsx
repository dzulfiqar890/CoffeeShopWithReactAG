import React from 'react';
import { motion } from 'framer-motion';
import homeBg from '../assets/home-bg.png';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${homeBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-2xl text-white">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-amber-500 text-xl font-bold uppercase tracking-widest mb-4"
                    >
                        Welcome to KopiLanding
                    </motion.h3>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6"
                    >
                        Experience the <br />
                        <span className="text-amber-500">Perfect Coffee</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-stone-300 text-lg mb-8 leading-relaxed max-w-lg"
                    >
                        Nikmati aroma dan rasa kopi terbaik yang diolah dengan penuh hasrat.
                        Tempat di mana setiap cangkir menceritakan kisahnya sendiri.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#menu"
                            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase tracking-wide transition-all rounded-sm text-center"
                        >
                            Order Now
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-4 border border-white hover:bg-white hover:text-stone-900 text-white font-bold uppercase tracking-wide transition-all rounded-sm text-center"
                        >
                            Explore More
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
