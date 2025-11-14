import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { companyEmail, companyName, navLists } from "../utils/constants";
import { gsap } from "gsap";
import HamburgerBtn from "./HamburgerBtn";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const scrollThreshold = 50;

    const menuRef = useRef(null); // Ref for the menu container
    const menuAnimation = useRef(null); // Ref for the GSAP animation instance

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
            setIsNavbarVisible(currentScrollY < lastScrollY); // Show on scroll up
        }
        setLastScrollY(currentScrollY);
        setIsScrolled(currentScrollY > 50); // Change navbar background on scroll
    };

    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    useEffect(() => {
        const handleScrollDebounced = debounce(handleScroll, 100);
        window.addEventListener("scroll", handleScrollDebounced);

        return () => {
            window.removeEventListener("scroll", handleScrollDebounced);
        };
    }, [lastScrollY]);

    // GSAP Animation for menu open/close
    useEffect(() => {
        if (menuRef.current) {
            if (isMobileMenuOpen) {
                menuAnimation.current = gsap.to(menuRef.current, {
                    height: "100vh",
                    duration: 0.5,
                    ease: "power3.inOut",
                });
            } else {
                menuAnimation.current = gsap.to(menuRef.current, {
                    height: "0",
                    duration: 0.5,
                    ease: "power3.inOut",
                });
            }
        }
    }, [isMobileMenuOpen]);

    // Close menu when a NavLink is clicked
    const handleNavLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        // ${isNavbarVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
        <nav
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-1000 ease-in-out 
                ${!isMobileMenuOpen && isScrolled ? "backdrop-blur-sm bg-selBlack/30" : ""}
                ${!isMobileMenuOpen && !isScrolled ? "bg-transparent" : ""}
                ${isMobileMenuOpen && !isScrolled ? " backdrop-blur-sm bg-black/60" : ""}
                ${isMobileMenuOpen && isScrolled ? "backdrop-blur-sm bg-black" : ""}
            `}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`flex ${isScrolled ? "h-12 md:h-14" : "h-16 md:h-16"} items-center justify-between transition-all duration-1000`}>
                    <div className="flex items-center text-center justify-center">
                        <NavLink to="/" className="flex items-center justify-center text-center uppercase">
                            <h1 className="text-selWhite transition-all duration-700 ease-in-out text-lg md:text-3xl">
                                {companyName}
                            </h1>
                        </NavLink>
                    </div>
                    <div className="">
                        <HamburgerBtn isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                    </div>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`rounded-b-lg absolute top-full left-0 w-full overflow-hidden 
                    ${isScrolled ? "bg-black" : "bg-selBlack/90 backdrop-blur-3xl"}`}
                style={{ height: "0" }} // Initial height for GSAP animation
                id="mobile-menu"
            >
                {/* Main container */}
                <div className="h-full w-full flex flex-col md:flex-row">
                    {/* Left section (Contact Info) */}
                    <div className="hidden md:flex w-full md:w-1/3 md:h-full text-white flex-col px-6 py-10 space-y-6 justify-center items-center">
                        <div className="">
                            <a
                                href={`mailto:${companyEmail}`}
                                className="text-green hover:text-black hover:bg-white px-9 py-5 rounded-xl 
      transition-colors duration-300 text-xl md:text-2xl uppercase border border-dashed border-gray border-white animate-pulse"
                            >
                                {companyEmail}
                            </a>
                        </div>
                    </div>

                    {/* Right section (Nav Items) */}
                    <div className="w-full md:w-2/3 text-white px-4 md:px-10 flex items-center justify-end">
                        <div className="grid grid-cols-1 gap-6 w-full p-4 md:p-10 h-full mt-10 md:mt-0 uppercase">
                            {navLists.map((item, index) => (
                                <NavLink
                                    key={item.order}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block ${isActive ? "font-semibold" : "font-extralight"} text-xl sm:text-2xl md:text-4xl lg:text-6xl transition duration-300
          ${index % 2 === 0 ? "text-left" : "text-right "} 
          ${index === navLists.length - 1 && navLists.length % 2 !== 0 ? " " : ""}`
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    <span className="hover:text-green">{item.name}</span>
                                    
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className='mt-10 animate-pulse flex md:hidden justify-center md:justify-start'>
                        <a
                            href={`mailto:${companyEmail}`}
                            className="px-2 md:px-6 py-1 md:py-3 rounded-md md:rounded-xl text-green
      hover:bg-white hover:text-black transition-colors duration-300 text-sm md:text-base uppercase border border-dashed border-selGray"
                        >
                            {companyEmail}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
