import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data';

const Features = () => {
    return (
        <section id="features" className="py-20 bg-stone-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-stone-800/50 p-8 rounded-lg text-center hover:bg-stone-800 transition-colors group cursor-pointer border border-stone-800 hover:border-amber-900/50"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 bg-stone-700 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                                {/* Using the image from data.jsx as src since it is imported svg/img */}
                                <img src={feature.img} alt={feature.title} className="w-10 h-10 filter invert xl:invert-0 brightness-0 xl:brightness-100 group-hover:brightness-0 group-hover:invert transition-all" />
                                {/* Note: In data.jsx, img is the imported file path. 
                    If they are SVGs, we can use img tag. 
                    I added some filter classes to try to handle potential SVG colors, 
                    assuming black icons needing white in dark mode. */}
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-4 group-hover:text-amber-500 transition-colors">{feature.title}</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
