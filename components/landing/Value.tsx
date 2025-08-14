// src/components/sections/Value.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';

export default function Value() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState<{[key: number]: number}>({});

  const soulStages = useMemo(() => [
    {
      stage: 'First Initial Contact',
      icon: '👋',
      description: 'Capturing every soul that connects',
      visionaryCount: 2500,
      projection: '+2,500 contacts/year',
      color: 'bg-blue-100',
      textColor: 'text-blue-800',
      iconBg: 'bg-blue-500',
      width: 100
    },
    {
      stage: 'Gospel Presentation',
      icon: '📖',
      description: 'Tracking spiritual conversations',
      visionaryCount: 1200,
      projection: '+1,200 presentations/year',
      color: 'bg-blue-200',
      textColor: 'text-blue-800',
      iconBg: 'bg-indigo-500',
      width: 90
    },
    {
      stage: 'Saved',
      icon: '✝️',
      description: 'Celebrating decisions for Christ',
      visionaryCount: 450,
      projection: '+450 salvations/year',
      color: 'bg-red-500',
      textColor: 'text-white',
      iconBg: 'bg-red-600',
      width: 80,
      phaseMarker: 'Phase One'
    },
    {
      stage: 'Baptized',
      icon: '💧',
      description: 'Following through with baptism',
      visionaryCount: 380,
      projection: '+380 baptisms/year',
      color: 'bg-blue-300',
      textColor: 'text-blue-800',
      iconBg: 'bg-cyan-500',
      width: 70
    },
    {
      stage: 'Membership',
      icon: '🤝',
      description: 'Building committed members',
      visionaryCount: 300,
      projection: '+300 members/year',
      color: 'bg-yellow-200',
      textColor: 'text-yellow-800',
      iconBg: 'bg-yellow-600',
      width: 60,
      phaseMarker: 'Phase Two'
    },
    {
      stage: 'Discipleship',
      icon: '📚',
      description: 'Growing mature believers',
      visionaryCount: 200,
      projection: '+200 disciples/year',
      color: 'bg-green-200',
      textColor: 'text-green-800',
      iconBg: 'bg-green-600',
      width: 50
    },
    {
      stage: 'Ready to Serve',
      icon: '🙌',
      description: 'Deploying church volunteers',
      visionaryCount: 150,
      projection: '+150 active servants',
      color: 'bg-purple-200',
      textColor: 'text-purple-800',
      iconBg: 'bg-purple-600',
      width: 40
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('value-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Animate numbers when visible
  useEffect(() => {
    if (isVisible) {
      soulStages.forEach((stage, index) => {
        setTimeout(() => {
          const targetNumber = stage.visionaryCount;
          let currentNumber = 0;
          const increment = targetNumber / 30;
          
          const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
              currentNumber = targetNumber;
              clearInterval(timer);
            }
            setAnimatedNumbers(prev => ({ ...prev, [index]: Math.floor(currentNumber) }));
          }, 50);
        }, index * 200);
      });
    }
  }, [isVisible, soulStages]);

  const leadSources = [
    { name: 'Door Knocking', icon: '🚪', delay: 0 },
    { name: 'Website Visitors', icon: '💻', delay: 0.3 },
    { name: 'Service Visitors', icon: '⛪', delay: 0.6 },
    { name: 'Community Events', icon: '🎉', delay: 0.9 },
    { name: 'Social Media', icon: '📱', delay: 1.2 },
    { name: 'Friend Invites', icon: '👥', delay: 1.5 }
  ];

  const stageDetails = {
    'First Initial Contact': {
      actions: [
        'Digital visitor check-in system',
        'QR code connection cards',
        'Text-to-connect for first-time guests',
        'Automated guest photo capture'
      ],
      automation: [
        'Instant personalized welcome messages',
        '7-day follow-up sequence',
        'Birthday & anniversary tracking',
        'Geographic heat mapping'
      ]
    },
    'Gospel Presentation': {
      actions: [
        'One-on-one conversation tracking',
        'Small group Gospel presentations',
        'Event-based outreach logging',
        'Digital decision cards'
      ],
      automation: [
        'Automated follow-up scheduling',
        'Resource recommendation engine',
        'Prayer partner matching',
        'Conversion analytics'
      ]
    },
    'Saved': {
      actions: [
        'Salvation decision recording',
        'New believer packet delivery',
        'Celebration service scheduling',
        'Family notification system'
      ],
      automation: [
        'New believer course enrollment',
        'Mentor auto-assignment',
        'Growth milestone tracking',
        'Testimony video scheduling'
      ]
    },
    'Baptized': {
      actions: [
        'Baptism class attendance',
        'Baptism date scheduling',
        'Testimony preparation',
        'Certificate generation'
      ],
      automation: [
        'Class reminder sequences',
        'Family invitation system',
        'Live stream coordination',
        'Follow-up care program'
      ]
    },
    'Membership': {
      actions: [
        'Membership class tracking',
        'Covenant commitment process',
        'Ministry gift assessment',
        'Small group matching'
      ],
      automation: [
        'Automated onboarding journey',
        'Personalized ministry suggestions',
        'Connection point recommendations',
        'Member care alerts'
      ]
    },
    'Discipleship': {
      actions: [
        'Curriculum progress tracking',
        'One-on-one discipleship pairing',
        'Spiritual growth assessments',
        'Leadership development pathway'
      ],
      automation: [
        'Adaptive learning paths',
        'Progress milestone celebrations',
        'Resource recommendations',
        'Accountability check-ins'
      ]
    },
    'Ready to Serve': {
      actions: [
        'Spiritual gifts assessment',
        'Ministry team placement',
        'Service hour tracking',
        'Impact reporting'
      ],
      automation: [
        'Volunteer scheduling system',
        'Team communication hub',
        'Appreciation & recognition program',
        'Ministry effectiveness analytics'
      ]
    }
  };

  return (
    <section 
      id="value-section"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-churchtalk-green font-bold text-sm uppercase tracking-wider mb-4">
            Soul Relationship Management
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-churchtalk-charcoal mb-6 leading-tight">
            Your Church&apos;s Growth Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform how your church tracks, nurtures, and celebrates every soul&apos;s journey
          </p>
        </div>

        {/* Lead Sources Animation */}
        <div className={`mb-12 relative ${isVisible ? '' : 'opacity-0'}`}>
          <p className="text-center text-sm text-gray-500 mb-6">Souls you meet</p>
          
          {/* Lead source badges */}
          <div className="relative h-20 mb-8">
            <div className="absolute inset-x-0 flex justify-center gap-3 flex-wrap px-4">
              {leadSources.map((source, index) => (
                <div
                  key={index}
                  className={`lead-source-badge bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg 
                    flex items-center gap-2 ${isVisible ? 'animate-feed-funnel' : ''}`}
                  style={{ 
                    animationDelay: `${source.delay}s`,
                    '--feed-position': `${index * 60 - 150}px`
                  } as React.CSSProperties}
                >
                  <span className="text-xl">{source.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{source.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flow indicators */}
          <div className="relative h-16 overflow-hidden">
            {isVisible && [...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-churchtalk-green to-blue-500 rounded-full animate-particle-flow"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Funnel */}
          <div className={`${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
            <h3 className="font-serif text-2xl text-gray-800 mb-6">Soul Relationship Stages</h3>
            <div className="relative">
              <div className="flex flex-col items-center">
                {soulStages.map((stage, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center justify-between px-6 ${stage.color} ${stage.textColor} 
                      transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer group`}
                    onClick={() => setActiveStage(index)}
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                      width: `${stage.width}%`,
                      height: '90px',
                      margin: index === 0 ? '0 auto' : '-1px auto'
                    }}
                  >
                    {/* Phase Marker */}
                    {stage.phaseMarker && (
                      <span className="absolute top-[-30px] left-0 text-red-600 text-sm font-bold bg-white px-3 py-1 rounded-full shadow-md">
                        {stage.phaseMarker}
                      </span>
                    )}

                    {/* Left side */}
                    <div className="flex items-center gap-3">
                      <div className={`${stage.iconBg} text-white rounded-lg p-2 shadow-md`}>
                        <span className="text-xl">{stage.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-base">{stage.stage}</h4>
                        <p className="text-xs opacity-90">{stage.description}</p>
                      </div>
                    </div>
                    
                    {/* Right side */}
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {animatedNumbers[index] !== undefined ? animatedNumbers[index] : stage.visionaryCount}
                      </div>
                      <p className="text-xs font-medium opacity-90">{stage.projection}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stage Details */}
          <div className={`${isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
            <h3 className="font-serif text-2xl text-gray-800 mb-6">
              {soulStages[activeStage].stage} Details
            </h3>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className={`${soulStages[activeStage].iconBg} text-white rounded-xl p-4 shadow-lg`}>
                  <span className="text-3xl">{soulStages[activeStage].icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-800">{soulStages[activeStage].stage}</h4>
                  <p className="text-gray-600">{soulStages[activeStage].description}</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Manual tracking */}
                <div>
                  <h5 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">📋</span> Track Manually (Free)
                  </h5>
                  <ul className="space-y-3">
                    {stageDetails[soulStages[activeStage].stage as keyof typeof stageDetails].actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-churchtalk-green text-lg mt-0.5">✓</span>
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Automation */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h5 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚡</span> With Automation ($99/mo)
                  </h5>
                  <ul className="space-y-3">
                    {stageDetails[soulStages[activeStage].stage as keyof typeof stageDetails].automation.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-orange-500 text-lg">•</span>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Stats */}
        <div className={`mt-20 ${isVisible ? 'animate-fade-up animation-delay-800' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-800 via-churchtalk-charcoal to-gray-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl text-center mb-8 md:mb-10 relative z-10">What&apos;s Possible With ChurchTalk</h3>
            <div className="grid grid-cols-2 gap-6 md:gap-8 relative z-10">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-blue-400 mb-1 md:mb-2">Digital</div>
                <p className="text-xs md:text-sm font-medium opacity-90">Check-in System</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-purple-400 mb-1 md:mb-2">Automated</div>
                <p className="text-xs md:text-sm font-medium opacity-90">Follow-ups</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-red-400 mb-1 md:mb-2">Real-time</div>
                <p className="text-xs md:text-sm font-medium opacity-90">Analytics</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-green-400 mb-1 md:mb-2">Seamless</div>
                <p className="text-xs md:text-sm font-medium opacity-90">Integration</p>
              </div>
            </div>
            <p className="text-center text-xs md:text-sm text-gray-400 mt-6 md:mt-8">
              Everything you need to nurture souls from first visit to faithful service
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-up animation-delay-1000' : 'opacity-0'}`}>
          <h3 className="font-serif text-3xl text-churchtalk-charcoal mb-4">
            Ready to Transform Your Church Growth?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start tracking every soul&apos;s journey with our comprehensive Soul Relationship Management system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup" 
              className="bg-churchtalk-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Started
            </a>
            <a 
              href="#demo" 
              className="bg-white text-churchtalk-charcoal border-2 border-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:border-churchtalk-charcoal transition-all hover:shadow-lg"
            >
              Watch 3-Minute Demo
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • Free forever for basic features
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes feed-funnel {
          0% {
            transform: translateY(0) translateX(var(--feed-position, 0));
            opacity: 1;
          }
          50% {
            transform: translateY(30px) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(80px) translateX(0) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes particle-flow {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(60px);
            opacity: 0;
          }
        }

        .animate-feed-funnel {
          animation: feed-funnel 3s ease-in-out infinite;
        }

        .animate-particle-flow {
          animation: particle-flow linear infinite;
        }

        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }

        .lead-source-badge {
          transform-origin: center bottom;
        }
      `}</style>
    </section>
  );
}