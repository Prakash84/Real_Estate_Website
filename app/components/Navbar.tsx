'use client';

import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
    description?: string;
  }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Buy Property', href: '/services/buy', description: 'Find your dream home' },
        { name: 'Sell Property', href: '/services/sell', description: 'Get the best price' },
        { name: 'Rent Assistance', href: '/services/rent', description: 'Hassle-free rental' },
        { name: 'Home Loan Assistance', href: '/services/loan', description: 'Best interest rates' },
        { name: 'Interior Services', href: '/services/interior', description: 'Design your space' },
        { name: 'Property Management', href: '/services/management', description: 'Complete management' },
      ],
    },
    {
      name: 'Locations',
      href: '/location',
      dropdown: [
        { name: 'Gurugram', href: '/locations/gurugram' },
        { name: 'Noida', href: '/locations/noida' },
        { name: 'Delhi', href: '/locations/delhi' },
        { name: 'Greater Noida', href: '/locations/greater-noida' },
        { name: 'Faridabad', href: '/locations/faridabad' },
        { name: 'Ghaziabad', href: '/locations/ghaziabad' },
        { name: 'View All Locations', href: '/all-locations' },
      ],
    },
    {
      name: 'Blog',
      href: '/blog',
      dropdown: [
        { name: 'Property Guides', href: '/blog/guides' },
        { name: 'Market Trends', href: '/blog/trends' },
        { name: 'Home Decor', href: '/blog/decor' },
        { name: 'Legal Advice', href: '/blog/legal' },
        { name: 'Investment Tips', href: '/blog/investment' },
      ],
    },
    { name: 'Contact Us', href: '/contect_us' },
  ];

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-12">
                <Image
                  src="/images/logo.png"
                  alt="PropertyDeals Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setHoveredMenu(item.name)}
                  onMouseLeave={() => item.dropdown && setHoveredMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDownIcon
                        className={`h-4 w-4 ml-1 transition-transform ${
                          hoveredMenu === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* DROPDOWN */}
                  {item.dropdown && hoveredMenu === item.name && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-2xl border border-gray-100 animate-fadeIn">
                      <div className="p-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setHoveredMenu(null)}
                            className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition"
                          >
                            <div className="font-medium text-gray-900 hover:text-blue-600">
                              {sub.name}
                            </div>
                            {sub.description && (
                              <div className="text-sm text-gray-500 mt-1">
                                {sub.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="tel:+919876543210" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <PhoneIcon className="h-5 w-5" />
                <span>+91 98765 43210</span>
              </Link>
              <Link href="/contect_us" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700">
                Get Consultation
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center">
                    <Link
                      href={item.href}
                      onClick={() => !item.dropdown && setIsOpen(false)}
                      className="py-3 font-medium text-gray-700"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button onClick={() => toggleMobileDropdown(item.name)}>
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-2 space-y-1 border-l pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-gray-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* FADE ANIMATION */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
