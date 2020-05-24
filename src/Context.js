import React, { useState } from 'react';

import { content as Translations } from './data/Content';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const [language, setLanguage] = useState('german');
  const [languageButton, setLanguageButton] = useState('EN');

  const content = Translations[language];

  const changeLanguage = () => {
    language === 'german' ? setLanguage('english') : setLanguage('german');
    language === 'german' ? setLanguageButton('DE') : setLanguageButton('EN');

    return null;
  };

  return (
    <Context.Provider
      value={{
        content,
        language,
        setLanguage,
        languageButton,
        setLanguageButton,
        changeLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
}
