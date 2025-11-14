import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "../assets/js/data";
import { NavLink, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);


const Services = () => {
  const location = useLocation();
  const isServicePage = location.pathname === '/services';
  const servicesToDisplay = isServicePage ? servicesData : servicesData.slice(0, 4);

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.to(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      y: 0, // To animate from a certain value (e.g., 100px) to the current position
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 bg-black text-white relative overflow-hidden pb-32"
    >
      <div className="text-center mb-12">
        <h2 className="section-heading tracking-wide ">Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:first:grid-cols-3 sm:grid-cols-2 lg:first:grid-cols-3 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {servicesToDisplay.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col justify-between relative p-6 bg-black/80 border-2 border-neutral-600 rounded-lg shadow-lg hover:scale-105 hover:border-white hover:shadow-md transition-all duration-300"
          >

            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div>
              {service.bullets && (
                <ul className="mb-4 text-sm">
                  {service.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-center mb-2 text-gray-300"
                    >
                      <span className="w-4 h-4 mr-2 bg-green-500 rounded-full"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {service.imgSrc && (
                <div className="mt-6">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="w-full h-64 object-contain rounded-lg border border-neutral-500"
                  />
                </div>
              )}
            </div>
            <a
              href={service.link}
              className="block w-full text-center mt-4 py-2 border border-neutral-500 text-green font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        ))}
      </div>

      {!isServicePage &&
        <div className='text-white text-center mt-16 uppercase text-base md:text-xl'>
          <NavLink to='/services' className='border border-borderColor px-3 py-2 rounded-lg bg-selGray-200 hover:bg-selGray transition-colors duration-500' >see our services</NavLink>
        </div>
      }
    </section>
  );
};

export default Services;
