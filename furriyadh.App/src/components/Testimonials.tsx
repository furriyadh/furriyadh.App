import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Testimonials = () => {
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
      className="py-20 bg-gradient-to-b from-blue-950 to-indigo-950"
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
            {t('testimonials.title')}
          </motion.h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* شهادة 1 */}
          <motion.div 
            className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-700/50 hover:border-indigo-500/50 transition-all shadow-lg hover:shadow-indigo-500/20"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.2)" }}
          >
            <div className="mb-6">
              <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-indigo-100 mb-6">{t('testimonials.first.text')}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="ml-4 rtl:mr-4 rtl:ml-0">
                <p className="text-white font-medium">{t('testimonials.first.author')}</p>
              </div>
            </div>
          </motion.div>
          
          {/* شهادة 2 */}
          <motion.div 
            className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-700/50 hover:border-indigo-500/50 transition-all shadow-lg hover:shadow-indigo-500/20"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.2)" }}
          >
            <div className="mb-6">
              <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-indigo-100 mb-6">{t('testimonials.second.text')}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div className="ml-4 rtl:mr-4 rtl:ml-0">
                <p className="text-white font-medium">{t('testimonials.second.author')}</p>
              </div>
            </div>
          </motion.div>
          
          {/* شهادة 3 */}
          <motion.div 
            className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-700/50 hover:border-indigo-500/50 transition-all shadow-lg hover:shadow-indigo-500/20"
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.2)" }}
          >
            <div className="mb-6">
              <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-indigo-100 mb-6">{t('testimonials.third.text')}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <div className="ml-4 rtl:mr-4 rtl:ml-0">
                <p className="text-white font-medium">{t('testimonials.third.author')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
