import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Info, Phone, Settings, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Inventory', icon: Car, href: '/inventory' },
    { name: 'About', icon: Info, href: '/about' },
    { name: 'Services', icon: Settings, href: '/services' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left side - Contact */}
          <div className="flex items-center z-10">
            <Link to="/contact">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className={`flex items-center space-x-1 transition-colors duration-200 group cursor-pointer ${
                  location.pathname === '/contact' 
                    ? 'text-amber-400' 
                    : 'text-slate-300 hover:text-amber-400'
                }`}
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              </motion.div>
            </Link>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
             className="flex items-center h-16 -mt-2"
            >
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="https://i.ibb.co/GQ788S34/logo.png"
                  alt="NSD AUTOS" 
                 className="h-10 w-auto"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right side - Menu */}
          <div className="flex items-center z-10">
            {/* Hamburger Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile/Desktop Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={closeMenu}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: isMenuOpen ? 0.1 * index : 0 }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 group cursor-pointer ${
                    location.pathname === item.href 
                      ? 'text-amber-400 bg-slate-800/50' 
                      : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/30'
                  }`}
                >
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-lg">{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;