import React, { createContext, useContext, useEffect, useState } from "react";

import { LanguageLocale } from "@/lib/dictionary";

type LanguageContext = {
  language: LanguageLocale;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageLocale>>;
};

const defaultLanguage = window.navigator.language.split(
  "-",
)[0] as LanguageLocale;

const LanguageContext = createContext<LanguageContext>({
  language: defaultLanguage,
  setLanguage: () => {},
});

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<LanguageLocale>(() => {
    // Load from localStorage
    if (!localStorage.getItem("language")) return defaultLanguage;
    else return JSON.parse(localStorage.getItem("language")!);
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("useLanguage was used outside of LanguageContextProvider!");
  return context;
}
