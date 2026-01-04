import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    const texts = [
        "Innovate Your Future",
        "Create Something Amazing",
        "Transform Ideas",
        "Build Tomorrow"
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            const fullText = texts[textIndex];
            
            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
                return;
            }
            
            if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
                return;
            }

            setCurrentText(
                isDeleting 
                    ? fullText.substring(0, currentText.length - 1)
                    : fullText.substring(0, currentText.length + 1)
            );
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex, texts]);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <motion.video
                    className="w-full h-full object-cover"
                    style={{ scale }}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-blue-ink-in-water-1196-large.mp4"
                    poster="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-blue-ink-in-water-1196-large.mp4" type="video/mp4" />
                </motion.video>
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Minimal Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-12"
                    >
                        <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight">
                            Create
                            <br />
                            Design
                            <br />
                            Innovate
                        </h1>
                    </motion.div>

                    {/* Typing Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mb-12"
                    >
                        <div className="inline-block">
                            <h2 className="text-2xl md:text-4xl font-normal text-white mb-6 inline-flex items-center">
                                {currentText}
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="ml-2 h-10 w-[2px] bg-white inline-block"
                                />
                            </h2>
                        </div>
                        <p className="text-lg text-gray-200 max-w-xl mx-auto font-light">
                            Minimal design, maximum impact. Experience elegance in every detail.
                        </p>
                    </motion.div>

                    {/* Simple CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <button className="px-10 py-4 border border-white/40 rounded-full text-white text-lg font-light hover:border-white transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                            <span className="flex items-center gap-3">
                                Explore More
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Minimal Video Controls */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-6 z-20 flex gap-2"
            >
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2.5 rounded-full hover:bg-white/10 transition-colors"
                >
                    {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                    )}
                </button>
            </motion.div>

            {/* Clean Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center"
                >
                    <p className="mb-3 text-xs tracking-widest text-white/80">SCROLL</p>
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ArrowRight className="w-5 h-5 mx-auto rotate-90 text-white" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Subtle Floating Lines */}
            <div className="absolute top-1/4 left-8 z-10">
                <motion.div
                    animate={{ 
                        y: [0, -15, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-24 h-[1px] bg-white/30"
                />
            </div>
            <div className="absolute bottom-1/4 right-8 z-10">
                <motion.div
                    animate={{ 
                        y: [0, 15, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="w-24 h-[1px] bg-white/30"
                />
            </div>
        </section>
    );
};

export default Hero;