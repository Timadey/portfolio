import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const { personal } = portfolioData;

    return (
        <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="section-container">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8"
                    >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-300">{personal.status}</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white"
                    >
                        {personal.name}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 mb-8 font-display font-medium"
                    >
                        {personal.title}
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {personal.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <a href="#projects" className="btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Let's Talk
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <a
                            href={personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-3 hover:bg-gray-800 transition-colors"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-3 hover:bg-gray-800 transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href={`mailto:${personal.email}`}
                            className="glass-card p-3 hover:bg-gray-800 transition-colors"
                        >
                            <Mail size={24} />
                        </a>
                        <div className="glass-card px-4 py-3 flex items-center space-x-2 text-gray-300">
                            <MapPin size={20} className="text-white" />
                            <span className="text-sm">{personal.location}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
