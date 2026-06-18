import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/1000086985 (1).mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Play video INSTANTLY when component loads
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video to play immediately
    const playNow = () => {
      video.muted = true;
      video.currentTime = 0;
      
      video.play()
        .then(() => {
          console.log('✓ Video started');
          // Unmute after video plays
          setTimeout(() => {
            video.muted = false;
            console.log('✓ Audio enabled');
          }, 200);
        })
        .catch(err => {
          console.error('Play failed:', err);
          // Retry immediately
          setTimeout(() => {
            video.muted = true;
            video.play()
              .then(() => {
                setTimeout(() => {
                  video.muted = false;
                }, 200);
              })
              .catch(() => console.error('Retry failed'));
          }, 100);
        });
    };

    // Play immediately on mount
    playNow();

    // Also play when metadata loads
    const handleLoadedMetadata = () => {
      console.log('Metadata loaded');
      if (video.paused) {
        playNow();
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', () => console.log('✓ Video playing'));
    video.addEventListener('ended', () => {
      console.log('Video ended, restarting');
      video.currentTime = 0;
      video.play();
    });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // Handle scroll to pause/resume
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      } else if (!isVisible && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Video from src/assets - plays 0-10 seconds */}
      <video
        ref={videoRef}
        loop={false}
        muted={true}
        autoPlay={true}
        playsInline={true}
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onError={(e) => console.error('Video error:', e)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Fallback color */}
      <div className="absolute inset-0 z-0 bg-black"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <h1 
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg"
          >
            I am the Founder of <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]">Samkass & Full Stack Developer</span>
          </h1>

          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-lg"
          >
            Building practical SaaS solutions, web applications, and browser games. Experienced in React, Node.js, AI tools, and cloud technologies.
          </p>

          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <button className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              View My Work
            </button>
            
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
