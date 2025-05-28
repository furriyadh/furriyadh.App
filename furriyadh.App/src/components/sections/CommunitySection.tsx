import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CommunitySection: React.FC = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            {t('features.community.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-10"
            variants={itemVariants}
          >
            {t('features.community.description')}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
              to="/signup" 
              className="btn-pulse bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              {t('features.community.cta')}
              <svg className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
          
          {/* أيقونات المستخدمين */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <motion.div 
                key={index}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold shadow-md"
                variants={itemVariants}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
              >
                {String.fromCharCode(65 + (index % 26))}
              </motion.div>
            ))}
          </motion.div>
          
          {/* إحصائيات المجتمع */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 hover-lift"
              variants={itemVariants}
            >
              <div className="text-blue-600 text-4xl font-bold mb-2">20,000+</div>
              <div className="text-gray-600">شركة صغيرة ومتوسطة</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 hover-lift"
              variants={itemVariants}
            >
              <div className="text-blue-600 text-4xl font-bold mb-2">93%</div>
              <div className="text-gray-600">معدل رضا العملاء</div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 hover-lift"
              variants={itemVariants}
            >
              <div className="text-blue-600 text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-600">دعم فني متواصل</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
