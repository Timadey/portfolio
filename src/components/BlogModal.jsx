import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const BlogModal = ({ articleId, isOpen, onClose }) => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen && articleId) {
            const fetchArticle = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`https://dev.to/api/articles/${articleId}`);
                    const data = await response.json();
                    setArticle(data);
                } catch (error) {
                    console.error('Error fetching article content:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchArticle();
        }
    }, [isOpen, articleId]);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] glass-card overflow-hidden flex flex-col bg-gray-950 border-gray-800"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-gray-900/50 hover:bg-gray-800 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="overflow-y-auto p-6 md:p-10">
                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                                    <p className="text-gray-400">Loading article content...</p>
                                </div>
                            ) : article ? (
                                <article className="prose prose-invert max-w-none">
                                    {article.cover_image && (
                                        <img
                                            src={article.cover_image}
                                            alt={article.title}
                                            className="w-full h-auto rounded-xl mb-8 object-cover max-h-[400px]"
                                        />
                                    )}

                                    <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
                                        {article.title}
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-400 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={16} />
                                            {new Date(article.published_at).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={16} />
                                            {article.reading_time_minutes} min read
                                        </div>
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-white hover:underline ml-auto"
                                        >
                                            View on DEV.to <ExternalLink size={14} />
                                        </a>
                                    </div>

                                    <div className="markdown-content">
                                        <ReactMarkdown>{article.body_markdown}</ReactMarkdown>
                                    </div>
                                </article>
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-red-400">Failed to load article. Please try again.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BlogModal;
