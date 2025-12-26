import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        // { name: 'What I Build', href: '#what-i-build' },
        { name: 'Projects', href: '#projects' },
        { name: 'Writings', href: '#blog' },
        // { name: 'Experience', href: '#experience' },
        // { name: 'Skills', href: '#skills' },
        // { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card mx-4 mt-4' : 'bg-transparent'
                } py-4`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-display font-bold text-white">
                        TA
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="btn-primary">
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 glass-card p-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-gray-300 hover:text-white transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block btn-primary text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get in Touch
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
