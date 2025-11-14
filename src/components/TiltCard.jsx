import React, { useState, useCallback } from "react";

function throttle(func, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        func(...args);
    };
}

const TiltEffect = ({ project }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [borderPosition, setBorderPosition] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback(
        throttle((e) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;

            // Invert the tilt direction by reversing the formula for rotateX and rotateY
            const rotateX = (y - centerY) / -30;  // Inverted tilt to go downward
            const rotateY = (centerX - x) / -30; // Inverted tilt to go downward

            setRotate({ x: rotateX, y: rotateY });

            // Store the mouse position to change the border color
            setBorderPosition({ x, y });
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setBorderPosition({ x: 0, y: 0 });
    };

    return (
        <div
            className="relative p-5 md:p-10 pb-10 border md:border-none border-selGray rounded-xl bg-selGray-200 hover:bg-selGray-100 transition-colors duration-500 shadow-lg w-[90vw] md:w-full mx-auto group"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >

            {/* Tiltable Card */}
            <div
                className="relative rounded-xl  transition-transform duration-400 will-change-transform"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1)`,
                }}
            >
                <img src={project.imageUrl} className="w-full h-60 sm:h-52 md:h-64 lg:h-96 object-cover rounded-xl group-hover:scale-95 transition-all duration-700" alt="" />
            </div>

            {/* Name and Website Button */}
            <div className="mt-2 md:mt-4 text-center flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="text-white text-lg md:text-2xl font-extralight">{project.title}</div>
                    <button className="mt-2 px-2 md:px-4 py-1 md:py-2 text-green text-xs rounded-md md:rounded-lg shadow-lg transition-all uppercase border border-selGray">
                        Website
                    </button>
            </div>
        </div>
    );
};

export default TiltEffect;
