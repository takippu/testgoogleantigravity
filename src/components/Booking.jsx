import React from 'react';

const Booking = () => {
    return (
        <section className="py-32 bg-space-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-space-highlight/50 to-transparent"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">READY TO DEPART?</h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">Secure your seat on the next flight to the stars. Limited availability for the upcoming launch window.</p>

                <form className="max-w-md mx-auto space-y-6">
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-space-950 border border-space-800 py-4 px-6 rounded text-white focus:outline-none focus:border-space-highlight transition-colors"
                        />
                        <div className="absolute inset-0 border border-space-highlight/0 group-hover:border-space-highlight/20 rounded pointer-events-none transition-colors"></div>
                    </div>

                    <button className="w-full py-4 bg-space-highlight text-space-950 font-display font-bold tracking-widest hover:bg-white transition-colors">
                        INITIATE BOOKING
                    </button>
                </form>

                <footer className="mt-32 pt-8 border-t border-space-800 text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
                    <div>&copy; 2054 ASTRA NOVA INC.</div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-space-highlight transition-colors">Privacy</a>
                        <a href="#" className="hover:text-space-highlight transition-colors">Terms</a>
                        <a href="#" className="hover:text-space-highlight transition-colors">Fleet</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Booking;
