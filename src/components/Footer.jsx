import { Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
    const { personal } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    {/* Copyright */}
                    <div className="text-gray-400 text-sm flex items-center space-x-2 text-center md:text-left">
                        <span>© {currentYear} {personal.name}</span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                            <span>Built with</span>
                            <Heart size={14} className="text-white fill-white" />
                            <span>and React</span>
                        </span>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center space-x-6 text-sm">
                        <a
                            href="#about"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Experience
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
