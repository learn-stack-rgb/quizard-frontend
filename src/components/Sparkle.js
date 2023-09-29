import React, { useEffect, useRef } from 'react';
import './Sparkle.css';

const Sparkle = () => {
  const trailRef = useRef();
  useEffect(() => {
    const trail = trailRef.current;
    document.addEventListener('mousemove', createSparkle);
    return () => {
      document.removeEventListener('mousemove', createSparkle);
    };
    function createSparkle(e) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = e.clientX + 'px';
      sparkle.style.top = e.clientY + 'px';
      sparkle.style.color = getRandomColor();
      sparkle.innerHTML = '*';
      sparkle.style.animationDuration = getRandomDuration();
      sparkle.style.animationName = 'fall'; // Add a specific animation for falling
      sparkle.style.animationTimingFunction = 'ease-out'; // Add ease-out timing function
      sparkle.style.animationIterationCount = 0.5; // Run animation only once
      sparkle.style.transform = `translateX(${getRandomTranslation()})`; // Random translation
      sparkle.addEventListener('animationend', () => {
        // Check if the sparkle is still a child before removing
        if (trail.contains(sparkle)) {
          trail.removeChild(sparkle);
        }
      });
      trail.appendChild(sparkle);
    }
    function getRandomTranslation() {
      // Randomly choose either left or right
      const direction = Math.random() < 0.5 ? '-' : '';
      // Return a translation between 10vw and 50vw for a wider range
      return `${direction}${Math.random() * 40 + 10}vw`;
    }
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    function getRandomDuration() {
      // Return a duration between 1s and 4s for a slower fall
      return `${Math.random() * 3 + 1}s`;
    }
  }, []);
  return <div ref={trailRef} className="sparkle-trail" />;
};
export default Sparkle;