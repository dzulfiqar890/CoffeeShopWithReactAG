import React from 'react';
import { FaCoffee, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-stone-950 text-stone-400 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 text-2xl font-serif font-bold text-white mb-6">
                            <FaCoffee className="text-amber-500" />
                            <span className="tracking-wider">KopiLanding</span>
                        </div>
                        <p className="mb-6 leading-relaxed">
                            Serving the best coffee in town since 2010. We are committed to quality and sustainability.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-serif font-bold text-xl mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-amber-500 mt-1" />
                                <span>123 Coffee Street, Jakarta Selatan, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-amber-500" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-amber-500" />
                                <span>hello@kopilanding.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-serif font-bold text-xl mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Menu', 'Gallery', 'Testimonials'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-white font-serif font-bold text-xl mb-6">Opening Hours</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span className="text-white">08:00 - 22:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span className="text-white">09:00 - 23:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-white">09:00 - 21:00</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-stone-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} KopiLanding. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
