'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: SlideData[] = [
    {
      id: 1,
      title: 'Excellence in Healthcare',
      subtitle: 'Shaping the Future of Medicine',
      description: 'State Allied Healthcare University provides world-class paramedical education with state-of-the-art medical facilities and expert faculty.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
      ctaText: 'Apply For Admission',
      ctaLink: '/admissions'
    },
    {
      id: 2,
      title: 'Advanced Medical Labs',
      subtitle: 'Hands-on Clinical Training',
      description: 'Our laboratories are equipped with the latest diagnostic and research technology to prepare students for real-world challenges.',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop',
      ctaText: 'Explore Facilities',
      ctaLink: '/facilities'
    },
    {
      id: 3,
      title: 'Global Career Path',
      subtitle: 'Join Our Elite Alumni',
      description: 'Our graduates are serving in top hospitals and healthcare institutions worldwide. Start your journey with us today.',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
      ctaText: 'View Our Courses',
      ctaLink: '/courses'
    },
    {
      id: 4,
      title: 'Dynamic Campus Life',
      subtitle: 'Holistic Development',
      description: 'Beyond academics, we focus on personal growth, sports, and cultural excellence in a vibrant campus environment.',
      imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop',
      ctaText: 'Discover Campus',
      ctaLink: '/life'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden bg-[#0f172a] font-poppins">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image with Zoom Effect */}
          <div className="absolute inset-0 h-full w-full">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className={`h-full w-full object-cover transition-transform duration-[10000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>

          {/* Content Container */}
          <div className="relative h-full w-full container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="flex h-full flex-col justify-center max-w-4xl">
              <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}>
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-[#ff6a00]/10 backdrop-blur-md border border-[#ff6a00]/30 rounded-full shadow-[0_0_15px_rgba(255,106,0,0.2)]">
                  <span className="animate-pulse w-2 h-2 bg-[#ff6a00] rounded-full mr-2"></span>
                  <span className="text-[#ff6a00] font-bold tracking-widest text-xs sm:text-sm uppercase">
                    Welcome to State Allied Healthcare University
                  </span>
                </div>
                
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.2] tracking-tight drop-shadow-2xl">
                  {slide.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-yellow-400">
                    {slide.subtitle}
                  </span>
                </h1>
                
                {/* Description */}
                <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-light drop-shadow-md border-l-4 border-[#ff6a00] pl-6">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Link 
                    href={slide.ctaLink}
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#ff6a00] to-orange-500 text-white rounded-xl font-bold text-lg hover:from-orange-500 hover:to-[#ff6a00] transition-all hover:scale-[1.02] shadow-[0_10px_30px_rgba(255,106,0,0.3)] overflow-hidden flex items-center justify-center"
                  >
                    <span className="relative z-10">{slide.ctaText}</span>
                    <svg className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all text-center"
                  >
                    Contact Helpdesk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators / Navigation Controls are intentionally removed for a clean look */}

      {/* Decorative Blur Backgrounds */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-[#ff6a00]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
    </section>
  );
};

export default HeroSlider;