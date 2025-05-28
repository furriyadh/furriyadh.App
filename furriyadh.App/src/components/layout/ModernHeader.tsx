import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ModernHeader: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // تغيير حالة الهيدر عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // تبديل اللغة
  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  // تبديل قائمة الجوال
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* الشعار */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Furriyadh
            </Link>
          </motion.div>

          {/* القائمة الرئيسية - تظهر فقط على الشاشات المتوسطة والكبيرة */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <Link to="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.solutions')}
            </Link>
            <Link to="/integrations" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.integrations')}
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.resources')}
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.pricing')}
            </Link>
          </div>

          {/* أزرار الإجراءات */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <button 
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {i18n.language === 'ar' ? 'EN' : 'عربي'}
            </button>
            
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('header.login')}
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {t('header.getStarted')}
              </Link>
            </motion.div>
          </div>

          {/* زر القائمة للجوال */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* قائمة الجوال */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                {t('header.solutions')}
              </Link>
              <Link to="/integrations" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                {t('header.integrations')}
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                {t('header.resources')}
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                {t('header.pricing')}
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors py-2">
                {t('header.login')}
              </Link>
              <Link 
                to="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center"
              >
                {t('header.getStarted')}
              </Link>
              <button 
                onClick={toggleLanguage}
                className="text-gray-600 hover:text-blue-600 transition-colors py-2 text-center"
              >
                {i18n.language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default ModernHeader;
