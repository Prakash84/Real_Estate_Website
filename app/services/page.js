// app/services/hero-section.jsx
"use client";

import { ArrowRightIcon, HomeIcon, BuildingOfficeIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { 
  
  CurrencyDollarIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  KeyIcon,
  MapPinIcon,
  DocumentTextIcon,
  PhoneIcon,
  
} from '@heroicons/react/24/outline';
// import { useState } from 'react';

export default function ServicesHeroSection() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Property Buying",
      description: "Find your dream home with expert guidance"
    },
    {
      id: 2,
      icon: <BuildingOfficeIcon className="h-8 w-8" />,
      title: "Property Selling",
      description: "Get maximum value for your property"
    },
    {
      id: 3,
      icon: <BanknotesIcon className="h-8 w-8" />,
      title: "Real Estate Investment",
      description: "Smart investment opportunities in Delhi NCR"
    },
    {
      id: 4,
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Legal Assistance",
      description: "Complete legal support for property transactions"
    }
  ];
const [hoveredCard, setHoveredCard] = useState(null);

  const services1 = [
    {
      id: 1,
      icon: <HomeIcon className="h-10 w-10" />,
      title: "Property Buying Assistance",
      description: "End-to-end support for finding and purchasing your dream home with legal verification and price negotiation.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: <CurrencyDollarIcon className="h-10 w-10" />,
      title: "Property Selling Services",
      description: "Maximize your property value with professional valuation, marketing, and buyer screening services.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      id: 3,
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: "Real Estate Investment Consulting",
      description: "Strategic investment advice with market analysis, ROI projections, and portfolio management.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: <BuildingLibraryIcon className="h-10 w-10" />,
      title: "Luxury Property Advisory",
      description: "Exclusive access to premium properties with personalized concierge services and privacy assurance.",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      id: 5,
      icon: <KeyIcon className="h-10 w-10" />,
      title: "Residential Property Leasing",
      description: "Comprehensive rental solutions including tenant verification, agreement drafting, and property maintenance.",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600"
    },
    {
      id: 6,
      icon: <MapPinIcon className="h-10 w-10" />,
      title: "Site Visit & Property Tours",
      description: "Organized property visits with transportation, expert guidance, and comparative analysis.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      id: 7,
      icon: <DocumentTextIcon className="h-10 w-10" />,
      title: "Legal & Documentation Support",
      description: "Complete legal assistance including title verification, agreement drafting, and registration support.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      id: 8,
      icon: <PhoneIcon className="h-10 w-10" />,
      title: "After-Sales Support",
      description: "Dedicated post-purchase support including maintenance coordination and utility connections.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <>
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            // Alternative real estate images:
            // "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80" - Modern building
            // "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80" - Luxury apartment
            // "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" - City skyline
          }}
        ></div>
        
        {/* Blue Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80"></div> */}
        
        {/* Subtle Pattern Overlay */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div> */}
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="100" width="80" height="200" fill="#60A5FA" />
          <rect x="60" y="110" width="20" height="20" fill="#1E40AF" />
          <rect x="100" y="110" width="20" height="20" fill="#1E40AF" />
          <rect x="60" y="150" width="20" height="20" fill="#1E40AF" />
          <rect x="100" y="150" width="20" height="20" fill="#1E40AF" />
          <rect x="60" y="190" width="20" height="20" fill="#1E40AF" />
          <rect x="100" y="190" width="20" height="20" fill="#1E40AF" />
          
          <rect x="150" y="70" width="100" height="230" fill="#3B82F6" />
          <rect x="170" y="90" width="20" height="20" fill="#1E3A8A" />
          <rect x="210" y="90" width="20" height="20" fill="#1E3A8A" />
          <rect x="170" y="130" width="20" height="20" fill="#1E3A8A" />
          <rect x="210" y="130" width="20" height="20" fill="#1E3A8A" />
          <rect x="170" y="170" width="20" height="20" fill="#1E3A8A" />
          <rect x="210" y="170" width="20" height="20" fill="#1E3A8A" />
          
          <rect x="270" y="130" width="60" height="170" fill="#60A5FA" />
          <rect x="280" y="150" width="15" height="15" fill="#1E40AF" />
          <rect x="310" y="150" width="15" height="15" fill="#1E40AF" />
          <rect x="280" y="180" width="15" height="15" fill="#1E40AF" />
          <rect x="310" y="180" width="15" height="15" fill="#1E40AF" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-800/70 border border-blue-600/50 backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-100">Serving Delhi NCR Since 2005</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Real Estate
              <span className="block text-blue-300 mt-2 drop-shadow-lg">Services</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-lg drop-shadow-lg">
              Professional Real Estate Services Across Delhi NCR
              <span className="block text-lg text-blue-200 mt-2 font-medium">
                Buy, Sell & Invest in Premium Residential Properties
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg backdrop-blur-sm border border-blue-400/30"
              >
                Get Free Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center bg-transparent border-2 border-blue-400/50 hover:bg-blue-900/40 text-blue-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-900/40 rounded-xl backdrop-blur-sm border border-blue-700/30">
                <div className="text-2xl font-bold text-white drop-shadow-md">500+</div>
                <div className="text-sm text-blue-200">Properties Sold</div>
              </div>
              <div className="text-center p-4 bg-blue-900/40 rounded-xl backdrop-blur-sm border border-blue-700/30">
                <div className="text-2xl font-bold text-white drop-shadow-md">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-blue-900/40 rounded-xl backdrop-blur-sm border border-blue-700/30">
                <div className="text-2xl font-bold text-white drop-shadow-md">100%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-blue-900/40 rounded-xl backdrop-blur-sm border border-blue-700/30">
                <div className="text-2xl font-bold text-white drop-shadow-md">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Services Cards */}
          <div className="grid grid-cols-2 gap-6 relative z-10">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer backdrop-blur-sm border ${
                  hoveredService === service.id 
                    ? 'bg-gradient-to-br from-blue-600/90 to-blue-700/90 shadow-2xl border-blue-500/50' 
                    : 'bg-blue-900/40 border-blue-700/30 hover:bg-blue-900/60'
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Icon Container */}
                <div className={`p-3 rounded-xl inline-block mb-4 ${
                  hoveredService === service.id 
                    ? 'bg-white/30' 
                    : 'bg-blue-800/50'
                }`}>
                  <div className={`${
                    hoveredService === service.id 
                      ? 'text-white' 
                      : 'text-blue-300'
                  }`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">{service.title}</h3>
                <p className="text-blue-100 text-sm">{service.description}</p>
                
                {/* Hover Arrow */}
                <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                  hoveredService === service.id ? 'opacity-100 scale-110' : 'opacity-0'
                }`}>
                  <ArrowRightIcon className="h-5 w-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center">
            <span className="text-sm text-blue-300 mb-2 drop-shadow-md">Explore More</span>
            <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            Our Expertise
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Core Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique needs across Delhi NCR
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services1.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer ${
                hoveredCard === service.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon Container */}
                <div className={`${service.bgColor} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <div className={service.iconColor}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 flex-grow">
                  {service.description}
                </p>

                {/* "Know More" Link */}
                <div className="mt-auto">
                  <a
                    href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center text-blue-600 font-semibold group/link"
                  >
                    <span>Know More</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transform rotate-45 translate-x-16 -translate-y-16 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-blue-100 mb-8">
              Our experts can create a personalized real estate strategy for your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Book Consultation
              </a>
              <a
                href="tel:+919876543210"
                className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Call Now: +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>

    </>
    
    
  );
}