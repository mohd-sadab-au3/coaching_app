import React from 'react';
import { Button } from 'antd';

export default function CTA() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Ready to Transform Your Coaching Business?
        </h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of coaches who are already using CoachAI to grow their business.
        </p>
        <Button 
          size="large" 
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 h-12 text-base"
        >
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
}