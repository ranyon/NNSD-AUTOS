import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Car, CreditCard, Wrench, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Vehicle Sales",
      description: "Premium selection of new and certified pre-owned vehicles from top manufacturers.",
      features: ["New Vehicle Sales", "Certified Pre-Owned", "Trade-In Evaluations", "Vehicle History Reports"]
    },
    {
      icon: CreditCard,
      title: "Financing Solutions",
      description: "Competitive rates and flexible payment options tailored to your budget.",
      features: ["Low Interest Rates", "Flexible Terms", "Quick Approval", "Credit Assistance"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Expert service and maintenance by certified technicians using genuine parts.",
      features: ["Routine Maintenance", "Major Repairs", "Genuine Parts", "Warranty Service"]
    },
    {
      icon: Shield,
      title: "Extended Warranties",
      description: "Comprehensive protection plans to keep your vehicle running smoothly.",
      features: ["Powertrain Coverage", "Bumper-to-Bumper", "Roadside Assistance", "Rental Car Coverage"]
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Quick and efficient service for busy schedules with online booking.",
      features: ["Oil Changes", "Tire Rotation", "Multi-Point Inspections", "Online Scheduling"]
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated support team available to assist with all your automotive needs.",
      features: ["24/7 Support", "Service Reminders", "Appointment Scheduling", "Customer Portal"]
    }
  ];

  const handleBookService = () => {
    alert('Service booking form would appear here. Our team will contact you to schedule your appointment.');
  };

  const handleGetQuote = () => {
    alert('Quote request form would appear here. Please provide your vehicle details and service needs.');
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our <span className="text-gray-800">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive automotive solutions designed to exceed your expectations. From sales to service, we're your trusted automotive partner.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-black rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-black text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our expert team today to schedule your service or learn more about our comprehensive automotive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookService}
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book Service
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetQuote}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
            >
              Get Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;