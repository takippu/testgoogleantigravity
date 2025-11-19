import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
            .fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=1"
            )
            .fromTo(subTextRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.8"
            )
            .fromTo(buttonRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.8"
            );

    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-space-950">
            {/* Background Image/Video Placeholder - Replace with actual asset */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-950/50 to-space-950 z-10"></div>
                <img
                    src="/hero-bg.jpg"
                    alt="Space Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <h1 ref={textRef} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tighter">
                    BEYOND THE <span className="text-gradient">HORIZON</span>
                </h1>
                <p ref={subTextRef} className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide">
                    Experience the next generation of interstellar travel. Luxury, speed, and the infinite cosmos await you.
                </p>
                <div ref={buttonRef}>
                    <button className="group relative px-8 py-4 bg-transparent border border-space-highlight text-white font-display font-bold tracking-widest uppercase overflow-hidden transition-all hover:bg-space-highlight/10">
                        <span className="relative z-10 flex items-center gap-2">
                            Book Your Flight <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-space-highlight/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
