// src/components/sections/Pricing.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const plans = [
    {
      name: 'Platform Access',
      subtitle: 'Essential church management',
      price: '$99',
      period: 'per year',
      platformFee: true,
      features: [
        'Up to 300 members',
        'Member management & directory',
        'Soul Relationship Management (SRM)',
        'Basic event management',
        'Online giving (3% + $0.30)',
        'News & announcements',
        'Basic groups management',
        'Email communications',
        'Community support'
      ],
      giving: '3% + $0.30 per transaction',
      cta: 'Get Started',
      ctaLink: '/signup',
      popular: false
    },
    {
      name: 'Pro',
      subtitle: 'Full platform with custom app',
      monthlyPrice: '$99',
      annualPrice: '$79',
      features: [
        'Everything in Starter, plus:',
        'Custom church app (iOS/Android)',
        'Unlimited members',
        'Advanced event management',
        'Volunteer scheduling',
        'Check-in system',
        'SMS communications',
        'Custom branding',
        'Priority support',
        'API access',
        'Multiple campuses'
      ],
      giving: '2.5% + $0.30 per transaction',
      cta: 'Start Free Trial',
      ctaLink: '/signup?plan=pro',
      popular: true
    }
  ];

  const enterprisePlan = {
    name: 'Enterprise',
    subtitle: 'Churches with 250+ members',
    features: [
      'Everything in Full Platform',
      'Unlimited members',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced analytics',
      'Multiple campuses',
      'White-label options',
      'SLA guarantee',
      'Custom training'
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact-sales'
  };

  const addons = [
    {
      name: 'ChurchTalk AI',
      price: '$20',
      unit: 'per user/month',
      description: 'Transform sermons into content',
      features: [
        'Sermon to social posts',
        'Auto-generate devotionals',
        'Smart content highlights',
        'Engagement automation'
      ],
      status: 'Coming December 2025',
      cta: 'Join Waitlist'
    }
  ];

  const comparison = [
    { feature: 'Member profiles', platform: '0-300', pro: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Soul Relationship Management', platform: true, pro: true, enterprise: true },
    { feature: 'Custom church app', platform: false, pro: true, enterprise: true },
    { feature: 'Event management', platform: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
    { feature: 'SMS communications', platform: false, pro: true, enterprise: true },
    { feature: 'Priority support', platform: false, pro: true, enterprise: true },
    { feature: 'Dedicated account manager', platform: false, pro: false, enterprise: true },
    { feature: 'Custom integrations', platform: false, pro: false, enterprise: true }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-churchtalk-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-churchtalk-green/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-churchtalk-charcoal mb-6">
            <span className="font-light">Start free.</span>{' '}
            <span className="text-churchtalk-red font-normal">Grow naturally.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light mb-4">
            Perfect for churches with 0-250 members. Begin with free Soul Relationship Management. 
            Upgrade when you need automation and powerful integrations.
          </p>
          <p className="text-gray-500">
            Churches with 250+ members? <Link href="/contact" className="text-churchtalk-red font-semibold hover:underline">Contact us for custom pricing</Link>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-100 rounded-lg p-1 mt-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-churchtalk-charcoal shadow-md' 
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annually')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'annually' 
                  ? 'bg-white text-churchtalk-charcoal shadow-md' 
                  : 'text-gray-600'
              }`}
            >
              Annually
              <span className="ml-2 text-churchtalk-green text-sm">Save 20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Standard Plans */}
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-white border-2 border-churchtalk-red shadow-2xl transform lg:scale-105' 
                  : 'bg-white border-2 border-gray-200 hover:border-gray-300 transition-all shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-churchtalk-red text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2 text-churchtalk-charcoal">
                  {plan.name}
                </h3>
                <p className="text-gray-600">{plan.subtitle}</p>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-churchtalk-charcoal">
                    {plan.price || (billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice)}
                  </span>
                  <span className="ml-2 text-gray-600">
                    {plan.period || (billingCycle === 'monthly' ? '/month' : '/month')}
                  </span>
                </div>
                {plan.platformFee && (
                  <p className="text-sm text-orange-600 font-medium mt-2">
                    🔥 Limited time: $1/year until Aug 4, 2025
                  </p>
                )}
                {plan.annualPrice && billingCycle === 'annually' && (
                  <p className="text-sm text-gray-600">Billed annually</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-churchtalk-green text-xl mr-3 flex-shrink-0">✓</span>
                    <span className={`text-gray-700 text-sm ${i === 0 ? 'font-semibold' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Giving Fee */}
              <div className="bg-gray-50 rounded-lg p-4 mb-8">
                <p className="text-sm font-medium text-gray-700">Giving fee:</p>
                <p className="text-lg font-bold text-churchtalk-charcoal">{plan.giving}</p>
              </div>

              {/* CTA Button */}
              <Link
                href={plan.ctaLink}
                className={`block w-full py-4 px-8 rounded-lg font-semibold text-lg text-center transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-churchtalk-red text-white hover:bg-red-700 shadow-lg'
                    : 'bg-white text-churchtalk-charcoal border-2 border-gray-300 hover:border-churchtalk-charcoal'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 shadow-lg"
          >
            {/* Enterprise Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                250+ MEMBERS
              </span>
            </div>

            {/* Plan Header */}
            <div className="mb-6">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2 text-churchtalk-charcoal">
                {enterprisePlan.name}
              </h3>
              <p className="text-gray-600">{enterprisePlan.subtitle}</p>
            </div>

            {/* Custom Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-churchtalk-charcoal">Custom Pricing</span>
              </div>
              <p className="text-sm text-gray-600">Tailored to your church&apos;s needs</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {enterprisePlan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-churchtalk-green text-xl mr-3 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href={enterprisePlan.ctaLink}
              className="block w-full py-4 px-8 rounded-lg font-semibold text-lg text-center transition-all bg-churchtalk-charcoal text-white hover:bg-gray-800"
            >
              {enterprisePlan.cta}
            </Link>
          </motion.div>
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-serif text-center text-churchtalk-charcoal mb-8">
            Powerful Add-ons
          </h3>
          
          <div className="max-w-3xl mx-auto">
            {addons.map((addon, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-400/20 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {addon.status}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="font-serif text-2xl text-churchtalk-charcoal mb-2">{addon.name}</h4>
                    <p className="text-gray-600 mb-4">{addon.description}</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-churchtalk-charcoal">{addon.price}</span>
                      <span className="text-gray-600">{addon.unit}</span>
                    </div>
                    <button className="text-churchtalk-red font-semibold hover:underline">
                      {addon.cta} →
                    </button>
                  </div>
                  
                  <div>
                    <ul className="space-y-2">
                      {addon.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-churchtalk-green">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-gray-600 text-sm md:text-base mb-8">
        
            <div className="flex items-center gap-2">
              <span className="text-churchtalk-green text-xl">✓</span>
              <span className="font-medium">No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-churchtalk-green text-xl">✓</span>
              <span className="font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-churchtalk-green text-xl">✓</span>
              <span className="font-medium">Free migration help</span>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            All plans include free migration assistance and 60-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}