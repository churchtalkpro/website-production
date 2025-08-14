// src/components/sections/Problem.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Problem() {
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

    const section = document.getElementById('problem-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const problems = [
    {
      icon: '😔',
      title: 'Lost Sheep',
      problem: 'Members drift away unnoticed',
      truth: '70% of church dropouts could have been prevented with timely pastoral care',
      solution: 'SRM alerts you when someone needs attention',
      color: 'from-churchtalk-red to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: '📊',
      title: 'Surface-Level Data',
      problem: 'Know attendance, miss the heart',
      truth: 'Most churches track bodies in seats but not spiritual journeys',
      solution: 'SRM captures the whole story of each soul',
      color: 'from-churchtalk-blue to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: '🏃',
      title: 'Reactive Ministry',
      problem: 'Always playing catch-up',
      truth: 'Pastors spend 80% of time on crisis management vs. proactive care',
      solution: 'SRM helps you shepherd proactively',
      color: 'from-churchtalk-green to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  const comparison = [
    {
      traditional: 'Spreadsheet with names',
      srm: 'Complete spiritual journeys',
      icon: '📝'
    },
    {
      traditional: 'Manual follow-up lists',
      srm: 'Automated care workflows',
      icon: '🔄'
    },
    {
      traditional: 'Guess who needs help',
      srm: 'AI-powered pastoral insights',
      icon: '🤖'
    },
    {
      traditional: 'React to problems',
      srm: 'Prevent them before they happen',
      icon: '🛡️'
    }
  ];

  return (
    <section 
      id="problem-section"
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-churchtalk-red rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-churchtalk-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-churchtalk-red font-bold text-sm uppercase tracking-wider mb-4">
            The Hidden Crisis
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-churchtalk-charcoal mb-6 leading-tight">
            You can&apos;t shepherd
            <br />
            <span className="text-churchtalk-red">who you don&apos;t truly know</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Most churches have member databases. Few have soul relationship systems. 
            The difference? One manages data. The other transforms ministry.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className={`group relative transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${item.bgColor} ${item.borderColor} border-2 rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} rounded-full blur-2xl`} />
                </div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl lg:text-3xl mb-3 text-churchtalk-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 font-semibold text-lg mb-3">
                    {item.problem}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 italic">
                    {item.truth}
                  </p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-gray-700">
                      <span className="text-churchtalk-green">✓</span> {item.solution}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className={`bg-gray-50 rounded-2xl p-8 md:p-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <h3 className="text-2xl font-serif text-center text-churchtalk-charcoal mb-8">
            Traditional Database vs. Soul Relationship Management
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {comparison.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1 grid md:grid-cols-2 gap-4 items-center">
                    <div className="text-gray-600">
                      <span className="text-red-500">✗</span> {item.traditional}
                    </div>
                    <div className="text-gray-800 font-medium">
                      <span className="text-green-500">✓</span> {item.srm}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              The best part? <span className="font-semibold text-churchtalk-charcoal">SRM is free forever.</span>
            </p>
            <p className="text-sm text-gray-500">
              Upgrade to $99/month for automatic data capture from all ChurchTalk tools.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
          <a 
            href="#value" 
            className="inline-flex items-center gap-2 text-churchtalk-red font-semibold hover:gap-4 transition-all group"
          >
            See how SRM transforms your ministry
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}