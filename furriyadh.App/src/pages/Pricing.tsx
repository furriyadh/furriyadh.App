import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponsiveTest from '../components/ResponsiveTest';

const Pricing = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  // تأثيرات الحركة للعناصر
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      <ResponsiveTest />
      
      {/* رأس الصفحة */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 inner-page-header"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              {t('pricing.title')}
            </motion.h1>
            <motion.p 
              className="text-blue-200 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('pricing.subtitle')}
            </motion.p>
            
            {/* تبديل فترة الفوترة */}
            <motion.div 
              className="flex justify-center mt-8"
              variants={itemVariants}
            >
              <div className="bg-blue-900/50 p-1 rounded-lg inline-flex">
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingPeriod === 'monthly' ? 'bg-blue-700 text-white' : 'text-blue-300 hover:text-white'}`}
                  onClick={() => setBillingPeriod('monthly')}
                >
                  {t('pricing.monthly')}
                </button>
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingPeriod === 'yearly' ? 'bg-blue-700 text-white' : 'text-blue-300 hover:text-white'}`}
                  onClick={() => setBillingPeriod('yearly')}
                >
                  {t('pricing.yearly')} <span className="text-blue-400 text-xs">{t('pricing.savePercent')}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* محتوى الصفحة */}
      <motion.section 
        className="py-20 bg-blue-950 inner-page-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* الباقة الأساسية */}
            <motion.div 
              className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20 pricing-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{t('pricing.basic.title')}</h3>
              <p className="text-blue-300 mb-6">{t('pricing.basic.description')}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {billingPeriod === 'monthly' ? t('pricing.basic.monthlyPrice') : t('pricing.basic.yearlyPrice')}
                </span>
                <span className="text-blue-300 ml-2 rtl:mr-2 rtl:ml-0">
                  {billingPeriod === 'monthly' ? t('pricing.perMonth') : t('pricing.perYear')}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">{t(`pricing.basic.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/signup"
                className="block w-full bg-blue-800 hover:bg-blue-700 text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
              >
                {t('pricing.chooseButton')}
              </motion.a>
            </motion.div>
            
            {/* الباقة الاحترافية */}
            <motion.div 
              className="bg-gradient-to-b from-blue-800 to-indigo-900 backdrop-blur-sm rounded-xl p-8 border border-blue-500/50 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-blue-500/30 relative z-10 md:-mt-4 md:-mb-4 pricing-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                {t('pricing.popular')}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('pricing.pro.title')}</h3>
              <p className="text-blue-200 mb-6">{t('pricing.pro.description')}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {billingPeriod === 'monthly' ? t('pricing.pro.monthlyPrice') : t('pricing.pro.yearlyPrice')}
                </span>
                <span className="text-blue-200 ml-2 rtl:mr-2 rtl:ml-0">
                  {billingPeriod === 'monthly' ? t('pricing.perMonth') : t('pricing.perYear')}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-300 mr-2 rtl:ml-2 rtl:mr-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-50">{t(`pricing.pro.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/signup"
                className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ backgroundColor: "#3b82f6" }}
                whileTap={{ scale: 0.98 }}
              >
                {t('pricing.chooseButton')}
              </motion.a>
            </motion.div>
            
            {/* الباقة المتقدمة */}
            <motion.div 
              className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20 pricing-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{t('pricing.enterprise.title')}</h3>
              <p className="text-blue-300 mb-6">{t('pricing.enterprise.description')}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {t('pricing.enterprise.price')}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">{t(`pricing.enterprise.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href="/contact"
                className="block w-full bg-blue-800 hover:bg-blue-700 text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
              >
                {t('pricing.contactButton')}
              </motion.a>
            </motion.div>
          </div>
          
          {/* الأسئلة الشائعة */}
          <motion.div 
            className="mt-24"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-12 text-center"
              variants={itemVariants}
            >
              {t('pricing.faq.title')}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i}
                  className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/30 hover:border-blue-700/50 transition-all faq-item"
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
                >
                  <h3 className="text-lg font-semibold text-white mb-3 faq-question">{t(`pricing.faq.q${i}`)}</h3>
                  <p className="text-blue-200">{t(`pricing.faq.a${i}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
