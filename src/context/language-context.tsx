"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { Translations } from '@/locales/translations';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  const { translations } = require('@/locales/translations');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
