'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { 
  FaMapMarkerAlt, 
  FaStar,
  FaCalendarAlt,
  FaFire,
  FaHeart,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  location: string;
  price: string;
  area: string;
  status: 'Pre-Launch' | 'Coming Soon' | 'Early Bird' | 'Exclusive';
  progress: number;
  developer: string;
  launchDate: string;
  rating: number;
  isTrending: boolean;
  unitsLeft: number;
  features: string[];
}

export default function PreLaunchProjectsSlider() {
  const [isRtl, setIsRtl] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Skyline Residences",
      location: "Downtown Dubai",
      price: "AED 2.5M",
      area: "2,500 sq.ft",
      status: "Pre-Launch",
      progress: 35,
      developer: "Emaar Properties",
      launchDate: "2024-09-15",
      rating: 4.8,
      isTrending: true,
      unitsLeft: 12,
      features: ["Swimming Pool", "Gym", "Park", "24/7 Security"]
    },
    {
      id: 2,
      title: "Oceanfront Villas",
      location: "Palm Jumeirah",
      price: "AED 8.9M",
      area: "5,200 sq.ft",
      status: "Coming Soon",
      progress: 15,
      developer: "Nakheel",
      launchDate: "2024-10-20",
      rating: 4.9,
      isTrending: true,
      unitsLeft: 8,
      features: ["Private Beach", "Spa", "Kids Play Area"]
    },
    {
      id: 3,
      title: "Urban Lofts",
      location: "Business Bay",
      price: "AED 1.8M",
      area: "1,850 sq.ft",
      status: "Early Bird",
      progress: 60,
      developer: "Damac",
      launchDate: "2024-08-30",
      rating: 4.5,
      isTrending: false,
      unitsLeft: 24,
      features: ["City View", "Smart Home", "Concierge"]
    },
    {
      id: 4,
      title: "Green Valley Apartments",
      location: "Jumeirah Village Circle",
      price: "AED 1.2M",
      area: "1,400 sq.ft",
      status: "Pre-Launch",
      progress: 25,
      developer: "Dubai Properties",
      launchDate: "2024-11-10",
      rating: 4.6,
      isTrending: true,
      unitsLeft: 36,
      features: ["Green Spaces", "Cycling Track", "Community Center"]
    },
    {
      id: 5,
      title: "Oceanfront Villas",
      location: "Palm Jumeirah",
      price: "AED 8.9M",
      area: "5,200 sq.ft",
      status: "Coming Soon",
      progress: 15,
      developer: "Nakheel",
      launchDate: "2024-10-20",
      rating: 4.9,
      isTrending: true,
      unitsLeft: 8,
      features: ["Private Beach", "Spa", "Kids Play Area"]
    },
    {
      id: 6,
      title: "Urban Lofts",
      location: "Business Bay",
      price: "AED 1.8M",
      area: "1,850 sq.ft",
      status: "Early Bird",
      progress: 60,
      developer: "Damac",
      launchDate: "2024-08-30",
      rating: 4.5,
      isTrending: false,
      unitsLeft: 24,
      features: ["City View", "Smart Home", "Concierge"]
    },
    {
      id: 7,
      title: "Green Valley Apartments",
      location: "Jumeirah Village Circle",
      price: "AED 1.2M",
      area: "1,400 sq.ft",
      status: "Pre-Launch",
      progress: 25,
      developer: "Dubai Properties",
      launchDate: "2024-11-10",
      rating: 4.6,
      isTrending: true,
      unitsLeft: 36,
      features: ["Green Spaces", "Cycling Track", "Community Center"]
    }
  ];

  const getStatusColor = (status: Project['status']) => {
    switch(status) {
      case 'Pre-Launch': return 'bg-blue-100 text-blue-800';
      case 'Coming Soon': return 'bg-purple-100 text-purple-800';
      case 'Early Bird': return 'bg-green-100 text-green-800';
      case 'Exclusive': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle mouse drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Handle mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  // Add event listeners
  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => handleMouseMove(e);
    const handleTouchMoveGlobal = (e: TouchEvent) => handleTouchMove(e);
    const handleMouseUpGlobal = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMoveGlobal);
      document.addEventListener('touchmove', handleTouchMoveGlobal);
      document.addEventListener('mouseup', handleMouseUpGlobal);
      document.addEventListener('touchend', handleMouseUpGlobal);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveGlobal);
      document.removeEventListener('touchmove', handleTouchMoveGlobal);
      document.removeEventListener('mouseup', handleMouseUpGlobal);
      document.removeEventListener('touchend', handleMouseUpGlobal);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  // Navigation functions
  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Update scroll position when currentIndex changes
  useEffect(() => {
    if (sliderRef.current && containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Pre-Launch Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Exclusive Opportunities
              </span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Explore our premium pre-launch properties with special early access benefits.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsRtl(!isRtl)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isRtl 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {isRtl ? 'RTL Mode' : 'LTR Mode'}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                  currentIndex === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:shadow'
                }`}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === projects.length - 1}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                  currentIndex === projects.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:shadow'
                }`}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Slider */}
          <div
            ref={sliderRef}
            className={`flex overflow-x-auto scrollbar-hide snap-x snap-mandatory ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ 
              direction: isRtl ? 'rtl' : 'ltr',
              scrollBehavior: 'smooth'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                ref={containerRef}
                className="flex-shrink-0 w-full px-4 md:w-1/2 lg:w-1/3"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                  {/* Card Header */}
                  <div className="relative h-48 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                    
                    {/* Status Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      {project.isTrending && (
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold flex items-center gap-1">
                          <FaFire className="text-xs" /> Trending
                        </span>
                      )}
                    </div>

                    {/* Units Left */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-gray-800">
                        {project.unitsLeft} units left
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span className="font-bold">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Title and Rating */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-600">
                          <FaMapMarkerAlt className="text-sm" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-amber-500" />
                        <span className="font-bold text-gray-900">{project.rating}</span>
                      </div>
                    </div>

                    {/* Developer and Date */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{project.developer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        <span>
                          {new Date(project.launchDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-lg border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price and Area */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-sm text-blue-600 font-medium mb-1">Price</div>
                        <div className="text-xl font-bold text-gray-900">{project.price}</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-xl">
                        <div className="text-sm text-purple-600 font-medium mb-1">Area</div>
                        <div className="text-xl font-bold text-gray-900">{project.area}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Drag Hint */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <span className="animate-pulse">←→</span>
              <span>Drag to explore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for scrollbar hiding */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}