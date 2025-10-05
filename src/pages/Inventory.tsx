import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Fuel, Settings, Users, ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import CarDetailsModal from '../components/CarDetailsModal';

const Inventory = () => {
  const [isCarDetailsModalOpen, setIsCarDetailsModalOpen] = useState(false);
  const [selectedCarDetails, setSelectedCarDetails] = useState<any>(null);

  const soldCars = [
    {
      id: 1,
      name: "Lamborghini Urus",
      year: "2024",
      price: "$229,495",
      soldDate: "March 2024",
      image: "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "8-Speed Auto", seats: "5" },
      description: "Super SUV with 641 HP twin-turbo V8, combining luxury and performance."
    },
    {
      id: 2,
      name: "Mercedes-AMG GLE 63 S",
      year: "2024",
      price: "$119,500",
      soldDate: "March 2024",
      image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "9-Speed Auto", seats: "5" },
      description: "High-performance luxury SUV with 603 HP and advanced AMG technology."
    },
    {
      id: 3,
      name: "BMW M5 Competition",
      year: "2024",
      price: "$118,900",
      soldDate: "February 2024",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "8-Speed Auto", seats: "5" },
      description: "Ultimate performance sedan with 617 HP and M xDrive all-wheel drive."
    },
    {
      id: 4,
      name: "Porsche 911 Turbo S",
      year: "2024",
      price: "$230,400",
      soldDate: "February 2024",
      image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo Flat-6", transmission: "8-Speed PDK", seats: "4" },
      description: "Iconic sports car with 640 HP twin-turbo flat-six and all-wheel drive."
    },
    {
      id: 5,
      name: "Audi RS7 Sportback",
      year: "2024",
      price: "$126,500",
      soldDate: "January 2024",
      image: "https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "8-Speed Auto", seats: "5" },
      description: "Performance luxury coupe with 591 HP and quattro all-wheel drive."
    },
    {
      id: 6,
      name: "Mercedes-AMG GT 63 S",
      year: "2024",
      price: "$179,950",
      soldDate: "January 2024",
      image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "9-Speed Auto", seats: "4" },
      description: "High-performance luxury coupe with 630 HP and 4MATIC+ all-wheel drive."
    },
    {
      id: 7,
      name: "BMW X5 M Competition",
      year: "2024",
      price: "$128,500",
      soldDate: "December 2023",
      image: "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "8-Speed Auto", seats: "5" },
      description: "Performance SUV with 617 HP and M-tuned suspension."
    },
    {
      id: 8,
      name: "Audi RS Q8",
      year: "2024",
      price: "$136,200",
      soldDate: "December 2023",
      image: "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "8-Speed Auto", seats: "5" },
      description: "Coupe-style performance SUV with 591 HP and sport differential."
    },
    {
      id: 9,
      name: "Porsche Cayenne Turbo GT",
      year: "2024",
      price: "$182,150",
      soldDate: "November 2023",
      image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Twin-Turbo V8", transmission: "8-Speed PDK", seats: "5" },
      description: "Most powerful Cayenne with 631 HP and track-focused engineering."
    },
    {
      id: 10,
      name: "Range Rover Sport SVR",
      year: "2024",
      price: "$122,850",
      soldDate: "November 2023",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      specs: { fuel: "Supercharged V8", transmission: "8-Speed Auto", seats: "5" },
      description: "Luxury performance SUV with 575 HP supercharged V8 and adaptive dynamics."
    }
  ];

  const handleViewDetails = (car: any) => {
    setSelectedCarDetails(car);
    setIsCarDetailsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
            <h1 className="text-4xl sm:text-5xl font-bold text-black">
              Successfully <span className="text-green-600">Sold Cars</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our portfolio of premium vehicles that have found their perfect owners. Each sale represents our commitment to quality and customer satisfaction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {soldCars.map((car, index) => (
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={car.image}
                  alt={car.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 object-cover grayscale-[30%]"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                  <CheckCircle className="h-4 w-4" />
                  <span>SOLD</span>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                  {car.year}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3">{car.name}</h3>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-3xl font-bold text-green-600">{car.price}</p>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{car.soldDate}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{car.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span className="text-xs">{car.specs.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="h-4 w-4" />
                    <span className="text-xs">{car.specs.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span className="text-xs">{car.specs.seats}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleViewDetails(car)}
                  className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CarDetailsModal
        isOpen={isCarDetailsModalOpen}
        onClose={() => setIsCarDetailsModalOpen(false)}
        car={selectedCarDetails}
      />
    </div>
  );
};

export default Inventory;