import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ships = [
    {
        name: "The Voyager",
        class: "Exploration Class",
        description: "Designed for deep space reconnaissance and long-duration missions.",
        image: "https://images.unsplash.com/photo-1541185933-710f50748747?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "Stellar Horizon",
        class: "Luxury Liner",
        description: "Experience the cosmos in unparalleled comfort and style.",
        image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1000"
    },
    {
        name: "Nebula Drifter",
        class: "Scientific Vessel",
        description: "Equipped with state-of-the-art labs for astrophysical research.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000"
    }
];

const Fleet = () => {
    const sectionRef = useRef(null);
    const shipsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(section.querySelector('h2'),
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            }
        );

        shipsRef.current.forEach((ship, index) => {
            const direction = index % 2 === 0 ? -100 : 100;

            gsap.fromTo(ship,
                { opacity: 0, x: direction },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ship,
                        start: "top 70%",
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl md:text-8xl font-display font-bold text-center mb-24 tracking-tighter">
                    THE FLEET
                </h2>

                <div className="space-y-32">
                    {ships.map((ship, index) => (
                        <div
                            key={index}
                            ref={el => shipsRef.current[index] = el}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-video overflow-hidden rounded-sm group">
                                    <img
                                        src={ship.image}
                                        alt={ship.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="h-px w-20 bg-blue-500" />
                                <h3 className="text-4xl md:text-6xl font-display font-bold">{ship.name}</h3>
                                <p className="text-blue-400 font-mono tracking-widest uppercase">{ship.class}</p>
                                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                                    {ship.description}
                                </p>
                                <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm">
                                    View Specs
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fleet;
