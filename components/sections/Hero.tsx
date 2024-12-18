import React from 'react';
import { Button } from 'antd';

export default function Hero() {
  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
          Built for Coaches.{' '}
          <span className="text-blue-600 block md:inline">Powered by AI.</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
          Manage your classes, engage your students, track progress, sell courses, and simplify daily tasks — all in one platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
          <Button type="primary" size="large" className="w-full sm:w-auto min-w-[140px]">
            Get Started Free
          </Button>
          <Button size="large" className="w-full sm:w-auto min-w-[140px]">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}