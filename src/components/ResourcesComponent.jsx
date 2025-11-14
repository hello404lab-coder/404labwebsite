import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiGreensock } from "react-icons/si";

const ResourcesComponent = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      y: 50,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const resources = [
    {
      icon: <FaReact className="text-blue-400 text-6xl" />,
      title: "React",
      description: "A JavaScript library for building user interfaces efficiently.",
      link: "https://reactjs.org/",
    },
    {
      icon: <SiTailwindcss className="text-teal-300 text-6xl" />,
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      link: "https://tailwindcss.com/",
    },
    {
      icon: <FaPython className="text-yellow-400 text-6xl" />,
      title: "Python",
      description: "A versatile programming language loved by data scientists and developers.",
      link: "https://www.python.org/",
    },
    {
      icon: <SiGreensock className="text-green-400 text-6xl" />,
      title: "GSAP",
      description: "A powerful JavaScript animation library for smooth and responsive animations.",
      link: "https://greensock.com/gsap/",
    },
  ];

  return (
    <div className="px-8 py-16 bg-black text-gray-100">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-50">Resources</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-slate-800shadow-lg rounded-lg transform hover:-translate-y-2 transition-transform duration-300 hover:bg-gray-700"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="flex flex-col items-center text-center">
              {resource.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-100">{resource.title}</h3>
              <p className="mt-2 text-lg text-gray-400">{resource.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourcesComponent;
