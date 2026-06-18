import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero video/1000086985 (1).mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Start video after preloader finishes - with muted for autoplay compliance
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
        videoRef.current.play().catch(error => {
          console.log('Autoplay failed:', error);
        });
        setShouldPlay(true);
        
        // After video has played for a moment, unmute if user interaction allows
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.muted = false;
          }
        }, 500);
      }
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  // Pause/Resume video when user scrolls in/out of hero section
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && videoRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const isInView = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
        
        if (isInView && shouldPlay) {
          // Section is in view - resume playing
          if (videoRef.current.paused) {
            videoRef.current.play().catch(error => {
              console.log('Resume failed:', error);
            });
          }
        } else {
          // Section is out of view - pause playing
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldPlay]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video - Auto-play with muted for compliance */}
      <video
        ref={videoRef}
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            I am the Founder of <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]">Samkass & Full Stack Developer</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            Building practical SaaS solutions, web applications, and browser games. Experienced in React, Node.js, AI tools, and cloud technologies.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              View My Work
            </button>
            
            {/* Secondary Button - Glassmorphism style */}
            <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
