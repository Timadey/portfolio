import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const { personal } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="contact" className="section-container">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-4xl mx-auto"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                        I'm currently open to new opportunities and interesting projects.
                        Whether you have a question or just want to say hi, feel free to
                        reach out!
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    variants={itemVariants}
                    className="grid md:grid-cols-3 gap-6 mb-12"
                >
                    <a
                        href={`mailto:${personal.email}`}
                        className="glass-card p-6 text-center group hover:border-gray-600 hover:bg-gray-900"
                    >
                        <Mail className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="font-display font-semibold mb-2 text-white">Email</h3>
                        <p className="text-sm text-gray-300 break-words">{personal.email}</p>
                    </a>

                    <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 text-center group hover:border-gray-600 hover:bg-gray-900"
                    >
                        <Linkedin className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="font-display font-semibold mb-2 text-white">LinkedIn</h3>
                        <p className="text-sm text-gray-300">Connect with me</p>
                    </a>

                    <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 text-center group hover:border-gray-600 hover:bg-gray-900"
                    >
                        <Github className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="font-display font-semibold mb-2 text-white">GitHub</h3>
                        <p className="text-sm text-gray-300">Check out my code</p>
                    </a>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="text-center">
                    <a
                        href={`mailto:${personal.email}`}
                        className="btn-primary inline-flex items-center space-x-2"
                    >
                        <Send size={18} />
                        <span>Send me a message</span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
