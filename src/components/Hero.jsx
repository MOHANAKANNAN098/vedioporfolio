import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/1000086985 (1).mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Simple and direct autoplay after preloader
  useEffect(() => {
    const autoplayVideo = async () => {
      if (!videoRef.current) return;

      try {
        // Start with muted (browser requirement)
        videoRef.current.muted = true;
        videoRef.current.volume = 0;

        // Wait for preloader to finish (2.2s) + small buffer
        await new Promise(resolve => setTimeout(resolve, 2400));

        // Try to play
        await videoRef.current.play();
        
        // Unmute after successful play
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.volume = 1;
          }
        }, 300);

        setVideoStarted(true);
      } catch (err) {
        console.log('Autoplay attempt 1 failed, retrying...');
        // Retry after 1 second
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              console.log('Autoplay attempt 2 failed');
            });
          }
        }, 1000);
      }
    };

    autoplayVideo();
  }, []);

  // Handle scroll to pause/resume
  useEffect(() => {
    if (!videoStarted) return;

    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setVideoStarted(true);
      } else if (!isInView && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videoStarted]);

  // Handle page visibility (tab switching)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;

      if (document.hidden) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Fallback: Click to play
  const handleClick = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.muted = false;
          }
        }, 300);
      }).catch(() => {});
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen overflow-hidden bg-black"
      onClick={handleClick}
    >
      {/* Background Video - Simple and Direct */}
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
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
            
            {/* Secondary Button */}
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
