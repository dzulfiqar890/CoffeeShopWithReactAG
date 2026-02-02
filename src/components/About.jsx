import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-img.jpg';
import { FaCheck } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-stone-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-amber-500 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
                        <img
                            src={aboutImg}
                            alt="About Us"
                            className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-amber-600 font-bold uppercase tracking-widest mb-2">Our History</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">
                            Create a New Story with Us
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo,
                            lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis
                            a pellentesque nec, egestas non nisi.
                        </p>
                        <p className="text-stone-600 leading-relaxed mb-8">
                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['Professional Staff', 'Fresh Coffee Beans', '24/7 Support', 'Online Booking'].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="bg-amber-100 text-amber-600 p-2 rounded-full">
                                        <FaCheck size={12} />
                                    </span>
                                    <span className="text-stone-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
