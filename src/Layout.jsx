import React, { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/Loaders/PageLoader';
import ScrollToTop from './utils/ScrollToTop';
import LocomotiveScroll from 'locomotive-scroll';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { gsap } from 'gsap';
import ChatbotUI from './components/ChatbotUI';

const Layout = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const contentRef = useRef(null);
  const navRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  const handleLoaderComplete = () => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
        duration: 1
      }
    });

    // Hide loader
    setIsLoaderVisible(false);

    // Animate content
    tl.fromTo([navRef.current, mainRef.current, footerRef.current],
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        clearProps: "all" // This ensures styles are cleaned up after animation
      }
    );
  };

  return (
    <div className="bg-black min-h-screen flex flex-col relative">
      <ToastContainer toastClassName="custom-toast" />
      
      {/* Always render content, but conditionally render loader on top */}
      <div ref={contentRef} className="content w-full">
        <div ref={navRef} style={{ visibility: isLoaderVisible ? 'hidden' : 'visible' }}>
          <Navbar />
        </div>
        
        <main ref={mainRef} className="flex-grow" style={{ visibility: isLoaderVisible ? 'hidden' : 'visible' }}>
          <Outlet context={{ isLoaderVisible }} />
        </main>
        
        <div ref={footerRef} style={{ visibility: isLoaderVisible ? 'hidden' : 'visible' }}>
          <Footer />
        </div>
      <ChatbotUI />

      </div>

      {/* Render loader on top if visible */}
      {isLoaderVisible && (
        <div className="fixed inset-0 z-50">
          <PageLoader onComplete={handleLoaderComplete} />
        </div>
      )}

      {!isLoaderVisible && <ScrollToTop />}
    </div>
  );
};

export default Layout;