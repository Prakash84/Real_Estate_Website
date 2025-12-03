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
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);

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
      developer: "Noida",
      launchDate: "2024-11-10",
      rating: 4.6,
      isTrending: true,
      unitsLeft: 36,
      features: ["Green Spaces", "Cycling Track", "Community Center"]
    },
    {
      id: 5,
      title: "Luxury Penthouses",
      location: "Noida",
      price: "AED 12.5M",
      area: "6,800 sq.ft",
      status: "Exclusive",
      progress: 45,
      developer: "Sobha Realty",
      launchDate: "2024-09-05",
      rating: 4.9,
      isTrending: false,
      unitsLeft: 4,
      features: ["Private Pool", "Panoramic View", "Helipad Access"]
    },
    {
      id: 6,
      title: "Family Townhouses",
      location: "Arabian Ranches",
      price: "AED 3.2M",
      area: "3,100 sq.ft",
      status: "Pre-Launch",
      progress: 20,
      developer: "Emaar",
      launchDate: "2024-10-15",
      rating: 4.7,
      isTrending: true,
      unitsLeft: 18,
      features: ["Private Garden", "BBQ Area", "Pet Friendly"]
    }
  ];

  const getStatusColor = (status: Project['status']) => {
    switch(status) {
      case 'Pre-Launch': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'Coming Soon': return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white';
      case 'Early Bird': return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      case 'Exclusive': return 'bg-gradient-to-r from-amber-500 to-amber-600 text-white';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  // Get card width including margin/padding
  const getCardWidth = () => {
    if (!cardsRef.current[0]) return 320; // Default card width
    const card = cardsRef.current[0];
    const style = window.getComputedStyle(card);
    const width = card.offsetWidth;
    const marginLeft = parseFloat(style.marginLeft) || 0;
    const marginRight = parseFloat(style.marginRight) || 0;
    return width + marginLeft + marginRight;
  };

  // Snap to nearest card
  const snapToNearestCard = useCallback(() => {
    if (!sliderRef.current) return;
    
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = getCardWidth();
    const newIndex = Math.round(scrollLeft / cardWidth);
    
    // Ensure index is within bounds
    const boundedIndex = Math.max(0, Math.min(newIndex, projects.length - 1));
    
    // Scroll to the snapped position
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: boundedIndex * cardWidth,
        behavior: 'smooth'
      });
    }
    
    setCurrentIndex(boundedIndex);
  }, [projects.length]);

  // Handle touch/mouse start
  const handleStart = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
    setVelocity(0);
    setLastX(clientX);
    setLastTime(Date.now());
    
    // Cancel any ongoing animations
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  // Handle touch/mouse move
  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !sliderRef.current) return;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = clientX - lastX;
    
    // Calculate velocity
    if (deltaTime > 0) {
      const newVelocity = deltaX / deltaTime;
      setVelocity(newVelocity);
    }
    
    // Update scroll position
    const walk = (clientX - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    
    setLastX(clientX);
    setLastTime(currentTime);
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  // Handle end with momentum
  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Apply momentum
    const momentum = velocity * 100;
    if (Math.abs(momentum) > 5) {
      if (sliderRef.current) {
        const currentScroll = sliderRef.current.scrollLeft;
        const targetScroll = currentScroll - momentum;
        
        // Smooth scroll with momentum
        const duration = 300;
        const startTime = Date.now();
        const startScroll = currentScroll;
        
        const animateScroll = () => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function
          const easeOut = 1 - Math.pow(1 - progress, 3);
          
          if (sliderRef.current) {
            sliderRef.current.scrollLeft = startScroll + (targetScroll - startScroll) * easeOut;
          }
          
          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(animateScroll);
          } else {
            snapToNearestCard();
          }
        };
        
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      }
    } else {
      // Snap immediately if velocity is low
      snapToNearestCard();
    }
  }, [isDragging, velocity, snapToNearestCard]);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      handleStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Set up event listeners
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      if (!isDragging && sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const cardWidth = getCardWidth();
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    slider.addEventListener('scroll', handleScroll);

    return () => {
      slider.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging]);

  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => handleMouseMove(e);
    const handleMouseUpGlobal = () => handleMouseUp();
    const handleTouchMoveGlobal = (e: TouchEvent) => handleTouchMove(e);
    const handleTouchEndGlobal = () => handleTouchEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMoveGlobal);
      document.addEventListener('mouseup', handleMouseUpGlobal);
      document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
      document.addEventListener('touchend', handleTouchEndGlobal);
      document.addEventListener('touchcancel', handleTouchEndGlobal);
      
      // Prevent text selection during drag
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'grabbing';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveGlobal);
      document.removeEventListener('mouseup', handleMouseUpGlobal);
      document.removeEventListener('touchmove', handleTouchMoveGlobal);
      document.removeEventListener('touchend', handleTouchEndGlobal);
      document.removeEventListener('touchcancel', handleTouchEndGlobal);
      
      // Restore defaults
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Navigation functions
  const nextSlide = () => {
    if (currentIndex < projects.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      if (sliderRef.current) {
        const cardWidth = getCardWidth();
        sliderRef.current.scrollTo({
          left: newIndex * cardWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      if (sliderRef.current) {
        const cardWidth = getCardWidth();
        sliderRef.current.scrollTo({
          left: newIndex * cardWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      const cardWidth = getCardWidth();
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        
          {/* <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Pre-Launch Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Exclusive Pre Lunch Opportunities In Noida
              </span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Explore our premium pre-launch properties with special early access benefits.
            </p>
          </div> */}

          {/* // */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Pre-Launch Projects
                  </span>
                </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Discover Our <span className="text-blue-600">Exclusive Pre Lunch Opportunities In Noida</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our premium pre-launch properties with special early access benefits.
              </p>
            </div>

          {/* <div className="flex items-center gap-4">
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
          </div> */}
        
        {/* Slider Container */}
        <div className="relative">
          {/* Slider */}
          <div
            ref={sliderRef}
            className={`flex overflow-x-auto scrollbar-hide ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ 
              direction: isRtl ? 'rtl' : 'ltr',
              WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                // ref={el => cardsRef.current[index] = el}
                className="flex-shrink-0 w-80 md:w-96 px-4 first:pl-0 last:pr-0"
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
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-lg border border-gray-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price and Area */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-xl">
                        <div className="text-xs text-blue-600 font-medium mb-1">Price</div>
                        <div className="text-lg font-bold text-gray-900">{project.price}</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-2 rounded-xl">
                        <div className="text-xs text-purple-600 font-medium mb-1">Area</div>
                        <div className="text-lg font-bold text-gray-900">{project.area}</div>
                      </div>
                    </div>


                    {/* CTA Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
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
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Mobile Touch Instructions */}
          <div className="text-center mt-6 md:hidden">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              <span className="animate-pulse">👆</span>
              <span>Swipe to explore</span>
            </div>
          </div>

          {/* Desktop Instructions */}
          <div className="text-center mt-6 hidden md:block">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <span className="animate-pulse">← →</span>
              <span>Drag or use arrows to explore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for better mobile experience */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Better touch scrolling on iOS */
        .slider-container {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }
        
        /* Prevent text selection during drag */
        .no-select {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </section>
  );
}