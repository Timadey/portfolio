import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench, Package } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const { skills } = portfolioData;

    const skillCategories = [
        { title: 'Languages', icon: Code, items: skills.languages },
        { title: 'Frameworks', icon: Package, items: skills.frameworks },
        { title: 'Systems & Tools', icon: Server, items: skills.systems },
        { title: 'Backend Focus', icon: Database, items: skills.backend },
        { title: 'Product', icon: Wrench, items: skills.product },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section id="skills" className="section-container">
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
                        Skills & Expertise
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto"></div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-card p-6"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <Icon className="text-white" size={24} />
                                    <h3 className="text-lg md:text-xl font-display font-bold text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-gray-900 text-gray-200 text-xs md:text-sm rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
