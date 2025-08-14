// src/components/sections/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({});
  
  const animatedWords = [
    { text: 'soul relationships', color: 'text-churchtalk-red' },
    { text: 'spiritual growth', color: 'text-churchtalk-blue' },
    { text: 'pastoral care', color: 'text-churchtalk-green' },
    { text: 'discipleship', color: 'text-churchtalk-pink' },
    { text: 'shepherding', color: 'text-churchtalk-yellow' }
  ];

  const featureVideos = [
    {
      id: 'srm',
      title: 'Soul Relationship Management',
      description: 'Track spiritual journeys, not just attendance',
      thumbnail: '/thumbnails/srm-thumbnail.jpg',
      video: '/videos/srm-demo.mp4',
      icon: '💝',
      color: 'churchtalk-red'
    },
    {
      id: 'insights',
      title: 'AI-Powered Insights',
      description: 'Proactive pastoral care alerts',
      thumbnail: '/thumbnails/insights-thumbnail.jpg',
      video: '/videos/insights-demo.mp4',
      icon: '🤖',
      color: 'churchtalk-blue'
    },
    {
      id: 'giving',
      title: 'Simple Giving',
      description: 'Keep more of every donation',
      thumbnail: '/thumbnails/giving-thumbnail.jpg',
      video: '/videos/giving-demo.mp4',
      icon: '💸',
      color: 'churchtalk-green'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Word animation
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2500);
    
    return () => {
      clearInterval(wordInterval);
    };
  }, [animatedWords.length]);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideos(prev => ({ ...prev, [videoId]: true }));
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-churchtalk-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-churchtalk-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h1 className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-churchtalk-charcoal mb-6 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}>
            <span className="font-light">Beyond CRM:</span>{' '}<br />
            <span className="font-normal">Soul Relationship</span>{' '}
            <span className="font-normal">Management</span>
          </h1>
          
          <p className={`text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'
          }`}>
            Track <span className={`${animatedWords[wordIndex].color} font-medium transition-all duration-500`}>
              {animatedWords[wordIndex].text}
            </span>, not just attendance. Build deeper relationships with intelligent pastoral care tools designed for the modern church.
          </p>

          {/* Pricing Preview */}
          <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-8 ${
            isVisible ? 'animate-fade-up animation-delay-300' : 'opacity-0'
          }`}>
            <div className="text-center">
              <h3 className="font-bold text-2xl text-churchtalk-charcoal mb-1">Free Forever</h3>
              <p className="text-gray-600">Unlimited SRM</p>
              <p className="text-sm text-gray-500">3% + $0.30 for giving</p>
            </div>
            <div className="text-2xl text-gray-300">or</div>
            <div className="text-center">
              <h3 className="font-bold text-2xl text-churchtalk-charcoal mb-1">Starts at $99/month</h3>
              <p className="text-gray-600">Everything included</p>
              <p className="text-sm text-gray-500">Custom app + lower fees</p>
            </div>
          </div>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${
            isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'
          }`}>
            <Link
              href="https://dashboard.churchtalk.pro/signup"
              className="bg-churchtalk-red text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              START FREE
            </Link>
            <Link
              href="#pricing"
              className="bg-white text-churchtalk-charcoal border-2 border-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:border-churchtalk-charcoal transition-all"
            >
              SEE FULL PRICING →
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-600 text-sm md:text-base ${
            isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'
          }`}>
            <div className="flex items-center gap-2">
              <span className="text-churchtalk-green text-xl md:text-2xl">✓</span>
              <span className="font-medium">Unlimited Members</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-churchtalk-green text-xl md:text-2xl">✓</span>
              <span className="font-medium">No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-churchtalk-green text-xl md:text-2xl">✓</span>
              <span className="font-medium">Free Migration</span>
            </div>
          </div>
        </div>

        {/* Main Video Preview Section */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-center">
            {/* Desktop Dashboard Video */}
            <div className="lg:col-span-2 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-500 text-sm">dashboard.churchtalk.pro</span>
                  </div>
                </div>
                {/* Video Container showing SRM dashboard */}
                <div className="relative aspect-video bg-gray-900">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/srm-dashboard-demo.mp4" type="video/mp4" />
                    <source src="/videos/srm-dashboard-demo.webm" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>

            {/* Mobile App Video */}
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <div className="mx-auto max-w-[280px] sm:max-w-xs">
                <div className="bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl">
                  <div className="bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative" style={{ aspectRatio: '9/19' }}>
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover rounded-[2rem] sm:rounded-[2.5rem]"
                    >
                      <source src="/videos/mobile-srm-demo.mp4" type="video/mp4" />
                      <source src="/videos/mobile-srm-demo.webm" type="video/webm" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Videos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featureVideos.map((feature) => (
              <div 
                key={feature.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform group cursor-pointer"
                onClick={() => handlePlayVideo(feature.id)}
              >
                <div className="aspect-video bg-gray-900 relative">
                  {playingVideos[feature.id] ? (
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={feature.video} type="video/mp4" />
                    </video>
                  ) : (
                    <>
                      <div className="relative w-full h-full">
                        <Image
                          src={feature.thumbnail} 
                          alt={feature.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling;
                            if (fallback) {
                              fallback.classList.remove('hidden');
                            }
                          }}
                        />
                      </div>
                      <div className="hidden absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <span className="text-4xl">{feature.icon}</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-8 h-8 text-churchtalk-red ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base lg:text-lg mb-1 text-churchtalk-charcoal">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - SRM Focus */}
        <div className="text-center mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-churchtalk-charcoal mb-6 font-light">
            Ministry that scales with heart
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Stop managing data. Start shepherding souls. ChurchTalk SRM helps you track what matters most - 
            the spiritual journey of every person in your congregation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="text-churchtalk-red text-lg sm:text-xl">💝</span> 
              <span className="font-medium">SOUL RELATIONSHIPS</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-churchtalk-blue text-lg sm:text-xl">📊</span> 
              <span className="font-medium">DISCIPLESHIP TRACKING</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-churchtalk-green text-lg sm:text-xl">🎯</span> 
              <span className="font-medium">PASTORAL INSIGHTS</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-churchtalk-pink text-lg sm:text-xl">🤖</span> 
              <span className="font-medium">AI-POWERED CARE</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}