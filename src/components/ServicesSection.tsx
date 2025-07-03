
import React from 'react';
import { Calculator, Truck, Package, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: 'قياس الطاقة',
      description: 'حساب احتياجات الطاقة للمنازل والمؤسسات بدقة عالية',
      details: 'نقوم بدراسة شاملة لاستهلاك الطاقة وتقديم الحلول المناسبة'
    },
    {
      icon: Truck,
      title: 'التوصيل',
      description: 'خدمة التوصيل السريع للأنظمة الشمسية',
      details: 'نضمن وصول المعدات في الوقت المحدد وبأفضل حال'
    },
    {
      icon: Package,
      title: 'التركيب',
      description: 'التركيب الكامل للأنظمة الشمسية',
      details: 'فريق متخصص لضمان التركيب الآمن والصحيح وفق المعايير'
    },
    {
      icon: Wrench,
      title: 'الصيانة',
      description: 'خدمات الصيانة الدورية والإصلاحات اللازمة',
      details: 'صيانة دورية وإصلاحات سريعة مع ضمان الجودة'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم خدمات متكاملة تغطي جميع احتياجاتك في مجال الطاقة الشمسية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="bg-primary group-hover:bg-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors duration-300">
                  {service.description}
                </p>
                
                <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                  {service.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">لماذا تختار شركة الحضارة؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-2xl font-bold mb-2">خبرة طويلة</div>
              <p className="opacity-90">أكثر من 50 عاماً في المجال</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">جودة عالية</div>
              <p className="opacity-90">منتجات معتمدة عالمياً</p>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">دعم مستمر</div>
              <p className="opacity-90">خدمة عملاء على مدار الساعة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
