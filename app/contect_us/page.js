// app/contact/page.jsx
"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckCircleIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyInterest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        propertyInterest: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 98765 43210",
      subtitle: "Mon-Sat, 9AM to 7PM"
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email Us",
      details: "info@delhirealestate.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Visit Our Office",
      details: "Connaught Place, Central Delhi",
      subtitle: "Open for appointments"
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: "Business Hours",
      details: "Monday - Saturday",
      subtitle: "9:00 AM - 7:00 PM"
    }
  ];

  const propertyOptions = [
    "Select a property type",
    "Luxury Penthouse",
    "Modern Villa", 
    "Sky Villa",
    "Apartments in Delhi",
    "Villas in Gurugram",
    "Properties in Noida",
    "Residences in Faridabad",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center py-28 md:py-36"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600')",
        }}
      >
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Contact Us
    </h1>
    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
      Get in touch with our expert real estate consultants for premium properties across Delhi NCR
    </p>
  </div>
</div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <div className="text-blue-700">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-700">{item.details}</p>
                      <p className="text-sm text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-700">Delhi NCR Office</p>
                    <p className="text-sm text-gray-500">Connaught Place, Central Delhi</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  *By appointment only
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  <span>15+ Years Experience</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  <span>500+ Properties Sold</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  <span>Verified Property Listings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. Our real estate expert will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyInterest" className="block text-sm font-medium text-gray-700 mb-1">
                        Property Interest
                      </label>
                      <select
                        id="propertyInterest"
                        name="propertyInterest"
                        value={formData.propertyInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      >
                        {propertyOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Tell us about your property requirements..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                      I agree to receive property updates and promotional materials from Delhi Real Estate
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* FAQ Section */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      How soon will someone contact me after submitting the form?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Our team typically responds within 24 hours during business days. For urgent inquiries, please call our helpline.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Do you charge any fees for property consultations?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      No, our initial consultation is completely free. We only charge commission upon successful property transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sectiion */}
      <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto px-4">

        
        

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-[350px]"
            src="https://www.google.com/maps?q=Noida%20Sector%2062&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Schedule a personalized property tour with our expert consultants today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
            >
              Call Now: +91 98765 43210
            </a>
            <a
              href="mailto:info@delhirealestate.com"
              className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}