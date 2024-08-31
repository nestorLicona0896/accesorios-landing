import React, { useState, useEffect } from 'react';
// import {autoSlide, prevSlide, nextSlide} from '../js/slider';

export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // this state is used to set the current index to display
    const totalSlides = 3;

    // slides to the next slide::
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // slides to the previous slide:
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
          );
    };

    // Infinite auto-slide function
    useEffect(() => {
        const autoSlide = setInterval(nextSlide, 8000); // Change slide every 3 seconds
        return () => clearInterval(autoSlide); // Clear interval on component unmount
    }, []);


    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                <div className="slide" id="slide-1">
                    <img src='./img/slider/slider-1.png' alt="slider" />
                </div>
                <div className="slide" id="slide-2">
                    <img src='./img/slider/slider-2.png' alt="slider" />
                </div>
                <div className="slide" id="slide-3">
                    <img src='./img/slider/slider-3.png' alt="slider" />
                </div>
            </div>
            <button className="prev-btn" onClick={prevSlide}>&#8249;</button>
            <button className="next-btn" onClick={nextSlide}>&#8250;</button>
        </div>
    );
}
