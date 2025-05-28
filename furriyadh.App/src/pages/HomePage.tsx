import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

// استيراد المكونات
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Integrations from '../components/Integrations';
import Community from '../components/Community';
import Footer from '../components/Footer';

const HomePage = () => {
  const { language } = useContext(LanguageContext); // language مستخدم في الشرط الشرطي
  
  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Integrations />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
