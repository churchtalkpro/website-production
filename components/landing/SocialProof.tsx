// src/components/sections/SocialProof.tsx
'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  const promises = [
    {
      icon: '🛡️',
      title: 'Your Data, Your Ministry',
      description: 'You own everything. Export anytime.'
    },
    {
      icon: '⚡',
      title: 'Simple & Fast',
      description: 'Get started in minutes, not months.'
    },
    {
      icon: '❤️',
      title: 'Built with Love',
      description: 'By a family who understands ministry.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl w-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-churchtalk-charcoal mb-4">
            Why churches trust ChurchTalk
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            We&apos;re committed to serving your ministry
          </p>
        </motion.div>

        {/* Promise Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl mb-4">{promise.icon}</div>
              <h3 className="font-semibold text-xl md:text-2xl text-churchtalk-charcoal mb-2">
                {promise.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-churchtalk-charcoal mb-4">
            Join the growing number of churches
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Start with free Soul Relationship Management today
          </p>
          
          <a 
            href="/signup"
            className="inline-block bg-churchtalk-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105"
          >
            Get Started Free
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500">
            <span>✓ No credit card</span>
            <span>✓ Free forever</span>
            <span>✓ Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}