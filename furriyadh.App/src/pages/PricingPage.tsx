import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">{t('header.pricing')}</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 text-center">
            محتوى صفحة الأسعار سيتم إضافته قريباً. هذه صفحة مؤقتة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
