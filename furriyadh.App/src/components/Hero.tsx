import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();
  
  // تأثيرات الحركة للعناصر
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* خلفية متحركة تعبر عن الذكاء الاصطناعي */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      {/* شبكة متحركة تعبر عن الذكاء الاصطناعي */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* أشكال متحركة */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-blue-500 opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-indigo-500 opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              variants={itemVariants}
            >
              {t('hero.title1')} <br />
              <span className="text-blue-300">{t('hero.title2')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-xl"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="/signup"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.createAccount')}
              </motion.a>
              
              <motion.p 
                className="text-blue-200 text-sm mt-4 sm:mt-0"
                variants={itemVariants}
              >
                {t('hero.companiesRegistered')}
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block"
            variants={itemVariants}
          >
            <motion.img
              src="/dashboard-preview.png"
              alt="Furriyadh AI Dashboard"
              className="rounded-lg shadow-2xl"
              initial={{ opacity: 0, y: 20, rotateY: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateY: 0,
                transition: { duration: 0.8, delay: 0.5 }
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* عناصر متحركة حول الصورة تعبر عن الذكاء الاصطناعي */}
            <motion.div 
              className="absolute -top-5 -right-5 w-20 h-20 bg-blue-500 rounded-full opacity-80 flex items-center justify-center text-white"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <span className="text-xs font-bold">AI</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-5 -left-5 w-16 h-16 bg-indigo-600 rounded-full opacity-80 flex items-center justify-center text-white"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            >
              <span className="text-xs font-bold">ML</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* أشكال متحركة إضافية */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </motion.section>
  );
};

export default Hero;
