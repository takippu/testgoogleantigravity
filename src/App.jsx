import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Mission from './components/Mission';
import Booking from './components/Booking';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-space-950 min-h-screen text-white selection:bg-space-highlight selection:text-space-950">
      <Hero />
      <Fleet />
      <Mission />
      <Booking />
    </div>
  );
}

export default App;
