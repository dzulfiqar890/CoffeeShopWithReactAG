import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-stone-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-amber-600 font-bold uppercase tracking-widest mb-2"
                    >
                        Testimonials
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-stone-800"
                    >
                        What They Say
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500 relative"
                        >
                            <FaQuoteLeft className="text-amber-100 text-6xl absolute top-4 right-4 -z-1" />
                            <p className="text-stone-600 italic mb-6 relative z-10 leading-relaxed">
                                "{item.description}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                                />
                                <div>
                                    <h4 className="font-bold text-stone-800 font-serif">{item.title}</h4>
                                    <p className="text-amber-600 text-sm font-medium">{item.service}</p>
                                </div>
                                <div className="ml-auto flex gap-1 text-amber-400">
                                    {[1, 2, 3, 4, 5].map(i => <FaStar key={i} />)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
