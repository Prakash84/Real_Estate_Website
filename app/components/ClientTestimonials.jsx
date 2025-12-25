"use client";
// components/ClientTestimonials.jsx
import React, { useState, useEffect } from "react";
import { CheckCircle, MapPin, DollarSign, Calendar, Play } from "lucide-react";
import {
  Star,
  Quote,
  UserCheck,
  Home,
  TrendingUp,
  Shield,
  MessageCircle,
//   Award,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Video,
  ThumbsUp
} from "lucide-react";

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const testimonials = {
    all: [
      {
        id: 1,
        name: "Rajesh Kumar",
        role: "IT Professional",
        location: "Sector 62, Noida",
        rating: 5,
        avatarColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
        quote: "After searching for 6 months, I found my perfect 3BHK through PropertyPro. Their team's transparency and attention to detail saved me from multiple bad investments.",
        propertyType: "3BHK Apartment",
        investment: "₹1.45 Cr",
        time: "Purchased 8 months ago",
        verified: true,
        video: true,
        likes: 42
      },
      {
        id: 2,
        name: "Priya Sharma",
        role: "Business Owner",
        location: "Indirapuram, Ghaziabad",
        rating: 5,
        avatarColor: "bg-gradient-to-br from-purple-500 to-pink-500",
        quote: "Sold my commercial property at 18% above market price! Their marketing strategy and buyer network are exceptional. Highly recommended for serious transactions.",
        propertyType: "Commercial Space",
        investment: "₹3.2 Cr",
        time: "Sold 3 months ago",
        verified: true,
        video: false,
        likes: 28
      },
      {
        id: 3,
        name: "Amit Verma",
        role: "Doctor",
        location: "Greater Noida West",
        rating: 5,
        avatarColor: "bg-gradient-to-br from-green-500 to-emerald-500",
        quote: "As a first-time buyer, I was overwhelmed. But their expert guidance at every step - from selection to loan processing - made everything smooth. The post-purchase support is excellent!",
        propertyType: "2BHK Flat",
        investment: "₹92 Lakh",
        time: "Purchased 1 year ago",
        verified: true,
        video: true,
        likes: 56
      },
      {
        id: 4,
        name: "Neha Kapoor",
        role: "Corporate Executive",
        location: "Sector 128, Noida",
        rating: 4,
        avatarColor: "bg-gradient-to-br from-amber-500 to-orange-500",
        quote: "Rented my villa through their premium service. Got reliable tenants within a week at 25% higher rent. They handle all maintenance - truly hassle-free!",
        propertyType: "Villa",
        investment: "₹2.1 Cr",
        time: "Renting for 6 months",
        verified: true,
        video: false,
        likes: 31
      },
      {
        id: 5,
        name: "Vikram Singh",
        role: "Investor",
        location: "Noida Extension",
        rating: 5,
        avatarColor: "bg-gradient-to-br from-red-500 to-rose-500",
        quote: "Invested in 4 plots through their recommendations. 40% appreciation in 2 years! Their market analysis is spot-on. Best decision of my investment career.",
        propertyType: "Residential Plots",
        investment: "₹4.8 Cr",
        time: "Invested 2 years ago",
        verified: true,
        video: true,
        likes: 67
      },
      {
        id: 6,
        name: "Sanjay Mehta",
        role: "NRI Investor",
        location: "Alpha Sector, Greater Noida",
        rating: 5,
        avatarColor: "bg-gradient-to-br from-indigo-500 to-violet-500",
        quote: "Being an NRI, I needed someone trustworthy. PropertyPro handled everything remotely - site visits, documentation, possession. Flawless execution!",
        propertyType: "4BHK Villa",
        investment: "₹2.8 Cr",
        time: "Purchased 4 months ago",
        verified: true,
        video: false,
        likes: 39
      }
    ],
    residential: [1, 3, 6],
    commercial: [2],
    rental: [4],
    investment: [5]
  };

  const stats = [
    { 
      value: "4.9/5", 
      label: "Average Client Rating", 
      icon: <Star className="w-8 h-8" />,
      color: "from-amber-400 to-orange-500"
    },
    { 
      value: "5,000+", 
      label: "Happy Families Served", 
      icon: <UserCheck className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      value: "98%", 
      label: "Client Satisfaction Rate", 
      icon: <ThumbsUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    { 
      value: "₹500Cr+", 
      label: "Total Property Value", 
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Stories', count: 6 },
    { id: 'residential', label: 'Residential', count: 3 },
    { id: 'commercial', label: 'Commercial', count: 1 },
    { id: 'rental', label: 'Rental', count: 1 },
    { id: 'investment', label: 'Investment', count: 1 }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials.all 
    : testimonials.all.filter(t => testimonials[activeCategory].includes(t.id));

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
      />
    ));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 text-blue-700 px-6 py-3 rounded-full mb-6">
            {/* <Award className="w-5 h-5" /> */}
            <span className="font-semibold">Trusted by 5000+ Families</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real Stories, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Real Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from homeowners, investors, and businesses who found their perfect property journey with us
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{background: `linear-gradient(135deg, ${stat.color})`}}></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-6 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="flex items-center gap-2">
                {category.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white/20' 
                    : 'bg-blue-50 text-blue-600'
                }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative mb-20">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white opacity-50"></div>
            
            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Navigation Arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-2xl transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-2xl transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Testimonial Content */}
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Client Avatar & Info */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`w-32 h-32 rounded-2xl ${filteredTestimonials[activeIndex]?.avatarColor} shadow-2xl flex items-center justify-center text-white text-4xl font-bold`}>
                        {filteredTestimonials[activeIndex]?.name.charAt(0)}
                      </div>
                      
                      {/* Verified Badge */}
                      {filteredTestimonials[activeIndex]?.verified && (
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      )}
                      
                      {/* Video Indicator */}
                      {filteredTestimonials[activeIndex]?.video && (
                        <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                        {renderStars(filteredTestimonials[activeIndex]?.rating)}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{filteredTestimonials[activeIndex]?.name}</h3>
                      <p className="text-gray-600">{filteredTestimonials[activeIndex]?.role}</p>
                      <div className="flex items-center gap-1 text-gray-500 mt-2">
                        <MapPin className="w-4 h-4" />
                        <span>{filteredTestimonials[activeIndex]?.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <div className="relative">
                      <Quote className="absolute -top-6 -left-6 w-12 h-12 text-blue-200" />
                      <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed italic mb-8">
                        "{filteredTestimonials[activeIndex]?.quote}"
                      </p>
                      
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-600">
                          <ThumbsUp className="w-5 h-5 text-blue-500" />
                          <span>{filteredTestimonials[activeIndex]?.likes} people found this helpful</span>
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-2 text-gray-500 mb-1">
                            <Home className="w-4 h-4" />
                            <span className="text-sm">Property</span>
                          </div>
                          <div className="font-bold text-gray-900">{filteredTestimonials[activeIndex]?.propertyType}</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-2 text-gray-500 mb-1">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-sm">Investment</span>
                          </div>
                          <div className="font-bold text-gray-900">{filteredTestimonials[activeIndex]?.investment}</div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-2 text-gray-500 mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Timeline</span>
                          </div>
                          <div className="font-bold text-gray-900">{filteredTestimonials[activeIndex]?.time}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredTestimonials.slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl ${testimonial.avatarColor} flex items-center justify-center text-white text-xl font-bold`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <div className="p-6">
                <p className="text-gray-700 line-clamp-4 mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{testimonial.likes}</span>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="bg-gray-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Property</div>
                    <div className="font-bold text-gray-900">{testimonial.propertyType}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Value</div>
                    <div className="font-bold text-gray-900">{testimonial.investment}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-white mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 text-center">
              Why Clients Keep Coming Back
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Transparent Process",
                  description: "No hidden charges, complete cost breakdown",
                  icon: <Shield className="w-8 h-8" />
                },
                {
                  title: "Expert Guidance",
                  description: "15+ years of local market expertise",
                  icon: <UserCheck className="w-8 h-8" />
                },
                {
                  title: "End-to-End Support",
                  description: "From search to possession & beyond",
                  icon: <CheckCircle className="w-8 h-8" />
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-blue-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 border-2 border-blue-100 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of happy clients who found their dream property with us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Journey Today
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-lg">
                View More Success Stories
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                {/* <Award className="w-5 h-5" /> */}
                <span>Multiple Industry Awards</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5" />
                <span>5000+ Happy Families</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;