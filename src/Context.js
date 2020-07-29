import React, { Fragment, useState } from 'react';

import Spinner from './components/Spinner';
import { GlobalStyles } from './components/styled-components/GlobalStyles';
import { useLocalStorage } from './helpers/useLocalStorage';
import { useFetch } from './helpers/useFetch';
import { trackingCode } from './helpers/analytics';
import Cookies from 'js-cookie';

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

  // cookies
  const [cookieOptIn, setCookieOptIn] = useState(Cookies.get('cookie-opt-in'));

  const optIn = () => {
    setCookieOptIn(true);
    Cookies.set('cookie-opt-in', true, { expires: 90 });
    window.location.reload();
  };

  const optOut = () => {
    setCookieOptIn(false);
    Cookies.set('cookie-opt-in', false, { expires: 90 });
  };

  // analytics
  if (cookieOptIn === 'true') {
    document.cookie = `Disable ${trackingCode}=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = false;
  } else {
    document.cookie = `Disable ${trackingCode}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = true;
  }

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
          cookieOptIn,
          setCookieOptIn,
          optIn,
          optOut,
        }}
      >
        {children}
      </Context.Provider>
    );
  } else if (fetched && fetched.error) {
    return 'Es ist ein Fehler aufgetreten. Bitte besuchen Sie uns zu einem späteren Zeitpunkt erneut.';
  }
  return (
    <Context.Provider
      value={{
        language,
      }}
    >
      <Fragment>
        <GlobalStyles />
        <Spinner />
      </Fragment>
    </Context.Provider>
  );
}
