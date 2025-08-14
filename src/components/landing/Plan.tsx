// src/components/sections/Plan.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Plan() {
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

    const section = document.getElementById('plan-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const steps = [
    {
      icon: '👋',
      title: 'Start Free',
      description: 'Track every soul in your church',
      highlight: 'Free forever'
    },
    {
      icon: '📱',
      title: 'Add Apps',
      description: 'Church app, website & giving',
      highlight: '$99/month'
    },
    {
      icon: '🚀',
      title: 'Go Full Platform',
      description: 'Everything automated',
      highlight: 'Still $99/month'
    }
  ];

  return (
    <section 
      id="plan-section"
      className="py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-serif text-3xl md:text-4xl text-churchtalk-charcoal mb-4">
            Simple pricing that grows with you
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Start free. Upgrade when you need more.
          </p>
          <p className="text-sm text-gray-500">
            For churches up to 250 members • Larger churches, <a href="/contact" className="text-churchtalk-red hover:underline">contact us</a>
          </p>
        </div>

        {/* Steps */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Icon */}
              <div className="text-5xl mb-4">{step.icon}</div>
              
              {/* Content */}
              <h3 className="font-semibold text-xl text-churchtalk-charcoal mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-3">{step.description}</p>
              <p className={`font-bold ${index === 0 ? 'text-green-600' : 'text-churchtalk-red'}`}>
                {step.highlight}
              </p>

              {/* Arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 text-gray-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What you get */}
        <div className={`bg-gray-50 rounded-2xl p-8 mb-16 ${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
          <h3 className="font-semibold text-lg text-churchtalk-charcoal mb-6 text-center">
            Everything you need at each stage
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✨</span>
                <h4 className="font-semibold">Free SRM includes:</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Up to 250 member profiles
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Track spiritual journeys
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Notes & follow-ups
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Basic reporting
                </li>
              </ul>
            </div>

            {/* Paid */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚀</span>
                <h4 className="font-semibold">$99/month adds:</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-churchtalk-red">+</span>
                  Custom church app
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-churchtalk-red">+</span>
                  Church website
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-churchtalk-red">+</span>
                  Online giving
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-churchtalk-red">+</span>
                  All automations
                </li>
              </ul>
            </div>
          </div>

          {/* Member limit notice */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">0-250 members:</span> Everything above
              <span className="mx-2">•</span>
              <span className="font-semibold">250+ members:</span> <a href="/contact" className="text-churchtalk-red hover:underline">Contact for pricing</a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center ${isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
          <Link
            href="https://app.churchtalk.pro/signup"
            className="inline-block bg-churchtalk-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105"
          >
            Start Free Today
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • For churches up to 250 members
          </p>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
      `}</style>
    </section>
  );
}