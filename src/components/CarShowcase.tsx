import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Fuel, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestDriveModal from './TestDriveModal';
import CarDetailsModal from './CarDetailsModal';

const CarShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<string>('');
  const [isCarDetailsModalOpen, setIsCarDetailsModalOpen] = useState(false);
  const [selectedCarDetails, setSelectedCarDetails] = useState<any>(null);

  const handleViewDetails = (car: any) => {
    setSelectedCarDetails(car);
    setIsCarDetailsModalOpen(true);
  };

  const handleTestDrive = (carName: string) => {
    setSelectedCar(carName);
    setIsTestDriveModalOpen(true);
  };

  const cars = [
    {
      id: 1,
      name: "Lamborghini Huracan",
      year: "2024",
      price: "$73,900",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Gasoline", transmission: "8-Speed Auto", seats: "5" },
      rating: 4.9
    },
    {
      id: 2,
      name: "Mercedes-AMG C63 S",
      year: "2024",
      price: "$84,900",
      image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Hybrid V8", transmission: "9-Speed Auto", seats: "5" },
      rating: 4.8
    },
    {
      id: 3,
      name: "Audi RS6 Avant",
      year: "2024",
      price: "$127,500",
      image: "https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "8-Speed Auto", seats: "5" },
      rating: 4.9
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: 30 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="inventory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Premium <span className="text-gray-800">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of luxury vehicles, each representing the pinnacle of automotive excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cars.map((car) => (
            <motion.div
              key={car.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={car.image}
                  alt={car.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                  {car.year}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-black">{car.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-black fill-current" />
                    <span className="text-sm text-gray-600">{car.rating}</span>
                  </div>
                </div>

                <p className="text-3xl font-bold text-black mb-4">{car.price}</p>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span>{car.specs.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="h-4 w-4" />
                    <span>{car.specs.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{car.specs.seats}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails(car)}
                    className="flex-1 bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTestDrive(car.name)}
                    className="px-6 border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Test Drive
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <TestDriveModal
        isOpen={isTestDriveModalOpen}
        onClose={() => setIsTestDriveModalOpen(false)}
        carName={selectedCar}
      />
      
      <CarDetailsModal
        isOpen={isCarDetailsModalOpen}
        onClose={() => setIsCarDetailsModalOpen(false)}
        car={selectedCarDetails}
      />
    </section>
  );
};

export default CarShowcase;