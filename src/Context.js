import React, { useState } from 'react';

import { useLocalStorage } from './helpers/useLocalStorage';
import { useFetch } from './helpers/useFetch';

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

  const changeLanguage = () => {
    language === 'german' ? setLanguage('english') : setLanguage('german');
    language === 'german' ? setLanguageButton('DE') : setLanguageButton('EN');

    return null;
  };

  // fetch content
  const fetched = useFetch('https://webdev-portfolio-api.vercel.app');

  if (fetched && fetched.response) {
    const content = fetched.response.data.content[language];
    const icons = fetched.response.data.icons;

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
  } else if (fetched && fetched.error) {
    return 'Es ist ein Fehler aufgetreten. Bitte besuchen Sie uns zu einem späteren Zeitpunkt erneut.';
  }
  return 'Loading...';
}
