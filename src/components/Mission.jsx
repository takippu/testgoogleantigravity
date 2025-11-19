import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom top",
                scrub: true,
            }
        });

        tl.to(imageRef.current, {
            y: 100,
            ease: "none"
        }, 0);

        tl.to(textRef.current, {
            y: -50,
            ease: "none"
        }, 0);

    }, []);

    return (
        <section ref={containerRef} className="relative py-32 bg-space-950 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div ref={textRef} className="order-2 lg:order-1">
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                            OUR <span className="text-gradient">MISSION</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-6 font-light leading-relaxed">
                            We believe that humanity's destiny lies among the stars. For decades, we have pushed the boundaries of propulsion technology to make interstellar travel not just possible, but comfortable.
                        </p>
                        <p className="text-xl text-gray-300 font-light leading-relaxed">
                            From the mining colonies of the Belt to the luxury resorts of Titan, Astra Nova connects you to the universe.
                        </p>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute -inset-4 bg-space-highlight/20 blur-3xl rounded-full"></div>
                        <div ref={imageRef} className="relative z-10 aspect-[4/5] bg-space-800 rounded-lg overflow-hidden border border-space-700/50">
                            {/* Placeholder for Mission Image */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-950/80 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                alt="Space Mission"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
