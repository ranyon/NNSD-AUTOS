import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Fuel, Settings, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestDriveModal from '../components/TestDriveModal';
import CarDetailsModal from '../components/CarDetailsModal';

const Inventory = () => {
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<string>('');
  const [isCarDetailsModalOpen, setIsCarDetailsModalOpen] = useState(false);
  const [selectedCarDetails, setSelectedCarDetails] = useState<any>(null);

  const cars = [
    {
      id: 1,
      name: "BMW M3 Competition",
      year: "2024",
      price: "$73,900",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Gasoline", transmission: "8-Speed Auto", seats: "5" },
      rating: 4.9,
      description: "The ultimate driving machine with 503 HP twin-turbo inline-6 engine."
    },
    {
      id: 2,
      name: "Mercedes-AMG C63 S",
      year: "2024",
      price: "$84,900",
      image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Hybrid V8", transmission: "9-Speed Auto", seats: "5" },
      rating: 4.8,
      description: "High-performance luxury sedan with hybrid V8 powertrain delivering 671 HP."
    },
    {
      id: 3,
      name: "Audi RS6 Avant",
      year: "2024",
      price: "$127,500",
      image: "https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "8-Speed Auto", seats: "5" },
      rating: 4.9,
      description: "The ultimate performance wagon with 591 HP twin-turbo V8 engine."
    },
    {
      id: 4,
      name: "Tesla Model S Plaid",
      year: "2024",
      price: "$109,990",
      image: "https://images.pexels.com/photos/7144175/pexels-photo-7144175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Electric", transmission: "Single-Speed", seats: "5" },
      rating: 4.9,
      description: "Fastest production sedan with 1,020 HP tri-motor setup and 0-60 in 1.99s."
    },
    {
      id: 5,
      name: "Porsche 911 Turbo S",
      year: "2024",
      price: "$230,400",
      image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Gasoline", transmission: "8-Speed PDK", seats: "4" },
      rating: 4.9,
      description: "Iconic sports car with 640 HP twin-turbo flat-six and all-wheel drive."
    },
    {
      id: 6,
      name: "Lamborghini Huracán EVO",
      year: "2024",
      price: "$248,295",
      image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Gasoline", transmission: "7-Speed DCT", seats: "2" },
      rating: 4.8,
      description: "Italian supercar with 630 HP naturally aspirated V10 and rear-wheel steering."
    }
  ];

  const handleTestDrive = (carName: string) => {
    setSelectedCar(carName);
    setIsTestDriveModalOpen(true);
  };

  const handleViewDetails = (car: any) => {
    setSelectedCarDetails(car);
    setIsCarDetailsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Complete <span className="text-gray-800">Inventory</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Browse our complete collection of premium vehicles. Each car is carefully inspected and comes with our quality guarantee.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
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

                <p className="text-3xl font-bold text-black mb-3">{car.price}</p>
                <p className="text-gray-600 text-sm mb-4">{car.description}</p>

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
    </div>
  );
};

export default Inventory;