"use client";
import { useState } from "react";
// components/HeroSection.jsx
import React from 'react';

import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ChevronRight,
  Home,
  Shield,
  TrendingUp,
  Star
} from 'lucide-react';
import Image from 'next/image';
import {  Building2,    Users } from 'lucide-react';
import {  
  LandPlot, 
  Store, 
  Key,
  DollarSign,
  ArrowRight,
} from 'lucide-react';
import {     
  Navigation,
  CheckCircle
} from 'lucide-react';
import {  
  Train,  
  School, 
  HeartPulse,
  BadgeCheck,
  ChartBar,
  Calendar,
  Zap
} from 'lucide-react';
import { 
  MessageSquare, 
  Search, 
  Eye, 
  FileText, 
  Clock,

} from 'lucide-react';
import { Award } from 'lucide-react';
import ClientTestimonials from '../components/ClientTestimonials';
import Link from 'next/link';

const page = () => {
    // 3rd
    const propertyTypes = [
    {
      id: 1,
      title: "Flats / Apartments",
      icon: <Home className="w-8 h-8" />,
      description: "Modern apartments with premium amenities in prime locations across Delhi NCR.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      stats: "1500+ Listings",
      priceRange: "₹25L - ₹5Cr",
      features: [
        "1,2,3 BHK Options",
        "Gated Societies",
        "Club House",
        "Security 24/7"
      ],
      popularAreas: ["Sector 128", "Indirapuram", "Greater Noida West"],
      ctaText: "Browse Apartments"
    },
    {
      id: 2,
      title: "Villas",
      icon: <Building2 className="w-8 h-8" />,
      description: "Luxury standalone villas with private gardens and premium finishes.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      stats: "300+ Listings",
      priceRange: "₹1.5Cr - ₹10Cr+",
      features: [
        "3-5 BHK",
        "Private Garden",
        "Swimming Pool",
        "Modular Kitchen"
      ],
      popularAreas: ["Golf Course", "Jaypee Greens", "Noida Expressway"],
      ctaText: "Explore Villas"
    },
    {
      id: 3,
      title: "Plots",
      icon: <LandPlot className="w-8 h-8" />,
      description: "Residential and commercial plots for investment and construction.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      stats: "800+ Listings",
      priceRange: "₹10L - ₹2Cr",
      features: [
        "Freehold Plots",
        "Clear Titles",
        "Approved Layout",
        "Good ROI"
      ],
      popularAreas: ["Greater Noida", "Ghaziabad", "Noida Extension"],
      ctaText: "View Plots"
    },
    {
      id: 4,
      title: "Commercial Property",
      icon: <Store className="w-8 h-8" />,
      description: "Office spaces, shops, and commercial complexes for business growth.",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      stats: "600+ Listings",
      priceRange: "₹50L - ₹20Cr+",
      features: [
        "Office Spaces",
        "Retail Shops",
        "IT Parks",
        "Warehouses"
      ],
      popularAreas: ["Sector 62", "Cyber City", "Noida SEZ"],
      ctaText: "Find Commercial"
    },
    {
      id: 5,
      title: "Rental Property",
      icon: <Key className="w-8 h-8" />,
      description: "Fully furnished and semi-furnished properties for rent.",
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      stats: "2000+ Listings",
      priceRange: "₹8k - ₹2L/month",
      features: [
        "Fully Furnished",
        "Semi-Furnished",
        "Short Term",
        "Long Term"
      ],
      popularAreas: ["All Locations", "Prime Areas", "Budget Options"],
      ctaText: "Rent Now"
    }
  ];

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: "5000+", label: "Total Properties" },
    { icon: <Users className="w-6 h-6" />, value: "98%", label: "Satisfaction Rate" },
    { icon: <DollarSign className="w-6 h-6" />, value: "₹200Cr+", label: "Property Value" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Verified Listings" }
  ];

//   4th
 const localities = {
    noida: {
      name: "Noida",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      areas: [
        { 
          name: "Sector 62", 
          properties: "350+", 
          avgPrice: "₹1.2Cr", 
          growth: "12%",
          type: "IT Hub",
          link: "/properties/noida/sector-62"
        },
        { 
          name: "Sector 75", 
          properties: "280+", 
          avgPrice: "₹95L", 
          growth: "10%",
          type: "Residential",
          link: "/properties/noida/sector-75"
        },
        { 
          name: "Sector 137", 
          properties: "420+", 
          avgPrice: "₹1.5Cr", 
          growth: "15%",
          type: "Premium",
          link: "/properties/noida/sector-137"
        },
        { 
          name: "Noida Extension", 
          properties: "550+", 
          avgPrice: "₹65L", 
          growth: "18%",
          type: "Affordable",
          link: "/properties/noida/extension"
        },
        { 
          name: "Greater Noida West", 
          properties: "380+", 
          avgPrice: "₹80L", 
          growth: "14%",
          type: "Developing",
          link: "/properties/noida/greater-noida-west"
        },
        { 
          name: "Noida Expressway", 
          properties: "220+", 
          avgPrice: "₹2.5Cr", 
          growth: "11%",
          type: "Luxury",
          link: "/properties/noida/expressway"
        }
      ]
    },
    ghaziabad: {
      name: "Ghaziabad",
      icon: <Home className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      areas: [
        { 
          name: "Indirapuram", 
          properties: "320+", 
          avgPrice: "₹1.1Cr", 
          growth: "13%",
          type: "Residential",
          link: "/properties/ghaziabad/indirapuram"
        },
        { 
          name: "Vaishali", 
          properties: "180+", 
          avgPrice: "₹90L", 
          growth: "9%",
          type: "Established",
          link: "/properties/ghaziabad/vaishali"
        },
        { 
          name: "Kaushambi", 
          properties: "150+", 
          avgPrice: "₹85L", 
          growth: "8%",
          type: "Affordable",
          link: "/properties/ghaziabad/kaushambi"
        },
        { 
          name: "Raj Nagar", 
          properties: "210+", 
          avgPrice: "₹95L", 
          growth: "10%",
          type: "Prime",
          link: "/properties/ghaziabad/raj-nagar"
        },
        { 
          name: "Crossing Republik", 
          properties: "190+", 
          avgPrice: "₹75L", 
          growth: "16%",
          type: "Developing",
          link: "/properties/ghaziabad/crossing-republik"
        },
        { 
          name: "Govindpuram", 
          properties: "120+", 
          avgPrice: "₹65L", 
          growth: "7%",
          type: "Budget",
          link: "/properties/ghaziabad/govindpuram"
        }
      ]
    },
    greaterNoida: {
      name: "Greater Noida",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      areas: [
        { 
          name: "Alpha Sector", 
          properties: "270+", 
          avgPrice: "₹70L", 
          growth: "17%",
          type: "Planned",
          link: "/properties/greater-noida/alpha"
        },
        { 
          name: "Beta Sector", 
          properties: "230+", 
          avgPrice: "₹65L", 
          growth: "16%",
          type: "Residential",
          link: "/properties/greater-noida/beta"
        },
        { 
          name: "Gamma Sector", 
          properties: "190+", 
          avgPrice: "₹75L", 
          growth: "15%",
          type: "Commercial",
          link: "/properties/greater-noida/gamma"
        },
        { 
          name: "Delta Sector", 
          properties: "160+", 
          avgPrice: "₹60L", 
          growth: "14%",
          type: "Mixed Use",
          link: "/properties/greater-noida/delta"
        },
        { 
          name: "Knowledge Park", 
          properties: "140+", 
          avgPrice: "₹85L", 
          growth: "19%",
          type: "Education Hub",
          link: "/properties/greater-noida/knowledge-park"
        },
        { 
          name: "Tech Zone", 
          properties: "110+", 
          avgPrice: "₹95L", 
          growth: "20%",
          type: "IT Corridor",
          link: "/properties/greater-noida/tech-zone"
        }
      ]
    }
  };

  const seoKeywords = [
    "property in Noida",
    "flats in Sector 62",
    "apartments in Indirapuram",
    "plots in Greater Noida",
    "commercial space Noida",
    "residential property Ghaziabad",
    "ready to move flats",
    "investment property",
    "luxury apartments",
    "affordable housing"
  ];
  // 5th
    const investmentPoints = [
    {
      id: 1,
      icon: <Train className="w-8 h-8" />,
      title: "Excellent Metro Connectivity",
      description: "Direct metro links to Delhi, Gurgaon, and Faridabad. Reduced commute time and increased property value.",
      stats: "45+ Metro Stations",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      details: [
        "Blue Line connectivity",
        "Aqua Line network",
        "Upcoming metro extensions",
        "Last-mile connectivity"
      ]
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8" />,
      title: "Thriving IT & Corporate Hubs",
      description: "Home to major IT parks, SEZs, and corporate offices. High employment opportunities and rental demand.",
      stats: "5000+ Companies",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      details: [
        "Noida SEZ",
        "Cyber City",
        "IT Park Noida",
        "Corporate offices"
      ]
    },
    {
      id: 3,
      icon: <School className="w-8 h-8" />,
      title: "Premium Schools & Universities",
      description: "Top-rated educational institutions and healthcare facilities within reach. Perfect for families.",
      stats: "100+ Top Schools",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      details: [
        "International schools",
        "CBSE/ICSE schools",
        "Medical colleges",
        "Engineering colleges"
      ]
    },
    {
      id: 4,
      icon: <HeartPulse className="w-8 h-8" />,
      title: "World-Class Healthcare",
      description: "Multispecialty hospitals and healthcare centers with advanced medical facilities.",
      stats: "50+ Hospitals",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      details: [
        "Fortis, Apollo",
        "Max Super Speciality",
        "24/7 emergency",
        "Specialized care"
      ]
    },
    {
      id: 5,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High ROI & Capital Appreciation",
      description: "Consistent property value growth with excellent returns on investment.",
      stats: "12-15% Annual Growth",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      details: [
        "Capital appreciation",
        "Rental yield 4-6%",
        "Stable market",
        "Low risk investment"
      ]
    },
    {
      id: 6,
      icon: <Users className="w-8 h-8" />,
      title: "Strong Rental Demand",
      description: "High demand from corporate professionals and students ensures regular rental income.",
      stats: "95% Occupancy Rate",
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-50",
      details: [
        "Corporate rentals",
        "Student housing",
        "Short-term stays",
        "Commercial leases"
      ]
    }
  ];

  const roiComparison = [
    { year: "Year 1", roi: "8%", appreciation: "12%" },
    { year: "Year 3", roi: "10%", appreciation: "18%" },
    { year: "Year 5", roi: "12%", appreciation: "25%" },
    { year: "Year 7", roi: "14%", appreciation: "35%" },
  ];

  const marketStats = [
    { label: "Property Value Growth", value: "15%", icon: <ChartBar className="w-5 h-5" /> },
    { label: "Rental Yield", value: "4.8%", icon: <DollarSign className="w-5 h-5" /> },
    { label: "Occupancy Rate", value: "95%", icon: <Home className="w-5 h-5" /> },
    { label: "New Projects", value: "120+", icon: <Building2 className="w-5 h-5" /> },
  ];
  
  // 6th
  const processSteps = [
    {
      id: 1,
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Share Requirement",
      description: "Tell us your budget, preferences, and requirements. Our expert will understand your needs.",
      color: "from-blue-500 to-cyan-500",
      time: "24 hours",
      features: ["Free Consultation", "Budget Planning", "Need Analysis"],
      actions: ["Call", "WhatsApp", "Online Form"]
    },
    {
      id: 2,
      icon: <Search className="w-8 h-8" />,
      title: "Property Shortlisting",
      description: "Get personalized property matches from our verified database. Shortlist based on your preferences.",
      color: "from-purple-500 to-pink-500",
      time: "2-3 days",
      features: ["AI-based Matching", "Video Tours", "Price Comparison"],
      actions: ["View Online", "Compare", "Shortlist"]
    },
    {
      id: 3,
      icon: <Eye className="w-8 h-8" />,
      title: "Site Visit",
      description: "Schedule physical visits with our expert. Get real-time insights and neighborhood tour.",
      color: "from-green-500 to-emerald-500",
      time: "Flexible",
      features: ["Expert Guidance", "Neighborhood Tour", "Quality Check"],
      actions: ["Book Visit", "Virtual Tour", "Group Visit"]
    },
    {
      id: 4,
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation",
      description: "Complete legal verification and paperwork with our legal team. 100% transparent process.",
      color: "from-amber-500 to-orange-500",
      time: "3-5 days",
      features: ["Legal Verification", "Paperwork", "RERA Compliance"],
      actions: ["Document Checklist", "Legal Help", "Verification"]
    },
    {
      id: 5,
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Deal Closure",
      description: "Finalize the deal with secure payment and smooth possession. Post-sale support included.",
      color: "from-indigo-500 to-violet-500",
      time: "1-2 days",
      features: ["Secure Payment", "Possession", "Post-sale Support"],
      actions: ["Payment Options", "Celebration", "Support"]
    }
  ];

  const sellingProcess = [
    {
      step: "1",
      title: "Property Valuation",
      description: "Free market analysis to determine optimal selling price",
      time: "24 hours"
    },
    {
      step: "2",
      title: "Listing & Marketing",
      description: "Professional photography and multi-channel promotion",
      time: "2-3 days"
    },
    {
      step: "3",
      title: "Buyer Screening",
      description: "Verified buyer shortlisting and viewing coordination",
      time: "1-2 weeks"
    },
    {
      step: "4",
      title: "Negotiation",
      description: "Expert negotiation for best price and terms",
      time: "3-5 days"
    },
    {
      step: "5",
      title: "Closing",
      description: "Legal documentation and smooth transaction completion",
      time: "1 week"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Verified Properties",
      description: "No fake listings, only RERA approved properties"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Process",
      description: "Complete buying/selling in 15-30 days"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Dedicated relationship manager throughout"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Best Price",
      description: "Price guarantee for buyers, maximum value for sellers"
    }
  ];
  // 7th


  return (
    <>
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/70 z-10"></div>
        {/* You can add a background image here */}
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Floating Property Cards */}
      <div className="absolute top-10 left-10 hidden lg:block animate-float-slow">
        <div className="bg-white p-4 rounded-xl shadow-2xl w-64 transform rotate-3">
          <div className="h-40 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg mb-3"></div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-900">3 BHK Apartment</h4>
              <p className="text-sm text-gray-600">Sector 128, Noida</p>
            </div>
            <div className="text-blue-600 font-bold">₹1.2Cr</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 hidden lg:block animate-float">
        <div className="bg-white p-4 rounded-xl shadow-2xl w-64 transform -rotate-2">
          <div className="h-40 bg-gradient-to-br from-green-400 to-emerald-300 rounded-lg mb-3"></div>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-900">Commercial Space</h4>
              <p className="text-sm text-gray-600">Indirapuram</p>
            </div>
            <div className="text-green-600 font-bold">₹2.5Cr</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-white font-medium">Delhi NCR Region</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Properties in 
              <span className="block text-amber-400 mt-2">Noida • Ghaziabad • Greater Noida</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl">
              Discover your dream home, office, or investment property in Delhi NCR's most promising locations. 
              <span className="block text-white/80 text-lg mt-2">
                100% Verified Properties • RERA Registered • Best Price Guaranteed
              </span>
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">5000+</div>
                <div className="text-blue-200 text-sm">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">₹200Cr+</div>
                <div className="text-blue-200 text-sm">Property Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Call Button */}
              <a 
                href="tel:+911234567890"
                className="group flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/911234567890?text=Hi,%20I'm%20interested%20in%20properties%20in%20Noida%20Ghaziabad%20area"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* View Properties Button */}
              <a 
                href="#properties"
                className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <Home className="w-5 h-5" />
                <span>View Properties</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">RERA Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">Verified Properties</span>
              </div>
            </div>
          </div>

          {/* Right Column - Property Form/Image */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform translate-y-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Find Your Perfect Property
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Looking for</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-3 bg-blue-50 text-blue-600 rounded-lg font-medium">Residential</button>
                    <button className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">Commercial</button>
                    <button className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">Plot</button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Budget</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-3 bg-blue-50 text-blue-600 rounded-lg font-medium">₹50L - ₹1Cr</button>
                    <button className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">₹1Cr - ₹2Cr</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <button className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">₹2Cr - ₹5Cr</button>
                    <button className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">₹5Cr+</button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Location Preference</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-3 bg-blue-50 text-blue-600 rounded-lg font-medium">Noida</button>
                    <button className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">Ghaziabad</button>
                    <button className="py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">Greater Noida</button>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] mt-6">
                  Get Personalized Matches
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 text-sm">
                  <span className="font-semibold">500+</span> clients found their dream property last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Quick Contact Floating Button (Mobile) */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <a 
          href="tel:+911234567890"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl animate-pulse"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </section>
     {/* 2nd */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-3 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Prime Delhi NCR Locations</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium <span className="text-blue-600">Real Estate</span> in 
            <span className="block text-amber-500">Noida, Ghaziabad & Greater Noida</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover why Delhi NCR remains one of India's most sought-after real estate destinations
          </p>
        </div>

        {/* Main SEO Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* SEO Optimized Paragraph */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Invest in <span className="text-blue-600">Delhi NCR Real Estate</span>?
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Looking for <strong>property in Noida</strong> or <strong>flats in Noida</strong>? 
                  Delhi NCR offers unparalleled opportunities with its world-class infrastructure, 
                  excellent connectivity, and thriving business ecosystem. Whether you're searching for 
                  <strong> residential property in Noida</strong> or <strong>commercial space in Ghaziabad</strong>, 
                  our region provides diverse options to suit every need and budget.
                </p>
                
                <p>
                  The real estate market in <strong>Greater Noida</strong> has witnessed remarkable growth, 
                  making it an ideal destination for both end-users and investors. From affordable 
                  <strong> apartments in Ghaziabad</strong> to premium <strong>villas in Noida</strong>, 
                  we offer verified listings with complete transparency. Our expertise in 
                  <strong> property in Greater Noida</strong> ensures you get the best value for your investment.
                </p>
                
                <p>
                  With upcoming infrastructure projects, metro connectivity expansions, and 
                  industrial development, investing in <strong>real estate in Delhi NCR</strong> promises 
                  excellent returns. Explore our curated selection of <strong>ready to move flats in Noida</strong> 
                  and <strong>under construction projects in Greater Noida</strong> today.
                </p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Noida Card */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Noida</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>IT & Corporate Hub</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Metro Connectivity</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Premium Apartments</span>
                  </li>
                </ul>
              </div>

              {/* Ghaziabad Card */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Ghaziabad</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Affordable Housing</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>NH-24 Corridor</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Rapid Development</span>
                  </li>
                </ul>
              </div>

              {/* Greater Noida Card */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow col-span-1 sm:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-400 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Greater Noida</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Planned City</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Knowledge Park</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>High Growth Potential</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Trust Factors */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why Choose Us for Delhi NCR Properties</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>RERA Registered</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>Local Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>Area Specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span>Verified Listings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords Focus Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Find Your Perfect Property
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              "Property in Noida",
              "Flats in Noida", 
              "Apartments in Ghaziabad",
              "Villas in Greater Noida",
              "Commercial Space Noida",
              "Ready to Move Flats",
              "Residential Property",
              "Investment Property"
            ].map((keyword, index) => (
              <a 
                key={index}
                href={`#${keyword.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white hover:bg-blue-50 text-gray-800 hover:text-blue-600 font-medium py-3 px-4 rounded-lg text-center transition-all duration-300 border border-blue-100 hover:border-blue-300 hover:shadow-md"
              >
                {keyword}
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Explore our verified listings across all prime locations in Delhi NCR
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Browse All Properties
            </button>
          </div>
        </div>

        {/* Micro-Content for SEO */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Noida Real Estate</h4>
            <p>Premium residential and commercial properties in sectors 62, 128, Noida Expressway with excellent connectivity and amenities.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Ghaziabad Property</h4>
            <p>Affordable housing options in Indirapuram, Vaishali, Kaushambi with upcoming infrastructure developments.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Greater Noida Investment</h4>
            <p>High-growth potential properties in Alpha, Beta, Gamma sectors with planned development and green spaces.</p>
          </div>
        </div>
      </div>
    </section>
    {/* 3rd */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-3 rounded-full mb-6">
            <Building2 className="w-5 h-5" />
            <span className="font-semibold">Explore Property Types</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect <span className="text-blue-600">Property Type</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through our extensive collection of verified properties across all categories in Delhi NCR
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Property Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {propertyTypes.map((property) => (
            <div 
              key={property.id} 
              className={`${property.bgColor} rounded-2xl overflow-hidden border ${property.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              {/* Card Header */}
              <div className={`p-6 bg-gradient-to-r ${property.color} text-white relative overflow-hidden`}>
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  {property.icon}
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {property.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{property.title}</h3>
                    <div className="text-sm text-white/80">{property.stats}</div>
                  </div>
                </div>
                
                <p className="text-white/90 text-sm">{property.description}</p>
              </div>
              
              {/* Card Body */}
              <div className="p-6">
                {/* Price Range */}
                <div className="mb-6 p-4 bg-white rounded-lg border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Price Range</div>
                  <div className="text-xl font-bold text-gray-900">{property.priceRange}</div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${property.color}`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Popular Areas */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {property.popularAreas.map((area, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 text-xs rounded-full bg-white border border-gray-200 text-gray-700"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${property.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-center gap-2`}>
                  {property.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Property Type Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Property Type Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Property Type</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Best For</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Avg. ROI</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Popularity</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {propertyTypes.map((property, index) => (
                  <tr 
                    key={property.id} 
                    className={`border-b border-gray-100 hover:bg-gray-50 ${index === propertyTypes.length - 1 ? 'border-b-0' : ''}`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${property.color} flex items-center justify-center`}>
                          {React.cloneElement(property.icon, { className: "w-5 h-5 text-white" })}
                        </div>
                        <span className="font-medium text-gray-900">{property.title}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      {property.title === "Flats / Apartments" && "End Users"}
                      {property.title === "Villas" && "Luxury Living"}
                      {property.title === "Plots" && "Investors"}
                      {property.title === "Commercial Property" && "Business"}
                      {property.title === "Rental Property" && "Tenants"}
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-flex items-center gap-1 font-medium text-green-600">
                        <TrendingUp className="w-4 h-4" />
                        {property.title === "Flats / Apartments" && "8-10%"}
                        {property.title === "Villas" && "7-9%"}
                        {property.title === "Plots" && "12-15%"}
                        {property.title === "Commercial Property" && "9-11%"}
                        {property.title === "Rental Property" && "5-7%"}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center">
                        <div className="w-full max-w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${property.color}`}
                            style={{
                              width: property.title === "Flats / Apartments" ? "90%" :
                                     property.title === "Rental Property" ? "85%" :
                                     property.title === "Plots" ? "75%" :
                                     property.title === "Commercial Property" ? "70%" : "65%"
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${property.color} text-white text-sm font-medium hover:shadow-md transition-shadow`}>
                        Explore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure Which Property Type is Right for You?
              </h3>
              <p className="text-blue-100 mb-6">
                Our expert advisors will help you choose the perfect property type based on your budget, requirements, and investment goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-colors">
                  Book Free Consultation
                </button>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  Talk to Expert
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Expert Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Free Guidance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 col-span-2">
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 4th */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-3 rounded-full mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Prime Localities in Delhi NCR</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Top <span className="text-blue-600">Localities</span> in 
            <span className="block text-amber-500">Noida, Ghaziabad & Greater Noida</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the most sought-after areas with verified property listings, price trends, and growth potential
          </p>
        </div>

        {/* SEO Keywords Quick Links */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              Quick Property Search
            </h3>
            <div className="flex flex-wrap gap-3">
              {seoKeywords.map((keyword, index) => (
                <a
                  key={index}
                  href={`/properties/${keyword.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-colors border border-blue-200 hover:border-blue-300"
                >
                  {keyword}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Localities Grid */}
        <div className="space-y-12 mb-16">
          {Object.entries(localities).map(([key, city]) => (
            <div key={key} className={`${city.bgColor} rounded-2xl p-6 md:p-8 border ${city.borderColor}`}>
              {/* City Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${city.color} flex items-center justify-center text-white`}>
                    {city.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{city.name}</h2>
                    <p className="text-gray-600">Prime residential and commercial areas</p>
                  </div>
                </div>
                <a 
                  href={`/properties/${key}`}
                  className="hidden md:flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl border border-gray-300 transition-colors"
                >
                  View All in {city.name}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Areas Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {city.areas.map((area, index) => (
                  <a
                    key={index}
                    href={area.link}
                    className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {area.name}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full mt-2">
                          {area.type}
                        </span>
                      </div>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${city.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">Properties</div>
                        <div className="font-semibold text-gray-900">{area.properties}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">Avg. Price</div>
                        <div className="font-bold text-gray-900">{area.avgPrice}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">Growth</div>
                        <div className="flex items-center gap-1 font-bold text-green-600">
                          <TrendingUp className="w-4 h-4" />
                          {area.growth}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center gap-2 text-blue-600 text-sm font-medium">
                      <span>View Properties</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Mobile View All Button */}
              <div className="mt-8 md:hidden">
                <a 
                  href={`/properties/${key}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl"
                >
                  View All Properties in {city.name}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Noida SEO Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                Property in Noida - Complete Guide
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Looking for <strong>property in Noida</strong>? Noida offers diverse options from 
                  <strong> flats in Sector 62</strong> to <strong>luxury apartments in Sector 137</strong>. 
                  With excellent metro connectivity and corporate hubs, Noida remains a top choice for 
                  both residential and commercial investments.
                </p>
                
                <p>
                  Explore <strong>affordable housing in Noida Extension</strong> or premium 
                  <strong> villas in Greater Noida West</strong>. Our verified listings in 
                  <strong> Sector 75</strong> and <strong>Sector 128</strong> ensure transparency 
                  and best deals for home buyers and investors.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 my-4">
                  <h3 className="font-bold text-gray-900 mb-2">Top Areas in Noida:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Sector 62 (IT Hub)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Noida Expressway</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Greater Noida West</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Sector 137</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ghaziabad & Greater Noida SEO Content */}
          <div className="space-y-8">
            {/* Ghaziabad */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-green-600" />
                Flats in Ghaziabad & Greater Noida
              </h3>
              
              <div className="text-gray-700 space-y-3">
                <p>
                  Discover <strong>apartments in Indirapuram</strong> and 
                  <strong> residential property in Ghaziabad</strong> with excellent connectivity 
                  to Delhi. Areas like <strong>Vaishali</strong> and <strong>Kaushambi</strong> 
                  offer affordable options with good amenities.
                </p>
                
                <p>
                  <strong>Greater Noida</strong> presents opportunities in 
                  <strong> Alpha Sector</strong> and <strong>Beta Sector</strong> with planned 
                  development and high growth potential. Perfect for long-term investment.
                </p>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">8-12%</div>
                    <div className="text-sm text-gray-600">Annual Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">5000+</div>
                    <div className="text-sm text-gray-600">Listings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Internal Linking CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need Help Choosing a Locality?</h3>
              <p className="text-blue-100 mb-6">
                Our local experts can guide you to the perfect area based on your budget, 
                lifestyle, and investment goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/area-consultation"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Book Area Consultation
                </a>
                <a 
                  href="/property-guide"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Download Area Guide
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Compare Top Localities
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Locality</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Avg. Price</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Growth Rate</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Property Type</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">Connectivity</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-700">View</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Sector 62", area: "Noida", price: "₹1.2Cr", growth: "12%", type: "Commercial", connectivity: "Excellent" },
                  { name: "Indirapuram", area: "Ghaziabad", price: "₹1.1Cr", growth: "13%", type: "Residential", connectivity: "Good" },
                  { name: "Alpha Sector", area: "Greater Noida", price: "₹70L", growth: "17%", type: "Mixed", connectivity: "Good" },
                  { name: "Noida Extension", area: "Noida", price: "₹65L", growth: "18%", type: "Affordable", connectivity: "Developing" },
                  { name: "Vaishali", area: "Ghaziabad", price: "₹90L", growth: "9%", type: "Established", connectivity: "Excellent" },
                  { name: "Knowledge Park", area: "Greater Noida", price: "₹85L", growth: "19%", type: "Education", connectivity: "Good" },
                ].map((locality, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium text-gray-900">{locality.name}</div>
                        <div className="text-sm text-gray-600">{locality.area}</div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 font-semibold text-gray-900">
                      {locality.price}
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-flex items-center gap-1 font-medium text-green-600">
                        <TrendingUp className="w-4 h-4" />
                        {locality.growth}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {locality.type}
                      </span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center">
                        {locality.connectivity === "Excellent" && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                            Excellent
                          </span>
                        )}
                        {locality.connectivity === "Good" && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                            Good
                          </span>
                        )}
                        {locality.connectivity === "Developing" && (
                          <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">
                            Developing
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <a 
                        href={`/properties/${locality.area.toLowerCase().replace(/\s+/g, '-')}/${locality.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        View Details →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="/compare-localities"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Compare More Localities
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* 5th */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full mb-6">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Smart Investment Decision</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Invest in <span className="text-blue-600">Delhi NCR</span> Properties?
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why Delhi NCR remains India's top real estate investment destination with unbeatable growth potential
          </p>
        </div>

        {/* Market Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Investment Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {investmentPoints.map((point) => (
            <div 
              key={point.id} 
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${point.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="p-8">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${point.color} flex items-center justify-center text-white`}>
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                    <div className={`px-3 py-1 bg-gradient-to-r ${point.color} bg-opacity-10 text-gray-700 rounded-full text-sm font-medium inline-block`}>
                      {point.stats}
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {point.description}
                </p>
                
                {/* Details List */}
                <ul className="space-y-2 mb-8">
                  {point.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${point.color}`}></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${point.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-center gap-2`}>
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Comparison Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 md:p-12 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <ChartBar className="w-4 h-4" />
                <span className="text-sm font-medium">Investment Analysis</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                High Returns Guaranteed
              </h3>
              
              <p className="text-blue-100 mb-8">
                Delhi NCR properties have consistently delivered excellent returns over the years, 
                making it one of the safest real estate investments in India.
              </p>
              
              <div className="space-y-6">
                {roiComparison.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <div>
                      <div className="text-xl font-bold">{item.year}</div>
                      <div className="text-sm text-blue-200">Investment Period</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-400">{item.roi} ROI</div>
                      <div className="text-sm text-amber-300">{item.appreciation} Appreciation</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-sm">Based on 10-year market data analysis</span>
              </div>
            </div>
            
            {/* Right Content - Calculator */}
            <div className="bg-white p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Calculate Your Returns
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Investment Amount</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">₹</div>
                    <input 
                      type="range" 
                      min="5000000" 
                      max="50000000" 
                      step="500000" 
                      defaultValue="15000000"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>₹50L</span>
                      <span>₹5Cr</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Investment Period</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[3, 5, 7].map((years) => (
                      <button 
                        key={years}
                        className="py-3 bg-blue-50 text-blue-600 font-medium rounded-lg"
                      >
                        {years} Years
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-600">Estimated Returns</div>
                    <div className="text-2xl font-bold text-green-600">₹42,50,000</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600">Total Value</div>
                    <div className="text-2xl font-bold text-blue-600">₹1,92,50,000</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all">
                  Download Investment Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Conversion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Trust Badges */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Why Trust Us?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">RERA Registered</div>
                  <div className="text-sm text-gray-600">All properties verified</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">15+ Years Experience</div>
                  <div className="text-sm text-gray-600">Local market expertise</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">5000+ Happy Clients</div>
                  <div className="text-sm text-gray-600">98% satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Success Stories</h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold mb-1">₹85L Profit</div>
                <div className="text-blue-200 text-sm">Mr. Sharma bought in Sector 128, 2018</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold mb-1">₹1.2Cr Gain</div>
                <div className="text-blue-200 text-sm">Ms. Gupta invested in Noida Expressway, 2016</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold mb-1">₹65L Returns</div>
                <div className="text-blue-200 text-sm">Commercial property in Sector 62, 2019</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Ready to Invest?</h3>
            <p className="text-green-100 mb-6">
              Take the next step towards your dream property with our expert guidance.
            </p>
            <div className="space-y-4">
              <button className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold py-3 rounded-xl transition-colors">
                Schedule Site Visit
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors">
                Get Free Consultation
              </button>
              <button className="w-full border-2 border-white text-white hover:bg-white/10 font-bold py-3 rounded-xl transition-colors">
                Download Investment Guide
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don't Miss the Investment Opportunity of a Lifetime
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Delhi NCR properties are appreciating faster than ever. Book your consultation today 
            and secure your financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl transition-all transform hover:scale-105">
              Book Free Investment Consultation
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-200 hover:bg-blue-50 transition-colors">
              Call Now: +91 123 456 7890
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Flexible Payment Plans</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% Legal Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Price Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 6th */}
     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-3 rounded-full mb-6">
            <Home className="w-5 h-5" />
            <span className="font-semibold">Simplified Real Estate Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple <span className="text-blue-600">5-Step Process</span> to 
            <span className="block text-amber-500">Buy or Sell Property</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From requirement to possession - we make real estate simple, transparent, and stress-free
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps - Horizontal Timeline for Desktop */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 -translate-y-1/2"></div>
            
            {/* Process Steps */}
            <div className="relative flex justify-between">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Circle */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-xl mb-8 relative z-10`}>
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold shadow-lg">
                      {step.id}
                    </div>
                  </div>
                  
                  {/* Step Card */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-80">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {step.time}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        {step.actions.map((action, idx) => (
                          <button 
                            key={idx}
                            className={`px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r ${step.color} bg-opacity-10 text-gray-700 hover:bg-opacity-20 transition-colors`}
                          >
                            {action}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Vertical for Mobile */}
        <div className="lg:hidden space-y-8 mb-16">
          {processSteps.map((step) => (
            <div key={step.id} className="relative">
              <div className="flex gap-6">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg relative`}>
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm shadow-md">
                      {step.id}
                    </div>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {step.time}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {step.actions.map((action, idx) => (
                        <button 
                          key={idx}
                          className={`px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r ${step.color} bg-opacity-10 text-gray-700 hover:bg-opacity-20 transition-colors`}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting Line (except last) */}
              {step.id < processSteps.length && (
                <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-blue-300 to-cyan-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Buy vs Sell Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Buying Process */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Buying Process</h3>
                <p className="text-gray-600">Find your dream home in 5 easy steps</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.id} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <span className="text-sm text-gray-500">{step.time}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                Start Buying Process
              </button>
            </div>
          </div>

          {/* Selling Process */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Selling Process</h3>
                <p className="text-blue-200">Get maximum value for your property</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {sellingProcess.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                    <span className="text-lg font-bold">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{step.title}</h4>
                      <span className="text-sm text-blue-300">{step.time}</span>
                    </div>
                    <p className="text-blue-200 text-sm mt-1">{step.description}</p>
                  </div>
                  <BadgeCheck className="w-5 h-5 text-amber-400" />
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                Get Free Valuation
              </button>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Typical Timeline for Property Transaction
          </h3>
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block h-2 bg-gradient-to-r from-blue-200 via-cyan-200 to-green-200 rounded-full mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { day: "Day 1-2", activity: "Requirement Sharing & Initial Search", status: "Started" },
                { day: "Day 3-7", activity: "Property Shortlisting & Virtual Tours", status: "Ongoing" },
                { day: "Day 8-14", activity: "Site Visits & Final Selection", status: "Active" },
                { day: "Day 15-21", activity: "Documentation & Legal Verification", status: "Processing" },
                { day: "Day 22-30", activity: "Deal Closure & Possession", status: "Completed" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg mb-4">
                    {item.day}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.activity}</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    item.status === "Completed" ? "bg-green-100 text-green-700" :
                    item.status === "Active" ? "bg-blue-100 text-blue-700" :
                    item.status === "Processing" ? "bg-amber-100 text-amber-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              Average completion time: <span className="font-bold text-blue-600">30 days</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                Download Process Guide
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-200 hover:bg-blue-50 transition-colors">
                Talk to Process Expert
              </button>
            </div>
          </div>
        </div>

        {/* Quick Start CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Real Estate Journey?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Begin with a free consultation. Our experts will guide you through every step of the process.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Phone className="w-8 h-8 text-white mb-4 mx-auto" />
              <h4 className="font-bold mb-2">Call Now</h4>
              <p className="text-blue-200 text-sm">Instant connection with expert</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MessageSquare className="w-8 h-8 text-white mb-4 mx-auto" />
              <h4 className="font-bold mb-2">Share Requirements</h4>
              <p className="text-blue-200 text-sm">Fill simple form online</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Calendar className="w-8 h-8 text-white mb-4 mx-auto" />
              <h4 className="font-bold mb-2">Schedule Visit</h4>
              <p className="text-blue-200 text-sm">Book free site visit</p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Book Free Consultation
            </button>
            <button className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-xl transition-colors">
              Download Process PDF
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* 5th */}

    {/* 6th */}
    <ClientTestimonials />
    </>
    
  );
};

export default page;

// Add animation styles to globals.css
const globalStyles = `
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(-2deg);
  }
  50% {
    transform: translateY(-20px) rotate(-2deg);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(3deg);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}
`;