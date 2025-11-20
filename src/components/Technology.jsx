import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Rocket, Shield, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const techItems = [
  {
    icon: <Rocket className="w-12 h-12 text-blue-400" />,
    title: "Ion Propulsion",
    description: "Next-generation ion drives providing continuous thrust for rapid interplanetary travel."
  },
  {
    icon: <Cpu className="w-12 h-12 text-purple-400" />,
    title: "Quantum AI",
    description: "Advanced navigational AI capable of calculating slipspace trajectories in real-time."
  },
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Plasma Shields",
    description: "High-energy plasma barriers protecting the hull from micrometeoroids and radiation."
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    title: "Fusion Core",
    description: "Compact fusion reactors delivering limitless clean energy to all ship systems."
  }
];

const Technology = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

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

    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 100 },
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
    <section ref={sectionRef} className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-center mb-16 tracking-tighter">
          ADVANCED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">TECHNOLOGY</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techItems.map((item, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
