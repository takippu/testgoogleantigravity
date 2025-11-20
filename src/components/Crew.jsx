import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const crewMembers = [
    {
        name: "Cmdr. Sarah Vance",
        role: "Mission Commander",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000",
    },
    {
        name: "Dr. Aris Thorne",
        role: "Chief Science Officer",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000",
    },
    {
        name: "Lt. Kaelen Vos",
        role: "Lead Navigator",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
    }
];

const Crew = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(section.querySelector('.section-title'),
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                }
            }
        );

        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 60%",
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-black text-white relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <h2 className="section-title text-5xl md:text-8xl font-display font-bold tracking-tighter">
                        MEET THE <br />
                        <span className="text-gray-500">VANGUARD</span>
                    </h2>
                    <p className="text-gray-400 max-w-md mt-8 md:mt-0 text-lg">
                        Elite specialists dedicated to ensuring your journey is safe, comfortable, and unforgettable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {crewMembers.map((member, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="group relative h-[600px] overflow-hidden rounded-none"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-blue-400 font-mono text-sm mb-2 tracking-widest uppercase">{member.role}</p>
                                <h3 className="text-4xl font-display font-bold">{member.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Crew;
