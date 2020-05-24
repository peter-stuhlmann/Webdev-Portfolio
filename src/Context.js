import React, { useState } from 'react';

import { content as Translations } from './data/Content';
import { icons } from './data/Icons';
import { useLocalStorage } from './helpers/useLocalStorage';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  // Detect browser language
  let browserLanguage = navigator.language;
  switch (browserLanguage) {
    case 'de':
    case 'de-at':
    case 'de-ch':
    case 'de-de':
    case 'de-li':
    case 'de-lu':
      browserLanguage = 'german';
      break;
    default:
      browserLanguage = 'english';
  }

  const [language, setLanguage] = useLocalStorage('Language', browserLanguage);
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
        icons,
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
