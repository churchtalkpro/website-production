// src/components/sections/Vision.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Vision() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('vision-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const aiCapabilities = [
    {
      icon: '🎬',
      title: 'Sermon to Content',
      description: 'Turn one sermon into 20+ pieces of content automatically',
      examples: ['Social posts', 'Blog articles', 'Email devotionals', 'Discussion guides']
    },
    {
      icon: '📚',
      title: 'Instant eBooks',
      description: 'Transform sermon series into downloadable resources',
      examples: ['Study guides', 'Devotional books', 'Small group materials', 'Teaching outlines']
    },
    {
      icon: '✨',
      title: 'Smart Highlights',
      description: 'AI extracts powerful quotes and moments',
      examples: ['Instagram reels', 'TikTok clips', 'Quote graphics', 'Podcast snippets']
    },
    {
      icon: '🤖',
      title: 'Engagement Automation',
      description: 'Set it and forget it ministry workflows',
      examples: ['Welcome sequences', 'Follow-up campaigns', 'Birthday messages', 'Care check-ins']
    }
  ];

  const timeline = [
    { quarter: 'Q3 2025', milestone: 'Alpha testing', status: 'current', date: 'July-Sept' },
    { quarter: 'Q4 2025', milestone: 'Beta launch', status: 'next', date: 'October' },
    { quarter: 'December 2025', milestone: 'Public release', status: 'launch', date: 'Holiday Gift' },
    { quarter: 'Q1 2026', milestone: 'Advanced features', status: 'upcoming', date: 'January' }
  ];

  return (
    <section 
      id="vision-section"
      className="py-20 px-4 bg-gradient-to-br from-churchtalk-charcoal via-gray-900 to-churchtalk-charcoal text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-churchtalk-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-churchtalk-pink/20 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-sm font-semibold">Launching December 2025</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            This Christmas: Give your ministry
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-churchtalk-blue via-churchtalk-pink to-churchtalk-green">
              the gift of AI
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-6">
            We&apos;re building something special. ChurchTalk AI will transform how you create content 
            and engage your congregation. Join the waitlist for our December launch.
          </p>

          <div className="inline-flex items-center gap-4 text-sm text-gray-400">
            <span>Launch pricing:</span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-white">
              <span className="font-bold">$20</span> per user/month
            </span>
          </div>
        </div>

        {/* Development Status */}
        <div className={`bg-gradient-to-r from-churchtalk-blue to-churchtalk-pink p-1 rounded-2xl mb-16 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
          <div className="bg-churchtalk-charcoal rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">🔨 Currently in Development</h3>
            <p className="text-gray-300">Our team is working hard to deliver AI that truly understands ministry</p>
          </div>
        </div>

        {/* What We're Building */}
        <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 border border-white/10 ${isVisible ? 'animate-fade-up animation-delay-300' : 'opacity-0'}`}>
          <h3 className="text-2xl font-serif text-center mb-8">Coming December 2025</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Six months of careful development. Training AI specifically for church context. 
                Building features that will revolutionize how you do ministry in the digital age.
              </p>

              <div className="space-y-4">
                <div className="bg-churchtalk-charcoal/50 rounded-xl p-4 border border-white/10">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Sermon Intelligence
                  </h4>
                  <p className="text-sm text-gray-400">
                    Upload once, publish everywhere. AI creates weeks of content from a single 
                    sermon while preserving your theological accuracy and pastoral voice.
                  </p>
                </div>

                <div className="bg-churchtalk-charcoal/50 rounded-xl p-4 border border-white/10">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Workflow Automation
                  </h4>
                  <p className="text-sm text-gray-400">
                    Stop managing tasks, start ministering to people. AI handles follow-ups, 
                    birthday greetings, and engagement campaigns automatically.
                  </p>
                </div>

                <div className="bg-churchtalk-charcoal/50 rounded-xl p-4 border border-white/10">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    Predictive Insights
                  </h4>
                  <p className="text-sm text-gray-400">
                    Know who needs pastoral care before they ask. AI analyzes patterns to 
                    surface ministry opportunities you might otherwise miss.
                  </p>
                </div>
              </div>
            </div>

            <div>
              {/* Development Progress */}
              <div className="bg-churchtalk-charcoal/50 rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-churchtalk-blue/20 to-churchtalk-pink/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎄</span>
                  </div>
                  <h4 className="font-semibold text-xl mb-2">ChurchTalk AI</h4>
                  <p className="text-sm text-amber-400">December 2025 Launch</p>
                </div>
                
                {/* Development Phases */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Research & Design</span>
                      <span className="text-green-400">Complete</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Core Development</span>
                      <span className="text-churchtalk-blue">60%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-churchtalk-blue rounded-full animate-pulse" style={{ width: '60%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>AI Training</span>
                      <span className="text-churchtalk-pink">40%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-churchtalk-pink rounded-full animate-pulse" style={{ width: '40%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Beta Testing</span>
                      <span className="text-gray-500">October 2025</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 rounded-full" style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
          <h3 className="text-2xl font-serif text-center mb-8">Launch Timeline</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`text-center p-4 rounded-lg border ${
                    item.status === 'launch' 
                      ? 'bg-gradient-to-br from-churchtalk-red/20 to-churchtalk-green/20 border-churchtalk-red' 
                      : item.status === 'next'
                      ? 'bg-churchtalk-blue/20 border-churchtalk-blue'
                      : item.status === 'current'
                      ? 'bg-white/10 border-white/20'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <p className="font-bold mb-1">{item.quarter}</p>
                  <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                  <p className="text-sm text-gray-400">{item.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Waitlist CTA */}
        <div className={`text-center ${isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-churchtalk-red/20 to-churchtalk-green/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl mb-4">
              Join the ChurchTalk AI Waitlist
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Be first in line when we launch this December. Early access members will receive 
              exclusive beta testing opportunities and special launch pricing.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:border-churchtalk-red"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-churchtalk-red to-churchtalk-green text-white rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Join Waitlist
              </button>
            </form>
            
            <p className="text-sm text-gray-500">
              🎁 Special launch pricing for early supporters • December 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}