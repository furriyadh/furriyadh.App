import '../i18n';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    changeLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <motion.header 
      className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="/" className="text-2xl font-bold">Furriyadh</a>
          </motion.div>
          <nav className="hidden md:flex ml-10">
            <ul className="flex space-x-6 rtl:space-x-reverse">
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="/solutions" className="hover:text-blue-200 transition-colors">{t('header.solutions')}</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="/integrations" className="hover:text-blue-200 transition-colors">{t('header.integrations')}</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="/resources" className="hover:text-blue-200 transition-colors">{t('header.resources')}</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <a href="/pricing" className="hover:text-blue-200 transition-colors">{t('header.pricing')}</a>
              </motion.li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <motion.button
            onClick={toggleLanguage}
            className="text-sm border border-blue-400 px-3 py-1 rounded-md hover:bg-blue-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </motion.button>
          <motion.a
            href="/login"
            className="text-sm hover:text-blue-200 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {t('header.login')}
          </motion.a>
          <motion.a
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
          >
            {t('header.startNow')}
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
