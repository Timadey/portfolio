import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import BlogModal from './BlogModal';

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedArticleId, setSelectedArticleId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://dev.to/api/articles?username=timadey');
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const handleArticleClick = (id) => {
        setSelectedArticleId(id);
        setIsModalOpen(true);
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="blog" className="section-container">
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
                        Latest Writing
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Thoughts on backend architecture, system design, and building scalable products.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <motion.div
                                key={article.id}
                                variants={itemVariants}
                                onClick={() => handleArticleClick(article.id)}
                                className="glass-card overflow-hidden cursor-pointer group flex flex-col h-full bg-gray-900/30 border-gray-800"
                            >
                                {article.cover_image && (
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={article.cover_image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {new Date(article.published_at).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {article.reading_time_minutes} min read
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {article.description}
                                    </p>
                                    <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                                        Read More <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>

            <BlogModal
                articleId={selectedArticleId}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Blog;
