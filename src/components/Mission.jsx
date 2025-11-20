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
        <section ref={containerRef} className="relative py-32 bg-black overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div ref={textRef} className="order-2 lg:order-1">
                        <div className="w-12 h-1 bg-white mb-8"></div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight text-white">
                            OUR <br /> MISSION
                        </h2>
                        <p className="text-xl text-gray-400 mb-6 font-light leading-relaxed max-w-lg">
                            We believe that humanity's destiny lies among the stars. For decades, we have pushed the boundaries of propulsion technology to make interstellar travel not just possible, but comfortable.
                        </p>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                            From the mining colonies of the Belt to the luxury resorts of Titan, Astra Nova connects you to the universe.
                        </p>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div ref={imageRef} className="relative z-10 aspect-[4/5] bg-gray-900 overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                alt="Space Mission"
                                className="w-full h-full object-cover grayscale contrast-125"
                            />
                            {/* Overlay Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-20 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
