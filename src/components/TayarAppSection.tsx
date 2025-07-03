
import React from 'react';
import { Monitor, Shield, Bell, Download, QrCode } from 'lucide-react';
import TayarMock from '../assets/Untitled11.png'

const TayarAppSection = () => {
  const features = [
    {
      icon: Monitor,
      title: 'مراقبة مباشرة',
      description: 'متابعة مدخلات ومخرجات الأجهزة في الوقت الفعلي'
    },
    {
      icon: Shield,
      title: 'تفعيل الضمان',
      description: 'تفعيل ضمان المنتجات بسهولة من خلال التطبيق'
    },
    {
      icon: Bell,
      title: 'طلبات الصيانة',
      description: 'إرسال طلبات الصيانة والحصول على الدعم الفني'
    }
  ];

  return (
    <section id="tayar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              تطبيق تيار
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              تطبيق ذكي لمراقبة وإدارة أنظمة الطاقة الشمسية الخاصة بك. 
              تحكم في نظامك واحصل على التقارير والإشعارات المهمة.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 space-x-reverse">
                    <div className="bg-primary rounded-lg p-3 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='https://tayar.solunyx.com/apps' target='_blank' className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                تحميل التطبيق
              </a>
            </div>
          </div>

          {/* App Mockup */}
          <div className="">
            <img src={TayarMock} alt="mock" className='rounded-lg w-full border-2 border-primary'/>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default TayarAppSection;
