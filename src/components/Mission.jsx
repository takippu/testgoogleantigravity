import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const bg = bgRef.current;

        // Parallax Background
        gsap.to(bg, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Text Reveal
        gsap.fromTo(text.children,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: "top 60%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Parallax Background Image */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '120%', // Taller for parallax
                    top: '-10%'
                }}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />

            <div ref={textRef} className="relative z-20 container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
                    OUR MISSION
                </h2>
                <p className="text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed text-gray-200">
                    To push the boundaries of human existence, exploring the cosmos not as conquerors, but as curious travelers seeking the truth of our universe.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
                    <div className="p-6 border-l border-white/30 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-2">Exploration</h3>
                        <p className="text-gray-400">Charting the unknown sectors of the galaxy.</p>
                    </div>
                    <div className="p-6 border-l border-white/30 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-2">Sustainability</h3>
                        <p className="text-gray-400">Eco-friendly propulsion and life support.</p>
                    </div>
                    <div className="p-6 border-l border-white/30 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-2">Discovery</h3>
                        <p className="text-gray-400">Finding new habitable worlds for humanity.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
