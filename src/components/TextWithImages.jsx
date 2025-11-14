import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { textSectionImg } from '../utils/constants';

gsap.registerPlugin(ScrollTrigger);

const TextWithImages = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)'); // 'md' breakpoint (768px and up)

    // Function to apply hover effect
    const applyHoverEffect = () => {
      gsap.utils.toArray('.hover-scale').forEach((image) => {
        gsap.set(image, { scale: 1 });
        image.addEventListener('mouseenter', () => {
          gsap.to(image, { scale: 3, duration: 0.3, ease: 'power1.out' });
        });
        image.addEventListener('mouseleave', () => {
          gsap.to(image, { scale: 1, duration: 0.3, ease: 'power1.out' });
        });
      });
    };

    // Apply hover effect only if media query matches
    if (mediaQuery.matches) {
      applyHoverEffect();
    }

    // Listen for changes in screen size
    mediaQuery.addEventListener('change', (e) => {
      if (e.matches) {
        applyHoverEffect();
      }
    });

    return () => {
      // Clean up event listener on unmount
      mediaQuery.removeEventListener('change', (e) => {
        if (e.matches) {
          applyHoverEffect();
        }
      });
    };
  }, []);

  return (
    <div className="flex items-center justify-center md:min-h-screen md:px-4 text-left md:text-center pt-10 md:pt-0">
      <div className="text-borderColor2 uppercase">
        <h1 className="text-xl md:text-3xl lg:text-5xl leading-normal md:leading-loose ml-3 mx-0 md:mx-20 font-light">
        Hi,<br className='hidden md:block' /> we're
          {' '}
        <span className='text-selRedDark font-semibold'>Cyfletech</span>
          .<br />
        we make tech work like magic Whether it’s <span className='text-green'>full-stack web development</span>, lightning-fast <span className='text-selOrange'>app solutions</span>, chatbots that actually get you, or <span className='text-selBlue'>AI tools</span> that don’t require a PhD to understand, we’ve got it all. Oh, and we turn data into <span className='text-selYellow'>business insights</span> so sharp, you'll feel like a genius. Let’s make something awesome together!</h1>
      </div>
    </div>
  );
};

export default TextWithImages;
