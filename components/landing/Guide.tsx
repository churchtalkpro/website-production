// src/components/sections/Guide.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Guide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('guide-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="guide-section"
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              {/* Simple intro */}
              <div>
                <p className="text-churchtalk-red font-medium mb-2">Our story</p>
                <h2 className="font-serif text-3xl md:text-4xl text-churchtalk-charcoal mb-6">
                  Why we built ChurchTalk
                </h2>
              </div>

              {/* Main message */}
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I&apos;ve been building software for churches since 2004.
                </p>
                <p>
                  After creating solutions used by 1,800+ churches and talking with countless pastors, 
                  I kept hearing the same thing:
                </p>
                <blockquote className="pl-6 border-l-4 border-churchtalk-red text-xl italic my-6">
                  &ldquo;We need something simple that actually works.&rdquo;
                </blockquote>
                <p>
                  So we built ChurchTalk - everything your church needs, nothing it doesn&apos;t.
                </p>
                <p className="text-base">
                  As a family serving at our local church in India, we understand the unique challenges 
                  churches face. My wife Alithia and I assist in ministry, while also caring for our 
                  son Joel who has special needs. We&apos;re passionate about helping churches reach 
                  the 10/40 window and beyond.
                </p>
              </div>

              {/* Family signature */}
              <div className="pt-6">
                <p className="font-semibold text-churchtalk-charcoal">Bernard, Alithia & Joel Moses</p>
                <p className="text-gray-600">Building for churches, serving the Kingdom</p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className={`${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-churchtalk-red/10 to-blue-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/bernard/family.jpg"
                      alt="Bernard, Alithia and Joel Moses - ChurchTalk Family"
                      fill
                      className="object-cover"
                      priority
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-family.jpg';
                      }}
                    />
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏛️</span>
                    <div>
                      <p className="font-bold text-2xl text-churchtalk-charcoal">20+</p>
                      <p className="text-sm text-gray-600">Years serving churches</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🌍</span>
                    <div>
                      <p className="font-bold text-2xl text-churchtalk-charcoal">10/40</p>
                      <p className="text-sm text-gray-600">Window ministry</p>
                    </div>
                  </div>
                </div>

                {/* Additional floating element */}
                <div className="absolute top-1/2 -right-6 bg-white rounded-lg shadow-lg p-3 transform -translate-y-1/2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">❤️</span>
                    <div>
                      <p className="text-xs text-gray-600">Special needs</p>
                      <p className="text-xs text-gray-600">parents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Simple and clear */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-churchtalk-charcoal mb-4">
              Ready to simplify your church management?
            </h3>
            <p className="text-gray-600 mb-6">
              Built by a family who understands your ministry challenges
            </p>
            <a 
              href="https://app.churchtalk.pro/signup" 
              className="inline-block bg-churchtalk-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
      `}</style>
    </section>
  );
}