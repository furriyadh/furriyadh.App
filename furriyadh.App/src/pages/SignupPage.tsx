import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { motion } from 'framer-motion';

const SignupPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('header.createAccount')}
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          انضم إلى أكثر من 20,000 شركة تستخدم Furriyadh لتحسين حملاتها الإعلانية وزيادة مبيعاتها
        </motion.p>
        
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="أدخل اسمك الأول"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                  الاسم الأخير
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="أدخل اسمك الأخير"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="أدخل كلمة المرور"
              />
              <p className="mt-1 text-xs text-gray-500">
                يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل وتتضمن حرفًا كبيرًا ورقمًا ورمزًا خاصًا
              </p>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="mr-2 rtl:ml-2 rtl:mr-0 block text-sm text-gray-700">
                أوافق على <a href="#" className="text-blue-600 hover:text-blue-500">شروط الاستخدام</a> و <a href="#" className="text-blue-600 hover:text-blue-500">سياسة الخصوصية</a>
              </label>
            </div>
            
            <div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                إنشاء حساب مجاني
              </motion.button>
            </div>
            
            <div className="text-center text-sm text-gray-600">
              لديك حساب بالفعل؟ <a href="/login" className="text-blue-600 hover:text-blue-500">تسجيل الدخول</a>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
