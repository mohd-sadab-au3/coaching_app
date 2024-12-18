import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import AIFeatures from '@/components/sections/AIFeatures';
import CTA from '@/components/sections/CTA';
import Header from '@/components/navigation/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AIFeatures />
      <CTA />
    </main>
  );
}