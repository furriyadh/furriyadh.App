import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Features = () => {
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

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-blue-900 to-blue-950"
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
            {t('features.title')}
          </motion.h2>
          <motion.p 
            className="text-blue-200 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {t('features.subtitle')}
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ميزة 1 */}
          <motion.div 
            className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="bg-blue-700/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <img src="/features-icon-1.png" alt="High Performance" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t('features.easy.title')}</h3>
            <p className="text-blue-200">{t('features.easy.description')}</p>
          </motion.div>
          
          {/* ميزة 2 */}
          <motion.div 
            className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="bg-blue-700/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <img src="/features-icon-2.png" alt="AI Automation" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t('features.automation.title')}</h3>
            <p className="text-blue-200">{t('features.automation.description')}</p>
          </motion.div>
          
          {/* ميزة 3 */}
          <motion.div 
            className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)" }}
          >
            <div className="bg-blue-700/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <img src="/features-icon-3.png" alt="Multi-platform" className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{t('features.platforms.title')}</h3>
            <p className="text-blue-200">{t('features.platforms.description')}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
