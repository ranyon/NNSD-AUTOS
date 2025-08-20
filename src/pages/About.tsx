import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Users, Clock, Star, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Car, number: "500+", label: "Vehicles Sold" },
    { icon: Users, number: "1000+", label: "Happy Customers" },
    { icon: Clock, number: "20+", label: "Years Experience" },
    { icon: Award, number: "50+", label: "Awards Won" }
  ];

  const team = [
    {
      name: "John Smith",
      position: "General Manager",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "20+ years in automotive sales and customer service excellence."
    },
    {
      name: "Sarah Johnson",
      position: "Sales Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Expert in luxury vehicle sales with a passion for customer satisfaction."
    },
    {
      name: "Mike Davis",
      position: "Service Manager",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      description: "Certified technician with expertise in all major automotive brands."
    }
  ];

  const values = [
    {
      title: "Quality",
      description: "We maintain the highest standards in every vehicle we sell and every service we provide."
    },
    {
      title: "Integrity",
      description: "Honest, transparent dealings with every customer, building trust through reliability."
    },
    {
      title: "Excellence",
      description: "Continuous improvement and innovation to exceed customer expectations."
    },
    {
      title: "Service",
      description: "Dedicated customer support before, during, and after every purchase."
    }
  ];

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
            About <span className="text-gray-800">NSD AUTOS</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            For over two decades, NSD AUTOS has been at the forefront of premium automotive sales and service, building lasting relationships with customers through excellence and integrity.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2004, NSD AUTOS began as a small family-owned dealership with a simple mission: to provide exceptional vehicles and unparalleled customer service. What started as a passion for automobiles has grown into one of the region's most trusted automotive destinations.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our commitment to excellence has earned us numerous awards and, more importantly, the loyalty of thousands of satisfied customers. We believe that buying a car should be an exciting experience, not a stressful one.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we continue to evolve with the automotive industry, embracing new technologies and sustainable practices while maintaining the personal touch that has defined us from the beginning.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">NSD</div>
                <div className="text-2xl mb-2">AUTOS</div>
                <div className="text-gray-300">Since 2004</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;