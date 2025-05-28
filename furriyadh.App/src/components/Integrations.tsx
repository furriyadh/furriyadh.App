import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Integrations = () => {
  const { t } = useTranslation();
  
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
  const integrationLogos = [
    { name: 'Google Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1024px-Google_Ads_logo.svg.png' },
    { name: 'Facebook Ads', logo: 'https://www.facebook.com/images/fb_icon_325x325.png' },
    { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png' },
    { name: 'Twitter Ads', logo: 'https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89d5.svg' },
    { name: 'LinkedIn Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' },
    { name: 'TikTok Ads', logo: 'https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-black-cb544a0a7a8278751a1d1f50.svg' }
  ];

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-indigo-950 to-blue-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            {t('integrations.title')}
          </motion.h2>
          <motion.p 
            className="text-blue-200 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {t('integrations.subtitle')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          variants={containerVariants}
        >
          {integrationLogos.map((integration, index) => (
            <motion.div 
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center border border-blue-800/50 hover:border-blue-600/50 transition-all"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
                scale: 1.05
              }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full p-2">
                <img 
                  src={integration.logo} 
                  alt={integration.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="/integrations"
            className="text-blue-300 hover:text-blue-200 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            {t('integrations.viewAll')}
            <svg className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Integrations;
