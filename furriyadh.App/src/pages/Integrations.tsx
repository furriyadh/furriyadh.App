import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponsiveTest from '../components/ResponsiveTest';

const Integrations = () => {
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

  // قائمة بالتكاملات
  const advertisingPlatforms = [
    { name: 'Google Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1024px-Google_Ads_logo.svg.png' },
    { name: 'Facebook Ads', logo: 'https://www.facebook.com/images/fb_icon_325x325.png' },
    { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png' },
    { name: 'Twitter Ads', logo: 'https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89d5.svg' },
    { name: 'LinkedIn Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' },
    { name: 'TikTok Ads', logo: 'https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-black-cb544a0a7a8278751a1d1f50.svg' }
  ];
  
  const analyticsPlatforms = [
    { name: 'Google Analytics', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Google_Analytics_logo.svg/1200px-Google_Analytics_logo.svg.png' },
    { name: 'Mixpanel', logo: 'https://cdn.worldvectorlogo.com/logos/mixpanel.svg' },
    { name: 'Amplitude', logo: 'https://cdn.worldvectorlogo.com/logos/amplitude-1.svg' },
    { name: 'Hotjar', logo: 'https://www.hotjar.com/images/hotjar-logo.svg' }
  ];
  
  const crmPlatforms = [
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png' },
    { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/HubSpot_Logo.svg/1200px-HubSpot_Logo.svg.png' },
    { name: 'Zoho CRM', logo: 'https://www.zohowebstatic.com/sites/default/files/ogimage/zoho-logo.png' },
    { name: 'Pipedrive', logo: 'https://www.pipedrive.com/en/press/resources/files/pipedrive-logo-dark.svg' }
  ];

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
              {t('integrationsPage.title')}
            </motion.h1>
            <motion.p 
              className="text-blue-200 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t('integrationsPage.subtitle')}
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
          {/* منصات الإعلانات */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              variants={itemVariants}
            >
              {t('integrationsPage.advertising')}
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
              variants={containerVariants}
            >
              {advertisingPlatforms.map((platform, index) => (
                <motion.div 
                  key={index}
                  className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center border border-blue-800/50 hover:border-blue-600/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
                    scale: 1.05
                  }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-2 mb-4">
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-blue-100 text-center">{platform.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* منصات التحليلات */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              variants={itemVariants}
            >
              {t('integrationsPage.analytics')}
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {analyticsPlatforms.map((platform, index) => (
                <motion.div 
                  key={index}
                  className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center border border-blue-800/50 hover:border-blue-600/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
                    scale: 1.05
                  }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-2 mb-4">
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-blue-100 text-center">{platform.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* منصات إدارة علاقات العملاء */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
              variants={itemVariants}
            >
              {t('integrationsPage.crm')}
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {crmPlatforms.map((platform, index) => (
                <motion.div 
                  key={index}
                  className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center border border-blue-800/50 hover:border-blue-600/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
                    scale: 1.05
                  }}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-2 mb-4">
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-blue-100 text-center">{platform.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* قسم الدعوة للعمل */}
          <motion.div 
            className="mt-20 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl p-8 md:p-12 text-center"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              {t('integrationsPage.cta.title')}
            </motion.h2>
            <motion.p 
              className="text-blue-100 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {t('integrationsPage.cta.description')}
            </motion.p>
            <motion.a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {t('integrationsPage.cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Integrations;
