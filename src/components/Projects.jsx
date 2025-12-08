import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    const { projects } = portfolioData;

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
        <section id="projects" className="section-container">
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
                        Selected Projects
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto"></div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-card overflow-hidden group"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div> */}
                            </div>

                            <div className="p-6 md:p-8">
                                {/* Project Name */}
                                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                                    {project.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-900 text-gray-200 text-xs rounded-full border border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-4">
                                    {(project.liveLink || project.liveDemo || project.liveBot) && (
                                        <a
                                            href={project.liveLink || project.liveDemo || project.liveBot}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            <span className="text-sm">Live</span>
                                        </a>
                                    )}
                                    {project.githubRepo && (
                                        <a
                                            href={project.githubRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                                        >
                                            <Github size={18} />
                                            <span className="text-sm">GitHub</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
