// src/components/sections/LeadMagnet.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [churchName, setChurchName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-churchtalk-green font-bold text-sm uppercase tracking-wider mb-4">
              Free Guide
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-churchtalk-charcoal mb-6">
              How your church can scale impact through SRM?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn how Soul Relationship Management can help you track, nurture, 
              and multiply your ministry impact.
            </p>
          </motion.div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            {!showSuccess ? (
              <>
                <h3 className="font-semibold text-xl text-center mb-6 text-churchtalk-charcoal">
                  Get the free guide
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={churchName}
                      onChange={(e) => setChurchName(e.target.value)}
                      required
                      placeholder="Church Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-churchtalk-green focus:border-transparent"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-churchtalk-green focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-churchtalk-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-all ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Me The Guide'}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We&apos;ll email you the guide. No spam, unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-semibold text-xl text-churchtalk-charcoal mb-2">
                  Check your email!
                </h3>
                <p className="text-gray-600">
                  We&apos;ve sent the guide to {email}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* What's Inside */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-semibold text-gray-700 mb-4">In this guide, you&apos;ll learn:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>✓ What is SRM</span>
            <span>✓ Why it matters</span>
            <span>✓ How to implement it</span>
            <span>✓ Real church examples</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}