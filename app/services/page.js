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
import { 
  HomeModernIcon,
  BuildingStorefrontIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  BuildingOffice2Icon
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

  const [activeLocation, setActiveLocation] = useState('all');
  const [hoveredProperty, setHoveredProperty] = useState(null);

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'delhi', name: 'Delhi', count: 156 },
    { id: 'gurugram', name: 'Gurugram', count: 89 },
    { id: 'noida', name: 'Noida', count: 72 },
    { id: 'faridabad', name: 'Faridabad', count: 45 },
    { id: 'greater-noida', name: 'Greater Noida', count: 38 },
    { id: 'ghaziabad', name: 'Ghaziabad', count: 32 }
  ];

  const propertyTypes = [
    {
      id: 1,
      icon: <BuildingOfficeIcon className="h-8 w-8" />,
      title: "Apartments & Flats",
      description: "2-4 BHK apartments in premium societies with modern amenities and prime locations.",
      locations: ['Delhi', 'Gurugram', 'Noida', 'Faridabad'],
      features: ['Modern Amenities', 'Prime Locations', 'Ready to Move', 'RERA Approved'],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: <HomeModernIcon className="h-8 w-8" />,
      title: "Luxury Villas",
      description: "Exclusive standalone villas with private gardens, pools, and premium security.",
      locations: ['Gurugram', 'Noida', 'Delhi'],
      features: ['Private Garden', 'Swimming Pool', 'Premium Security', 'Smart Home'],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      id: 3,
      icon: <BuildingLibraryIcon className="h-8 w-8" />,
      title: "Penthouses",
      description: "Ultra-luxury penthouses with panoramic views and premium finishes.",
      locations: ['Delhi', 'Gurugram'],
      features: ['Panoramic Views', 'Private Terrace', 'Premium Finishes', 'Exclusive'],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: <BuildingStorefrontIcon className="h-8 w-8" />,
      title: "Builder Floors",
      description: "Independent floors with separate entries in prime residential areas.",
      locations: ['Delhi', 'Faridabad', 'Ghaziabad'],
      features: ['Independent Entry', 'Privacy', 'Parking', 'Customizable'],
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      id: 5,
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Gated Societies",
      description: "Secured residential complexes with 24/7 security and premium amenities.",
      locations: ['Noida', 'Gurugram', 'Greater Noida'],
      features: ['24/7 Security', 'Club House', 'Sports Facilities', 'Green Spaces'],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      id: 6,
      icon: <RocketLaunchIcon className="h-8 w-8" />,
      title: "New Launch Projects",
      description: "Pre-launch and under-construction projects with attractive pricing.",
      locations: ['Gurugram', 'Noida', 'Faridabad', 'Greater Noida'],
      features: ['Attractive Pricing', 'Early Bird Offers', 'Flexible Payment', 'Future Ready'],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
  id: 7,
  icon: <BuildingOffice2Icon className="h-8 w-8" />,
  title: "High-Rise Apartments",
  description: "Premium high-rise apartments offering skyline views, modern living, and world-class amenities.",
  locations: ['Noida', 'Gurugram', 'Delhi', 'Greater Noida'],
  features: [
    'Skyline Views',
    'High-Speed Elevators',
    'Luxury Amenities',
    'Modern Architecture'
  ],
  color: "from-sky-500 to-sky-600",
  bgColor: "bg-sky-50",
  iconColor: "text-sky-600"
},
{
  id: 8,
  icon: <HomeIcon className="h-8 w-8" />,
  title: "Low-Rise Residences",
  description: "Low-rise residential floors designed for privacy, peaceful living, and spacious layouts.",
  locations: ['Delhi', 'Faridabad', 'Ghaziabad', 'Gurugram'],
  features: [
    'Low Density Living',
    'More Privacy',
    'Spacious Layouts',
    'Limited Floors'
  ],
  color: "from-teal-500 to-teal-600",
  bgColor: "bg-teal-50",
  iconColor: "text-teal-600"
}


  ];

  // Filter properties based on selected location
  const filteredProperties = activeLocation === 'all' 
    ? propertyTypes 
    : propertyTypes.filter(property => 
        property.locations.some(loc => 
          loc.toLowerCase() === activeLocation.toLowerCase()
        )
      );

  return (
    <>
    <div
  className="relative overflow-hidden bg-cover bg-center text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2070&q=80')",
  }}
>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/70 mb-6">
          <span className="h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-blue-100">
            Serving Delhi NCR Since 2005
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our Real Estate
          <span className="block text-blue-300 mt-2">
            Services
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-lg">
          Professional Real Estate Services Across Delhi NCR
          <span className="block text-lg text-blue-200 mt-2">
            Buy, Sell & Invest in Premium Residential Properties
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all"
          >
            Get Free Consultation
          </a>

          <a
            href="tel:+919876543210"
            className="border-2 border-blue-400 text-blue-100 font-semibold py-4 px-8 rounded-lg"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Right Cards – as it is */}
      <div className="grid grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-xl bg-blue-900/60 border border-blue-700/40 hover:bg-blue-900/80 transition-all"
          >
            {service.icon}
            <h3 className="text-xl font-bold mt-4">{service.title}</h3>
            <p className="text-blue-100 text-sm mt-2">{service.description}</p>
          </div>
        ))}
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

     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
            <MapPinIcon className="h-4 w-4 mr-2" />
            Delhi NCR Specialists
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Property Types <span className="text-blue-600">We Deal In</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Explore premium residential properties across Delhi NCR's prime locations
          </p>
          
          {/* SEO Keywords */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <span className="text-sm text-gray-500">Popular in:</span>
            {locations.slice(1).map((location) => (
              <span 
                key={location.id}
                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors"
                onClick={() => setActiveLocation(location.id)}
              >
                <MapPinIcon className="h-3 w-3 mr-1" />
                {location.name}
              </span>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(location.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeLocation === location.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
              >
                {location.id === 'all' ? (
                  <MagnifyingGlassIcon className="h-4 w-4" />
                ) : (
                  <MapPinIcon className="h-4 w-4" />
                )}
                {location.name}
                {location.id !== 'all' && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeLocation === location.id
                      ? 'bg-white/20'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {location.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Property Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 ${
                hoveredProperty === property.id ? 'transform -translate-y-2 border-blue-200' : ''
              }`}
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
            >
              {/* Top Gradient Banner */}
              <div className={`h-2 bg-gradient-to-r ${property.color}`}></div>
              
              <div className="p-6">
                {/* Icon & Title Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${property.bgColor} p-3 rounded-xl`}>
                    <div className={property.iconColor}>
                      {property.icon}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {property.locations.slice(0, 2).map((loc) => (
                      <span 
                        key={loc} 
                        className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
                      >
                        <MapPinIcon className="h-3 w-3 mr-1" />
                        {loc}
                      </span>
                    ))}
                    {property.locations.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
                        +{property.locations.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {property.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700"
                      >
                        <CheckCircleIcon className="h-3 w-3 mr-1.5 text-green-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location Tags */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPinIcon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">Available in:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.locations.map((location) => (
                      <span 
                        key={location}
                        className={`px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
                          activeLocation === location.toLowerCase()
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        onClick={() => setActiveLocation(location.toLowerCase())}
                      >
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 text-gray-800 hover:text-blue-600 font-semibold py-3 px-4 rounded-xl transition-all duration-300 group/btn flex items-center justify-center border border-gray-200 hover:border-blue-200">
                  <span>Explore {property.title}</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${property.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-2xl p-8 max-w-md mx-auto">
              <MagnifyingGlassIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Properties Found</h3>
              <p className="text-gray-600 mb-4">
                We don't have {activeLocation} properties in this category yet.
              </p>
              <button
                onClick={() => setActiveLocation('all')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View all properties →
              </button>
            </div>
          </div>
        )}

        {/* SEO Content Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Premier Real Estate Services Across Delhi NCR
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Why Choose Our Property Portfolio?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Wide range of residential properties in Delhi, Gurugram, Noida, and Faridabad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Verified listings with complete legal documentation support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Exclusive access to luxury properties and new launch projects</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Popular Locations We Cover</h4>
                <div className="flex flex-wrap gap-3">
                  {['South Delhi', 'Gurugram Sectors', 'Noida Expressway', 'Faridabad Sectors', 'Dwarka', 'Rohini', 'Greater Noida West', 'Sohna Road'].map((area) => (
                    <span key={area} className="px-4 py-2 bg-gray-800 rounded-lg text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-6">
                Looking for specific property types in Delhi, Gurugram, Noida, or Faridabad? 
                Our experts can help you find the perfect match.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
                <MapPinIcon className="h-5 w-5 mr-2" />
                Get Location-Based Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
    
    
  );
}