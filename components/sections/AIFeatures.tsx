import React from 'react';
import { Brain, Clock, Target, Shield } from 'lucide-react';
import FeatureCard from '@/components/ui/FeatureCard';

const aiFeatures = [
  {
    icon: <Brain className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
    title: "Smart Content Generation",
    description: "Generate course content and materials with AI assistance."
  },
  {
    icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
    title: "Automated Scheduling",
    description: "Let AI handle your scheduling and calendar management."
  },
  {
    icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
    title: "Personalized Learning",
    description: "Adapt content to each student's learning style and pace."
  },
  {
    icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
    title: "Smart Analytics",
    description: "Get AI-driven insights about your coaching business."
  }
];

export default function AIFeatures() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          AI-Powered Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {aiFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} large />
          ))}
        </div>
      </div>
    </section>
  );
}