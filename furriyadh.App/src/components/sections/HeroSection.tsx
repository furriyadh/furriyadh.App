import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-animate bg-gradient-to-br from-blue-50 via-indigo-50 to-white opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* النص الرئيسي */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-right lg:rtl:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.title')} <br />
              <span className="text-blue-600">{t('hero.subtitle')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 lg:rtl:ml-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start lg:rtl:justify-end gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/signup" 
                  className="btn-pulse inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors text-center"
                >
                  {t('hero.cta')}
                </Link>
              </motion.div>
              
              <div className="flex items-center justify-center lg:justify-start lg:rtl:justify-end text-sm text-gray-500">
                <svg className="w-5 h-5 text-green-500 mr-2 rtl:ml-2 rtl:mr-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                {t('hero.stats')}
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-8 text-sm text-gray-500 flex items-center justify-center lg:justify-start lg:rtl:justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <img src="/images/google-partner-badge.png" alt="Google Partner" className="h-10 mr-2 rtl:ml-2 rtl:mr-0" />
              {t('hero.partner')}
            </motion.div>
          </motion.div>
          
          {/* الصورة الرئيسية */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.img 
                src="/images/dashboard-preview.png" 
                alt="Furriyadh Dashboard" 
                className="rounded-lg shadow-2xl"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              
              {/* عناصر متحركة حول الصورة */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 flex items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center mr-2 rtl:ml-2 rtl:mr-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">تحسين تلقائي</p>
                  <p className="text-sm font-semibold">+27% أداء أفضل</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex items-center mb-1">
                  <div className="bg-blue-500 rounded-full w-2 h-2 mr-1 rtl:ml-1 rtl:mr-0"></div>
                  <p className="text-xs text-gray-500">إحصائيات مباشرة</p>
                </div>
                <div className="flex space-x-1 rtl:space-x-reverse">
                  <div className="bg-blue-100 w-10 h-6 rounded-sm"></div>
                  <div className="bg-blue-200 w-6 h-6 rounded-sm"></div>
                  <div className="bg-blue-300 w-8 h-6 rounded-sm"></div>
                  <div className="bg-blue-400 w-4 h-6 rounded-sm"></div>
                  <div className="bg-blue-500 w-6 h-6 rounded-sm"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
