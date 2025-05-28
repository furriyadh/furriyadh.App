import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResponsiveTest from '../components/ResponsiveTest';

const Login = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق تسجيل الدخول
    console.log('تسجيل الدخول باستخدام:', { email, password });
  };

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      <ResponsiveTest />
      
      <motion.section 
        className="py-20 bg-gradient-to-b from-blue-900 to-blue-950"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-md mx-auto">
            <motion.div 
              className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-700/50 shadow-lg auth-form"
              variants={itemVariants}
            >
              <motion.h1 
                className="text-2xl md:text-3xl font-bold text-white mb-6 text-center auth-form-title"
                variants={itemVariants}
              >
                {t('login.title')}
              </motion.h1>
              
              <form onSubmit={handleSubmit}>
                <motion.div className="mb-4" variants={itemVariants}>
                  <label htmlFor="email" className="block text-blue-200 mb-2">
                    {t('login.email')}
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-blue-800/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('login.emailPlaceholder')}
                    required
                  />
                </motion.div>
                
                <motion.div className="mb-6" variants={itemVariants}>
                  <label htmlFor="password" className="block text-blue-200 mb-2">
                    {t('login.password')}
                  </label>
                  <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-blue-800/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('login.passwordPlaceholder')}
                    required
                  />
                </motion.div>
                
                <motion.div className="flex items-center justify-between mb-6" variants={itemVariants}>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="remember" 
                      className="w-4 h-4 bg-blue-800 border-blue-700 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="remember" className="ml-2 rtl:mr-2 rtl:ml-0 text-blue-200">
                      {t('login.rememberMe')}
                    </label>
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                    {t('login.forgotPassword')}
                  </a>
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  whileHover={{ backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  {t('login.loginButton')}
                </motion.button>
              </form>
              
              <motion.div className="mt-8 text-center" variants={itemVariants}>
                <p className="text-blue-200">
                  {t('login.noAccount')} 
                  <a href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors ml-1 rtl:mr-1 rtl:ml-0">
                    {t('login.signupLink')}
                  </a>
                </p>
              </motion.div>
              
              <motion.div className="mt-8" variants={itemVariants}>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-blue-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-blue-950 text-blue-400">
                      {t('login.orContinueWith')}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <motion.button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-blue-700 rounded-md shadow-sm bg-blue-800/30 text-sm font-medium text-blue-200 hover:bg-blue-800/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-blue-700 rounded-md shadow-sm bg-blue-800/30 text-sm font-medium text-blue-200 hover:bg-blue-800/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-blue-700 rounded-md shadow-sm bg-blue-800/30 text-sm font-medium text-blue-200 hover:bg-blue-800/50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Login;
