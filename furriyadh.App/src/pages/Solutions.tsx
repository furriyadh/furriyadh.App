import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponsiveTest from '../components/ResponsiveTest';

const Solutions = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  
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
              {t('solutions.title')}
            </motion.h1>
            <motion.p 
              className="text-blue-200 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('solutions.subtitle')}
            </motion.p>
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
            {/* الشركات الصغيرة */}
            <motion.div 
              className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
            >
              <div className="bg-blue-700/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('solutions.smallBusiness.title')}</h3>
              <p className="text-blue-200 mb-6">{t('solutions.smallBusiness.description')}</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.smallBusiness.feature1')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.smallBusiness.feature2')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.smallBusiness.feature3')}
                </li>
              </ul>
            </motion.div>
            
            {/* التجارة الإلكترونية */}
            <motion.div 
              className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
            >
              <div className="bg-blue-700/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('solutions.ecommerce.title')}</h3>
              <p className="text-blue-200 mb-6">{t('solutions.ecommerce.description')}</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.ecommerce.feature1')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.ecommerce.feature2')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.ecommerce.feature3')}
                </li>
              </ul>
            </motion.div>
            
            {/* وكالات التسويق */}
            <motion.div 
              className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
            >
              <div className="bg-blue-700/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t('solutions.agencies.title')}</h3>
              <p className="text-blue-200 mb-6">{t('solutions.agencies.description')}</p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.agencies.feature1')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.agencies.feature2')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-400 mr-2 rtl:ml-2 rtl:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('solutions.agencies.feature3')}
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* قسم الدعوة للعمل */}
          <motion.div 
            className="mt-20 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl p-8 md:p-12 text-center"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              {t('solutions.cta.title')}
            </motion.h2>
            <motion.p 
              className="text-blue-100 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {t('solutions.cta.description')}
            </motion.p>
            <motion.a
              href="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {t('solutions.cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Solutions;
