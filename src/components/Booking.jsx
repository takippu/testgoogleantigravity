import React, { useState } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

const Booking = () => {
    const [launchStatus, setLaunchStatus] = useState('idle'); // idle, counting, launched
    const [countdown, setCountdown] = useState(3);

    const handleLaunch = (e) => {
        e.preventDefault();
        if (launchStatus !== 'idle') return;

        setLaunchStatus('counting');

        let count = 3;
        const timer = setInterval(() => {
            count--;
            setCountdown(count);
            if (count === 0) {
                clearInterval(timer);
                setLaunchStatus('launched');
            }
        }, 1000);
    };

    return (
        <section className="py-32 bg-black relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tighter">
                    READY TO <br /> DEPART?
                </h2>
                <p className="text-gray-400 mb-16 max-w-xl mx-auto font-light">
                    Secure your seat on the next flight to the stars. Limited availability for the upcoming launch window.
                </p>

                <form onSubmit={handleLaunch} className="max-w-md mx-auto space-y-12">
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="ENTER YOUR EMAIL"
                            className="w-full bg-transparent border-b border-white/20 py-4 px-0 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors font-mono text-lg"
                            disabled={launchStatus !== 'idle'}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={launchStatus !== 'idle'}
                        className={`w-full py-6 border border-white font-display font-bold tracking-[0.2em] transition-all duration-500 overflow-hidden relative group
                            ${launchStatus === 'launched' ? 'bg-white text-black' : 'bg-transparent text-white hover:bg-white hover:text-black'}
                        `}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-4">
                            {launchStatus === 'idle' && (
                                <>INITIATE LAUNCH <ArrowRight className="w-5 h-5" /></>
                            )}
                            {launchStatus === 'counting' && (
                                <span className="animate-pulse text-2xl">T-MINUS {countdown}</span>
                            )}
                            {launchStatus === 'launched' && (
                                <>LIFTOFF CONFIRMED <Rocket className="w-5 h-5 animate-bounce" /></>
                            )}
                        </span>
                    </button>
                </form>

                <footer className="mt-32 pt-8 border-t border-white/10 text-gray-600 text-xs font-mono flex flex-col md:flex-row justify-between items-center uppercase tracking-widest">
                    <div>&copy; 2054 ASTRA NOVA INC.</div>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Fleet</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Booking;
