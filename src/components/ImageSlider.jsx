import React, { useState, useEffect, useRef, useCallback } from 'react';

const ImageSlider = ({ 
  images, 
  interval = 5000, 
  showControls = false, 
  className = "",
  onImageChange = () => {} 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef(null);

  // Handle touch start
  const handleTouchStart = useCallback((e) => {
    setIsUserInteracting(true);
    touchStartX.current = e.touches[0].clientX;
  }, []);

  // Handle touch move
  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  // Handle touch end - detect swipe direction
  const handleTouchEnd = useCallback(() => {
    if (!images || images.length <= 1) return;
    
    const touchDiff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        // Swipe left - go to next
        goToNext();
      } else {
        // Swipe right - go to previous
        goToPrevious();
      }
    }
    
    setIsUserInteracting(false);
  }, [images]);

  // Auto-slide effect (pause when user is interacting)
  useEffect(() => {
    if (!images || images.length <= 1 || isUserInteracting) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        onImageChange(images[newIndex]);
        return newIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, onImageChange, isUserInteracting]);

  const goToPrevious = useCallback(() => {
    if (!images || images.length <= 1) return;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onImageChange(images[newIndex]);
  }, [currentIndex, images, onImageChange]);

  const goToNext = useCallback(() => {
    if (!images || images.length <= 1) return;
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    onImageChange(images[newIndex]);
  }, [currentIndex, images, onImageChange]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    onImageChange(images[index]);
  }, [images, onImageChange]);

  if (!images || images.length === 0) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <img 
          src={images[0]} 
          alt="Project" 
          className="w-full h-full object-contain rounded-lg"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div 
      ref={sliderRef}
      className={`relative group ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }} // Allow vertical scrolling but handle horizontal swipes
    >
      {/* Main Image */}
      <img 
        src={images[currentIndex]} 
        alt={`Project ${currentIndex + 1}`}
        className="w-full h-full object-contain rounded-lg transition-opacity duration-300 select-none"
        loading="lazy"
        draggable={false}
      />
      
      {/* Navigation Controls */}
      {showControls && (
        <>
          {/* Previous Button - Always visible on mobile, hover on desktop */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full transition-all duration-200
                     w-10 h-10 md:w-8 md:h-8 
                     opacity-70 md:opacity-0 md:group-hover:opacity-100
                     flex items-center justify-center touch-manipulation"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button - Always visible on mobile, hover on desktop */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full transition-all duration-200
                     w-10 h-10 md:w-8 md:h-8 
                     opacity-70 md:opacity-0 md:group-hover:opacity-100
                     flex items-center justify-center touch-manipulation"
            aria-label="Next image"
          >
            <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator - Always visible on mobile for better UX */}
      {showControls && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 
                      opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-200 touch-manipulation
                        w-3 h-3 md:w-2 md:h-2
                        ${index === currentIndex 
                          ? 'bg-white scale-110' 
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {showControls && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm 
                      opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Swipe indicator for mobile users (optional) */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                      opacity-50 md:hidden pointer-events-none">
          <div className="flex items-center space-x-1 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
            </svg>
            <span>Swipe</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;