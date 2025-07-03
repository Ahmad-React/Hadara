
import React from 'react';
import { Heart } from 'lucide-react';
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 flex items-center justify-center ml-3" alt='logo' src={Logo} />
              <div>
                <h3 className="text-2xl font-bold">شركة الحضارة</h3>
                <p className="text-white/80">للصناعات الكهربائية والالكترونية</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 max-w-md">
              أكثر من 50 عاماً من الخبرة والثقة في تقديم أفضل حلول الطاقة الشمسية. 
              نسعى دائماً لتلبية احتياجات عملائنا بأعلى معايير الجودة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#products" className="text-white/80 hover:text-white transition-colors">المنتجات</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">الخدمات</a></li>
              <li><a href="#tayar" className="text-white/80 hover:text-white transition-colors">تطبيق تيار</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li className="text-white/80">قياس الطاقة</li>
              <li className="text-white/80">التوصيل والتركيب</li>
              <li className="text-white/80">الصيانة</li>
              <li className="text-white/80">الدعم الفني</li>
              <li className="text-white/80">تطبيق تيار</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2025 شركة الحضارة. جميع الحقوق محفوظة.
            </p>
            <p className="text-white/80 text-sm flex items-center gap-2">
              صنع بـ <Heart className="w-4 h-4 text-secondary" fill="currentColor" /> في سوريا
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
