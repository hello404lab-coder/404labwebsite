import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers } from "../assets/js/data"; // Adjust path to your team data
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
    const location = useLocation();
  const isHomepage = location.pathname === '/';
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
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${isHomepage && 'py-16'} px-6 bg-black text-white relative overflow-hidden pb-32`}
        >
            <div className="text-center mb-12">
                <h2 className="section-heading tracking-wide ">Our Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div
                        key={member.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="relative flex flex-col justify-between p-6 bg-black/80 border-2 border-neutral-600 rounded-lg shadow-lg hover:scale-105 hover:border-white hover:shadow-md transition-all duration-300"
                    >
                        <div>
                        {member.picture ? (
                            <img
                                src={member.picture}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border border-neutral-500"
                            />
                        ) : (
                            <FaUser className="w-32 h-32 rounded-full mx-auto mb-4 text-neutral-500 border border-neutral-500 p-4" />
                        )}

                        <h3 className="text-2xl font-bold mb-4 tracking-wide text-center">
                            {member.name}
                        </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            {member.bio}
                        </p>
                        {member.linkedIn && (
                            <a
                                href={member.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center mt-4 py-2 border border-neutral-500 text-green font-semibold rounded-md hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Connect on LinkedIn
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;
