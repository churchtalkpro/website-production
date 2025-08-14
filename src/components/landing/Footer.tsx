// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const mainLinks = [
    {
      category: 'Product',
      links: [
        { href: '#features', text: 'Features' },
        { href: '#pricing', text: 'Pricing' },
        { href: '#integrations', text: 'Integrations' },
        { href: '#roadmap', text: 'Roadmap' }
      ]
    },
    {
      category: 'Resources',
      links: [
        { href: '#help', text: 'Help Center' },
        { href: '#blog', text: 'Blog' },
        { href: '#guides', text: 'Guides' },
        { href: '#api', text: 'API Docs' }
      ]
    },
    {
      category: 'Company',
      links: [
        { href: '#about', text: 'About' },
        { href: '#contact', text: 'Contact' },
        { href: 'https://calendly.com/bernard-churchtalk/15min', text: 'Book Demo' }
      ]
    },
    {
      category: 'Legal',
      links: [
        { href: '#privacy', text: 'Privacy' },
        { href: '#terms', text: 'Terms' },
        { href: '#security', text: 'Security' }
      ]
    }
  ];

  const socials = [
    { name: 'Twitter', icon: 'X', url: 'https://twitter.com/churchtalkpro' },
    { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/company/churchtalkpro' },
    { name: 'YouTube', icon: 'YT', url: 'https://youtube.com/@churchtalkpro' },
    { name: 'Instagram', icon: 'IG', url: 'https://instagram.com/churchtalkpro' }
  ];

  return (
    <footer className="min-h-screen bg-white relative flex flex-col">
      {/* Top Section with Gradient */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Brand & CTA */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 pb-20 border-b border-gray-200">
              <div className="mb-8 lg:mb-0">
                <Image
                  src="/logo.png"
                  alt="ChurchTalk"
                  width={200}
                  height={60}
                  className="mb-4"
                />
                <p className="text-gray-600 text-lg max-w-md">
                  Empowering churches to focus on what matters most — ministry, not management.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://dashboard.churchtalk.pro/signup"
                  className="bg-churchtalk-charcoal text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="https://calendly.com/bernard-churchtalk/15min"
                  className="bg-white text-churchtalk-charcoal border-2 border-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-churchtalk-charcoal transition-colors text-center"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
              {/* Newsletter */}
              <div className="lg:col-span-2">
                <h3 className="font-semibold text-churchtalk-charcoal mb-6">Stay in the loop</h3>
                <p className="text-gray-600 mb-4">Join church leaders getting our best content.</p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-churchtalk-charcoal transition-colors"
                  />
                  <button className="bg-churchtalk-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
              </div>

              {/* Category Columns */}
              {mainLinks.map((category, i) => (
                <div key={category.category}>
                  <h3 className="font-semibold text-churchtalk-charcoal mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-churchtalk-charcoal transition-colors"
                          {...(link.text === 'Book Demo' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-600 text-center md:text-left">
              © 2025 ChurchTalk. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:border-churchtalk-charcoal hover:bg-churchtalk-charcoal hover:text-white transition-all text-sm font-semibold"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-600">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
