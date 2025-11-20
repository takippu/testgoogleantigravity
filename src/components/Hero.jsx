import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef(null);
    const canvasRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Starfield Animation
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars = [];
        const numStars = 200;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5 + 0.1
            });
        }

        function animateStars() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'white';

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                star.y += star.speed;
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animateStars);
        }

        animateStars();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        // GSAP Animations
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(textRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
        )
            .fromTo(subTextRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=1"
            )
            .fromTo(buttonRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.8"
            );

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50" />

            <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mix-blend-difference">
                <h1 ref={textRef} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 tracking-tighter text-white">
                    BEYOND THE <br /> HORIZON
                </h1>
                <p ref={subTextRef} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-widest uppercase">
                    Interstellar Travel. Redefined.
                </p>
                <div ref={buttonRef}>
                    <button className="group relative px-12 py-5 bg-transparent border border-white text-white font-display font-bold tracking-[0.2em] uppercase overflow-hidden transition-all hover:bg-white hover:text-black">
                        <span className="relative z-10 flex items-center gap-4">
                            Book Flight <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
