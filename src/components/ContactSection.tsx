
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: '0119170',
      description: 'متاح 24/7 للدعم الفني',
      // action: () => window.open('tel:0119170', '_self')
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      details: '+963991110322',
      description: 'تواصل مباشر وسريع',
       action: () => window.open('https://wa.me/963991110322', '_blank')
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: 'ريف دمشق, سوريا',
      description: 'مقرنا الرئيسي'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'فيسبوك', color: 'hover:text-blue-600', ref: 'https://www.facebook.com/share/1Bn3dfmxJx/' },
    { icon: Instagram, name: 'إنستغرام', color: 'hover:text-pink-600', ref: 'https://www.instagram.com/alhdaracompany?igsh=MWp4OW00aXY2aTNyNw==' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">تواصل معنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا لمساعدتك في جميع احتياجاتك من الطاقة الشمسية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div 
                key={index} 
                className={`text-center group ${info.action ? 'cursor-pointer' : ''}`}
                onClick={info.action}
              >
                <div className="bg-primary group-hover:bg-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 transform group-hover:scale-110">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-2 ltr">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
                {/* {info.action && (
                  <button className="mt-4 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                    {info.title === 'الهاتف' ? 'اتصل الآن' : 'تواصل عبر واتساب'}
                  </button>
                )} */}
              </div>
            );
          })}
        </div>

        {/* Company Info */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">معلومات الشركة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">من نحن</h4>
                <p className="text-gray-600 leading-relaxed">
                  شركة الحضارة هي إحدى الشركات الرائدة في مجال حلول الطاقة الشمسية في سوريا. 
                  نفخر بخبرتنا التي تمتد لأكثر من 50 عاماً في تقديم أفضل المنتجات والخدمات لعملائنا.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">رؤيتنا</h4>
                <p className="text-gray-600 leading-relaxed">
                  نسعى لتكون الخيار الأول في مجال الطاقة الشمسية من خلال تقديم حلول مبتكرة وموثوقة 
                  تساهم في بناء مستقبل مستدام.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">تابعنا على وسائل التواصل</h4>
              <div className="flex justify-center space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.ref}
                      target='_blank'
                      className={`bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all duration-300 text-gray-600 ${social.color} transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
