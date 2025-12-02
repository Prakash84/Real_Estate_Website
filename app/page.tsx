"use client";

import { HeartIcon, MapPinIcon, HomeModernIcon, ArrowsPointingOutIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {ArrowUpIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { FaBath, FaQuoteLeft  } from 'react-icons/fa';  // Using react-icons library
import { useState } from 'react';
import { 
  BuildingOfficeIcon, 
  BuildingStorefrontIcon,  
  MapIcon, 
  BuildingLibraryIcon,
  CurrencyRupeeIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { 
  ShieldCheckIcon, 
  CheckBadgeIcon, 
  NoSymbolIcon, 
  PhoneIcon, 
  EyeIcon, 
  UserGroupIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

import { 
  CalendarIcon, 
  TagIcon,
  FireIcon,
} from '@heroicons/react/24/outline';
import { FireIcon as FireIconSolid } from '@heroicons/react/24/solid';

import { 
  HandThumbUpIcon,
  
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { 
  KeyIcon,
  BanknotesIcon,
  PaintBrushIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import {  
  TrophyIcon 
} from '@heroicons/react/24/outline';
import { 
  EnvelopeIcon,
  UserIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import { 
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

import Prelaunch_section from './components/Prelaunch_section';



interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'buying' | 'selling' | 'legal';
}


interface FormData {
  name: string;
  mobile: string;
  email: string;
  preferredLocation: string;
  budget: string;
  propertyType: string;
  message: string;
}

interface Partner {
  id: number;
  name: string;
  logo: string;
  type: 'builder' | 'bank' | 'legal' | 'interior';
  projects: string;
  established: string;
  rating: number;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  price: string;
  duration: string;
  popular?: boolean;
  cta: string;
  route: string;
  stats: {
    value: string;
    label: string;
  }[];
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  photo: string;
  property: string;
  purchaseDate: string;
  verified: boolean;
  likes: number;
  tags: string[];
}

interface Project {
  id: number;
  name: string;
  builder: string;
  location: string;
  price: string;
  pricePerSqft: string;
  possessionDate: string;
  launchDate: string;
  image: string;
  unitTypes: string[];
  offers: string[];
  reraId: string;
  status: 'new-launch' | 'hot-selling' | 'almost-sold';
  rating: number;
  totalUnits: number;
  availableUnits: number;
  amenities: string[];
}

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  highlight?: string;
  badge?: string;
}

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  properties: string;
  startingPrice: string;
  growth: string;
  tags: string[];
  route: string;
  stats: {
    label: string;
    value: string;
  }[];
}


interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  pricePerSqft: string;
  sqft: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  featured: boolean;
  amenities: string[];
}
//3rd


interface Location {
  id: number;
  name: string;
  area: string;
  description: string;
  image: string;
  properties: string;
  avgPrice: string;
  growth: string;
  rating: number;
  tags: string[];
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyType, setPropertyType] = useState('any');
  const [priceRange, setPriceRange] = useState('any');

  const propertyTypes = [
    { value: 'any', label: 'Any Type' },
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'condo', label: 'Condo' },
  ];

  const priceRanges = [
    { value: 'any', label: 'Any Price' },
    { value: '0-300000', label: 'Under $300K' },
    { value: '300000-500000', label: '$300K - $500K' },
    { value: '500000-750000', label: '$500K - $750K' },
    { value: '750000-1000000', label: '$750K - $1M' },
    { value: '1000000+', label: '$1M+' },
  ];
  // JSX Return
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const properties: Property[] = [
    {
      id: 1,
      title: "Luxury Penthouse in Golf Links",
      location: "Golf Links, South Delhi",
      price: "₹12.5 Cr",
      pricePerSqft: "₹1,25,000/sqft",
      sqft: "10,000 sqft",
      bedrooms: 4,
      bathrooms: 5,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600",
      featured: true,
      amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking"]
    },
    {
      id: 2,
      title: "Modern Villa in Gurugram",
      location: "DLF Phase 5, Gurugram",
      price: "₹8.75 Cr",
      pricePerSqft: "₹95,000/sqft",
      sqft: "9,200 sqft",
      bedrooms: 5,
      bathrooms: 4,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600",
      featured: true,
      amenities: ["Private Garden", "Home Theater", "Smart Home", "Pool"]
    },
    {
      id: 3,
      title: "Sky Villa in Noida",
      location: "Sector 150, Noida",
      price: "₹6.2 Cr",
      pricePerSqft: "₹82,000/sqft",
      sqft: "7,560 sqft",
      bedrooms: 3,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600",
      featured: false,
      amenities: ["City View", "Concierge", "Fitness Center", "Balcony"]
    },
    {
      id: 4,
      title: "Heritage Haveli in Delhi",
      location: "Civil Lines, Central Delhi",
      price: "₹15.8 Cr",
      pricePerSqft: "₹1,80,000/sqft",
      sqft: "8,800 sqft",
      bedrooms: 6,
      bathrooms: 5,
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600",
      featured: true,
      amenities: ["Heritage", "Large Garden", "Servant Quarters", "Parking"]
    },
    {
      id: 5,
      title: "Tech Park Residency",
      location: "Cyber City, Gurugram",
      price: "₹4.5 Cr",
      pricePerSqft: "₹65,000/sqft",
      sqft: "6,920 sqft",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
      featured: false,
      amenities: ["Tech Enabled", "Co-working", "Cafeteria", "Security"]
    },
    {
      id: 6,
      title: "Golf View Apartment",
      location: "Sector 43, Gurugram",
      price: "₹7.8 Cr",
      pricePerSqft: "₹1,10,000/sqft",
      sqft: "7,100 sqft",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600",
      featured: true,
      amenities: ["Golf View", "Club House", "Pool", "Garden"]
    },
    // {
    //   id: 7,
    //   title: "Executive Suite in Faridabad",
    //   location: "Sector 21, Faridabad",
    //   price: "₹3.2 Cr",
    //   pricePerSqft: "₹45,000/sqft",
    //   sqft: "7,110 sqft",
    //   bedrooms: 3,
    //   bathrooms: 2,
    //   image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600",
    //   featured: false,
    //   amenities: ["Modular Kitchen", "Park", "Power Backup", "Security"]
    // },
    // {
    //   id: 8,
    //   title: "Luxury Farmhouse",
    //   location: "Chhatarpur, South Delhi",
    //   price: "₹22.5 Cr",
    //   pricePerSqft: "₹2,50,000/sqft",
    //   sqft: "9,000 sqft",
    //   bedrooms: 5,
    //   bathrooms: 6,
    //   image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600",
    //   featured: true,
    //   amenities: ["Private Pool", "Farmland", "Staff Quarters", "Garage"]
    // },
    // {
    //   id: 9,
    //   title: "Riverfront Villa",
    //   location: "Yamuna Expressway, Noida",
    //   price: "₹9.8 Cr",
    //   pricePerSqft: "₹1,05,000/sqft",
    //   sqft: "9,330 sqft",
    //   bedrooms: 4,
    //   bathrooms: 4,
    //   image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600",
    //   featured: true,
    //   amenities: ["River View", "Private Beach", "Boat Dock", "Garden"]
    // }
  ];
  ///3rd 
  const locations: Location[] = [
    // {
    //   id: 1,
    //   name: "Gurugram",
    //   area: "Cyber City & DLF Phases",
    //   description: "India's corporate hub with premium residential complexes and world-class infrastructure",
    //   image: "https://images.unsplash.com/photo-1592210454359-904b3ef8e8a6?w=600",
    //   properties: "2,500+",
    //   avgPrice: "₹1.2Cr - ₹5Cr",
    //   growth: "12%",
    //   rating: 4.8,
    //   tags: ["Corporate Hub", "Premium", "Metro Connected"]
    // },
    {
      id: 2,
      name: "Noida",
      area: "Sector 150 & Expressway",
      description: "Modern planned city with excellent connectivity to Delhi and growing IT sector",
      image: "https://unsplash.com/photos/white-and-brown-concrete-building-under-blue-sky-during-daytime-_TPTXZd9mOo?w=600",
      properties: "1,800+",
      avgPrice: "₹80L - ₹3.5Cr",
      growth: "15%",
      rating: 4.6,
      tags: ["Planned City", "Expressway", "IT Hub"]
    },
    // {
    //   id: 3,
    //   name: "Delhi",
    //   area: "South & Central Delhi",
    //   description: "Prime locations with heritage properties and premium residential areas",
    //   image: "https://images.unsplash.com/photo-1580651315530-69c8e0026374?w=600",
    //   properties: "3,200+",
    //   avgPrice: "₹2Cr - ₹20Cr+",
    //   growth: "8%",
    //   rating: 4.9,
    //   tags: ["Prime Location", "Heritage", "Established"]
    // },
    {
      id: 4,
      name: "Greater Noida",
      area: "Knowledge Park & Sports City",
      description: "Affordable housing with future growth potential and educational institutions",
      image: "https://images.unsplash.com/photo-1580651315530-69c8e0026374?w=600",
      properties: "1,200+",
      avgPrice: "₹40L - ₹1.8Cr",
      growth: "18%",
      rating: 4.3,
      tags: ["Affordable", "Growth Area", "Educational"]
    },
    // {
    //   id: 5,
    //   name: "Faridabad",
    //   area: "Sector 21 & Greenfield",
    //   description: "Industrial hub with affordable housing options and good connectivity",
    //   image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
    //   properties: "900+",
    //   avgPrice: "₹35L - ₹1.5Cr",
    //   growth: "10%",
    //   rating: 4.2,
    //   tags: ["Industrial", "Affordable", "Developing"]
    // },
    {
      id: 6,
      name: "Ghaziabad",
      area: "Vaishali & Indirapuram",
      description: "Rapidly developing area with excellent metro connectivity to Delhi",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
      properties: "1,100+",
      avgPrice: "₹45L - ₹2Cr",
      growth: "14%",
      rating: 4.4,
      tags: ["Metro Connected", "Developing", "Affordable"]
    },
    {
      id: 6,
      name: "Yamiuna Expressway",
      area: "Vaishali & Indirapuram",
      description: "Rapidly developing area with excellent metro connectivity to Delhi",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
      properties: "1,100+",
      avgPrice: "₹45L - ₹2Cr",
      growth: "14%",
      rating: 4.4,
      tags: ["Metro Connected", "Developing", "Affordable"]
    }
  ];
  // 4th
   const categories: Category[] = [
    {
      id: 1,
      name: "Residential Apartment",
      description: "Modern apartments with amenities in prime locations across Delhi NCR",
      icon: BuildingOfficeIcon,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
      properties: "5,200+",
      startingPrice: "₹25L",
      growth: "15%",
      tags: ["2-4 BHK", "Gated Community", "Amenities"],
      route: "/properties/residential-apartments",
      stats: [
        { label: "Avg. Size", value: "800-2000 sqft" },
        { label: "Rental Yield", value: "3-4%" }
      ]
    },
    {
      id: 2,
      name: "Commercial Space",
      description: "Office spaces, retail shops, and commercial establishments for business",
      icon: BuildingStorefrontIcon,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
      properties: "1,800+",
      startingPrice: "₹50L",
      growth: "18%",
      tags: ["Office", "Retail", "IT Park"],
      route: "/properties/commercial",
      stats: [
        { label: "Avg. Size", value: "500-5000 sqft" },
        { label: "Rental Yield", value: "6-8%" }
      ]
    },
    {
      id: 3,
      name: "Luxury Villas",
      description: "Premium independent villas with private amenities and exclusive locations",
      icon: HomeModernIcon,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600",
      properties: "850+",
      startingPrice: "₹2.5Cr",
      growth: "12%",
      tags: ["Private Pool", "Garden", "Premium"],
      route: "/properties/luxury-villas",
      stats: [
        { label: "Avg. Size", value: "3000-8000 sqft" },
        { label: "Rental Yield", value: "2-3%" }
      ]
    },
    {
      id: 4,
      name: "Plots & Land",
      description: "Residential and commercial plots for custom construction and investment",
      icon: MapIcon,
      image: "https://images.unsplash.com/photo-1580651315530-69c8e0026374?w=600",
      properties: "3,500+",
      startingPrice: "₹15L",
      growth: "22%",
      tags: ["Residential", "Commercial", "Farmhouse"],
      route: "/properties/plots",
      stats: [
        { label: "Avg. Size", value: "100-500 sqyd" },
        { label: "Appreciation", value: "20-25%" }
      ]
    },
    {
      id: 5,
      name: "Studio Apartment",
      description: "Compact and affordable studio apartments perfect for singles and couples",
      icon: BuildingLibraryIcon,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
      properties: "2,100+",
      startingPrice: "₹18L",
      growth: "20%",
      tags: ["Compact", "Affordable", "Furnished"],
      route: "/properties/studio",
      stats: [
        { label: "Avg. Size", value: "300-600 sqft" },
        { label: "Rental Yield", value: "4-5%" }
      ]
    },
    {
      id: 6,
      name: "Builder Floors",
      description: "Independent floors in low-rise buildings with separate entries",
      icon: ArrowsPointingOutIcon,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
      properties: "1,900+",
      startingPrice: "₹75L",
      growth: "16%",
      tags: ["Independent", "2-3 Floors", "Privacy"],
      route: "/properties/builder-floors",
      stats: [
        { label: "Avg. Size", value: "1200-2500 sqft" },
        { label: "Rental Yield", value: "3-4%" }
      ]
    },
    {
      id: 7,
      name: "Penthouse",
      description: "Luxurious top-floor apartments with premium features and panoramic views",
      icon: ChartBarIcon,
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600",
      properties: "320+",
      startingPrice: "₹4Cr",
      growth: "14%",
      tags: ["Premium", "Panoramic View", "Luxury"],
      route: "/properties/penthouse",
      stats: [
        { label: "Avg. Size", value: "2500-6000 sqft" },
        { label: "Rental Yield", value: "2.5-3.5%" }
      ]
    },
    {
      id: 8,
      name: "Farmhouse",
      description: "Spacious farmhouses with large plots, perfect for weekend getaways",
      icon: HomeModernIcon,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600",
      properties: "180+",
      startingPrice: "₹1.5Cr",
      growth: "25%",
      tags: ["Spacious", "Garden", "Weekend"],
      route: "/properties/farmhouse",
      stats: [
        { label: "Avg. Size", value: "1-5 acres" },
        { label: "Appreciation", value: "18-22%" }
      ]
    }
  ];
  // 5th
const features: Feature[] = [
    {
      id: 1,
      title: "RERA Registered",
      description: "All our projects and properties are registered with RERA, ensuring legal compliance and buyer protection under government regulations.",
      icon: ShieldCheckIcon,
      highlight: "Legal Protection",
      badge: "Govt. Verified"
    },
    {
      id: 2,
      title: "Verified Property Listings",
      description: "Every property undergoes thorough verification process including legal checks, document verification, and physical inspection.",
      icon: CheckBadgeIcon,
      highlight: "100% Authentic",
      badge: "Quality Assured"
    },
    {
      id: 3,
      title: "0% Brokerage",
      description: "Save on brokerage fees when you deal directly with us. No hidden charges or commission fees on selected properties.",
      icon: NoSymbolIcon,
      highlight: "Save Money",
      badge: "Direct Deal"
    },
    {
      id: 4,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available round the clock to assist you with queries, site visits, and documentation.",
      icon: PhoneIcon,
      highlight: "Always Available",
      badge: "Instant Help"
    },
    {
      id: 5,
      title: "100% Transparency",
      description: "Complete transparency in pricing, documentation, and processes. No hidden costs or surprise charges throughout your buying journey.",
      icon: EyeIcon,
      highlight: "No Hidden Costs",
      badge: "Clear Pricing"
    },
    {
      id: 6,
      title: "Free Site Visit",
      description: "Schedule complimentary site visits with our experts. Get personal guidance and on-site property evaluation at no extra cost.",
      icon: MapPinIcon,
      highlight: "Personal Guidance",
      badge: "Expert Assisted"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "15,000+", label: "Properties Verified" },
    { number: "200+", label: "RERA Projects" },
    { number: "4.9/5", label: "Customer Rating" }
  ];
  // 6th
  const projects: Project[] = [
    {
      id: 1,
      name: "Skyrise Towers",
      builder: "Elite Builders",
      location: "Sector 62, Gurugram",
      price: "₹1.2Cr - ₹2.5Cr",
      pricePerSqft: "₹12,500/sqft",
      possessionDate: "Dec 2025",
      launchDate: "New Launch",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
      unitTypes: ["2 BHK", "3 BHK", "4 BHK"],
      offers: ["5% Early Bird Discount", "Free Modular Kitchen", "No GST"],
      reraId: "HRERA-123456",
      status: "new-launch",
      rating: 4.8,
      totalUnits: 200,
      availableUnits: 45,
      amenities: ["Swimming Pool", "Club House", "Gym", "Park"]
    },
    {
      id: 2,
      name: "Luxury Greens",
      builder: "Premium Developers",
      location: "Golf Course Road, Gurugram",
      price: "₹2.5Cr - ₹5Cr",
      pricePerSqft: "₹18,000/sqft",
      possessionDate: "Mar 2026",
      launchDate: "Last Week",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600",
      unitTypes: ["3 BHK", "4 BHK", "Penthouse"],
      offers: ["No Registration Charges", "Free Car Parking", "Zero Maintenance for 2 Years"],
      reraId: "HRERA-789012",
      status: "hot-selling",
      rating: 4.9,
      totalUnits: 150,
      availableUnits: 12,
      amenities: ["Private Pool", "Concierge", "Theater", "Spa"]
    },
    {
      id: 3,
      name: "Urban Nest",
      builder: "Cityscape Builders",
      location: "Sector 128, Noida",
      price: "₹80L - ₹1.8Cr",
      pricePerSqft: "₹9,800/sqft",
      possessionDate: "Aug 2025",
      launchDate: "2 Weeks Ago",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
      unitTypes: ["1 BHK", "2 BHK", "3 BHK"],
      offers: ["10% Down Payment", "Easy Payment Plan", "Free Interior"],
      reraId: "UPRERA-345678",
      status: "hot-selling",
      rating: 4.6,
      totalUnits: 300,
      availableUnits: 28,
      amenities: ["Gym", "Play Area", "Security", "Park"]
    },
    {
      id: 4,
      name: "Riverfront Residences",
      builder: "Nature Homes",
      location: "Yamuna Expressway, Noida",
      price: "₹1.5Cr - ₹3.2Cr",
      pricePerSqft: "₹11,200/sqft",
      possessionDate: "Jun 2026",
      launchDate: "Just Launched",
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600",
      unitTypes: ["2 BHK", "3 BHK", "Garden Villa"],
      offers: ["River Facing Premium", "Club Membership", "Smart Home Setup"],
      reraId: "UPRERA-901234",
      status: "new-launch",
      rating: 4.7,
      totalUnits: 180,
      availableUnits: 62,
      amenities: ["River View", "Boating", "Jogging Track", "Yoga Deck"]
    },
    // {
    //   id: 5,
    //   name: "Tech Park Residency",
    //   builder: "Innovate Spaces",
    //   location: "Cyber City, Gurugram",
    //   price: "₹90L - ₹2.1Cr",
    //   pricePerSqft: "₹10,500/sqft",
    //   possessionDate: "Oct 2025",
    //   launchDate: "1 Month Ago",
    //   image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
    //   unitTypes: ["Studio", "2 BHK", "3 BHK"],
    //   offers: ["Waived Stamp Duty", "Co-working Space", "Tech Package"],
    //   reraId: "HRERA-567890",
    //   status: "almost-sold",
    //   rating: 4.5,
    //   totalUnits: 250,
    //   availableUnits: 8,
    //   amenities: ["Co-working", "Cafeteria", "Tech Lounge", "Fiber Internet"]
    // },
    // {
    //   id: 6,
    //   name: "Heritage Homes",
    //   builder: "Classic Constructions",
    //   location: "South Delhi",
    //   price: "₹3Cr - ₹8Cr",
    //   pricePerSqft: "₹25,000/sqft",
    //   possessionDate: "Dec 2024",
    //   launchDate: "Limited Units",
    //   image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600",
    //   unitTypes: ["3 BHK", "4 BHK", "Duplex"],
    //   offers: ["Heritage Premium", "Customization", "Priority Location"],
    //   reraId: "DLRERA-112233",
    //   status: "hot-selling",
    //   rating: 4.9,
    //   totalUnits: 80,
    //   availableUnits: 5,
    //   amenities: ["Heritage Design", "Large Balcony", "Servant Quarter", "Parking"]
    // }
  ];

  const getStatusBadge = (status: Project['status']) => {
    const statusConfig = {
      'new-launch': { label: 'New Launch', color: 'bg-green-500' },
      'hot-selling': { label: 'Hot Selling', color: 'bg-red-500' },
      'almost-sold': { label: 'Almost Sold', color: 'bg-orange-500' }
    };
    
    const config = statusConfig[status];
    return (
      <span className={`${config.color} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1`}>
        {status === 'hot-selling' && <FireIconSolid className="h-3 w-3" />}
        {config.label}
      </span>
    );
  };

  // 7th
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Gurugram",
      rating: 5,
      review: "PropertyDeals helped me find my dream 3BHK in Sector 62. The entire process was seamless - from site visits to documentation. Their team ensured complete transparency and saved me from hidden costs that other brokers usually charge.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      property: "3 BHK Apartment in Elite Homes",
      purchaseDate: "January 2024",
      verified: true,
      likes: 24,
      tags: ["Transparent Process", "Great Support", "Timely Possession"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Noida",
      rating: 5,
      review: "As a first-time home buyer, I was quite nervous. But the team at PropertyDeals made it so easy! They explained every document, negotiated the best price, and even helped with home loan processing. Zero brokerage was the cherry on top!",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      property: "2 BHK in Tech Park Residency",
      purchaseDate: "December 2023",
      verified: true,
      likes: 31,
      tags: ["First-time Buyer", "Loan Assistance", "Zero Brokerage"]
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Delhi",
      rating: 4,
      review: "Excellent service! Found a perfect commercial space for my startup. The legal verification and document process was thorough. The site visits were well-organized and the team was always available for queries.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      property: "Commercial Space in Cyber Hub",
      purchaseDate: "November 2023",
      verified: true,
      likes: 18,
      tags: ["Commercial Property", "Legal Support", "Quick Process"]
    },
    {
      id: 4,
      name: "Sunita Mehta",
      location: "Faridabad",
      rating: 5,
      review: "After dealing with multiple brokers, finally found PropertyDeals. Their verified listings saved me from fake properties. The free site visits and honest advice helped me choose the right property within my budget.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      property: "Builder Floor in Greenfield",
      purchaseDate: "February 2024",
      verified: true,
      likes: 29,
      tags: ["Verified Listings", "Budget Friendly", "Honest Advice"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Greater Noida",
      rating: 5,
      review: "The 24/7 support is real! I had queries at odd hours and always got immediate responses. The property recommendations were spot-on based on my requirements. Highly recommended for serious buyers.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      property: "4 BHK Villa in Luxury Greens",
      purchaseDate: "March 2024",
      verified: true,
      likes: 42,
      tags: ["24/7 Support", "Personalized Service", "Quick Response"]
    },
    {
      id: 6,
      name: "Neha Gupta",
      location: "Ghaziabad",
      rating: 4,
      review: "Great experience buying my studio apartment. The team helped me understand the payment plan and ensured all RERA guidelines were followed. The possession was handed over exactly as promised.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      property: "Studio Apartment in Urban Nest",
      purchaseDate: "January 2024",
      verified: true,
      likes: 15,
      tags: ["RERA Compliant", "On-time Possession", "Studio Apartment"]
    }
  ];

  const stats1 = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "2,500+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" }
  ];

  const renderStars = (rating: number) => {
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
  // 8th
  const services: Service[] = [
    {
      id: 1,
      title: "Buy Property",
      description: "Find your dream home from verified listings with complete legal support and price transparency.",
      icon: HomeModernIcon,
      features: [
        "Verified Property Listings",
        "Legal Document Verification",
        "Price Negotiation Support",
        "Site Visits & Shortlisting",
        "RERA Compliance Check",
        "Post-purchase Support"
      ],
      price: "Zero Brokerage*",
      duration: "15-30 Days",
      popular: true,
      cta: "Find Your Home",
      route: "/services/buy",
      stats: [
        { value: "10,000+", label: "Properties" },
        { value: "98%", label: "Satisfaction" }
      ]
    },
    {
      id: 2,
      title: "Sell Property",
      description: "Get the best price for your property with maximum visibility and expert negotiation support.",
      icon: BuildingStorefrontIcon,
      features: [
        "Free Property Valuation",
        "Professional Photography",
        "Multi-platform Listing",
        "Buyer Verification",
        "Legal Documentation",
        "Quick Deal Closure"
      ],
      price: "1% Commission",
      duration: "30-45 Days",
      cta: "Sell Now",
      route: "/services/sell",
      stats: [
        { value: "45 Days", label: "Avg. Selling Time" },
        { value: "15%", label: "Better Price" }
      ]
    },
    {
      id: 3,
      title: "Rent Assistance",
      description: "Hassle-free rental experience with tenant verification, documentation, and agreement support.",
      icon: KeyIcon,
      features: [
        "Tenant Background Check",
        "Rental Agreement Drafting",
        "Property Listing",
        "Rent Negotiation",
        "Move-in Assistance",
        "Maintenance Support"
      ],
      price: "Half Month Rent",
      duration: "7-10 Days",
      cta: "Rent Property",
      route: "/services/rent",
      stats: [
        { value: "5,000+", label: "Rental Properties" },
        { value: "24/7", label: "Support" }
      ]
    },
    {
      id: 4,
      title: "Home Loan Assistance",
      description: "Get the best home loan deals with lowest interest rates and quick approval from top banks.",
      icon: BanknotesIcon,
      features: [
        "Best Interest Rates",
        "Multiple Bank Options",
        "Documentation Support",
        "Quick Approval",
        "EMI Planning",
        "Pre-closure Guidance"
      ],
      price: "Free Service",
      duration: "3-7 Days",
      popular: true,
      cta: "Apply for Loan",
      route: "/services/loan",
      stats: [
        { value: "20+", label: "Bank Partners" },
        { value: "95%", label: "Approval Rate" }
      ]
    },
    {
      id: 5,
      title: "Interior Services",
      description: "Transform your space with professional interior design and execution services.",
      icon: PaintBrushIcon,
      features: [
        "Free Design Consultation",
        "3D Visualization",
        "Quality Material",
        "Timely Execution",
        "Budget Planning",
        "Post-completion Support"
      ],
      price: "₹499/sqft",
      duration: "30-60 Days",
      cta: "Design My Home",
      route: "/services/interior",
      stats: [
        { value: "500+", label: "Projects" },
        { value: "4.8/5", label: "Rating" }
      ]
    },
    {
      id: 6,
      title: "Property Management",
      description: "Complete property management services for landlords and NRI property owners.",
      icon: CogIcon,
      features: [
        "Rent Collection",
        "Maintenance Management",
        "Tenant Management",
        "Property Inspection",
        "Bill Payments",
        "Monthly Reports"
      ],
      price: "8% Monthly Rent",
      duration: "Ongoing",
      cta: "Manage Property",
      route: "/services/management",
      stats: [
        { value: "99%", label: "Rent Collection" },
        { value: "1,200+", label: "Properties" }
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Share your requirements and get expert advice",
      icon: UserGroupIcon
    },
    {
      step: "02",
      title: "Customized Plan",
      description: "Get a tailored plan based on your needs and budget",
      icon: DocumentTextIcon
    },
    {
      step: "03",
      title: "Execution",
      description: "We handle everything while you track progress",
      icon: CogIcon
    },
    {
      step: "04",
      title: "Completion",
      description: "Get delivery with complete documentation",
      icon: ShieldCheckIcon
    }
  ];
  // 9th
  const partners: Partner[] = [
    {
      id: 1,
      name: "DLF Limited",
      logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=50&fit=crop",
      type: "builder",
      projects: "250+",
      established: "1946",
      rating: 4.9
    },
    {
      id: 2,
      name: "Emaar India",
      logo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100&h=50&fit=crop",
      type: "builder",
      projects: "180+",
      established: "2005",
      rating: 4.8
    },
    {
      id: 3,
      name: "Sobha Limited",
      logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&h=50&fit=crop",
      type: "builder",
      projects: "120+",
      established: "1995",
      rating: 4.7
    },
    {
      id: 4,
      name: "Godrej Properties",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=50&fit=crop",
      type: "builder",
      projects: "90+",
      established: "1990",
      rating: 4.8
    },
    {
      id: 5,
      name: "Brigade Group",
      logo: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100&h=50&fit=crop",
      type: "builder",
      projects: "150+",
      established: "1986",
      rating: 4.6
    },
    {
      id: 6,
      name: "Prestige Group",
      logo: "https://images.unsplash.com/photo-1600585154340-9633f73f16d1?w=100&h=50&fit=crop",
      type: "builder",
      projects: "200+",
      established: "1986",
      rating: 4.7
    },
    {
      id: 7,
      name: "HDFC Bank",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=50&fit=crop",
      type: "bank",
      projects: "Home Loans",
      established: "1994",
      rating: 4.8
    },
    {
      id: 8,
      name: "SBI Home Loans",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=50&fit=crop",
      type: "bank",
      projects: "Home Loans",
      established: "1955",
      rating: 4.6
    },
    {
      id: 9,
      name: "ICICI Bank",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=50&fit=crop",
      type: "bank",
      projects: "Home Loans",
      established: "1994",
      rating: 4.7
    },
    {
      id: 10,
      name: "Axis Bank",
      logo: "https://images.unsplash.com/photo-1551135049-8a33b42738b4?w=100&h=50&fit=crop",
      type: "bank",
      projects: "Home Loans",
      established: "1993",
      rating: 4.5
    },
    {
      id: 11,
      name: "Legal Solutions Inc",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&h=50&fit=crop",
      type: "legal",
      projects: "Legal Partner",
      established: "2005",
      rating: 4.9
    },
    {
      id: 12,
      name: "Design & Build",
      logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=50&fit=crop",
      type: "interior",
      projects: "Interior Partner",
      established: "2010",
      rating: 4.8
    }
  ];

  const partnerStats = [
    { number: "50+", label: "Partner Builders", icon: BuildingLibraryIcon },
    { number: "15+", label: "Banking Partners", icon: ShieldCheckIcon },
    { number: "500+", label: "Completed Projects", icon: TrophyIcon },
    { number: "4.8/5", label: "Average Rating", icon: HandThumbUpIcon }
  ];

  // Group partners by type for better organization
  const builders = partners.filter(p => p.type === 'builder');
  const banks = partners.filter(p => p.type === 'bank');
  const others = partners.filter(p => p.type !== 'builder' && p.type !== 'bank');

  const PartnerLogo = ({ partner }: { partner: Partner }) => (
    <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      {/* Logo */}
      <div className="flex items-center justify-center h-12 mb-4">
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>

      {/* Partner Name */}
      <h3 className="text-center font-semibold text-gray-900 text-sm mb-2 line-clamp-1">
        {partner.name}
      </h3>

      {/* Partner Details */}
      <div className="text-center space-y-1">
        <div className="text-xs text-gray-600">
          {partner.projects}
        </div>
        <div className="flex items-center justify-center text-xs text-gray-500">
          <span>Est. {partner.established}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            ⭐ {partner.rating}
          </span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-600 rounded-xl bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
  // 10th
   const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    preferredLocation: '',
    budget: '',
    propertyType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const locations1 = [
    'Gurugram',
    'Noida',
    'Delhi',
    'Greater Noida',
    'Faridabad',
    'Ghaziabad',
    'Any Location'
  ];

  const budgets = [
    'Under ₹50L',
    '₹50L - ₹1Cr',
    '₹1Cr - ₹2Cr',
    '₹2Cr - ₹5Cr',
    '₹5Cr+',
    'Not Sure'
  ];

  const propertyTypes1 = [
    'Residential Apartment',
    'Commercial Space',
    'Luxury Villa',
    'Plot/Land',
    'Studio Apartment',
    'Builder Floor',
    'Penthouse',
    'Any Type'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate API call
  //   await new Promise(resolve => setTimeout(resolve, 2000));
    
  //   setIsSubmitting(false);
  //   setIsSubmitted(true);
    
  //   // Reset form after success
  //   setTimeout(() => {
  //     setFormData({
  //       name: '',
  //       mobile: '',
  //       email: '',
  //       preferredLocation: '',
  //       budget: '',
  //       propertyType: '',
  //       message: ''
  //     });
  //     setIsSubmitted(false);
  //   }, 5000);
  // };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: '+91 98765 43210',
      subtitle: 'Mon-Sun, 8AM-10PM'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: 'info@propertydeals.com',
      subtitle: 'We reply within 2 hours'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Office',
      details: 'Connaught Place, Delhi',
      subtitle: 'Get directions'
    },
    {
      icon: ClockIcon,
      title: 'Working Hours',
      details: '24/7 Available',
      subtitle: 'For site visits & support'
    }
  ];

  const features1 = [
    'Get personalized property recommendations',
    'Best price guarantee',
    'Zero brokerage on selected properties',
    'Free site visits',
    'Home loan assistance',
    'Legal verification support'
  ];

  // 11th
  const [openItems, setOpenItems] = useState<number[]>([1]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What areas in Delhi NCR do you cover?",
      answer: "We cover all major areas in Delhi NCR including Gurugram (all sectors), Noida (all sectors), Greater Noida, Faridabad, Ghaziabad, and all prime locations in Delhi. Our team has extensive knowledge of both established and emerging localities across the National Capital Region.",
      category: "general"
    },
    {
      id: 2,
      question: "Do you charge any brokerage fees?",
      answer: "For buyers, we offer zero brokerage on most properties. For sellers, we charge a nominal 1% commission only after successful deal closure, which is significantly lower than the standard 2% market rate. There are no hidden charges or upfront fees.",
      category: "buying"
    },
    {
      id: 3,
      question: "How do you verify property documents?",
      answer: "We have a dedicated legal team that verifies all property documents including title deeds, encumbrance certificates, RERA registration, building approvals, and tax receipts. We also conduct physical site verification and ensure all documents are legally vetted before listing.",
      category: "legal"
    },
    {
      id: 4,
      question: "What is the typical process for buying a property through you?",
      answer: "Our process is simple: 1) Free consultation to understand your requirements 2) Shortlisted property recommendations 3) Site visits 4) Price negotiation 5) Legal verification 6) Documentation & registration 7) Post-sales support. The entire process usually takes 15-30 days.",
      category: "buying"
    },
    {
      id: 5,
      question: "Do you provide home loan assistance?",
      answer: "Yes, we have tie-ups with 20+ leading banks and NBFCs including HDFC, SBI, ICICI, and Axis Bank. Our loan experts help you get the best interest rates, quick approvals, and handle all documentation. This service is completely free for our customers.",
      category: "general"
    },
    {
      id: 6,
      question: "Can you help with property valuation for selling?",
      answer: "Absolutely! We provide free property valuation services considering factors like location, amenities, market trends, and recent transactions in your area. Our valuation report helps you set the right price and get the best value for your property.",
      category: "selling"
    }
  ];

  const categories1 = [
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


    // enquery form
    const [isRtl, setIsRtl] = useState(false);

  const toggleDirection = () => {
    setIsRtl(!isRtl);
  };
      const projects2 = [
    {
      id: 1,
      title: "Skyline Residences",
      location: "Rohini Sector 7, Delhi",
      price: "₹2.5 Cr",
      area: "1800 sq.ft.",
      image: "/project1.jpg",
      status: "Pre Launch"
    },
    {
      id: 2,
      title: "Luxuria Greens",
      location: "Dilshad Garden, Delhi",
      price: "₹1.8 Cr",
      area: "1500 sq.ft.",
      image: "/project2.jpg",
      status: "Pre Launch"
    },
    {
      id: 3,
      title: "Skyline Residences",
      location: "Rohini Sector 7, Delhi",
      price: "₹2.5 Cr",
      area: "1800 sq.ft.",
      image: "/project1.jpg",
      status: "Pre Launch"
    },
    {
      id: 4,
      title: "Luxuria Greens",
      location: "Dilshad Garden, Delhi",
      price: "₹1.8 Cr",
      area: "1500 sq.ft.",
      image: "/project2.jpg",
      status: "Pre Launch"
    },
    {
      id: 5,
      title: "Skyline Residences",
      location: "Rohini Sector 7, Delhi",
      price: "₹2.5 Cr",
      area: "1800 sq.ft.",
      image: "/project1.jpg",
      status: "Pre Launch"
    },
    {
      id: 2,
      title: "Luxuria Greens",
      location: "Dilshad Garden, Delhi",
      price: "₹1.8 Cr",
      area: "1500 sq.ft.",
      image: "/project2.jpg",
      status: "Pre Launch"
    },
    // Add more projects...
  ];

  return (
    <>
     <div className="relative h-screen min-h-[700px] bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <HomeModernIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">
                Trusted by 10,000+ homeowners
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Your
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Dream Home
              </span>
            </h1>

            {/* Subheading */}
            <p className="mb-8 max-w-md text-xl text-gray-300">
              Discover exclusive properties in the world&apos;s most sought-after locations. 
              Your perfect home is just a search away.
            </p>

            {/* Stats */}
            <div className="mb-8 flex gap-8">
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-gray-400">Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-gray-400">Cities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5★</div>
                <div className="text-gray-400">Rated</div>
              </div>
            </div>

            {/* Search Form */}
            <div className="rounded-2xl bg-white/10 p-1 backdrop-blur-sm">
              <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-2xl lg:flex-row lg:items-center lg:gap-2">
                {/* Location Search */}
                <div className="flex-1">
                  <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="location"
                      placeholder="Enter city, neighborhood, or ZIP"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div className="flex-1">
                  <label htmlFor="property-type" className="mb-2 block text-sm font-medium text-gray-700">
                    Property Type
                  </label>
                  <select
                    id="property-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="flex-1">
                  <label htmlFor="price-range" className="mb-2 block text-sm font-medium text-gray-700">
                    Price Range
                  </label>
                  <select
                    id="price-range"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
                <div className="lg:pt-6">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition-all hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg lg:w-auto"
                  >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-gray-300"
                  ></div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">1,200+</span> homes found this week
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <div className="h-6 w-px bg-white"></div>
        </div>
      </div>
    </div>
    {/* //  end of 1st */}
     {/* <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pre Launch Projects</h2>
        
        <div
          className={`overflow-x-auto ${isRtl ? 'rtl' : ''}`} 
          style={{ direction: isRtl ? 'rtl' : 'ltr' }} 
        >
          <div className="flex gap-4">
            {projects2.map((project) => (
              <div key={project.id} className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden">
                      <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs text-gray-500">Img</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-800 text-sm truncate">
                        {project.title}
                      </h3>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-500 text-xs mt-1 truncate">
                      <i className="fas fa-map-marker-alt mr-1"></i>
                      {project.location}
                    </p>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-green-600 font-bold text-sm">
                        {project.price}
                      </span>
                      <span className="text-blue-600 text-xs font-medium">
                        {project.area}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section> */}
    
    {/* 2nd */}
    <section className="py-13 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties in <span className="text-blue-600">Delhi NCR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover premium residential properties across Delhi, Gurugram, Noida, and Faridabad
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  {favorites.includes(property.id) ? (
                    <HeartIconSolid className="h-6 w-6 text-red-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6 text-gray-600" />
                  )}
                </button>

                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xl font-bold text-gray-900">{property.price}</div>
                    <div className="text-sm text-gray-600">{property.pricePerSqft}</div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                {/* Title and Location */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Specifications */}
                <div className="flex items-center justify-between mb-4 py-3 border-y border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <HomeModernIcon className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaBath className="h-4 w-4 mr-1" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ArrowsPointingOutIcon className="h-4 w-4 mr-1" />
                    <span>{property.sqft}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.slice(0, 3).map((amenity, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{property.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                    View Details
                  </button>
                  <button className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View All Properties in Delhi NCR
          </button>
        </div>
      </div>
    </section>
    <Prelaunch_section />
    {/* Search Form */}
           <div className="rounded-2xl bg-white/10 p-1 backdrop-blur-sm max-w-screen-lg mx-auto">
  {/* Message Block */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Get the List of <span className="text-blue-600">Top Properties in Noida</span>
    </h2>
    <p className="text-sm text-gray-600 max-w-2xl mx-auto">
      Send enquiry, and we'll send you contact details in seconds for free.
    </p>
  </div>

  <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-2xl lg:flex-row lg:items-center lg:gap-2">

    {/* Name Input */}
    <div className="flex-1">
      <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
        Name
      </label>
      <div className="relative">
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          // value={name} 
          // onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Mobile Number Input */}
    <div className="flex-1">
      <label htmlFor="mobile-number" className="mb-2 block text-sm font-medium text-gray-700">
        Mobile Number
      </label>
      <div className="relative">
        <input
          type="tel"
          id="mobile-number"
          placeholder="Enter your mobile number"
          // value={mobileNumber}
          // onChange={(e) => setMobileNumber(e.target.value)}
          className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    

    {/* Property Type Select */}
    <div className="flex-1">
      <label htmlFor="property-type" className="mb-2 block text-sm font-medium text-gray-700">
        Property Type
      </label>
      <select
        id="property-type"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
        className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {propertyTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>

    {/* Price Range Select */}
    <div className="flex-1">
      <label htmlFor="price-range" className="mb-2 block text-sm font-medium text-gray-700">
        Price Range
      </label>
      <select
        id="price-range"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {priceRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
    </div>

    {/* Send Enquiry Button */}
    <div className="lg:pt-6">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white transition-all hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg lg:w-auto"
      >
        Send Enquiry
      </button>
    </div>

  </div>

</div>



    {/* 3rd */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Locations in <span className="text-blue-600">Delhi NCR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore premium residential areas across the National Capital Region with high growth potential
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location) => (
            <Link 
              key={location.id} 
              href={`/locations/${location.name.toLowerCase().replace(' ', '-')}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105 h-full flex flex-col">
                {/* Location Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                      <span className="text-sm">{location.area}</span>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-900">{location.rating}</span>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                    {location.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center text-gray-600 mb-1">
                        <HomeModernIcon className="h-4 w-4 mr-1" />
                        <span className="text-xs">Properties</span>
                      </div>
                      <div className="font-semibold text-gray-900">{location.properties}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center text-gray-600 mb-1">
                        <ArrowUpIcon className="h-4 w-4 mr-1" />
                        <span className="text-xs">Growth</span>
                      </div>
                      <div className="font-semibold text-green-600">{location.growth}</div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs text-blue-600 font-medium mb-1">Average Price Range</div>
                    <div className="text-lg font-bold text-blue-700">{location.avgPrice}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {location.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Overlay */}
                <div className="px-6 pb-6">
                  <div className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group-hover:shadow-lg">
                    Explore Properties
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Location is Right for You?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our property experts will help you find the perfect location based on your budget, lifestyle, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Talk to Property Expert
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Compare Locations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 4th */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Property by <span className="text-blue-600">Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the perfect property type that matches your lifestyle and investment goals
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.id} 
                href={category.route}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105 h-full flex flex-col border border-gray-100">
                  {/* Category Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Properties Count */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {category.properties}
                      </div>
                    </div>

                    {/* Category Name */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Category Details */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
                      {category.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {category.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xs text-gray-500">{stat.label}</div>
                          <div className="text-sm font-semibold text-gray-900">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Price and Growth */}
                    <div className="flex justify-between items-center mb-3 p-2 bg-blue-50 rounded-lg">
                      <div>
                        <div className="text-xs text-blue-600">Starting from</div>
                        <div className="text-sm font-bold text-blue-700">{category.startingPrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-green-600">Growth</div>
                        <div className="text-sm font-bold text-green-700">↑{category.growth}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {category.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {category.tags.length > 2 && (
                        <span className="inline-block bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{category.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-4 pb-4">
                    <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-2 rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-cyan-700 transition-colors group-hover:shadow-lg">
                      Explore {category.properties.split('+')[0]}+ Properties
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Property Type?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our property consultants will guide you to the perfect category based on your budget, requirements, and investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                <CurrencyRupeeIcon className="h-5 w-5 mr-2" />
                Get Investment Advice
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Compare Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 5th */}
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
            We are committed to making your property journey seamless, transparent, and successful with our customer-first approach.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                {/* Badge */}
                {feature.badge && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>
                )}

                {/* Icon Container */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Highlight */}
                  {feature.highlight && (
                    <div className="flex items-center text-sm text-blue-600 font-semibold">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature.highlight}
                    </div>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Find Your Dream Property?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Experience the difference with our customer-centric approach. Get expert guidance every step of the way.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <UserGroupIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated Relationship Manager</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BuildingLibraryIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span>Legal & Documentation Support</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <ClockIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span>Quick Loan Processing Assistance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Book Free Consultation
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center p-8 lg:p-12">
              <div className="text-center text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 inline-block">
                  <UserGroupIcon className="h-16 w-16 text-white mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Expert Team</h4>
                  <p className="text-blue-100">
                    Get personalized assistance from our property experts
                  </p>
                </div>
                
                <div className="mt-6 flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span>Online Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span>On-site Assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 font-medium">Trusted and Recognized By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">RERA</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">CREDAI</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">NABARD</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 6th */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full px-4 py-2 mb-4">
            <FireIconSolid className="h-5 w-5" />
            <span className="text-sm font-semibold">Hot & New Projects</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest <span className="text-blue-600">Projects & New Launches</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover freshly launched properties with exclusive pre-booking offers and early bird discounts
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  {getStatusBadge(project.status)}
                </div>

                {/* Available Units */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  {project.availableUnits}/{project.totalUnits} Units Left
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="text-2xl font-bold text-white">{project.price}</div>
                  <div className="text-white/90 text-sm">{project.pricePerSqft}</div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-white text-sm font-semibold">{project.rating}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Project Name and Builder */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm">by {project.builder}</p>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">Possession</div>
                      <div className="font-semibold text-gray-900">{project.possessionDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">Launch</div>
                      <div className="font-semibold text-gray-900">{project.launchDate}</div>
                    </div>
                  </div>
                </div>

                {/* Unit Types */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Unit Types</div>
                  <div className="flex flex-wrap gap-2">
                    {project.unitTypes.map((type, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special Offers */}
                <div className="mb-6">
                  <div className="flex items-center text-sm font-semibold text-green-600 mb-2">
                    <TagIcon className="h-4 w-4 mr-2" />
                    Special Offers
                  </div>
                  <div className="space-y-2">
                    {project.offers.slice(0, 2).map((offer, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{offer}</span>
                      </div>
                    ))}
                    {project.offers.length > 2 && (
                      <div className="text-xs text-gray-500">
                        +{project.offers.length - 2} more offers
                      </div>
                    )}
                  </div>
                </div>

                {/* RERA ID */}
                <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-xs text-gray-500">
                    <ShieldCheckIcon className="h-4 w-4 mr-1" />
                    RERA: {project.reraId}
                  </div>
                  <div className={`text-xs font-semibold ${
                    project.availableUnits < 20 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {project.availableUnits < 20 ? 'Selling Fast!' : 'Available'}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                    Book Site Visit
                  </button>
                  <button className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Brochure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Get First Access to New Launches
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be the first to know about upcoming projects and get exclusive pre-booking benefits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 7th */}
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
            <HandThumbUpIcon className="h-5 w-5 text-green-500" />
            <span className="text-sm font-semibold text-gray-700">Trusted by 2,500+ Customers</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their experience with us.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats1.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.slice(0, 4).map((testimonial) => (
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

              {/* Customer Info */}
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
                  <p className="text-gray-600 text-sm mb-2">{testimonial.location}</p>
                  <div className="flex items-center gap-4">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-gray-500">{testimonial.purchaseDate}</span>
                  </div>
                </div>
              </div>

              {/* Property & Tags */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-900 mb-3">
                  {testimonial.property}
                </p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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

        {/* Carousel for Mobile */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <FaQuoteLeft className="h-8 w-8 text-blue-100 mb-6" />
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        "{testimonial.review}"
                      </p>
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
                          <p className="text-gray-600 text-sm mb-2">{testimonial.location}</p>
                          {renderStars(testimonial.rating)}
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Share Your Experience?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who found their dream home with PropertyDeals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Write a Review
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View More Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 font-medium">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">Times Property</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">Housing.com</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">MagicBricks</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
              <span className="text-gray-700 font-semibold">99acres</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 8th */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <CogIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Complete Real Estate Solutions</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end real estate services to meet all your property needs - from buying to management
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
                  service.popular ? 'border-blue-500' : 'border-gray-100'
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
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          {service.duration}
                        </span>
                        <span className="text-green-600 font-semibold">{service.price}</span>
                      </div>
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
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group/btn">
                    {service.cta}
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How Our Service Works</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Simple 4-step process to get your real estate needs fulfilled efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
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
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Multiple Services?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get special package deals when you combine multiple services. Save up to 25% on bundled services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                Get Custom Package
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Download Service Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 9th */}
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
            <ShieldCheckIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Trusted Partnerships</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Partners & Builders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collaborating with India's most reputable builders, banks, and service providers to bring you the best real estate opportunities
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Partner Builders Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Premium Builder Partners
            </h3>
            <p className="text-gray-600">
              Collaborating with India's most trusted real estate developers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {builders.map((partner) => (
              <PartnerLogo key={partner.id} partner={partner} />
            ))}
          </div>
        </div>

        {/* Banking Partners Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Banking & Finance Partners
            </h3>
            <p className="text-gray-600">
              Get the best home loan deals from our banking partners
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {banks.map((partner) => (
              <PartnerLogo key={partner.id} partner={partner} />
            ))}
          </div>
        </div>

        {/* Other Partners */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Service Partners
            </h3>
            <p className="text-gray-600">
              Complete ecosystem for your real estate journey
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {others.map((partner) => (
              <PartnerLogo key={partner.id} partner={partner} />
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Want to Become Our Partner?
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Join our network of trusted partners and reach thousands of potential customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Builder Partnership
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Service Partnership
              </button>
            </div>
            <div className="mt-6 text-sm text-blue-200">
              Trusted by 50+ builders and 15+ banking partners across India
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 font-medium">Certifications & Memberships</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
              <span className="text-gray-700 font-semibold text-sm">CREDAI Member</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
              <span className="text-gray-700 font-semibold text-sm">RERA Certified</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
              <span className="text-gray-700 font-semibold text-sm">ISO 9001:2015</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-gray-200">
              <span className="text-gray-700 font-semibold text-sm">Builders Association</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* 10th */}
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
                <BuildingOfficeIcon className="h-5 w-5 text-blue-300" />
                <span className="text-sm font-semibold text-blue-200">Get Expert Assistance</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Get Best Property Deals in <span className="text-blue-400">Delhi NCR</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Connect with our property experts and get personalized recommendations based on your requirements.
              </p>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
              <div className="space-y-4">
                {features1.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-600 rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                    </div>
                    <p className="text-blue-100 font-medium text-lg">{item.details}</p>
                    <p className="text-blue-200 text-sm mt-1">{item.subtitle}</p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-blue-200 text-sm">Happy Customers</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">15K+</div>
                <div className="text-blue-200 text-sm">Properties</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Our property expert will contact you within 30 minutes with personalized recommendations.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
                  <strong>What's next?</strong> Check your email for a confirmation and expect a call from our team.
                </div>
              </div>
            ) : (
              <>
                {/* <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Free Consultation
                  </h3>
                  <p className="text-gray-600">
                    Fill the form and our expert will help you find the perfect property
                  </p>
                </div> */}

                {/* <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <UserIcon className="h-4 w-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                        <DevicePhoneMobileIcon className="h-4 w-4 inline mr-2" />
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        <EnvelopeIcon className="h-4 w-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div>
                      <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPinIcon className="h-4 w-4 inline mr-2" />
                        Preferred Location
                      </label>
                      <select
                        id="preferredLocation"
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select Location</option>
                        {locations1.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        <CurrencyRupeeIcon className="h-4 w-4 inline mr-2" />
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select Budget</option>
                        {budgets.map(budget => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                      <BuildingOfficeIcon className="h-4 w-4 inline mr-2" />
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select Property Type</option>
                      {propertyTypes1.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your specific requirements, preferred amenities, timeline, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Get Free Property Recommendations
                        <PhoneIcon className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to our Privacy Policy and consent to receive property recommendations.
                  </p>
                </form> */}
                
              </>
            )}
          </div>
        </div>
      </div>
    </section>
    {/* 11th */}
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
            {categories1.map(category => (
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

          {/* Bottom CTA */}
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
              <button className="w-full mt-6 bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Now: +91 98765 43210
              </button>
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
              <button className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Start Live Chat
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Property Buying Guide
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Home Loan Process
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Legal Documentation
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
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
