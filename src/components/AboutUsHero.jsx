import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import { aboutBgImg, companyEmail, companyInsta, companyPhoneNo } from '../utils/constants';
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const AboutUsHero = () => {
  // Refs for DOM elements
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    const isMobile = window.innerWidth < 768;
  
    // Set up GSAP timeline with ScrollTrigger for the image and text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container, // The element that triggers the animation
        start: 'top top', // Start animation when the container hits the top of the viewport
        end: isMobile ? '20% top' : '30% top', // End animation when the container's bottom reaches the top
        scrub: 1, // Smooth scrubbing effect
        pin: true, // Pins the section during scroll
        anticipatePin: 1, // Optimizes pinning performance
        markers: false, // Enable for debugging
      },
    });
  
    // Scroll animation for small screens (below 768px)
    if (window.innerWidth < 768) {
      tl.fromTo(image, 
        {
          filter: 'blur(0px)', // Start with a blur of 5px
        },
        {
          filter: 'blur(2px)', // End with a blur of 0px
          width: '100%', // Full width on scroll
          height: '20%', // Adjust height for small screens
          top: '50%', // Position the image on the bottom half of the screen
          ease: 'power2.inOut',
          duration: 1.5,
        })
        .to(text, {
          y: -50,
          height: '100%', // Adjust height for small screens
          opacity: 1, // Ensure text appears normally for larger screens
          ease: 'power2.out',
          duration: 1.5,
        }, 0);
    } else {
      // Scroll animation for larger screens (md and above)
      tl.fromTo(image, 
        {
          filter: 'blur(0px)', // Start with a blur of 5px
        },
        {
          filter: 'blur(4px)', // End with a blur of 0px
          width: '100%', // Shrinks the image width
          height: '40%', // Adjusts the height of the image
          top: '45%', // Repositions the image
          ease: 'power2.inOut', // Smooth easing
          duration: 1.5, // Animation duration
        })
        .to(text, {
          // y: -100,
          height: '50%', // Adjusts the height of the image
          background:'black/90',
          opacity: 1, // Ensure text appears normally for larger screens
          ease: 'power2.out',
          duration: 1.5,
        }, 0);
    }
  
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[60vh] overflow-hidden"
    >
      {/* Text Content */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col justify-center  text-borderColor2 z-10 w-full h-full" // Center the content and make it take half the width
      >
        <div className='flex justify-center section-heading'>
          <span>About Us</span>
        </div>


      </div>

      {/* Image Container */}
      <div
        ref={imageRef}
        className="absolute top-0 right-0 w-full h-full bg-contain bg-center overflow-hidden"
      >
        <img
        src={aboutBgImg}
          alt="Designer"
          className="w-full h-full rounded-xl object-fill md:object-cover"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 "></div>
      </div>
    </div>
  );
};

export default AboutUsHero;
