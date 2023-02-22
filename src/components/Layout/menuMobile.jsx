/* eslint-disable @next/next/no-html-link-for-pages */
import { useKeycloak } from '@react-keycloak/ssr';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CDN_URL,
  CRM_REDIRECT_URI,
  VBEE_BLOG_URL,
  VBEE_FACEBOOK_URL,
} from '../../configs';
import SelectLanguage from './SelectLanguage';

const MenuMobile = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const { keycloak } = useKeycloak();

  return (
    <div>
      <div>{t}</div>
      {showMenu ? (
        <img
          alt="icon-menu"
          src={`${CDN_URL}/images/icons/icon-close-3.png`}
          className="w-12 cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
      ) : (
        <img
          alt="icon-menu"
          src={`${CDN_URL}/images/icons/icon-menu.png`}
          className="w-10 cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      )}
      <div className="absolute w-screen top-24 left-0 ">
        {showMenu && (
          <div>
            <div className="grid grid-cols-1 divide-y divide-gray-700 bg-gray-800 px-4">
              <a
                href={keycloak.authenticated ? '/home' : '/'}
                className="cursor-pointer py-4  hover:text-primary"
              >
                {t('aboutUs')}
              </a>
              <a
                href="/pricing"
                className="cursor-pointer py-4  hover:text-primary"
              >
                {t('pricing')}
              </a>
              <button
                type="button"
                className="cursor-pointer flex justify-between font-medium items-center py-4  hover:text-primary"
                onClick={() => setShowCommunity(!showCommunity)}
              >
                {t('community')}

                {showCommunity ? (
                  <img
                    alt="icon"
                    src={`${CDN_URL}/images/icons/icon-sub.svg`}
                    className="mr-4 w-4 h-4"
                  />
                ) : (
                  <img
                    alt="icon"
                    src={`${CDN_URL}/images/icons/icon-add.svg`}
                    className="mr-4 w-4 h-4"
                  />
                )}
              </button>
              {showCommunity && (
                <div className="grid grid-cols-1 divide-y divide-gray-700">
                  <a
                    href={VBEE_FACEBOOK_URL}
                    className="cursor-pointer py-4  hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('facebookGroups')}
                  </a>
                  <a
                    href={VBEE_BLOG_URL}
                    className="cursor-pointer py-4  hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t('blogs')}
                  </a>
                </div>
              )}
              <a
                href="/contact"
                className="cursor-pointer py-4  hover:text-primary font-medium"
              >
                {t('contact')}
              </a>
              <SelectLanguage mobileMode />
              <div>
                {keycloak?.authenticated ? (
                  <p className="cursor-pointer w-full flex justify-between font-medium items-center py-4  hover:text-primary">
                    {keycloak?.idTokenParsed?.name}
                  </p>
                ) : (
                  <button
                    type="button"
                    className="cursor-pointer w-full flex justify-between font-medium items-center py-4  hover:text-primary"
                    onClick={() =>
                      keycloak.register({
                        redirectUri: CRM_REDIRECT_URI,
                      })
                    }
                  >
                    {t('register')}
                  </button>
                )}
              </div>
              <div>
                {keycloak?.authenticated ? (
                  <button
                    type="button"
                    className="cursor-pointer w-full flex justify-between font-medium items-center py-4  hover:text-primary"
                    onClick={() => keycloak.logout()}
                  >
                    {t('logout')}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="cursor-pointer w-full flex justify-between font-medium items-center py-4  hover:text-primary"
                    onClick={() =>
                      keycloak.login({
                        redirectUri: CRM_REDIRECT_URI,
                      })
                    }
                  >
                    {t('login')}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuMobile;
