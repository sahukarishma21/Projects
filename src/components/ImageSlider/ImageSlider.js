import React, { useState } from 'react';
import './ImageSlider.css'; // Create a CSS file for custom styles

const ImageSlider = ({ images, parallaxIntensity, transitionSpeed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <div className="slider-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: `transform ${transitionSpeed}s ease-in-out`,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                transform: `translateY(-${parallaxIntensity * (index - currentIndex)}px)`,
                width: '100%', // Set image width to 100%
                height: '100%', // Set image height to 100%
              }}
            />
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={handlePrev}>&#8249;</button>
        <button onClick={handleNext}>&#8250;</button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
