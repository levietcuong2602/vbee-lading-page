/* eslint-disable no-nested-ternary */
import { useKeycloak } from '@react-keycloak/ssr';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { CDN_URL, CRM_PAYMENT_REDIRECT_URI, VND } from '../../configs';
import { COLOR_CODE, NUMBER } from '../../constants/advantage';
import { LANGUAGE } from '../../constants/language';
import { EXPIRE_IN } from '../../constants/pricing';
import IconCheckCircle from '../Icons/IconCheckCircle';

const getIconHeader = (icon, highlight) => {
  if (icon) return icon;
  if (highlight) return `${CDN_URL}/images/icons/icon-briefcase-white.svg`;
  return `${CDN_URL}/images/icons/icon-package.svg`;
};

const PackageItem = ({ data, highlight }) => {
  const { t, i18n } = useTranslation();
  const { keycloak } = useKeycloak();

  const renderPackagePriceUnit = () => {
    const { price, expiresIn } = data;
    if (price <= 0) return '';
    if (price < 1) return `${VND}/${t('character')}`;
    return `${VND}/${expiresIn <= EXPIRE_IN.A_MONTH ? t('month') : t('year')}`;
  };

  return (
    <div className="flex w-full justify-center">
      <div
        className={`shadow-xl rounded-md w-96 ${
          highlight && 'bg-primary-to-red'
        }`}
      >
        <div className="px-7 pt-3 border-t">
          <div className="flex justify-end gap-1 h-7">
            {data.mostPopular && (
              <div
                className={`py-1 px-2 text-sm font-semibold  rounded-xl ${
                  highlight ? 'text-primary bg-white' : 'text-white bg-gray-1'
                }`}
              >
                {t('mostPopular')}
              </div>
            )}
            {data.recommended && (
              <div
                className={`py-1 px-2 text-sm font-semibold  rounded-xl ${
                  highlight ? 'text-primary bg-white' : 'text-white bg-gray-1'
                }`}
              >
                {t('recommended')}
              </div>
            )}
          </div>
          <img src={getIconHeader(data.icon, highlight)} alt="icon" />
          <p
            className={`mt-4 text-xl lg:text-2xl font-semibold ${
              highlight && 'text-white'
            }`}
          >
            {i18n.language === LANGUAGE.VI ? data.name.vi : data.name.en}
          </p>
          <div className="flex items-end gap-2">
            <p
              className={`text-4xl lg:text-5xl font-semibold ${
                highlight ? 'text-white' : 'text-primary'
              }`}
            >
              {data.price > 0 ? data.price.toLocaleString() : `${t('free')}`}
            </p>
            <p
              className={`text-sm font-medium mb-1 ${
                highlight ? 'text-white' : 'text-gray-1'
              }`}
            >
              {renderPackagePriceUnit()}
            </p>
          </div>
          {keycloak?.authenticated ? (
            <Link passHref href={CRM_PAYMENT_REDIRECT_URI}>
              <button
                type="button"
                className={`w-full py-3 uppercase mt-4 border text-sm font-bold rounded-md mb-4 ${
                  highlight
                    ? 'bg-white text-primary hover:bg-red-100'
                    : 'border-gray-1 text-gray-1 hover:bg-primary hover:text-white hover:border-primary'
                }`}
              >
                {t('startNow')}
              </button>
            </Link>
          ) : (
            <button
              type="button"
              className={`w-full py-3 uppercase mt-4 border text-sm font-bold rounded-md mb-4 ${
                highlight
                  ? 'bg-white text-primary hover:bg-red-100'
                  : 'border-gray-1 text-gray-1 hover:bg-primary hover:text-white hover:border-primary'
              }`}
              onClick={() =>
                keycloak.login({
                  redirectUri: CRM_PAYMENT_REDIRECT_URI,
                })
              }
            >
              {t('startNow')}
            </button>
          )}
          <div
            className={`border-t  py-4 pb-9 ${
              highlight ? 'border-white' : 'border-gray-1'
            }`}
          >
            {data.contents.map((item) => (
              <div className="flex items-start gap-2 pt-3" key={item.id}>
                <div className="mt-1">
                  {highlight ? (
                    <IconCheckCircle
                      color={COLOR_CODE.WHITE}
                      width={NUMBER[14]}
                      height={NUMBER[14]}
                    />
                  ) : (
                    <IconCheckCircle
                      color={COLOR_CODE.FIRST}
                      width={NUMBER[14]}
                      height={NUMBER[14]}
                    />
                  )}
                </div>
                <p
                  className={`text-sm font-medium ${
                    highlight ? 'text-white' : 'text-gray-1'
                  }`}
                >
                  {i18n.language === LANGUAGE.VI ? item.vi : item.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
