import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png'
import PhoneNumber from '../assets/PhoneNumber.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'المنتجات', href: '#products' },
    { name: 'الخدمات', href: '#services' },
    { name: 'تطبيق تيار', href: '#tayar' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img className="w-12 h-12 flex items-center justify-center ml-3" alt='logo' src={Logo} />
            <div>
              <h1 className="text-xl font-bold text-primary">شركة الحضارة</h1>
              <p className="text-sm text-gray-600">للصناعات الكهربائية والالكترونية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Phone image - hidden on mobile */}
          <div className="hidden md:flex items-center">
            <img className="h-10 mr-2" alt='phone' src={PhoneNumber} />
          </div>



          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary hover:text-secondary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;