'use client';

// Landing page for ChurchTalk
import Hero from '@/components/landing/Hero';
import Biblical from '@/components/landing/Biblical';
import Problem from '@/components/landing/Problem';
import Value from '@/components/landing/Value';
import Guide from '@/components/landing/Guide';
import Plan from '@/components/landing/Plan';
import Vision from '@/components/landing/Vision';
import Pricing from '@/components/landing/Pricing';
import SocialProof from '@/components/landing/SocialProof';
import LeadMagnet from '@/components/landing/LeadMagnet';
import ActionBand from '@/components/landing/ActionBand';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="bg-white text-churchtalk-charcoal">
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Biblical />
        <Problem />
        <Value />
        <Guide />
        <Plan />
        <Vision />
        <Pricing />
        <SocialProof />
        <LeadMagnet />
        <ActionBand />
      </main>
      <Footer />
    </div>
  );
}