import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap, Phone } from 'lucide-react';
import { EDUCATION_LEVELS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40 font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-school-green p-2 rounded-full group-hover:bg-school-gold transition-colors duration-300">
                <GraduationCap className="h-8 w-8 text-white group-hover:text-school-darkGreen" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-school-darkGreen leading-tight">
                  O Pequeno
                </span>
                <span className="text-xl font-bold text-school-green leading-tight">
                  Polegar
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-school-green font-bold' : 'text-gray-600 hover:text-school-green'} transition-colors`}
            >
              Home
            </Link>
            
            <Link 
              to="/a-escola" 
              className={`${isActive('/a-escola') ? 'text-school-green font-bold' : 'text-gray-600 hover:text-school-green'} transition-colors`}
            >
              A Escola
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`flex items-center gap-1 ${location.pathname.includes('/educacao') ? 'text-school-green font-bold' : 'text-gray-600 hover:text-school-green'} py-4 focus:outline-none`}
              >
                Educação <ChevronDown size={16} />
                
                {/* Dropdown Menu Content */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl border-t-4 border-school-gold py-2 animate-fadeIn">
                    {EDUCATION_LEVELS.map((level) => (
                      <Link
                        key={level.id}
                        to={level.slug}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-school-light hover:text-school-green transition-colors"
                      >
                        {level.title}
                      </Link>
                    ))}
                  </div>
                )}
              </button>
            </div>

            <Link 
              to="/matricula" 
              className="bg-school-green text-white px-6 py-2 rounded-full font-bold hover:bg-school-darkGreen hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Agende sua Visita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-school-green hover:text-school-darkGreen focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-school-green hover:bg-school-light"
            >
              Home
            </Link>
            <Link 
              to="/a-escola" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-school-green hover:bg-school-light"
            >
              A Escola
            </Link>
            
            <div className="px-3 py-2 text-base font-medium text-school-green">
              Educação
              <div className="ml-4 mt-2 space-y-2 border-l-2 border-school-gold pl-2">
                {EDUCATION_LEVELS.map((level) => (
                  <Link
                    key={level.id}
                    to={level.slug}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-gray-600 hover:text-school-green"
                  >
                    {level.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/matricula" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-md font-bold text-white bg-school-green shadow mt-4"
            >
              Agende sua Visita
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;