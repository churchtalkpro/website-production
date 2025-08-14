// src/components/sections/ActionBand.tsx
'use client';

import Link from 'next/link';

export default function ActionBand() {
  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-br from-churchtalk-charcoal via-gray-900 to-black">
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        {/* Gradient accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-churchtalk-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-churchtalk-blue/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-12 leading-tight">
            Reclaim your time. Engage your people. Grow your mission.
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Link
              href="https://dashboard.churchtalk.pro/signup"
              className="bg-churchtalk-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Free
            </Link>
            
            {/* Secondary CTA */}
            <button
              onClick={() => {
                window.open('https://calendly.com/bernard-churchtalk/15min', '_blank');
              }}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-churchtalk-charcoal transition-all"
            >
              Book 15-Min Demo
            </button>
          </div>

          {/* Supporting text */}
          <p className="text-white/70 text-sm mt-8">
            Start with free Soul Relationship Management • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}