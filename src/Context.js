import React, { useState } from 'react';

import { content as Translations } from './data/Content';
import { useLocalStorage } from './helpers/useLocalStorage';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('Language', 'german');
  const [languageButton, setLanguageButton] = useState(
    language === 'german' ? 'EN' : 'DE'
  );

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
