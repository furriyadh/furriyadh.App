import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* قسم "لا تحتاج إلى خبرة" */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            {t('features.noExperience.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {t('features.noExperience.description')}
          </motion.p>
        </motion.div>

        {/* قسم "إنشاء حملات إعلانية مربحة" */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            variants={itemVariants}
          >
            {t('features.campaigns.title')}
          </motion.h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="flex flex-col justify-center"
                variants={itemVariants}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    {t('features.campaigns.highPerformance')}
                  </h3>
                  <p className="text-gray-600">
                    {t('features.campaigns.highPerformanceDesc')}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    {t('features.campaigns.automation')}
                  </h3>
                  <p className="text-gray-600">
                    {t('features.campaigns.automationDesc')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    {t('features.campaigns.platforms')}
                  </h3>
                  <p className="text-gray-600">
                    {t('features.campaigns.platformsDesc')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/images/ad-creation.png" 
                    alt="إنشاء الإعلانات" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="text-xl font-semibold mb-2">إعلانات عالية الأداء</h4>
                      <p className="text-sm opacity-90">أنشئ إعلانات مذهلة في دقائق</p>
                    </div>
                  </div>
                </div>
                
                {/* عناصر متحركة حول الصورة */}
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 flex items-center">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-2 rtl:ml-2 rtl:mr-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">أتمتة كاملة</p>
                    <p className="text-sm font-semibold">توفير 85% من الوقت</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* قسم "احصل على تحسين إعلاناتك 24/7" */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center"
            variants={itemVariants}
          >
            {t('features.optimization.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12"
            variants={itemVariants}
          >
            {t('features.optimization.description')}
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 hover-lift"
              variants={itemVariants}
            >
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">إيقاف الكلمات المفتاحية غير الناجحة</h3>
              <p className="text-gray-600">تحديد وإيقاف الكلمات المفتاحية التي لا تحقق نتائج جيدة تلقائياً لتحسين أداء حملاتك.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 hover-lift"
              variants={itemVariants}
            >
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">إنشاء إعلانات جديدة للاختبار A/B</h3>
              <p className="text-gray-600">إنشاء وتجربة إصدارات مختلفة من الإعلانات لتحديد أيها يحقق أفضل النتائج لجمهورك.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 hover-lift"
              variants={itemVariants}
            >
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">اقتراح استهداف جديد</h3>
              <p className="text-gray-600">تحليل بيانات الجمهور واقتراح فئات استهداف جديدة لتوسيع نطاق وصول حملاتك الإعلانية.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* قسم "ابقَ مسيطرًا مع لوحة التحكم الشاملة" */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center"
            variants={itemVariants}
          >
            {t('features.dashboard.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12"
            variants={itemVariants}
          >
            {t('features.dashboard.description')}
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="flex flex-col justify-center"
              variants={itemVariants}
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {t('features.dashboard.overview')}
                </h3>
                <p className="text-gray-600">
                  {t('features.dashboard.overviewDesc')}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  {t('features.dashboard.decisions')}
                </h3>
                <p className="text-gray-600">
                  {t('features.dashboard.decisionsDesc')}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <img 
                src="/images/dashboard-analytics.png" 
                alt="لوحة التحكم التحليلية" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              
              {/* عناصر متحركة حول الصورة */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center mb-1">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-1 rtl:ml-1 rtl:mr-0"></div>
                  <p className="text-xs text-gray-500">تحليلات مباشرة</p>
                </div>
                <div className="flex space-x-1 rtl:space-x-reverse">
                  <div className="bg-green-100 w-10 h-6 rounded-sm"></div>
                  <div className="bg-green-200 w-6 h-6 rounded-sm"></div>
                  <div className="bg-green-300 w-8 h-6 rounded-sm"></div>
                  <div className="bg-green-400 w-4 h-6 rounded-sm"></div>
                  <div className="bg-green-500 w-6 h-6 rounded-sm"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
