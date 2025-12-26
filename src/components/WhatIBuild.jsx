import { motion } from 'framer-motion';
import { Code, Layers, Server, Workflow, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const WhatIBuild = () => {
    const { whatIBuild } = portfolioData;

    const icons = [Server, Zap];

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
        <section id="what-i-build" className="section-container">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-6xl mx-auto"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
                        What I Build
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto"></div>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {whatIBuild.map((item, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-card p-6 md:p-8 hover:bg-gray-900 transition-all"
                            >
                                <Icon className="text-white mb-4" size={32} />
                                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default WhatIBuild;
