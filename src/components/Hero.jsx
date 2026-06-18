import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/1000086985 (1).mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Handle video metadata loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoReady(true);
      console.log('Video ready to play');
    };

    const handleError = (e) => {
      console.error('Video error:', e);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Auto-play video after preloader finishes
  useEffect(() => {
    if (!isVideoReady) return;

    const startAutoPlay = async () => {
      try {
        // Wait for preloader to finish (2.4 seconds total)
        await new Promise(resolve => setTimeout(resolve, 2400));

        if (!videoRef.current) return;

        // Reset and start fresh
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
        videoRef.current.volume = 0;

        // Try to play
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video autoplay successful');
              // Wait a moment then unmute for audio
              setTimeout(() => {
                if (videoRef.current) {
                  videoRef.current.muted = false;
                  videoRef.current.volume = 1;
                  console.log('Video unmuted - audio enabled');
                }
              }, 800);
            })
            .catch(error => {
              console.error('Autoplay failed:', error);
              // Retry once
              setTimeout(() => {
                if (videoRef.current && videoRef.current.paused) {
                  videoRef.current.muted = true;
                  videoRef.current.currentTime = 0;
                  videoRef.current.play()
                    .then(() => {
                      setTimeout(() => {
                        if (videoRef.current) {
                          videoRef.current.muted = false;
                          videoRef.current.volume = 1;
                        }
                      }, 800);
                    })
                    .catch(err => console.error('Retry failed:', err));
                }
              }, 1500);
            });
        }
      } catch (err) {
        console.error('Auto-play error:', err);
      }
    };

    startAutoPlay();
  }, [isVideoReady]);

  // Handle scroll - pause when scrolling away, resume when scrolling back
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;

      if (isVisible && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else if (!isVisible && rect.top < -500 && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle tab visibility
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

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Video - Optimized for streaming */}
      <video
        ref={videoRef}
        loop
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{
          WebkitPlaysinline: 'true',
          WebkitUserSelect: 'none',
          touchAction: 'none'
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure content is visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-10"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg"
          >
            I am the Founder of <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]">Samkass & Full Stack Developer</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-lg"
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
