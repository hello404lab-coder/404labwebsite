import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../assets/js/data';
import TiltEffect from './TiltCard';
import { Link, NavLink, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const location = useLocation();

  // Check if the current path is "/work"
  const isWorkPage = location.pathname === '/work';
  const projectsToDisplay = isWorkPage ? [...projectsData].reverse() : [...projectsData].reverse().slice(0, 4);


  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    // GSAP horizontal scroll animation for below md
    if (window.innerWidth < 768) {
      gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + 'px',
        xPercent: -2,  // Scroll horizontally
        ease: 'none',
        scrollTrigger: {
          trigger: '.work-container',
          start: 'top top',
          end: 'bottom top', // Set the end of the scroll animation
          scrub: 1, // Sync the animation with the scroll
          pin: '.work-container', // Pin the container while scrolling
          markers: false, // Disable markers for debugging
        },
      });
    }

    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full min-h-screen md:pb-10 work-container overflow-x-hidden">
      <div className=" mx-auto px-4 py-20 flex flex-col justify-start items-center">
        {/* Heading */}
        <h1
          // ref={headingRef}
          className="section-heading text-center mb-12 text-white"
        >
          Works
        </h1>

        {/* Projects Grid */}

        <div className="md:max-w-6xl mx-auto ">
          <div className="flex w-full md:w-auto md:grid md:grid-cols-2 gap-6 md:items-center md:justify-center "
            ref={scrollContainerRef}
          >
            {projectsToDisplay.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="md:inline-block mx-2 md:mx-0 w-full"
                key={index}
              >
                <TiltEffect project={project} />
              </a>
            ))}

          </div>
        </div>

        {!isWorkPage &&
          <div className='text-white text-center mt-16 uppercase text-base md:text-xl'>
            <NavLink to='/work' className='border border-borderColor px-3 py-2 rounded-lg bg-selGray-200 hover:bg-selGray transition-colors duration-500' >see more work</NavLink>
          </div>
        }



      </div>
    </section>
  );
};

export default Work;
