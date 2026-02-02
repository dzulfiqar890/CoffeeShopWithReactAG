import React from 'react';
import { motion } from 'framer-motion';
import { menu } from '../data';

const Menu = () => {
    return (
        <section id="menu" className="py-20 bg-stone-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-amber-600 font-bold uppercase tracking-widest mb-2"
                    >
                        Special Menu
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-stone-800"
                    >
                        Coffee Selection
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menu.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-amber-600 text-white font-bold py-1 px-3 rounded-full shadow-lg">
                                    ${item.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-serif mb-2 text-stone-800 group-hover:text-amber-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-stone-500 text-sm mb-4">
                                    {item.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <button className="text-amber-600 font-bold text-sm uppercase tracking-wider hover:text-amber-800 transition-colors">
                                        Add to Cart
                                    </button>
                                    <div className="h-px bg-stone-200 flex-grow mx-4"></div>
                                    <span className="text-stone-400 text-xs">Hot / Cold</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
