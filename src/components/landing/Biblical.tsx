// src/components/sections/Biblical.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Biblical() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      title: 'Nicodemus',
      subtitle: 'The Midnight Conversation',
      verse: 'John 3:1-21',
      description: 'In the quiet of night, Jesus gave His full attention to one searching soul. No rush, no agenda—just a transformative conversation about being born again.',
      lesson: 'Ministry happens when we make time for the one, especially those who come seeking in their own way.',
      icon: '🌙'
    },
    {
      title: 'Woman at the Well',
      subtitle: 'The Divine Appointment',
      verse: 'John 4:1-42',
      description: 'Jesus went out of His way to meet one woman. He saw past her shame to her heart, offering living water that would transform her entire community.',
      lesson: 'Knowing someone&apos;s story opens the door to transformation. One genuine encounter can change a whole town.',
      icon: '💧'
    },
    {
      title: 'Zacchaeus',
      subtitle: 'The Unexpected Guest',
      verse: 'Luke 19:1-10',
      description: 'In a crowd of thousands, Jesus noticed the one in the tree. He invited Himself to dinner, showing that personal connection comes before life change.',
      lesson: 'The people furthest away often need the most intentional love. Relationship precedes repentance.',
      icon: '🌳'
    },
    {
      title: 'Peter',
      subtitle: 'The Breakfast Restoration',
      verse: 'John 21:15-19',
      description: 'After failure and denial, Jesus didn&apos;t lecture—He cooked breakfast. Three denials met with three opportunities to declare love.',
      lesson: 'Real restoration happens over shared meals and honest conversations, not through programs.',
      icon: '🔥'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate stories
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [stories.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `repeating-linear-gradient(
                 45deg,
                 transparent,
                 transparent 35px,
                 rgba(212, 38, 40, 0.1) 35px,
                 rgba(212, 38, 40, 0.1) 70px
               )`
             }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-churchtalk-red font-bold text-sm uppercase tracking-wider mb-4">
            The Jesus Way
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-churchtalk-charcoal mb-6">
            Jesus Built <span className="text-churchtalk-red">Relationships</span>, Not Records
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The Son of God—with all of heaven&apos;s resources—chose to spend His time knowing people deeply. 
            One conversation, one meal, one life at a time.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Story Selector */}
          <div className={`${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            <div className="space-y-4">
              {stories.map((story, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeStory === index 
                      ? 'bg-white shadow-xl border-2 border-churchtalk-red' 
                      : 'bg-white/50 hover:bg-white hover:shadow-md border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{story.icon}</span>
                    <div className="flex-1">
                      <h3 className={`font-serif text-xl mb-1 ${
                        activeStory === index ? 'text-churchtalk-red' : 'text-churchtalk-charcoal'
                      }`}>
                        {story.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{story.subtitle} • {story.verse}</p>
                      {activeStory === index && (
                        <p className="text-sm text-gray-600 mt-2">{story.lesson}</p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Story Detail */}
          <div className={`${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-churchtalk-red/5 rounded-full -translate-y-16 translate-x-16" />
              
              <div className="relative z-10">
                <span className="text-6xl mb-6 block">{stories[activeStory].icon}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-churchtalk-charcoal mb-4">
                  {stories[activeStory].title}: {stories[activeStory].subtitle}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {stories[activeStory].description}
                </p>
                <div className="border-t pt-6">
                  <p className="text-churchtalk-red font-semibold mb-2">The Ministry Principle:</p>
                  <p className="text-gray-700 italic">
                    &ldquo;{stories[activeStory].lesson}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
          <div className="bg-churchtalk-red/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl text-churchtalk-charcoal mb-4">
              What If You Could Know Every Sheep by Name?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              As your church grows, it gets harder to maintain that personal touch. 
              ChurchTalk SRM helps you remember the stories, celebrate the milestones, 
              and love each person the way Jesus did—personally and intentionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#features" 
                className="text-churchtalk-red font-semibold hover:underline inline-flex items-center gap-2"
              >
                See How SRM Helps You Shepherd Better
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}