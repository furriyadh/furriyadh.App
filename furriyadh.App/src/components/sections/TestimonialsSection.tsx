import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
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
    <section className="py-20 bg-gray-50">
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
            {t('testimonials.title')}
          </motion.h2>
          
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2 rtl:mr-2 rtl:ml-0">
                Rated 4.5 (93) on <span className="font-semibold">Trustpilot</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* الشهادة الأولى */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 hover-lift"
            variants={itemVariants}
          >
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-gray-600 mb-6 min-h-[120px]">
              {t('testimonials.testimonial1.text')}
            </p>
            
            <div className="flex items-center">
              <img 
                src="/images/avatar-1.jpg" 
                alt={t('testimonials.testimonial1.author')} 
                className="w-12 h-12 rounded-full object-cover mr-4 rtl:ml-4 rtl:mr-0"
              />
              <div>
                <h4 className="font-semibold">{t('testimonials.testimonial1.author')}</h4>
                <p className="text-sm text-gray-500">مدير تسويق</p>
              </div>
            </div>
          </motion.div>
          
          {/* الشهادة الثانية */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 hover-lift"
            variants={itemVariants}
          >
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-gray-600 mb-6 min-h-[120px]">
              {t('testimonials.testimonial2.text')}
            </p>
            
            <div className="flex items-center">
              <img 
                src="/images/avatar-2.jpg" 
                alt={t('testimonials.testimonial2.author')} 
                className="w-12 h-12 rounded-full object-cover mr-4 rtl:ml-4 rtl:mr-0"
              />
              <div>
                <h4 className="font-semibold">{t('testimonials.testimonial2.author')}</h4>
                <p className="text-sm text-gray-500">صاحب شركة</p>
              </div>
            </div>
          </motion.div>
          
          {/* الشهادة الثالثة */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 hover-lift"
            variants={itemVariants}
          >
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-gray-600 mb-6 min-h-[120px]">
              {t('testimonials.testimonial3.text')}
            </p>
            
            <div className="flex items-center">
              <img 
                src="/images/avatar-3.jpg" 
                alt={t('testimonials.testimonial3.author')} 
                className="w-12 h-12 rounded-full object-cover mr-4 rtl:ml-4 rtl:mr-0"
              />
              <div>
                <h4 className="font-semibold">{t('testimonials.testimonial3.author')}</h4>
                <p className="text-sm text-gray-500">مستشار تسويق</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
