import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Community = () => {
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
      className="py-20 bg-gradient-to-b from-blue-950 to-blue-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-2"
              variants={itemVariants}
            >
              {t('community.title')}
            </motion.h2>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-blue-400 mb-6"
              variants={itemVariants}
            >
              {t('community.subtitle')}
            </motion.h3>
            <motion.p 
              className="text-blue-100 mb-8"
              variants={itemVariants}
            >
              {t('community.description')}
            </motion.p>
            
            <motion.a
              href="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {t('community.createAccount')}
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* أشكال متحركة تعبر عن المجتمع والذكاء الاصطناعي */}
            <div className="relative">
              <motion.div 
                className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
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
                className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl"
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
              
              {/* تمثيل بصري للمجتمع */}
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {Array.from({ length: 20 }).map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        delay: 0.05 * index,
                        duration: 0.5
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"
                    }}
                  >
                    {String.fromCharCode(65 + (index % 26))}
                  </motion.div>
                ))}
              </div>
              
              {/* خطوط متصلة بين النقاط */}
              <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 300 300">
                <motion.path
                  d="M50,50 L100,100 L150,50 L200,100 L250,50"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1,
                    opacity: 1,
                    transition: { duration: 2, delay: 0.5 }
                  }}
                />
                <motion.path
                  d="M50,100 L100,150 L150,100 L200,150 L250,100"
                  stroke="rgba(99, 102, 241, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1,
                    opacity: 1,
                    transition: { duration: 2, delay: 0.7 }
                  }}
                />
                <motion.path
                  d="M50,150 L100,200 L150,150 L200,200 L250,150"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1,
                    opacity: 1,
                    transition: { duration: 2, delay: 0.9 }
                  }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Community;
