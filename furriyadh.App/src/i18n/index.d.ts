// هذا الملف يحدد تعريفات TypeScript لوحدة i18n
// يساعد هذا الملف في حل مشاكل استيراد وحدة i18n في المشروع

// تعريف وحدة i18n عند استيرادها من المجلد الأب
declare module '../i18n' {
  import i18n from 'i18next';
  export default i18n;
}

// تعريف وحدة i18n عند استيرادها من نفس المجلد
declare module './i18n' {
  import i18n from 'i18next';
  export default i18n;
}

// تعريف وحدة i18next نفسها
declare module 'i18next' {
  const i18next: any;
  export default i18next;
  export interface i18n {
    changeLanguage(lng: string): Promise<any>;
    language: string;
    t(key: string, options?: any): string;
  }
}

// تعريف وحدة react-i18next
declare module 'react-i18next' {
  import { i18n } from 'i18next';
  export function useTranslation(ns?: string | string[]): {
    t: (key: string, options?: any) => string;
    i18n: i18n;
  };
  export interface I18nextProviderProps {
    i18n: i18n;
    children: React.ReactNode;
  }
  export const I18nextProvider: React.FC<I18nextProviderProps>;
}
