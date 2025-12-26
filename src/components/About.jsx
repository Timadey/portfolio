import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
    const { summary } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="about" className="section-container">
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
                        Philosophy
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto"></div>
                </motion.div>

                {/* About Content */}
                <motion.div variants={itemVariants} className="glass-card p-8 md:p-12">
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl text-center">
                        {summary}
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
