import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const ResponsiveTest: React.FC = () => {
  // استخدم فقط المتغيرات التي تحتاجها
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg z-50 text-xs">
      <div className="block sm:hidden">XS: &lt;640px</div>
      <div className="hidden sm:block md:hidden">SM: 640px-768px</div>
      <div className="hidden md:block lg:hidden">MD: 768px-1024px</div>
      <div className="hidden lg:block xl:hidden">LG: 1024px-1280px</div>
      <div className="hidden xl:block 2xl:hidden">XL: 1280px-1536px</div>
      <div className="hidden 2xl:block">2XL: &gt;1536px</div>
      <div className="mt-1 pt-1 border-t border-gray-200 dark:border-gray-700">
        {language === 'ar' ? 'عربي' : 'English'}
      </div>
    </div>
  );
};

export default ResponsiveTest;
