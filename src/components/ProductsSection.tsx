
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Inverter from '../assets/Inverter.png'
import Regulator from '../assets/Regulator.png'


const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'منظمات الطاقة الشمسية',
      description: 'منظمات عالية الجودة للتحكم في شحن البطاريات وحمايتها من الشحن الزائد',
      features: ['حماية من الشحن الزائد', 'عرض رقمي', 'متوافق مع جميع أنواع البطاريات'],
      image: Inverter
    },
    {
      id: 2,
      name: 'إنفرترات الطاقة',
      description: 'إنفرترات متطورة لتحويل التيار المستمر إلى متناوب بكفاءة عالية',
      features: ['كفاءة عالية 95%+', 'حماية متعددة المستويات', 'تشغيل صامت'],
      image: Regulator
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">منتجاتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من منتجات الطاقة الشمسية عالية الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-primary/10 flex items-center justify-center">
                <img alt={product.name} src={product.image} className='max-h-[150%]'/>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                  onClick={() => window.open('https://wa.me/963991110322', '_blank')}
                >
                  شراء
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
