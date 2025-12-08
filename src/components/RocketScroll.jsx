import { useEffect, useState } from 'react';

const RocketScroll = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate rocket position based on scroll
    // Start at bottom (Earth) and move up as we scroll
    const rocketBottom = 5 + (scrollProgress * 0.85); // Move from 5% to 90%

    // Rotate rocket slightly as it moves
    const rotation = -10 + (scrollProgress * 0.5); // Slight tilt

    return (
        <>
            {/* Fixed rocket that follows scroll */}
            <div
                className="fixed right-8 z-40 transition-all duration-300 ease-out"
                style={{
                    bottom: `${rocketBottom}%`,
                    transform: `rotate(${rotation}deg)`,
                }}
            >
                <div className="text-6xl animate-float">
                    🚀
                </div>
            </div>

            {/* Earth at the bottom (visible at start) */}
            <div
                className={`fixed bottom-4 left-8 z-30 transition-opacity duration-500 ${scrollProgress > 40 ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <div className="text-8xl">🌍</div>
            </div>

            {/* Stars appearing in middle section */}
            {scrollProgress > 30 && (
                <div className="fixed inset-0 pointer-events-none z-20">
                    <div className="absolute top-20 left-10 text-2xl animate-pulse">⭐</div>
                    <div className="absolute top-40 right-20 text-xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
                    <div className="absolute top-60 left-1/3 text-lg animate-pulse" style={{ animationDelay: '1s' }}>⭐</div>
                    <div className="absolute top-32 right-1/4 text-2xl animate-pulse" style={{ animationDelay: '1.5s' }}>✨</div>
                    <div className="absolute top-96 left-1/2 text-xl animate-pulse" style={{ animationDelay: '0.8s' }}>⭐</div>
                </div>
            )}

            {/* Galaxy/Space at the top (visible at end) */}
            <div
                className={`fixed top-4 right-8 z-30 transition-opacity duration-500 ${scrollProgress > 70 ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <div className="text-7xl">🌌</div>
            </div>

            {/* Planets scattered in space section */}
            {scrollProgress > 50 && (
                <div className="fixed inset-0 pointer-events-none z-20">
                    <div className="absolute top-10 left-20 text-5xl">🪐</div>
                    <div className="absolute top-80 right-32 text-4xl">🌙</div>
                </div>
            )}
        </>
    );
};

export default RocketScroll;
