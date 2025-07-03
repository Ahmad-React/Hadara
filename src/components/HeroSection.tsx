
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            شركة الحضارة
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
            حلول الطاقة الشمسية المتكاملة
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            أكثر من <span className="font-bold text-white">50 عاماً</span> من الثقة والخبرة في بيع منظمات الطاقة وقطع غيار الأنظمة الشمسية. 
            أنجزنا أكثر من <span className="font-bold text-white">1000 مشروع</span> ونقدم <span className="font-bold text-white">دعم فني على مدار الساعة</span>
          </p>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto">
            نقدم حلول متكاملة تشمل الإنفرترات، البطاريات، وأنظمة التحكم الذكية مع خدمات التركيب والصيانة
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
