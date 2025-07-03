
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import ServicesSection from '../components/ServicesSection';
import TayarAppSection from '../components/TayarAppSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-cairo" dir="rtl">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <TayarAppSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
