import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CDN_URL } from '../../configs';
import { LANGUAGE } from '../../constants/language';

const LANGUAGES = [
  {
    value: LANGUAGE.VI,
    icon: `${CDN_URL}/images/vi-flag.png`,
  },
  {
    value: LANGUAGE.EN,
    icon: `${CDN_URL}/images/us-flag.png`,
  },
];

const SelectLanguage = ({ isMobile }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState({});

  const selectLangRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        selectLangRef.current &&
        !selectLangRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectLangRef]);

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng.value);
    localStorage.setItem('lng', lng.value);
    setLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const defaultLanguageValue = localStorage.getItem('i18nextLng');
    const defaultLanguage = LANGUAGES.find(
      (lng) => lng.value === defaultLanguageValue,
    );

    const currentLanguageValue = localStorage.getItem('lng');
    const currentLanguage = LANGUAGES.find(
      (lng) => lng.value === currentLanguageValue,
    );

    if (currentLanguage) {
      handleChangeLanguage(currentLanguage);
      return;
    }
    if (defaultLanguage) {
      setLanguage(defaultLanguage);
      return;
    }
    handleChangeLanguage(LANGUAGES[0]);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="flex justify-between items-center font-medium py-2">
          <p>{t('language')}</p>
          <div className="flex items-center">
            {LANGUAGES.map((item) => (
              <div
                className="p-1"
                key={item.value}
                onClick={() => handleChangeLanguage(item)}
                role="button"
                tabIndex={0}
              >
                <div>
                  <div className="w-full group-hover:flex items-center gap-2 cursor-pointer font-semibold ">
                    <img
                      src={item.icon}
                      alt="flag"
                      className="max-w-none w-8 "
                      style={{
                        filter: `brightness(${
                          item.value !== i18n.language ? '0.5' : '1'
                        })`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative" ref={selectLangRef}>
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className="flex gap-1 items-center">
              <span>
                <img
                  src={language.icon}
                  alt="flag"
                  className="max-w-none w-3.5 h-3.5"
                />
              </span>
              <p className="font-semibold uppercase">{language.value}</p>
              <span>
                <img
                  src={`${CDN_URL}/images/icons/icon-chevron-down.svg`}
                  alt="chevron-down"
                  className="max-w-none w-3.5 h-3.5"
                />
              </span>
            </div>
          </button>

          <div
            id="dropdown"
            className={`${
              isOpen ? 'absolute' : 'hidden'
            } bg-semi-black text-sm md:text-base z-10 mt-4 list-none rounded-md shadow-md w-24 sm:w-32 md:w-40`}
          >
            {LANGUAGES.map((item) => (
              <div
                className="p-1"
                key={item.value}
                onClick={() => handleChangeLanguage(item)}
                role="button"
                tabIndex={0}
              >
                <div>
                  <div className="w-full flex items-center gap-2 p-1 md:p-2 cursor-pointer font-semibold ">
                    <span>
                      <img
                        src={item.icon}
                        alt="flag"
                        className="max-w-none h-3.5 w-3.5"
                      />
                    </span>
                    {t(item.value)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectLanguage;
