/* eslint-disable @next/next/no-html-link-for-pages */
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import {
  VBEE_EMAIL,
  VBEE_LICENSE,
  VBEE_SUPPORT_PHONE_NUMBER,
  VBEE_PRIVACY_POLICY_URL,
  VBEE_TERM_OF_USE_URL,
  VBEE_HOTLINE_PHONE_NUMBER,
  CDN_URL,
  VBEE_IOS_APP_URL,
  VBEE_ANDROID_APP_URL,
} from '../../configs';
import IconCall from '../Icons/IconCall';
import IconEmail from '../Icons/IconEmail';
import IconLocation from '../Icons/IconLocation';
import { dataProducts, dataSocial } from './data';
import data from './dataAddress.json';

const Footer = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation('footer');

  return (
    <div className="w-full 2xl:w-1440">
      <div className="relative">
        <div className="flex justify-center">
          <img
            src={`${CDN_URL}/images/bg-footer.png`}
            alt="bg-footer"
            className="hidden md:block h-96 max-w-none mr-4"
          />
        </div>
        <div className="md:absolute top-3 w-full">
          <div className="flex justify-center">
            <div className="mx-8 sm:mx-20 md:mx-32">
              <div className="w-full flex flex-col lg:flex-row justify-between gap-10 xl:gap-20">
                <div>
                  <a href="#top">
                    <img
                      src={`${CDN_URL}/images/logo-4x.png`}
                      alt="vbee"
                      className="h-12 max-w-none"
                    />
                  </a>
                  <p className="text-gray-1 w-full lg:max-w-sm mt-9 text-justify">
                    {t('captureFooter')}
                  </p>
                  <div className="flex items-center gap-6 mt-5">
                    {dataSocial.map((social) => (
                      <a key={social.id} href={social.url}>
                        <img src={social.img} alt={social.name} />
                      </a>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-9">
                    <a href={VBEE_IOS_APP_URL}>
                      <img
                        src={`${CDN_URL}/images/appstore.png`}
                        alt="appstore"
                      />
                    </a>
                    <a href={VBEE_ANDROID_APP_URL}>
                      <img
                        src={`${CDN_URL}/images/googleplay.png`}
                        alt="googleplay"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-bold mb-2 md:mb-9">{t('mainSections')}</p>
                  <div className="flex flex-col flex-wrap gap-2 font-medium ">
                    <Link passHref href="/">
                      <p className="text-gray-1 hover:text-primary cursor-pointer">
                        {t('home')}
                      </p>
                    </Link>
                    <Link passHref href="/pricing">
                      <p className="text-gray-1 hover:text-primary cursor-pointer">
                        {t('service')}
                      </p>
                    </Link>
                    <Link passHref href="/contact">
                      <p className="text-gray-1 hover:text-primary cursor-pointer">
                        {t('contact')}
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="font-bold mb-2 md:mb-9">{t('products')}</p>
                  <div className="flex flex-col flex-wrap gap-2 font-medium text-gray-1">
                    {dataProducts.map((product) => (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a
                        key={product.id}
                        href={product.url}
                        className="text-gray-1 hover:text-primary"
                        // target="_blank"
                        rel="noreferrer"
                      >
                        {t(product.name)}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="font-medium ">
                  <p className="font-bold mb-2 md:mb-9">{t('contact')}</p>
                  <div className="flex flex-col flex-wrap gap-2 text-gray-1">
                    <div className="flex gap-1.5 items-start">
                      <IconLocation />
                      <p className="font-medium text-gray-1 -mt-1 w-56">
                        {i18n.languages === 'vi'
                          ? data.addressVi
                          : data.addressEn}
                      </p>
                    </div>
                    <div className="flex gap-1.5 items-start">
                      <IconEmail />
                      <p className="font-medium text-gray-1 -mt-1 max-w-xs">
                        {VBEE_EMAIL}
                      </p>
                    </div>
                    <div className="flex gap-1.5 items-start">
                      <IconCall />
                      <p className="font-medium text-gray-1 -mt-1 max-w-xs">
                        {t('support')}: {VBEE_SUPPORT_PHONE_NUMBER}
                      </p>
                    </div>
                    <div className="flex gap-1.5 items-start">
                      <IconCall />
                      <p className="font-medium text-gray-1 -mt-1 max-w-xs">
                        {t('hotline')}: {VBEE_HOTLINE_PHONE_NUMBER}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-9">
                <div className="border-t border-gray-500 w-full mb-5 py-5">
                  <div className="flex flex-col md:flex-row justify-between text-gray-1 gap-6 lg:gap-12">
                    <p>{VBEE_LICENSE}</p>
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
                      <a
                        href={VBEE_PRIVACY_POLICY_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-1 hover:text-primary"
                      >
                        {t('policy')}
                      </a>
                      <a
                        href={VBEE_TERM_OF_USE_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-1 hover:text-primary"
                      >
                        {t('rules')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Footer.getInitialProps = async () => ({
  namespacesRequired: ['footer'],
});
export default Footer;
