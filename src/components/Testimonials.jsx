import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Elena K.",
        location: "Mars Colony 4",
        text: "The view of the rings of Saturn from the observation deck changed my life forever. Impeccable service.",
        rating: 5
    },
    {
        name: "Jaxon T.",
        location: "Lunar Base Alpha",
        text: "Smoothest launch I've ever experienced. The zero-g lounge is a must-visit.",
        rating: 5
    },
    {
        name: "Dr. A. Singh",
        location: "Orbital Station 9",
        text: "As an astronomer, seeing the cosmos without atmospheric interference was a dream come true.",
        rating: 5
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(section.querySelector('h2'),
            { opacity: 0, y: 30 },
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

        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                    }
                }
            );
        });
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-zinc-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20">
                    TRAVELER <span className="italic font-serif font-light text-gray-400">STORIES</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-black p-10 rounded-none border border-gray-800 relative"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-gray-800" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                "{item.text}"
                            </p>
                            <div>
                                <p className="font-bold font-display text-xl">{item.name}</p>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
