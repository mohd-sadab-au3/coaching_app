"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from 'antd';
import { Menu } from 'lucide-react';
import { MenuItem } from './types';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const menuItems: MenuItem[] = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '#about' },
  { label: 'Book a Demo', href: '#demo' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-blue-600">
              CoachAI
            </Link>
          </div>

          {/* Desktop Menu */}
          <DesktopMenu menuItems={menuItems} />

          {/* Mobile Menu Button */}
          <Button
            icon={<Menu className="h-5 w-5" />}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden"
            type="text"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        menuItems={menuItems}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}