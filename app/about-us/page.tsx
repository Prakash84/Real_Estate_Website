// components/AboutBanner.tsx
'use client';

import { 
  PhoneIcon, 
  CalendarIcon,
  PlayCircleIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { 
  MapPinIcon,
  ShieldCheckIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

import { 
  HomeModernIcon,
  ArrowRightCircleIcon,
  BanknotesIcon,
  KeyIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { 
  
  DocumentCheckIcon,
  EyeIcon,
  NoSymbolIcon,
  ClockIcon,
 
  UserIcon,
 
} from '@heroicons/react/24/outline';
import { 
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';


import { 
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { 
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { 
  CheckBadgeIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/outline';
import { FaQuoteLeft } from "react-icons/fa";

import { 
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';
import { 
  CameraIcon,
  PlayIcon, 
} from '@heroicons/react/24/outline';
import { 
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'buying' | 'selling' | 'legal';
}



interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  description: string;
  src: string;
  category: 'office' | 'team' | 'events' | 'awards';
  featured?: boolean;
}

interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
  properties: string;
  avgPrice: string;
  growth: string;
  popularAreas: string[];
  specialties: string[];
  investment: string;
  rating: number;
}



interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  photo: string;
  property: string;
  purchaseDate: string;
  verified: boolean;
  likes: number;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: string;
  features: string[];
  output: string;
}

interface Achievement {
  id: number;
  number: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  suffix?: string;
  duration: number;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  achievement: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  image: string;
  rating: number;
  propertiesSold: string;
  phone: string;
  email: string;
  areas: string[];
  achievements: string[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  stats: { value: string; label: string }[];
  cta: string;
  route: string;
  popular?: boolean;
}

export default function page() {
  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: UserGroupIcon },
    { number: "15,000+", label: "Properties Verified", icon: BuildingOfficeIcon },
    { number: "12+", label: "Years Experience", icon: TrophyIcon }
  ];
  // 2nd
  const milestones = [
    { year: "2012", event: "Company Founded", description: "Started with a vision to transform real estate in Delhi NCR" },
    { year: "2014", event: "1000+ Properties", description: "Helped 1000+ families find their dream homes" },
    { year: "2016", event: "RERA Registration", description: "Became RERA certified for enhanced customer trust" },
    { year: "2018", event: "Award Winning", description: "Received 'Best Real Estate Platform' award" },
    { year: "2020", event: "Digital Transformation", description: "Launched AI-powered property matching" },
    { year: "2024", event: "Market Leader", description: "50,000+ happy customers across Delhi NCR" }
  ];

  const coverageAreas = [
    { city: "Gurugram", sectors: "All sectors from 1 to 115", projects: "2,500+", specialty: "Corporate Hub" },
    { city: "Noida", sectors: "All sectors + Expressway", projects: "1,800+", specialty: "IT & Residential" },
    { city: "Delhi", sectors: "South, Central, West Delhi", projects: "3,200+", specialty: "Premium Locations" },
    { city: "Greater Noida", sectors: "Knowledge Park, Sports City", projects: "1,200+", specialty: "Affordable Housing" },
    { city: "Faridabad", sectors: "Sectors 21-31, Greenfield", projects: "900+", specialty: "Industrial & Residential" },
    { city: "Ghaziabad", sectors: "Vaishali, Indirapuram", projects: "1,100+", specialty: "Metro Connected" }
  ];

  const teamStats = [
    { number: "50+", label: "Expert Team Members", description: "Property consultants, legal experts, relationship managers" },
    { number: "12+", label: "Years Average Experience", description: "Each team member brings extensive market knowledge" },
    { number: "24/7", label: "Customer Support", description: "Round-the-clock assistance for all your needs" },
    { number: "98%", label: "Customer Satisfaction", description: "Rated excellent by thousands of customers" }
  ];

  const reraRegistrations = [
    { state: "Haryana", id: "HRERA-PKL-123456", date: "15/03/2016" },
    { state: "Uttar Pradesh", id: "UPRERA-789012", date: "22/07/2017" },
    { state: "Delhi", id: "DLRERA-345678", date: "10/11/2016" }
  ];

  // 3rd
  const services: Service[] = [
    {
      id: 1,
      title: "Residential Property Buying",
      description: "Find your perfect home from verified residential properties across Delhi NCR with complete legal support and zero brokerage.",
      icon: HomeModernIcon,
      features: [
        "Verified Residential Listings",
        "Zero Brokerage for Buyers",
        "Legal Document Verification",
        "Site Visits & Shortlisting",
        "Price Negotiation Support",
        "Post-purchase Assistance"
      ],
      stats: [
        { value: "10,000+", label: "Properties" },
        { value: "98%", label: "Satisfaction" }
      ],
      cta: "Find Your Home",
      route: "/services/residential-buying",
      popular: true
    },
    {
      id: 2,
      title: "Commercial Property Buying",
      description: "Discover premium commercial spaces for offices, retail, and business establishments with investment guidance.",
      icon: BuildingOfficeIcon,
      features: [
        "Office & Retail Spaces",
        "Investment Analysis",
        "Location Feasibility Study",
        "Legal & Compliance Check",
        "Rental Yield Analysis",
        "Future Growth Potential"
      ],
      stats: [
        { value: "1,800+", label: "Commercial Spaces" },
        { value: "6-8%", label: "Rental Yield" }
      ],
      cta: "Explore Commercial",
      route: "/services/commercial-buying"
    },
    {
      id: 3,
      title: "Selling Assistance",
      description: "Get the best price for your property with maximum visibility, expert negotiation, and quick deal closure.",
      icon: ArrowRightCircleIcon,
      features: [
        "Free Property Valuation",
        "Professional Photography",
        "Multi-platform Marketing",
        "Buyer Verification",
        "Price Negotiation",
        "Quick Documentation"
      ],
      stats: [
        { value: "45 Days", label: "Avg. Selling Time" },
        { value: "15%", label: "Better Price" }
      ],
      cta: "Sell Property",
      route: "/services/selling",
      popular: true
    },
    {
      id: 4,
      title: "Home Loan Support",
      description: "Get the best home loan deals with lowest interest rates from 20+ banks with quick approval and documentation.",
      icon: BanknotesIcon,
      features: [
        "Best Interest Rates",
        "20+ Bank Partners",
        "Quick Approval",
        "Documentation Support",
        "EMI Planning",
        "Pre-closure Guidance"
      ],
      stats: [
        { value: "95%", label: "Approval Rate" },
        { value: "3-7 Days", label: "Processing" }
      ],
      cta: "Get Loan Support",
      route: "/services/loan-support",
      popular: true
    },
    {
      id: 5,
      title: "Rental Services",
      description: "Hassle-free rental experience with tenant verification, agreement drafting, and complete move-in support.",
      icon: KeyIcon,
      features: [
        "Tenant Background Check",
        "Rental Agreement Drafting",
        "Property Listing",
        "Rent Negotiation",
        "Move-in Assistance",
        "Maintenance Support"
      ],
      stats: [
        { value: "5,000+", label: "Rental Properties" },
        { value: "24/7", label: "Support" }
      ],
      cta: "Rent Property",
      route: "/services/rental"
    },
    {
      id: 6,
      title: "Property Management",
      description: "Complete property management services for landlords, NRIs, and busy professionals.",
      icon: CogIcon,
      features: [
        "Rent Collection",
        "Maintenance Management",
        "Tenant Management",
        "Property Inspection",
        "Bill Payments",
        "Monthly Reports"
      ],
      stats: [
        { value: "99%", label: "Rent Collection" },
        { value: "1,200+", label: "Properties" }
      ],
      cta: "Manage Property",
      route: "/services/management"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "Share your requirements and get expert advice",
      icon: CheckCircleIcon
    },
    {
      step: "02",
      title: "Customized Plan",
      description: "Get a tailored service plan based on your needs",
      icon: CheckCircleIcon
    },
    {
      step: "03",
      title: "Execution",
      description: "We handle everything while you track progress",
      icon: CheckCircleIcon
    },
    {
      step: "04",
      title: "Completion",
      description: "Get delivery with complete documentation",
      icon: CheckCircleIcon
    }
  ];

  // 4th
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "RERA Registered",
      description: "All our projects and transactions are RERA registered, ensuring complete legal compliance and buyer protection under government regulations.",
      stats: "3 State RERA",
      badge: "Legal Protection"
    },
    {
      icon: DocumentCheckIcon,
      title: "10,000+ Verified Listings",
      description: "Every property undergoes thorough verification including legal checks, document authentication, and physical inspection before listing.",
      stats: "0 Fake Listings",
      badge: "Quality Assured"
    },
    {
      icon: EyeIcon,
      title: "100% Transparency",
      description: "Complete transparency in pricing, documentation, and processes. No hidden information or surprise charges throughout your journey.",
      stats: "Clear Pricing",
      badge: "No Surprises"
    },
    {
      icon: NoSymbolIcon,
      title: "Zero Hidden Charges",
      description: "What you see is what you pay. No unexpected fees, no hidden costs. Complete cost breakdown provided upfront.",
      stats: "Cost Clarity",
      badge: "Honest Pricing"
    },
    {
      icon: ClockIcon,
      title: "Fast Documentation",
      description: "Streamlined documentation process with expert legal support. Complete paperwork in 7-10 days with digital tracking.",
      stats: "7-10 Days",
      badge: "Quick Process"
    },
    {
      icon: MapPinIcon,
      title: "Free Site Visit",
      description: "Schedule complimentary site visits with our experts. Get personal guidance and on-site property evaluation at no extra cost.",
      stats: "Unlimited Visits",
      badge: "Expert Guided"
    },
    {
      icon: TrophyIcon,
      title: "Best Price Guarantee",
      description: "Get the best market price for your property. Our negotiation experts ensure you don't overpay when buying or undersell when selling.",
      stats: "Price Match",
      badge: "Value for Money"
    },
    {
      icon: UserIcon,
      title: "Dedicated Property Expert",
      description: "Get a dedicated relationship manager who understands your needs and guides you through the entire property journey.",
      stats: "Single Point Contact",
      badge: "Personalized Service"
    }
  ];

  const stats1 = [
    { number: "50,000+", label: "Happy Customers", icon: UserIcon },
    { number: "15,000+", label: "Properties Verified", icon: DocumentCheckIcon },
    { number: "98%", label: "Customer Satisfaction", icon: StarIcon },
    { number: "12+", label: "Years Experience", icon: BuildingOfficeIcon }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Property Buyer",
      comment: "The transparency and zero hidden charges policy saved me from unexpected costs that other brokers usually charge.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "First-time Buyer",
      comment: "My dedicated property expert made the entire process so smooth. Always available and very professional.",
      rating: 5
    }
  ];
  // 5th
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Property Consultant",
      experience: "12+ Years",
      specialization: ["Luxury Apartments", "Commercial Spaces", "Investment Properties"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      propertiesSold: "500+",
      phone: "+91 98765 43210",
      email: "rajesh@propertydeals.com",
      areas: ["Gurugram", "South Delhi"],
      achievements: ["Top Performer 2023", "Best Customer Service"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Residential Property Expert",
      experience: "8+ Years",
      specialization: ["First-time Buyers", "Family Homes", "Builder Floors"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      rating: 4.8,
      propertiesSold: "350+",
      phone: "+91 98765 43211",
      email: "priya@propertydeals.com",
      areas: ["Noida", "Greater Noida"],
      achievements: ["Rising Star 2023", "Client Choice Award"]
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Commercial Real Estate Specialist",
      experience: "15+ Years",
      specialization: ["Office Spaces", "Retail Shops", "IT Parks"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      propertiesSold: "400+",
      phone: "+91 98765 43212",
      email: "amit@propertydeals.com",
      areas: ["Cyber City", "All Commercial Hubs"],
      achievements: ["Commercial Expert", "Top Negotiator"]
    },
    {
      id: 4,
      name: "Sunita Mehta",
      role: "Luxury Homes Consultant",
      experience: "10+ Years",
      specialization: ["Premium Villas", "Penthouses", "Farmhouses"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 4.9,
      propertiesSold: "280+",
      phone: "+91 98765 43213",
      email: "sunita@propertydeals.com",
      areas: ["Golf Course Road", "South Delhi"],
      achievements: ["Luxury Specialist", "Elite Club Member"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "NRI Property Advisor",
      experience: "11+ Years",
      specialization: ["NRI Investments", "Portfolio Management", "Rental Properties"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      rating: 4.8,
      propertiesSold: "320+",
      phone: "+91 98765 43214",
      email: "vikram@propertydeals.com",
      areas: ["All Delhi NCR", "International"],
      achievements: ["NRI Expert", "Global Client Base"]
    },
    {
      id: 6,
      name: "Neha Gupta",
      role: "Rental & Property Management Head",
      experience: "7+ Years",
      specialization: ["Rental Services", "Property Management", "Tenant Relations"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      rating: 4.7,
      propertiesSold: "200+",
      phone: "+91 98765 43215",
      email: "neha@propertydeals.com",
      areas: ["All Delhi NCR"],
      achievements: ["Rental Expert", "Management Pro"]
    }
  ];

  const teamStats1 = [
    { number: "50+", label: "Expert Team Members" },
    { number: "15+", label: "Years Average Experience" },
    { number: "2,000+", label: "Properties Sold" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          index < rating ? (
            <StarIconSolid key={index} className="h-4 w-4 text-yellow-400" />
          ) : (
            <StarIcon key={index} className="h-4 w-4 text-gray-300" />
          )
        ))}
      </div>
    );
  };

  // 6th
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  const achievements: Achievement[] = [
    {
      id: 1,
      number: "2500",
      label: "Homes Sold",
      description: "Successfully helped families find their dream homes across Delhi NCR",
      icon: HomeModernIcon,
      suffix: "+",
      duration: 2500
    },
    {
      id: 2,
      number: "150",
      label: "Projects Listed",
      description: "Partnered with top builders and listed premium residential projects",
      icon: BuildingOfficeIcon,
      suffix: "+",
      duration: 150
    },
    {
      id: 3,
      number: "10",
      label: "Years of Experience",
      description: "Over a decade of trusted service in Delhi NCR real estate market",
      icon: CalendarIcon,
      suffix: "+",
      duration: 10
    },
    {
      id: 4,
      number: "500",
      label: "Happy Clients",
      description: "Satisfied customers who achieved their property goals with us",
      icon: UserGroupIcon,
      suffix: "+",
      duration: 500
    },
    {
      id: 5,
      number: "98",
      label: "Success Rate",
      description: "Deals successfully closed with complete customer satisfaction",
      icon: ChartBarIcon,
      suffix: "%",
      duration: 98
    },
    {
      id: 6,
      number: "4.9",
      label: "Customer Rating",
      description: "Rated excellent by our clients across all platforms",
      icon: StarIcon,
      suffix: "/5",
      duration: 4.9
    }
  ];

  const milestones1: Milestone[] = [
    {
      year: "2012",
      title: "Company Founded",
      description: "Started our journey with a vision to transform real estate services",
      achievement: "First Office in Delhi"
    },
    {
      year: "2014",
      title: "100+ Homes Sold",
      description: "Reached our first major milestone of 100 successful property deals",
      achievement: "Market Recognition"
    },
    {
      year: "2016",
      title: "RERA Registration",
      description: "Became RERA certified across multiple states for enhanced trust",
      achievement: "Legal Compliance"
    },
    {
      year: "2018",
      title: "Award Winning",
      description: "Received 'Best Real Estate Platform' award for excellence",
      achievement: "Industry Recognition"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched AI-powered property matching and virtual site visits",
      achievement: "Tech Innovation"
    },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Became Delhi NCR's most trusted real estate platform",
      achievement: "2500+ Homes Sold"
    }
  ];

  const awards = [
    {
      title: "Best Real Estate Platform 2023",
      issuer: "Real Estate Association",
      year: "2023"
    },
    {
      title: "Customer Excellence Award",
      issuer: "Property Awards India",
      year: "2022"
    },
    {
      title: "Top Property Consultant",
      issuer: "CREDAI",
      year: "2021"
    },
    {
      title: "Innovation in Real Estate",
      issuer: "Tech Property Summit",
      year: "2020"
    }
  ];

  useEffect(() => {
    const intervals = achievements.map((achievement, index) => {
      const increment = achievement.duration / 50;
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < achievement.duration) {
            newCounters[index] = Math.min(newCounters[index] + increment, achievement.duration);
          }
          return newCounters;
        });
      }, 30);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  // 7th
  const processSteps: ProcessStep[] = [
    {
      step: 1,
      title: "Requirement Discussion",
      description: "We begin by understanding your specific needs, budget, preferences, and timeline through detailed consultation.",
      icon: ChatBubbleLeftRightIcon,
      duration: "1-2 Days",
      features: [
        "Detailed needs analysis",
        "Budget planning",
        "Location preferences",
        "Timeline discussion",
        "Customized approach"
      ],
      output: "Customized Property Plan"
    },
    {
      step: 2,
      title: "Property Matching",
      description: "Our AI-powered system matches you with perfect properties based on your requirements from our verified database.",
      icon: MagnifyingGlassIcon,
      duration: "2-3 Days",
      features: [
        "AI-powered matching",
        "Verified listings only",
        "Price comparison",
        "Location analysis",
        "Shortlisted options"
      ],
      output: "Personalized Shortlist"
    },
    {
      step: 3,
      title: "Site Visit",
      description: "Schedule free site visits with our experts. Get on-ground insights and professional property evaluation.",
      icon: MapPinIcon,
      duration: "3-5 Days",
      features: [
        "Free site visits",
        "Expert guidance",
        "Neighborhood tour",
        "Property inspection",
        "Comparative analysis"
      ],
      output: "On-ground Verification"
    },
    {
      step: 4,
      title: "Negotiation",
      description: "Our expert negotiators work to get you the best possible deal, ensuring value for your investment.",
      icon: CurrencyDollarIcon,
      duration: "2-4 Days",
      features: [
        "Expert negotiation",
        "Best price guarantee",
        "Terms finalization",
        "Deal structuring",
        "Win-win outcomes"
      ],
      output: "Best Deal Finalized"
    },
    {
      step: 5,
      title: "Documentation",
      description: "Complete legal verification and streamlined documentation process with expert support at every step.",
      icon: DocumentTextIcon,
      duration: "7-10 Days",
      features: [
        "Legal verification",
        "Paperwork assistance",
        "RERA compliance",
        "Loan processing",
        "Digital tracking"
      ],
      output: "Legal Clearance"
    },
    {
      step: 6,
      title: "Final Possession",
      description: "Smooth handover of your property with post-purchase support and relationship management.",
      icon: KeyIcon,
      duration: "1 Day",
      features: [
        "Property handover",
        "Utility transfers",
        "Post-purchase support",
        "Maintenance guidance",
        "Relationship manager"
      ],
      output: "Dream Home Delivered"
    }
  ];

  const processStats = [
    { number: "15-25", label: "Days Average Process Time" },
    { number: "98%", label: "Process Success Rate" },
    { number: "24/7", label: "Progress Tracking" },
    { number: "100%", label: "Transparent Process" }
  ];

  const benefits = [
    {
      icon: CheckCircleIcon,
      title: "No Hidden Charges",
      description: "Complete cost transparency with no surprise fees"
    },
    {
      icon: UserGroupIcon,
      title: "Dedicated Manager",
      description: "Single point of contact throughout your journey"
    },
    {
      icon: DocumentTextIcon,
      title: "Digital Tracking",
      description: "Real-time updates on your phone and email"
    },
    {
      icon: PhoneIcon,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your queries"
    }
  ];

  // 8th
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials1: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Software Engineer",
      location: "Gurugram",
      rating: 5,
      review: "PropertyDeals made my first home buying experience incredible! Their team ensured complete transparency and helped me negotiate the best price. The zero brokerage policy saved me a significant amount.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      property: "3 BHK in Sector 62",
      purchaseDate: "January 2024",
      verified: true,
      likes: 24
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Marketing Manager",
      location: "Noida",
      rating: 5,
      review: "As an NRI, I was worried about property buying in India. But PropertyDeals assigned me a dedicated manager who handled everything professionally. The virtual tours and regular updates were fantastic!",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      property: "2 BHK in Expressway",
      purchaseDate: "December 2023",
      verified: true,
      likes: 31
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Business Owner",
      location: "Delhi",
      rating: 5,
      review: "The documentation process was so smooth and transparent. No hidden charges, no surprises. My dedicated property expert was available 24/7 and made the entire journey stress-free. Highly recommended!",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      property: "Commercial Space",
      purchaseDate: "November 2023",
      verified: true,
      likes: 18
    }
  ];

  const stats2 = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "500+", label: "Reviews" },
    { number: "98%", label: "Recommend Us" },
    { number: "50K+", label: "Happy Customers" }
  ];

  const renderStars1 = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          index < rating ? (
            <StarIconSolid key={index} className="h-5 w-5 text-yellow-400" />
          ) : (
            <StarIcon key={index} className="h-5 w-5 text-gray-300" />
          )
        ))}
      </div>
    );
  };

  // 9th
  const locations: Location[] = [
    {
      id: 1,
      name: "Gurugram",
      description: "India's corporate capital with premium residential complexes, IT parks, and world-class infrastructure. The hub for MNCs and luxury living.",
      image: "https://images.unsplash.com/photo-1592210454359-904b3ef8e8a6?w=600",
      properties: "2,500+",
      avgPrice: "₹1.2Cr - ₹5Cr",
      growth: "12%",
      popularAreas: ["DLF Phases", "Golf Course Road", "Sohna Road", "Sector 65-67"],
      specialties: ["Corporate Hub", "Luxury Apartments", "IT Parks", "Shopping Malls"],
      investment: "High ROI",
      rating: 4.8
    },
    {
      id: 2,
      name: "Noida",
      description: "Modern planned city with excellent connectivity, growing IT sector, and affordable housing options along the Noida Expressway.",
      image: "https://images.unsplash.com/photo-1580651315530-69c8e0026374?w=600",
      properties: "1,800+",
      avgPrice: "₹80L - ₹3.5Cr",
      growth: "15%",
      popularAreas: ["Sector 150+", "Expressway", "Sector 74-76", "Noida Extension"],
      specialties: ["Planned City", "IT Sector", "Expressway", "Educational Hub"],
      investment: "Rapid Growth",
      rating: 4.6
    },
    {
      id: 3,
      name: "Delhi",
      description: "The capital city offering prime locations with heritage properties, established neighborhoods, and premium residential areas.",
      image: "https://images.unsplash.com/photo-1580651315530-69c8e0026374?w=600",
      properties: "3,200+",
      avgPrice: "₹2Cr - ₹20Cr+",
      growth: "8%",
      popularAreas: ["South Delhi", "Central Delhi", "West Delhi", "Dwarka"],
      specialties: ["Prime Location", "Heritage", "Established", "Premium"],
      investment: "Stable & Secure",
      rating: 4.9
    },
    {
      id: 4,
      name: "Greater Noida",
      description: "Affordable housing destination with future growth potential, educational institutions, and upcoming infrastructure projects.",
      image: "https://images.unsplash.com/photo-1567598475180-5c165c807b34?w=600",
      properties: "1,200+",
      avgPrice: "₹40L - ₹1.8Cr",
      growth: "18%",
      popularAreas: ["Knowledge Park", "Sports City", "Alpha", "Beta"],
      specialties: ["Affordable", "Growth Area", "Educational", "Future Ready"],
      investment: "High Appreciation",
      rating: 4.3
    },
    {
      id: 5,
      name: "Ghaziabad",
      description: "Rapidly developing area with excellent metro connectivity to Delhi, offering affordable housing and good social infrastructure.",
      image: "https://images.unsplash.com/photo-1600585154340-9633f73f16d1?w=600",
      properties: "1,100+",
      avgPrice: "₹45L - ₹2Cr",
      growth: "14%",
      popularAreas: ["Vaishali", "Indirapuram", "Kaushambi", "Raj Nagar"],
      specialties: ["Metro Connected", "Affordable", "Developing", "Good Connectivity"],
      investment: "Steady Growth",
      rating: 4.4
    },
    {
      id: 6,
      name: "Faridabad",
      description: "Industrial hub with affordable housing options, good connectivity to Delhi, and developing social infrastructure.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
      properties: "900+",
      avgPrice: "₹35L - ₹1.5Cr",
      growth: "10%",
      popularAreas: ["Sector 21-31", "Greenfield", "BPTP", "Sarvodya"],
      specialties: ["Industrial", "Affordable", "Developing", "Good ROI"],
      investment: "Budget Friendly",
      rating: 4.2
    }
  ];

  const locationStats = [
    { number: "6", label: "Cities Covered", icon: MapPinIcon },
    { number: "10,000+", label: "Properties", icon: HomeModernIcon },
    { number: "15%", label: "Average Growth", icon: ChartBarIcon },
    { number: "98%", label: "Customer Satisfaction", icon: StarIcon }
  ];
  // 10th
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      title: 'Main Reception Area',
      description: 'Our welcoming reception area at Connaught Place office',
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600',
      category: 'office',
      featured: true
    },
    {
      id: 2,
      type: 'image',
      title: 'Team Collaboration Space',
      description: 'Modern workspace designed for team collaboration and innovation',
      src: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=600',
      category: 'office'
    },
    {
      id: 3,
      type: 'image',
      title: 'Client Meeting Room',
      description: 'Professional meeting rooms for client consultations',
      src: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=600',
      category: 'office'
    },
    {
      id: 4,
      type: 'image',
      title: 'Team Celebration',
      description: 'Celebrating another successful quarter with our amazing team',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
      category: 'team'
    },
    {
      id: 5,
      type: 'image',
      title: 'Awards Ceremony 2023',
      description: 'Receiving Best Real Estate Platform award at industry event',
      src: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600',
      category: 'awards',
      featured: true
    },
    {
      id: 6,
      type: 'video',
      title: 'Office Tour',
      description: 'Virtual tour of our modern workspace and facilities',
      src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600',
      category: 'office'
    },
    {
      id: 7,
      type: 'image',
      title: 'Training Session',
      description: 'Regular training sessions to keep our team updated',
      src: 'https://images.unsplash.com/photo-1551836026-d5c0889dd6d5?w=600',
      category: 'team'
    },
    {
      id: 8,
      type: 'image',
      title: 'Property Expo 2023',
      description: 'Representing PropertyDeals at the annual real estate expo',
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      category: 'events'
    },
    {
      id: 9,
      type: 'image',
      title: 'CREDAI Conference',
      description: 'Participating in CREDAI real estate conference',
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
      category: 'events'
    },
    {
      id: 10,
      type: 'image',
      title: 'Team Building Event',
      description: 'Annual team building retreat in the mountains',
      src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
      category: 'team',
      featured: true
    },
    {
      id: 11,
      type: 'image',
      title: 'Customer Appreciation',
      description: 'Customer appreciation event with our valued clients',
      src: 'https://images.unsplash.com/photo-1515168833906-d2a3b82e3024?w=600',
      category: 'events'
    },
    {
      id: 12,
      type: 'image',
      title: 'Industry Recognition',
      description: 'Our award wall showcasing industry recognition and achievements',
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600',
      category: 'awards'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length, icon: CameraIcon },
    { id: 'office', name: 'Office', count: galleryItems.filter(item => item.category === 'office').length, icon: BuildingOfficeIcon },
    { id: 'team', name: 'Team', count: galleryItems.filter(item => item.category === 'team').length, icon: UserGroupIcon },
    { id: 'events', name: 'Events', count: galleryItems.filter(item => item.category === 'events').length, icon: CameraIcon },
    { id: 'awards', name: 'Awards', count: galleryItems.filter(item => item.category === 'awards').length, icon: TrophyIcon }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const featuredItems = galleryItems.filter(item => item.featured);

  const officeStats = [
    { number: "3", label: "Office Locations", description: "Across Delhi NCR" },
    { number: "10,000", label: "Sq. Ft. Space", description: "Modern workspace" },
    { number: "50+", label: "Team Members", description: "Working across locations" },
    { number: "24/7", label: "Security", description: "CCTV monitored" }
  ];
  // 11th
  const features3 = [
    {
      icon: ShieldCheckIcon,
      text: "10,000+ Verified Properties",
      subtext: "RERA registered and legally verified"
    },
    {
      icon: CheckCircleIcon,
      text: "Zero Brokerage",
      subtext: "Save on brokerage charges"
    },
    {
      icon: StarIcon,
      text: "4.9/5 Customer Rating",
      subtext: "Rated by 500+ clients"
    },
    {
      icon: UserGroupIcon,
      text: "Dedicated Property Expert",
      subtext: "Personalized assistance"
    }
  ];

  const stats3 = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "15,000+", label: "Properties Verified" },
    { number: "12+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" }
  ];
  // 12th
   const [openItems, setOpenItems] = useState<number[]>([1]);
  // const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What areas in Delhi NCR do you cover?",
      answer: "We cover all major areas in Delhi NCR including Gurugram (all sectors from 1-115), Noida (all sectors + Expressway), Greater Noida, Faridabad, Ghaziabad, and all prime locations in Delhi. Our team has extensive knowledge of both established and emerging localities across the National Capital Region.",
      category: "general"
    },
    {
      id: 2,
      question: "Do you charge any brokerage fees?",
      answer: "For buyers, we offer zero brokerage on most properties. For sellers, we charge a nominal 1% commission only after successful deal closure, which is significantly lower than the standard 2% market rate. There are absolutely no hidden charges or upfront fees. All costs are discussed transparently before we begin the process.",
      category: "buying"
    },
    {
      id: 3,
      question: "How do you verify property documents?",
      answer: "We have a dedicated legal team that verifies all property documents including title deeds, encumbrance certificates, RERA registration, building approvals, and tax receipts. We also conduct physical site verification and ensure all documents are legally vetted before listing. Our verification process includes: Title search, Encumbrance certificate verification, RERA compliance check, Building plan approval verification, and Physical site inspection.",
      category: "legal"
    },
    {
      id: 4,
      question: "What is the typical process for buying a property through you?",
      answer: "Our process is simple and transparent: 1) Free consultation to understand your requirements and budget 2) Shortlisted property recommendations based on your preferences 3) Site visits with our experts 4) Price negotiation with the seller 5) Legal verification and documentation 6) Registration & possession 7) Post-sales support. The entire process usually takes 15-30 days depending on the property type and documentation.",
      category: "buying"
    },
    {
      id: 5,
      question: "Do you provide home loan assistance?",
      answer: "Yes, we have tie-ups with 20+ leading banks and NBFCs including HDFC, SBI, ICICI, Axis Bank, and PNB. Our loan experts help you get the best interest rates, quick approvals, and handle all documentation. This service is completely free for our customers. We assist with: Loan eligibility assessment, Document preparation, Bank negotiations, and Quick processing.",
      category: "general"
    },
    {
      id: 6,
      question: "Can you help with property valuation for selling?",
      answer: "Absolutely! We provide free property valuation services considering factors like location, amenities, market trends, recent transactions in your area, and future growth potential. Our comprehensive valuation report helps you set the right price and get the best value for your property. We consider: Current market rates, Location advantages, Property condition and amenities, Recent sale prices in the area, and Future development plans.",
      category: "selling"
    }
  ];

  const categories2 = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'general', name: 'General', count: faqs.filter(f => f.category === 'general').length },
    { id: 'buying', name: 'Buying', count: faqs.filter(f => f.category === 'buying').length },
    { id: 'selling', name: 'Selling', count: faqs.filter(f => f.category === 'selling').length },
    { id: 'legal', name: 'Legal', count: faqs.filter(f => f.category === 'legal').length }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);




  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-8">
              <BuildingOfficeIcon className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">Trusted Real Estate Partner Since 2012</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About Our Real Estate
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Company
              </span>
            </h1>

            {/* Intro Text */}
            <div className="space-y-4 mb-8 max-w-2xl">
              <p className="text-xl text-gray-600 leading-relaxed">
                PropertyDeals is Delhi NCR's most trusted real estate platform, helping thousands of families 
                find their dream homes and make smart property investments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience, we've revolutionized property buying and selling through 
                transparency, technology, and customer-first approach.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to make real estate transactions simple, secure, and rewarding for everyone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-md">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <Icon className="h-6 w-6 text-blue-600" />
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <PhoneIcon className="h-5 w-5" />
                Contact Us Today
              </a>
              <a
                href="/schedule-call"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-200"
              >
                <CalendarIcon className="h-5 w-5" />
                Schedule a Call
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>RERA Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Zero Brokerage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            {/* Main Image/Graphic */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BuildingOfficeIcon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Building Dreams,
                    <span className="block text-blue-600">Creating Homes</span>
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your trusted partner in the journey to find the perfect property
                  </p>
                  
                  {/* Video Play Button */}
                  <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group">
                    <PlayCircleIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    Watch Our Story
                  </button>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">⭐ 4.9/5 Rating</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">🏆 Award Winning</div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-96 h-96 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
    {/* // 2nd */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Story & Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to Delhi NCR's most trusted real estate platform, 
            our journey has been guided by integrity, innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Foundation */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Our Beginning</h3>
                <p className="text-gray-600">Established in 2012</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                PropertyDeals was founded in 2012 by a group of real estate enthusiasts who recognized 
                the need for transparency and reliability in the Delhi NCR property market. What started 
                as a small office in Connaught Place has now grown into a trusted brand serving thousands 
                of customers.
              </p>
              <p>
                Our founders, with their combined 30+ years of experience in real estate, set out to 
                create a platform that would eliminate the common pain points faced by property buyers 
                and sellers - lack of transparency, hidden charges, and unreliable brokers.
              </p>
              <p>
                Today, we take pride in being the preferred real estate partner for NRIs, first-time 
                buyers, and seasoned investors alike, thanks to our customer-first approach and 
                innovative solutions.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <StarIcon className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Our Mission</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To make property buying and selling in Delhi NCR a transparent, secure, and rewarding 
                experience through technology-driven solutions, expert guidance, and complete legal 
                compliance, while maintaining the highest standards of integrity.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
                  <TrophyIcon className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Our Vision</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted and innovative real estate platform in India, setting new 
                benchmarks in customer satisfaction, technological innovation, and ethical business 
                practices while expanding our reach to help millions achieve their property dreams.
              </p>
            </div>
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPinIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Areas We Cover in Delhi NCR</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With extensive presence across all major locations, we bring you the best properties 
              from every corner of the National Capital Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{area.city}</h4>
                  <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
                    {area.projects}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    <span>{area.sectors}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BuildingOfficeIcon className="h-4 w-4 text-blue-500" />
                    <span>Specialty: {area.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects & Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
              <p className="text-blue-100 text-lg mb-6">
                Over the years, we've achieved significant milestones that reflect our commitment 
                to excellence and customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15,000+</div>
                  <div className="text-blue-200">Properties Verified</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50,000+</div>
                  <div className="text-blue-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">₹5,000Cr+</div>
                  <div className="text-blue-200">Property Value Handled</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <div className="text-blue-200">Success Rate</div>
                </div>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                      <span className="font-bold text-white">{milestone.year}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{milestone.event}</h4>
                      <p className="text-blue-100">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Experience */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <UserGroupIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Our Expert Team</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Backed by a team of seasoned professionals with deep market knowledge and 
              unwavering commitment to customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RERA Registration */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-green-600" />
              <h3 className="text-3xl font-bold text-gray-900">RERA Registered & Compliant</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud to be registered with RERA across all states we operate in, ensuring 
              complete legal compliance and customer protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reraRegistrations.map((rera, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{rera.state}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="font-mono text-green-700">{rera.id}</div>
                  <div>Registered: {rera.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              All our projects and transactions comply with RERA guidelines, providing you with 
              complete peace of mind and legal protection.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* 3rd */}.
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <CogIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Comprehensive Solutions</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-blue-600">We Do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end real estate services designed to meet all your property needs with 
            complete transparency and expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border-2 ${
                  service.popular ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    {service.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={service.route}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group/btn"
                  >
                    {service.cta}
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How Our Service Works</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Simple 4-step process to get your real estate needs fulfilled efficiently and transparently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/30 transition-colors">
                      <StepIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-900">{step.step}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Multiple Services?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get special package deals when you combine multiple services. Save up to 25% on bundled services with personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <CogIcon className="h-5 w-5 mr-2" />
                Get Custom Package
              </a>
              <a
                href="/services"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 4th */}
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">Trusted by 50,000+ Customers</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">PropertyDeals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to making your property journey seamless, transparent, and successful 
            with our customer-first approach and innovative solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats1.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                {/* Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center text-sm text-blue-600 font-semibold">
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    {feature.stats}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Testimonials & Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Testimonials */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Customers Say</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-3">"{testimonial.comment}"</p>
                  <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Highlights */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Process Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DocumentCheckIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Digital Documentation</h4>
                  <p className="text-blue-100 text-sm">Track all documents online in real-time</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Quick Turnaround</h4>
                  <p className="text-blue-100 text-sm">Faster processing than industry standards</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheckIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Legal Compliance</h4>
                  <p className="text-blue-100 text-sm">100% adherence to RERA guidelines</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Expert Support</h4>
                  <p className="text-blue-100 text-sm">Dedicated manager for personalized service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Recognitions</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="h-6 w-6 text-green-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">RERA Registered</div>
                  <div className="text-sm text-gray-600">3 States</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <TrophyIcon className="h-6 w-6 text-yellow-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Award Winning</div>
                  <div className="text-sm text-gray-600">Best Real Estate Platform 2023</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <StarIcon className="h-6 w-6 text-blue-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Rated 4.9/5</div>
                  <div className="text-sm text-gray-600">Google Reviews</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <DocumentCheckIcon className="h-6 w-6 text-purple-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">ISO Certified</div>
                  <div className="text-sm text-gray-600">Quality Management</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their dream home with complete peace of mind and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <UserIcon className="h-5 w-5 mr-2" />
                Get Free Consultation
              </a>
              <a
                href="/properties"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Browse Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 5th */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <TrophyIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Award Winning Team</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get guidance from Delhi NCR's most experienced and trusted real estate professionals 
            with proven track records of success.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamStats1.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Agent Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Experience Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {member.experience}
                  </span>
                </div>

                {/* Properties Sold */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {member.propertiesSold} Sold
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    {renderStars(member.rating)}
                    <span className="text-sm font-semibold text-gray-900">{member.rating}</span>
                  </div>
                </div>
              </div>

              {/* Agent Details */}
              <div className="p-6">
                {/* Name and Role */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialization</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialization.map((spec, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Areas Covered */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4" />
                    Areas Covered
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.areas.map((area, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Achievements</h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <TrophyIcon className="h-3 w-3 text-yellow-500 mr-2" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex gap-2">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 border border-blue-600 text-blue-600 py-2 px-3 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-1"
                  >
                    <EnvelopeIcon className="h-4 w-4" />
                    Email
                  </a>
                  <a
                    href={`https://wa.me/${member.phone.replace('+', '')}`}
                    className="flex-1 border border-green-600 text-green-600 py-2 px-3 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-1"
                  >
                    <ChatBubbleLeftRightIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Connect With the Right Expert for Your Needs
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team matching algorithm will connect you with the perfect property expert 
              based on your requirements, budget, and preferred locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Get Matched with an Expert
              </a>
              <a
                href="/team"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Full Team Directory
              </a>
            </div>
          </div>
        </div>

        {/* Team Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h4>
            <p className="text-gray-600">
              Each team member has successfully closed hundreds of property deals with satisfied clients.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Local Market Expertise</h4>
            <p className="text-gray-600">
              Deep knowledge of Delhi NCR micro-markets, pricing trends, and emerging opportunities.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <StarIcon className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Personalized Service</h4>
            <p className="text-gray-600">
              Dedicated attention and customized solutions tailored to your specific needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* 6th */}
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
            <TrophyIcon className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">Award Winning Performance</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Achievements & Milestones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating a decade of excellence in real estate with remarkable achievements 
            and continuous growth in serving the Delhi NCR community.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const displayNumber = achievement.suffix === '%' || achievement.suffix === '/5' 
              ? counters[index].toFixed(1)
              : Math.floor(counters[index]);
            
            return (
              <div
                key={achievement.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>

                  {/* Animated Number */}
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {displayNumber}{achievement.suffix}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {achievement.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey Timeline</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming Delhi NCR's most trusted real estate partner
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {milestones1.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{milestone.year}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{milestone.title}</h4>
                          <div className="text-blue-600 text-sm font-medium">{milestone.achievement}</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                  {/* Year Marker */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} text-center lg:text-left`}>
                    <div className="lg:hidden bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and customers alike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100 group hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrophyIcon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 leading-tight">{award.title}</h4>
                <div className="text-blue-600 text-sm font-medium mb-1">{award.issuer}</div>
                <div className="text-gray-500 text-sm">{award.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Our Vision for the Future</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We're committed to expanding our services, embracing technology, and setting new 
            benchmarks in customer satisfaction while reaching more families across India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">5,000+</div>
              <div className="text-blue-200">Homes Sold by 2025</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">Pan India</div>
              <div className="text-blue-200">Expansion Planned</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Customer Satisfaction Goal</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 font-medium">Certified & Recognized By</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-gray-700">RERA Registered</span>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <BuildingOfficeIcon className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-700">CREDAI Member</span>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-gray-700">ISO 9001:2015</span>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2">
                <UserGroupIcon className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-gray-700">Builders Association</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 7th */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <CheckCircleIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Streamlined Process</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Process - How We Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A transparent, step-by-step approach that makes property buying simple, 
            secure, and stress-free from start to finish.
          </p>
        </div>

        {/* Process Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processStats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-2xl p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-24">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Step Content */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                      {/* Step Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-gray-900">{step.step}</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Duration: {step.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Output */}
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="text-sm text-blue-600 font-medium mb-1">Deliverable</div>
                        <div className="font-semibold text-gray-900">{step.output}</div>
                      </div>
                    </div>
                  </div>

                  {/* Step Number Circle - Mobile */}
                  <div className="lg:hidden absolute -left-2 top-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>

                  {/* Step Number Circle - Desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Our Process Works Better</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've designed our process based on years of experience and customer feedback to ensure the best outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Property Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Begin with a free consultation and let us guide you through our proven process 
              to find your dream property in Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                Start Free Consultation
              </a>
              <a
                href="tel:+919876543210"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call: +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Process Timeline Summary */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Complete Process Timeline</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center bg-white rounded-xl p-4 shadow-sm min-w-[120px]">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">{step.title}</div>
                <div className="text-xs text-gray-600">{step.duration}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full">
              <CheckCircleIcon className="h-4 w-4" />
              <span className="text-sm font-semibold">Total Duration: 15-25 Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 8th */}
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
            <HandThumbUpIcon className="h-5 w-5 text-green-500" />
            <span className="text-sm font-semibold text-gray-700">Rated 4.9/5 by 500+ Clients</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with PropertyDeals.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats2.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials1.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <FaQuoteLeft className="h-8 w-8 text-blue-100 group-hover:text-blue-200 transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 line-clamp-4">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{testimonial.role}</p>
                  <div className="flex items-center gap-4">
                    {renderStars1(testimonial.rating)}
                    <span className="text-sm text-gray-500">{testimonial.purchaseDate}</span>
                  </div>
                </div>
              </div>

              {/* Property & Location */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-900 mb-2">
                  {testimonial.property}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span>📍 {testimonial.location}</span>
                </div>
              </div>

              {/* Likes */}
              <div className="flex items-center justify-end mt-4 text-sm text-gray-500">
                <HandThumbUpIcon className="h-4 w-4 mr-1" />
                {testimonial.likes} people found this helpful
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile & Tablet */}
        <div className="lg:hidden mb-12">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials1.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <FaQuoteLeft className="h-8 w-8 text-blue-100" />
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        "{testimonial.review}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-start gap-4">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            {testimonial.verified && (
                              <CheckBadgeIcon className="h-4 w-4 text-blue-500" />
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{testimonial.role}</p>
                          <div className="flex items-center gap-4">
                            {renderStars(testimonial.rating)}
                            <span className="text-sm text-gray-500">{testimonial.purchaseDate}</span>
                          </div>
                        </div>
                      </div>

                      {/* Property & Location */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-sm font-medium text-gray-900 mb-2">
                          {testimonial.property}
                        </p>
                        <div className="flex items-center text-sm text-gray-600">
                          <span>📍 {testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-6 font-medium">As Featured On</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">Google Reviews</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">Facebook</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">Housing.com</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">MagicBricks</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Thousands of Happy Customers
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the PropertyDeals difference and make your property journey smooth and successful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Journey Today
              </a>
              <a
                href="/testimonials"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Read More Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 9th */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <MapPinIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Complete Delhi NCR Coverage</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Areas We <span className="text-blue-600">Cover</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Serving all major locations across Delhi NCR with extensive property options, 
            expert local knowledge, and personalized service.
          </p>
        </div>

        {/* Location Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {locationStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-gray-50 rounded-2xl p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Location Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Location Name */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {location.name}
                  </h3>
                  <div className="flex items-center text-white/90">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">Delhi NCR</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-semibold text-gray-900">{location.rating}</span>
                </div>

                {/* Investment Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {location.investment}
                  </span>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {location.description}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <HomeModernIcon className="h-4 w-4 mr-1" />
                      <span className="text-xs">Properties</span>
                    </div>
                    <div className="font-semibold text-gray-900">{location.properties}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <CurrencyRupeeIcon className="h-4 w-4 mr-1" />
                      <span className="text-xs">Avg. Price</span>
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">{location.avgPrice}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <ChartBarIcon className="h-4 w-4 mr-1" />
                      <span className="text-xs">Growth</span>
                    </div>
                    <div className="font-semibold text-green-600">{location.growth}</div>
                  </div>
                </div>

                {/* Popular Areas */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.popularAreas.slice(0, 3).map((area, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                    {location.popularAreas.length > 3 && (
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{location.popularAreas.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-block bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={`/locations/${location.name.toLowerCase()}`}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Explore Properties in {location.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Map Overview */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Complete Delhi NCR Coverage</h3>
              <p className="text-blue-100 text-lg mb-6">
                With our extensive network and local expertise, we cover every corner of the 
                National Capital Region, ensuring you find the perfect property in your preferred location.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>All major residential areas covered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Expert local market knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>On-ground team in each location</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Regular site visits and updates</span>
                </div>
              </div>
            </div>
            
            {/* Map Visualization */}
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4 text-center">
                {locations.map((location) => (
                  <div key={location.id} className="bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <div className="font-semibold text-lg">{location.name}</div>
                    <div className="text-blue-200 text-sm">{location.properties}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Location is Right for You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our location experts will analyze your requirements, budget, and preferences 
              to recommend the perfect area that matches your lifestyle and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <MapPinIcon className="h-5 w-5 mr-2" />
                Get Location Recommendation
              </a>
              <a
                href="/all-locations"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Compare All Locations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 10th */}
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
            <CameraIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Behind the Scenes</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Company <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our offices, meet our team, and see what makes 
            PropertyDeals the most trusted real estate platform in Delhi NCR.
          </p>
        </div>

        {/* Office Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {officeStats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Featured Gallery */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Featured Photos</h3>
            <div className="flex items-center gap-2 text-blue-600">
              <MapPinIcon className="h-5 w-5" />
              <span className="font-semibold">Connaught Place Office</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>

                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayIcon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {category.name}
                <span className={`ml-1 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-200 text-xs line-clamp-2">{item.description}</p>
                </div>
              </div>

              {/* Video Icon */}
              {item.type === 'video' && (
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <PlayIcon className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Virtual Office Tour */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Take a Virtual Office Tour</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience our modern workspace, meet our team, and see our facilities 
            through an immersive virtual tour from the comfort of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <PlayIcon className="h-5 w-5 mr-2" />
              Start Virtual Tour
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Schedule Physical Visit
            </button>
          </div>
        </div>

        {/* Office Locations */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Office Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Head Office</h4>
              <p className="text-gray-600 mb-2">Connaught Place, Delhi</p>
              <p className="text-sm text-gray-500">10:00 AM - 7:00 PM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Gurugram Office</h4>
              <p className="text-gray-600 mb-2">Cyber City, Gurugram</p>
              <p className="text-sm text-gray-500">10:00 AM - 7:00 PM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Noida Office</h4>
              <p className="text-gray-600 mb-2">Sector 62, Noida</p>
              <p className="text-sm text-gray-500">10:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
    {/* 11th */}
    <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-white/20">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-semibold">Delhi NCR's Most Trusted Platform</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Looking for Verified Properties in 
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Delhi NCR?
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join 50,000+ satisfied customers who found their dream home with complete 
                transparency, zero brokerage, and expert guidance. Your perfect property is just a call away.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features3.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{feature.text}</div>
                        <div className="text-blue-200 text-sm">{feature.subtext}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats3.map((stat, index) => (
                  <div key={index} className="text-center bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - CTA Cards */}
            <div className="space-y-6">
              {/* Main CTA Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Get Instant Response
                </h3>
                <p className="text-gray-600 mb-6">
                  Connect with our property experts and get personalized recommendations within 30 minutes
                </p>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  {/* Call Now Button */}
                  <a
                    href="tel:+919876543210"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span>Call Now: +91 98765 43210</span>
                  </a>

                  {/* Free Consultation Button */}
                  <a
                    href="/contact"
                    className="w-full border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <UserGroupIcon className="h-5 w-5" />
                    <span>Get Free Consultation</span>
                  </a>
                </div>

                {/* Quick Response Note */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-center gap-2 text-green-700 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Average response time: <strong>2 minutes</strong></span>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 text-white text-center">
                <h4 className="font-semibold mb-2">Why Choose PropertyDeals?</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-300" />
                    <span>RERA Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-300" />
                    <span>Zero Brokerage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-300" />
                    <span>Legal Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-300" />
                    <span>Best Price</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <p className="text-blue-200 mb-6 font-medium">Trusted and Recognized By</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="bg-white/10 rounded-lg px-6 py-3 backdrop-blur-sm border border-white/20">
                <span className="text-white font-semibold text-sm">RERA Registered</span>
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 backdrop-blur-sm border border-white/20">
                <span className="text-white font-semibold text-sm">CREDAI Member</span>
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 backdrop-blur-sm border border-white/20">
                <span className="text-white font-semibold text-sm">ISO 9001:2015</span>
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 backdrop-blur-sm border border-white/20">
                <span className="text-white font-semibold text-sm">Award Winning</span>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-blue-200 text-sm">
              <ShieldCheckIcon className="h-4 w-4" />
              <span>100% Secure & Confidential | No Spam | No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 12 */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
            <QuestionMarkCircleIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Quick Answers</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about buying, selling, and investing in properties in Delhi NCR.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories2.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map(faq => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg flex-shrink-0 mt-1">
                      <QuestionMarkCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      openItems.includes(faq.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`px-6 transition-all duration-300 ${
                    openItems.includes(faq.id)
                      ? 'pb-6 opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="pl-12 border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Still have questions?</h3>
                  <p className="text-blue-100">Talk to our property experts</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6">
                Our team is available 24/7 to answer your specific queries and provide personalized guidance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Instant response on calls</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>No obligation</span>
                </div>
              </div>
              <a
                href="tel:+919876543210"
                className="w-full mt-6 bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center block"
              >
                Call Now: +91 98765 43210
              </a>
            </div>

            {/* Support Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Live Chat Support</h3>
                  <p className="text-gray-600">Get instant answers online</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Connect with our support team in real-time for quick answers to your property queries.
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Average response time: 2 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Available 8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Property experts online</span>
                </div>
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
              >
                Start Live Chat
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/buying-guide" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Property Buying Guide
              </a>
              <a href="/loan-process" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Home Loan Process
              </a>
              <a href="/legal-docs" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Legal Documentation
              </a>
              <a href="/rera-guidelines" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                RERA Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
    
    
  );
}