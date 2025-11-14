import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faqData } from "../assets/js/data";
import { PiMinusThin, PiPlusThin } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      const updateEndValue = () => {
        return screenWidth >= 768 ? "bottom 25%" : "bottom 15%"; // Adjust for md and above
      };

      const trigger = ScrollTrigger.create({
        trigger: ".faq-container",
        start: "top top", // Pin when the container reaches the top
        endTrigger: ".faq-content",
        end: () => updateEndValue(), // Dynamic end value based on screen width
        pin: ".faq-left", // Pin the faq-left element
        scrub: 1, // Smooth scrolling of faq-right
        markers: false, // Disable scroll markers for clean UI
      });

      // Cleanup
      return () => {
        trigger.kill(); // Kill this specific ScrollTrigger instance
      };
    }
  }, []);

  return (
    <div className="bg-white min-h-screen md:min-h-[50vh] px-6 sm:px-10 lg:px-20 flex justify-center items-center font-karla">
      <div className="faq-container flex flex-col md:flex-row justify-center gap-6 max-w-[80rem] py-20 md:pt-40">
        {/* left Section (Heading) */}
        <div className="faq-left md:w-1/2 text-center font-doto">
          <h1 className="section-heading">FAQs</h1>
        </div>

        {/* right Section (Q&A) */}
        <div className="faq-right flex-1 lg:w-1/2">
          <ul className="faq-content">
            {faqData.map((faq, index) => (
              <li
                key={index}
                className={`faq-section transition-all duration-300 border-b pb-2 last:border-none overflow-hidden group hover:border-none`}
              >
                <button
                  className="mt-1 md:mt-2 w-full flex justify-between items-center text-2xl md:text-3xl outline-none hover:px-2 md:hover:px-4  hover:bg-gray-200 hover:rounded-xl transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-left font-bold">{faq.question}</span>

                  <span className="m-2 border border-selGray p-1 text-black flex items-center justify-center w-8 h-6 md:w-12 md:h-8 ml-2 rounded-full bg-gray-200 group-hover:bg-white transition-all duration-500 ease-in-out">
                    {activeIndex === index ? (
                      <PiMinusThin className="text-xl sm:text-2xl md:text-2xl transition-opacity duration-500" />
                    ) : (
                      <PiPlusThin className="text-xl sm:text-2xl md:text-2xl transition-opacity duration-500" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-[max-height] duration-300 overflow-hidden pl-4 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="mt-2 text-gray-600 text-lg sm:text-xl md:text-2xl">{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
