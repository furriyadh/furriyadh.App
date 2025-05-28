import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IntegrationsSection: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // مصفوفة من أيقونات المنصات
  const platforms = [
    { icon: '/images/google-icon.svg', name: 'Google' },
    { icon: '/images/facebook-icon.svg', name: 'Facebook' },
    { icon: '/images/instagram-icon.svg', name: 'Instagram' },
    { icon: '/images/linkedin-icon.svg', name: 'LinkedIn' },
    { icon: '/images/twitter-icon.svg', name: 'Twitter' },
    { icon: '/images/microsoft-icon.svg', name: 'Microsoft' },
    { icon: '/images/shopify-icon.svg', name: 'Shopify' },
    { icon: '/images/wordpress-icon.svg', name: 'WordPress' }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            {t('features.integration.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            {t('features.integration.description')}
          </motion.p>
        </motion.div>
        
        {/* أيقونات المنصات المتكاملة */}
        <motion.div 
          className="relative mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                className="flex items-center justify-center bg-gray-50 rounded-full w-16 h-16 md:w-20 md:h-20 shadow-md hover-scale"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name} 
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </motion.div>
            ))}
          </div>
          
          {/* خطوط الاتصال المتحركة */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <path d="M100,200 C200,100 600,300 700,200" stroke="#4F46E5" strokeWidth="2" fill="none" />
              <path d="M200,300 C300,200 500,200 600,300" stroke="#4F46E5" strokeWidth="2" fill="none" />
              <path d="M300,100 C400,200 400,200 500,100" stroke="#4F46E5" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </motion.div>
        
        {/* صورة توضيحية للتكامل */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="order-2 md:order-1"
            variants={itemVariants}
          >
            <div className="relative">
              <img 
                src="/images/integration-dashboard.png" 
                alt="لوحة التكاملات" 
                className="rounded-lg shadow-xl"
              />
              
              {/* عناصر متحركة حول الصورة */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 flex items-center">
                <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center mr-2 rtl:ml-2 rtl:mr-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">تكامل سهل</p>
                  <p className="text-sm font-semibold">+15 منصة مدعومة</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">استيراد وتصدير البيانات بسهولة</h3>
            <p className="text-gray-600 mb-6">
              قم بتوصيل حسابات التسويق الخاصة بك واستيراد البيانات الحالية بنقرة واحدة. يمكنك أيضًا تصدير التقارير والتحليلات إلى أدواتك المفضلة.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 rtl:ml-2 rtl:mr-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>استيراد قوائم العملاء وجهات الاتصال</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 rtl:ml-2 rtl:mr-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>مزامنة قوائم المنتجات من متجرك الإلكتروني</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2 rtl:ml-2 rtl:mr-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>تصدير التقارير والتحليلات إلى أدوات أخرى</span>
              </li>
            </ul>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                to="/integrations" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center"
              >
                {t('features.integration.cta')}
                <svg className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
