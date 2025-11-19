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
        color: "from-blue-500 to-purple-600",
        image: "/fleet-voyager.png"
    },
    {
        id: 2,
        name: "STELLAR PHANTOM",
        type: "Reconnaissance",
        speed: "0.95c",
        capacity: "12 Crew",
        desc: "Built for speed and stealth. Reach the outer rim in record time.",
        color: "from-emerald-500 to-teal-600",
        image: "/fleet-phantom.png"
    },
    {
        id: 3,
        name: "ORION HAULER",
        type: "Heavy Transport",
        speed: "0.4c",
        capacity: "50,000 Tons",
        desc: "The backbone of galactic trade. Reliable, massive, and enduring.",
        color: "from-orange-500 to-red-600",
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
        <section className="overflow-hidden bg-space-900">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="flex h-screen w-[300vw]">
                    {ships.map((ship, index) => (
                        <div key={ship.id} className="w-screen h-full flex items-center justify-center relative border-r border-space-800/30">
                            <div className={`absolute inset-0 bg-gradient-to-br ${ship.color} opacity-5`}></div>

                            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                                <div className="space-y-6">
                                    <div className="text-space-highlight font-mono text-sm tracking-widest">FLEET MODEL 0{index + 1}</div>
                                    <h2 className="text-6xl md:text-8xl font-display font-bold text-white">{ship.name}</h2>
                                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-space-highlight to-transparent"></div>
                                    <p className="text-xl text-gray-400 max-w-md">{ship.desc}</p>

                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-space-800">
                                        <div>
                                            <div className="text-gray-500 text-sm uppercase tracking-wider mb-1">Max Speed</div>
                                            <div className="text-2xl font-display">{ship.speed}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-500 text-sm uppercase tracking-wider mb-1">Capacity</div>
                                            <div className="text-2xl font-display">{ship.capacity}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ship Image */}
                                <div className="relative aspect-square flex items-center justify-center">
                                    <div className={`w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr ${ship.color} blur-[100px] opacity-20 absolute animate-pulse`}></div>
                                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-105">
                                        <img
                                            src={ship.image}
                                            alt={ship.name}
                                            className="w-full h-full object-contain drop-shadow-2xl"
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
