import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ships = [
    {
        id: 1,
        name: "ASTRA VOYAGER",
        type: "Luxury Cruiser",
        speed: "0.8c",
        capacity: "400 Passengers",
        desc: "The pinnacle of interstellar luxury. Experience the cosmos in comfort.",
        image: "/fleet-voyager.png"
    },
    {
        id: 2,
        name: "STELLAR PHANTOM",
        type: "Reconnaissance",
        speed: "0.95c",
        capacity: "12 Crew",
        desc: "Built for speed and stealth. Reach the outer rim in record time.",
        image: "/fleet-phantom.png"
    },
    {
        id: 3,
        name: "ORION HAULER",
        type: "Heavy Transport",
        speed: "0.4c",
        capacity: "50,000 Tons",
        desc: "The backbone of galactic trade. Reliable, massive, and enduring.",
        image: "/fleet-hauler.png"
    }
];

const Fleet = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current,
            {
                translateX: 0
            },
            {
                translateX: "-200vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                }
            }
        );

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section className="overflow-hidden bg-black border-t border-white/10">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="flex h-screen w-[300vw]">
                    {ships.map((ship, index) => (
                        <div key={ship.id} className="w-screen h-full flex items-center justify-center relative border-r border-white/10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">

                            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="h-px w-12 bg-white"></div>
                                        <div className="text-white font-mono text-xs tracking-[0.3em]">MODEL 0{index + 1}</div>
                                    </div>

                                    <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter">{ship.name}</h2>

                                    <p className="text-xl text-gray-400 max-w-md font-light leading-relaxed border-l border-white/20 pl-6">
                                        {ship.desc}
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                        <div>
                                            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-2">Max Speed</div>
                                            <div className="text-3xl font-display text-white">{ship.speed}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-2">Capacity</div>
                                            <div className="text-3xl font-display text-white">{ship.capacity}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ship Image */}
                                <div className="relative aspect-square flex items-center justify-center group">
                                    {/* Schematic Circle */}
                                    <div className="absolute inset-0 border border-white/10 rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
                                    <div className="absolute inset-0 border border-dashed border-white/10 rounded-full scale-[0.6] animate-[spin_20s_linear_infinite]"></div>

                                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-105">
                                        <img
                                            src={ship.image}
                                            alt={ship.name}
                                            className="w-full h-full object-contain grayscale contrast-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fleet;
