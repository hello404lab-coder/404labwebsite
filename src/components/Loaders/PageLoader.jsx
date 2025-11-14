import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageLoader = ({ onComplete }) => {
  const wordsRef = useRef(null);
  const wordElements = useRef([]);

  useEffect(() => {
    const words = wordElements.current;
    const tl = gsap.timeline({ repeat: -1 });
    
    // Hide all words initially except the first one
    gsap.set(words.slice(1), { yPercent: 100, opacity: 0 });
    
    words.forEach((word, index) => {
      const nextIndex = (index + 1) % words.length;
      
      // Added longer duration and smoother easing
      tl
        // Current word moving up
        .to(word, {
          duration: .5,
          yPercent: -100,
          opacity: 0,
          ease: "power2.inOut"
        })
        .set(word, { yPercent: 100 })
        // Next word coming in
        .fromTo(words[nextIndex], 
          { 
            yPercent: 100,
            opacity: 0 
          },
          { 
            duration: .5,
            yPercent: 0,
            opacity: 1,
            ease: "power2.inOut"
          },
          "-=.5" // Overlap animations for smoother transition
        )
        // Add a small pause between transitions
        .to({}, { duration: 0.2 });
    });

    // Set timeout to call onComplete after 2.5 seconds
    const timeoutId = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      tl.kill();
      clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="flex items-center gap-3 justify-center">
        <p className="text-white font-medium text-xl uppercase ">Cyfletech</p>
        
        <div className="relative h-10 w-24 md:w-36">
          <div ref={wordsRef} className="relative h-full flex items-center">
            {['Chatbots', 'Web', 'Apps', 'AI'].map((word, index) => (
              <span
                key={word}
                ref={el => wordElements.current[index] = el}
                className="absolute text-green text-lg whitespace-nowrap uppercase"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;