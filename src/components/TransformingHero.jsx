import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';
import { companyEmail, companyInsta, companyPhoneNo } from '../utils/constants';
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const TransformingHero = () => {
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
        end: isMobile ? '50% top' : '100% top', // End animation when the container's bottom reaches the top
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
          filter: 'blur(5px)', // Start with a blur of 5px
        },
        {
          filter: 'blur(0px)', // End with a blur of 0px
          width: '100%', // Full width on scroll
          height: '60vh', // Adjust height for small screens
          top: '45%', // Position the image on the bottom half of the screen
          ease: 'power2.inOut',
          duration: 1.5,
        })
        .to(text, {
          height: '50vh', // Adjust height for small screens
          opacity: 1, // Ensure text appears normally for larger screens
          ease: 'power2.out',
          duration: 1.5,
        }, 0);
    } else {
      // Scroll animation for larger screens (md and above)
      tl.fromTo(image, 
        {
          filter: 'blur(3px)', // Start with a blur of 5px
        },
        {
          filter: 'blur(0px)', // End with a blur of 0px
          width: '50%', // Shrinks the image width
          height: '80vh', // Adjusts the height of the image
          top: '5rem', // Repositions the image
          right: '2rem', // Moves it closer to the center
          borderRadius: '5%', // Adds rounded corners
          ease: 'power2.inOut', // Smooth easing
          duration: 1.5, // Animation duration
        })
        .to(text, {
          y: -100,
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
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Text Content */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col md:items-center justify-center  text-borderColor z-10 w-fit md:w-1/2 h-full" // Center the content and make it take half the width
      >
        <div>
          <div className='ml-4 sm:ml-0 uppercase border-[0.5px] border-selGray rounded-md border-dashed p-4'>
            <h1 className="text-[1.5rem] sm:text-2xl md:text-6xl mb-3 md:mb-6">
              End to End<br />
              Business
              Solutions
            </h1>
            <p className="text-selGray text-sm md:text-lg">
              FULL STACK DEVELOPMENT EXPERTS <br className='block md:hidden' />
              HELPING YOU BUILD <br className='hidden md:block' /> BEAUTIFUL AND<br className='block md:hidden' />
              SCALABLE WEBSITE EXPERIENCES
            </p>
            {/* <NavLink to='/contact' className="flex items-center space-x-2 text-[#00FF85] hover:text-white transition-colors">
            <div className="w-3 h-3 rounded-full bg-current"></div>
            <span>CONTACT</span>
          </NavLink> */}
          </div>


          <div className='ml-4 sm:ml-0 mt-2 md:mt-5'>
            <button className="relative flex items-center justify-center w-fit px-1 md:px-2 md:py-1 bg-green text-black hover:bg-black hover:scale-110 rounded-sm md:rounded-md overflow-hidden group transition-all duration-700 cursor-pointer">
              {/* Text */}
              <span className="flex text-[.8rem] md:text-lg font-bold transition-opacity duration-300 group-hover:opacity-0 uppercase">
                Connect <span className='animate-pulse font-extrabold flex items-center ml-1'><FaAnglesRight /> </span>
              </span>

              {/* Icons */}
              <div className="flex justify-around w-full text-white absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-20 group-hover:z-30 group-hover:delay-300 px-2">
                {/* Instagram */}
                <a
                  href={companyInsta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green transition-colors duration-300"
                >
                  <FaInstagram className="text-lg md:text-2xl" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/91${companyPhoneNo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg md:text-2xl" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyEmail}`}
                  className="hover:text-green transition-colors duration-300"
                >
                  <FaEnvelope className="text-lg md:text-2xl" />
                </a>
              </div>
            </button>
          </div>
        </div>


      </div>

      {/* Image Container */}
      <div
        ref={imageRef}
        className="absolute top-0 right-0 w-full h-screen bg-cover bg-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1642697283420-194938fcc339?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Designer"
          className="w-full h-full rounded-xl object-cover"
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
    </div>
  );
};

export default TransformingHero;
