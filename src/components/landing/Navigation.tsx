// src/components/Navigation.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const productMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close product menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productMenuRef.current && !productMenuRef.current.contains(event.target as Node)) {
        setIsProductMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const productFeatures = [
    {
      category: 'Core Platform',
      items: [
        { 
          href: '/products/srm', 
          label: 'Soul Relationship Management', 
          description: 'Track spiritual growth and pastoral care',
          icon: '💝'
        },
        { 
          href: '/products/church-app', 
          label: 'Church App', 
          description: 'Native iOS & Android apps for your members',
          icon: '📱'
        },
        { 
          href: '/products/custom-app', 
          label: 'Custom Church App', 
          description: 'Fully branded and customized for your church',
          icon: '✨'
        },
      ]
    },
    {
      category: 'Growth Tools',
      items: [
        { 
          href: '/products/outreach', 
          label: 'Outreach', 
          description: 'Visitor follow-up and community engagement',
          icon: '🌟'
        },
        { 
          href: '/products/ai', 
          label: 'ChurchTalk AI', 
          description: 'AI-powered insights and automation',
          icon: '🤖'
        },
        { 
          href: '/products/chms', 
          label: 'ChMS', 
          description: 'Complete church management system',
          icon: '⛪'
        },
      ]
    },
    {
      category: 'Engagement',
      items: [
        { 
          href: '/products/events', 
          label: 'Events', 
          description: 'Event planning and registration',
          icon: '📅'
        },
        { 
          href: '/products/website', 
          label: 'Website', 
          description: 'Beautiful, modern church websites',
          icon: '🌐'
        },
        { 
          href: '/products/marketing', 
          label: 'Marketing', 
          description: 'Reach your community effectively',
          icon: '📣'
        },
      ]
    },
    {
      category: 'Services',
      items: [
        { 
          href: '/products/design', 
          label: 'Design Services', 
          description: 'Professional graphics and branding',
          icon: '🎨'
        },
        { 
          href: '/products/store', 
          label: 'Merchandise Store', 
          description: 'Sell church merchandise online',
          icon: '🛍️'
        },
      ]
    }
  ];

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-10">
            <div className="w-48 md:w-52 lg:w-56">
              <Image
                src="/logo.png"
                alt="ChurchTalk"
                width={200}
                height={40}
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-12 h-12 bg-churchtalk-red rounded-lg flex items-center justify-center text-white font-bold">
                CT
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products and Nav Links */}
            <div className="flex items-center space-x-6">
              <div className="relative" ref={productMenuRef}>
                <button
                  onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                  onMouseEnter={() => setIsProductMenuOpen(true)}
                  className="text-churchtalk-charcoal hover:text-churchtalk-red transition-colors font-medium flex items-center gap-1"
                >
                  Products
                  <svg 
                    className={`w-4 h-4 transition-transform ${isProductMenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProductMenuOpen && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100"
                    onMouseLeave={() => setIsProductMenuOpen(false)}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>
                    
                    <div className="relative p-8">
                      <div className="grid grid-cols-4 gap-8">
                        {productFeatures.map((category) => (
                          <div key={category.category}>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                              {category.category}
                            </h3>
                            <div className="space-y-3">
                              {category.items.map((item) => (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  className="block group"
                                  onClick={() => setIsProductMenuOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="text-2xl mt-1">{item.icon}</span>
                                    <div>
                                      <p className="font-semibold text-churchtalk-charcoal group-hover:text-churchtalk-red transition-colors">
                                        {item.label}
                                      </p>
                                      <p className="text-sm text-gray-600 mt-0.5">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-churchtalk-charcoal">
                              See all our products in action
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              Book a personalized demo with our team
                            </p>
                          </div>
                          <a
                            href="/demo"
                            className="bg-churchtalk-red text-white px-6 py-3 rounded-md font-semibold hover:bg-churchtalk-charcoal transition-all"
                            onClick={() => setIsProductMenuOpen(false)}
                          >
                            Schedule Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-churchtalk-charcoal hover:text-churchtalk-red transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://app.churchtalk.pro/login"
                className="text-churchtalk-charcoal hover:text-churchtalk-red transition-colors font-medium"
              >
                Login
              </a>
              <a
                href="https://app.churchtalk.pro/signup"
                className="bg-churchtalk-red text-white px-6 py-2.5 rounded-md font-semibold hover:bg-churchtalk-charcoal transition-all transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-md z-50 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-churchtalk-charcoal transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-2'
            }`} />
            <span className={`block w-6 h-0.5 bg-churchtalk-charcoal transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`block w-6 h-0.5 bg-churchtalk-charcoal transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-2'
            }`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[100] transition-all duration-300 ${
        isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-black/20" 
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute inset-0 bg-white transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full flex flex-col">
            {/* Header with X button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="ChurchTalk"
                  width={150}
                  height={30}
                  className="h-8 w-auto"
                />
              </a>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-8">
                {/* Products Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Products</h3>
                  <div className="space-y-3">
                    {productFeatures.flatMap(category => category.items).map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.label}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Main Nav Links */}
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block text-lg font-medium text-gray-900 hover:text-churchtalk-red transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 border-t border-gray-200 space-y-3">
              <a
                href="https://app.churchtalk.pro/login"
                className="block w-full text-center py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="https://app.churchtalk.pro/signup"
                className="block w-full text-center py-3 bg-churchtalk-red text-white rounded-lg font-medium hover:bg-churchtalk-charcoal transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}