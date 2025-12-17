// components/Navbar.tsx
'use client';

import { 
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const navItems: NavItem[] = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About Us',
      href: '/about-us',
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Buy Property', href: '/services/buy', description: 'Find your dream home' },
        { name: 'Sell Property', href: '/services/sell', description: 'Get the best price' },
        { name: 'Rent Assistance', href: '/services/rent', description: 'Hassle-free rental' },
        { name: 'Home Loan Assistance', href: '/services/loan', description: 'Best interest rates' },
        { name: 'Interior Services', href: '/services/interior', description: 'Design your space' },
        { name: 'Property Management', href: '/services/management', description: 'Complete management' }
      ]
    },
    {
      name: 'Locations',
      href: '/locations',
      dropdown: [
        { name: 'Gurugram', href: '/locations/gurugram' },
        { name: 'Noida', href: '/locations/noida' },
        { name: 'Delhi', href: '/locations/delhi' },
        { name: 'Greater Noida', href: '/locations/greater-noida' },
        { name: 'Faridabad', href: '/locations/faridabad' },
        { name: 'Ghaziabad', href: '/locations/ghaziabad' },
        { name: 'View All Locations', href: '/all-locations' }
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      dropdown: [
        { name: 'Property Guides', href: '/blog/guides' },
        { name: 'Market Trends', href: '/blog/trends' },
        { name: 'Home Decor', href: '/blog/decor' },
        { name: 'Legal Advice', href: '/blog/legal' },
        { name: 'Investment Tips', href: '/blog/investment' }
      ]
    },
    {
      name: 'Contact Us',
      href: '/contect_us'
    }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleMobileItemClick = (item: NavItem) => {
    if (item.dropdown) {
      // Services ke liye alag behavior
      if (item.name === 'Services') {
        // Mobile mein Services pe click -> dropdown toggle
        toggleDropdown(item.name);
      } else {
        // Other dropdown items
        toggleDropdown(item.name);
      }
    } else {
      // No dropdown - direct navigation
      setIsOpen(false);
    }
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    // Desktop: Click to navigate, hover for dropdown
    // Mobile: Different behavior handled in handleMobileItemClick
    window.location.href = '/services';
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            {/* Logo */}
<div className="flex items-center">
  <Link href="/" className="flex items-center gap-3">
    
    {/* Logo Image */}
    <div className="w-45 h-30 relative">
      <Image
        src="/images/logo.png"
        alt="PropertyDeals Logo"
        fill
        className="object-contain"
        priority
      />
    </div>

    {/* Brand Text */}
    {/* <div className="hidden sm:block">
      <div className="text-xl font-bold text-gray-900">
        PropertyDeals
      </div>
      <div className="text-xs text-gray-500 -mt-1">
        Real Estate Solutions
      </div>
    </div> */}

  </Link>
</div>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.name === 'Services' && setIsServicesHovered(true)}
                  onMouseLeave={() => item.name === 'Services' && setIsServicesHovered(false)}
                >
                  {item.dropdown ? (
                    <div className="flex items-center">
                      {/* Services ke liye clickable link + hover dropdown */}
                      {item.name === 'Services' ? (
                        <>
                          <Link
                            href={item.href}
                            className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors group"
                          >
                            {item.name}
                            <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform ${
                              isServicesHovered ? 'rotate-180' : ''
                            }`} />
                          </Link>
                          
                          {/* Services Dropdown - Hover pe show */}
                          {isServicesHovered && (
                            <div 
                              className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-2xl border border-gray-100 transition-all duration-300 animate-fadeIn"
                              onMouseEnter={() => setIsServicesHovered(true)}
                              onMouseLeave={() => setIsServicesHovered(false)}
                            >
                              <div className="p-2">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="flex flex-col px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors group/item"
                                    onClick={() => setIsServicesHovered(false)}
                                  >
                                    <span className="font-medium text-gray-900 group-hover/item:text-blue-600">
                                      {dropdownItem.name}
                                    </span>
                                    {dropdownItem.description && (
                                      <span className="text-sm text-gray-500 mt-1">
                                        {dropdownItem.description}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        /* Other dropdown items (Locations, Blog) */
                        <>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors group"
                          >
                            {item.name}
                            <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : 'group-hover:rotate-180'
                            }`} />
                          </button>

                          {/* Other Dropdowns */}
                          <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="p-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex flex-col px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-colors group/item"
                                >
                                  <span className="font-medium text-gray-900 group-hover/item:text-blue-600">
                                    {dropdownItem.name}
                                  </span>
                                  {dropdownItem.description && (
                                    <span className="text-sm text-gray-500 mt-1">
                                      {dropdownItem.description}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    /* No dropdown items */
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:+919876543210"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span className="font-medium">+91 98765 43210</span>
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <Link
                href="tel:+919876543210"
                className="flex items-center gap-2 text-gray-700"
              >
                <PhoneIcon className="h-5 w-5" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <div className="flex items-center justify-between">
                          {/* Mobile mein Services bhi clickable hai direct */}
                          <Link
                            href={item.href}
                            onClick={() => {
                              if (item.name !== 'Services') {
                                setIsOpen(false);
                              }
                            }}
                            className="flex-1 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                          >
                            {item.name}
                          </Link>
                          {/* Dropdown toggle button */}
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="p-3 text-gray-500 hover:bg-gray-50 rounded-lg"
                          >
                            <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                        </div>
                        
                        {/* Dropdown Content */}
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                <div className="font-medium">{dropdownItem.name}</div>
                                {dropdownItem.description && (
                                  <div className="text-sm text-gray-500 mt-1">
                                    {dropdownItem.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 text-gray-700 font-medium"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Call: +91 98765 43210
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Add CSS for fade-in animation */}
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