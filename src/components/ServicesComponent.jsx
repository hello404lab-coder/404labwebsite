import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesComponent = () => {
  const componentRef = useRef(null);
  const servicesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.from('.header-text', {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.header-text',
          start: 'top 80%',
        }
      });

      // Service items stagger animation
      gsap.from('.service-item', {
        opacity: 0,
        y: 100,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 70%',
        }
      });

      // Parallax effect for each service
      servicesRef.current.forEach((item, i) => {
        gsap.to(item, {
          y: i % 2 === 0 ? -180 : -40,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        });
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="bg-black text-white min-h-screen py-32 px-8 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-24">
      <h2 className="header-text text-6xl font-light tracking-tight">
        We can help you with
      </h2>
    </div>

    {/* Services Grid */}
    <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
      {/* Service 1 */}
      <div
        ref={(el) => (servicesRef.current[0] = el)}
        className="service-item space-y-6"
      >
        <div className="text-gray-500 text-lg font-light">01/</div>
        <h3 className="text-4xl font-light">Full Stack Web Development</h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Delivering comprehensive, end-to-end development solutions tailored to meet your unique business goals. From frontend to backend, we create robust, scalable applications that empower your digital presence.
        </p>
      </div>

      {/* Service 2 */}
      <div
        ref={(el) => (servicesRef.current[1] = el)}
        className="service-item space-y-6"
      >
        <div className="text-gray-500 text-lg font-light">02/</div>
        <h3 className="text-4xl font-light">Custom Generative AI Solutions</h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Harness the power of advanced AI to automate processes and fuel innovation. Our custom solutions are designed to enhance creativity and drive efficiency across your organization.
        </p>
      </div>

      {/* Service 3 */}
      <div
        ref={(el) => (servicesRef.current[2] = el)}
        className="service-item space-y-6"
      >
        <div className="text-gray-500 text-lg font-light">03/</div>
        <h3 className="text-4xl font-light">Business Analytics</h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Transform your data into actionable insights for strategic planning. Our business analytics services empower you to make informed decisions and drive measurable growth.
        </p>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="w-full h-px bg-gray-800"></div>
  </div>
</div>

  );
};

export default ServicesComponent;