import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Fuel, Settings, Users, Calendar, Shield, Award, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CarDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: {
    id: number;
    name: string;
    year: string;
    price: string;
    image: string;
    specs: {
      fuel: string;
      transmission: string;
      seats: string;
    };
    rating: number;
    description?: string;
  } | null;
}

const CarDetailsModal: React.FC<CarDetailsModalProps> = ({ isOpen, onClose, car }) => {
  const navigate = useNavigate();

  if (!car) return null;

  const detailedSpecs = [
    { icon: Zap, label: 'Engine', value: car.specs.fuel === 'Electric' ? 'Electric Motor' : 'V8 Twin-Turbo' },
    { icon: Settings, label: 'Transmission', value: car.specs.transmission },
    { icon: Users, label: 'Seating', value: `${car.specs.seats} Seats` },
    { icon: Fuel, label: 'Fuel Type', value: car.specs.fuel },
    { icon: Calendar, label: 'Model Year', value: car.year },
    { icon: Shield, label: 'Warranty', value: '4 Years / 50,000 Miles' }
  ];

  const features = [
    'Premium Leather Interior',
    'Advanced Driver Assistance',
    'Panoramic Sunroof',
    'Premium Sound System',
    'Heated & Ventilated Seats',
    'Wireless Charging',
    'Adaptive Cruise Control',
    'Lane Keeping Assist',
    'Blind Spot Monitoring',
    'Premium Paint Finish'
  ];

  const handleTestDrive = () => {
    alert(`Test drive request for ${car.name}. Our team will contact you to schedule an appointment.`);
  };

  const handleWantOne = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg transition-colors duration-200"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-semibold">{car.rating}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Car Info */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-black">{car.name}</h2>
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold text-black">{car.price}</div>
                    <div className="text-sm text-gray-500">Starting MSRP</div>
                  </div>
                </div>
                {car.description && (
                  <p className="text-gray-600 text-lg leading-relaxed">{car.description}</p>
                )}
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {detailedSpecs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-black rounded-lg">
                          <spec.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{spec.label}</div>
                          <div className="font-semibold text-black">{spec.value}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 * index }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWantOne}
                  className="px-12 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  WANT ONE?
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarDetailsModal;