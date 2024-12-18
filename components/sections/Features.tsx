import React from 'react';
import { BookOpen, Users, LineChart, ShoppingCart } from 'lucide-react';
import FeatureCard from '@/components/ui/FeatureCard';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
    title: "Course Management",
    description: "Create and manage courses with ease using our intuitive tools."
  },
  {
    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
    title: "Student Engagement",
    description: "Keep your students motivated with interactive features."
  },
  {
    icon: <LineChart className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
    title: "Progress Tracking",
    description: "Monitor student progress and generate detailed reports."
  },
  {
    icon: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
    title: "Course Sales",
    description: "Sell your courses online with integrated payment solutions."
  }
];

export default function Features() {
  return (
    <section id="why-us" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Everything You Need to Succeed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}