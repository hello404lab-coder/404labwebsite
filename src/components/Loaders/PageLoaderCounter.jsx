import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const PageLoader = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const progressBarRef = useRef(null); // Reference to the progress bar

    useEffect(() => {
        // Countdown animation from 0 to 100
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 100) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval); // Stop the interval when 100 is reached
                    return prevCount;
                }
            });
        }, 20); // Update every 20ms (50 increments per second)


        // Once the countdown reaches 100, reveal the background and hide the loader
        if (count === 100) {
            gsap.to("#pageLoader", {
                opacity: 0, duration: 1, delay: 0.5, onComplete: () => {
                    // Call the onComplete prop to hide the loader in the parent component
                    if (onComplete) {
                        onComplete();
                    }
                }
            });
            gsap.to("body", { backgroundColor: "#ffffff", duration: 1 }); // Change background color
        }

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, [count, onComplete]); // Run this effect when count or onComplete changes

    return (
        <div
            id="pageLoader"
            className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center"
            style={{ zIndex: 9999 }}
        >
            <div className="text-center text-white w-full relative flex justify-center">
                {/* Show the current count */}
                <div className="count text-3xl md:text-5xl font-extralight bg-black px-4 md:px-7 w-fit z-50 shadow-lg">{count}</div>

                {/* Progress bar container */}
                <div className="progress-bar absolute top-1/2">
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;
