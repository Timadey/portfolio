import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
    const { experience } = portfolioData;

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
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section id="experience" className="section-container">
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
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto"></div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative pl-8 md:pl-20"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-6 top-2 w-4 h-4 bg-white rounded-full border-4 border-black"></div>

                                <div className="glass-card p-6 md:p-8 hover:bg-gray-900 transition-all">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-start space-x-3 mb-3">
                                            <Briefcase className="text-white mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                                                    {job.title}
                                                </h3>
                                                <p className="text-white font-semibold text-lg">
                                                    {job.company}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 ml-8">
                                            <span className="flex items-center space-x-1">
                                                <Calendar size={14} />
                                                <span>{job.period}</span>
                                            </span>
                                            <span className="flex items-center space-x-1">
                                                <MapPin size={14} />
                                                <span>{job.location}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <ul className="space-y-2 mb-6">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i} className="flex space-x-3 text-gray-300 text-sm md:text-base">
                                                <span className="text-white mt-1.5 flex-shrink-0">▸</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {job.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-900 text-gray-200 text-xs md:text-sm rounded-full border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
