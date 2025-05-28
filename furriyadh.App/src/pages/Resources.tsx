import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponsiveTest from '../components/ResponsiveTest';

const Resources = () => {
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
              {t('resources.title')}
            </motion.h1>
            <motion.p 
              className="text-blue-200 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('resources.subtitle')}
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
          {/* أدلة وشروحات */}
          <motion.div className="mb-20" variants={itemVariants}>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              {t('resources.guides.title')}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* دليل 1 */}
              <motion.div 
                className="bg-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t('resources.guides.item1.title')}</h3>
                  <p className="text-blue-200 mb-4">{t('resources.guides.item1.description')}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
                    {t('resources.readMore')}
                    <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              {/* دليل 2 */}
              <motion.div 
                className="bg-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t('resources.guides.item2.title')}</h3>
                  <p className="text-blue-200 mb-4">{t('resources.guides.item2.description')}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
                    {t('resources.readMore')}
                    <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              {/* دليل 3 */}
              <motion.div 
                className="bg-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t('resources.guides.item3.title')}</h3>
                  <p className="text-blue-200 mb-4">{t('resources.guides.item3.description')}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
                    {t('resources.readMore')}
                    <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* ندوات عبر الإنترنت */}
          <motion.div className="mb-20" variants={itemVariants}>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              {t('resources.webinars.title')}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ندوة 1 */}
              <motion.div 
                className="bg-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="h-64 bg-gradient-to-br from-indigo-700 to-blue-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{t('resources.webinars.item1.title')}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-200 mb-4">{t('resources.webinars.item1.description')}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
                    {t('resources.readMore')}
                    <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              {/* ندوة 2 */}
              <motion.div 
                className="bg-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="h-64 bg-gradient-to-br from-indigo-700 to-blue-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{t('resources.webinars.item2.title')}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-200 mb-4">{t('resources.webinars.item2.description')}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
                    {t('resources.readMore')}
                    <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* النشرة البريدية */}
          <motion.div 
            className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl p-8 md:p-12"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                  variants={itemVariants}
                >
                  {t('resources.newsletter.title')}
                </motion.h2>
                <motion.p 
                  className="text-blue-100 mb-6 md:mb-0"
                  variants={itemVariants}
                >
                  {t('resources.newsletter.description')}
                </motion.p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-4 newsletter-form">
                  <input 
                    type="email" 
                    placeholder={t('resources.newsletter.placeholder')} 
                    className="bg-blue-700/50 border border-blue-600 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow newsletter-input"
                  />
                  <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors newsletter-button"
                  >
                    {t('resources.newsletter.button')}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Resources;
