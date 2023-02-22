import { Trans, useTranslation } from 'react-i18next';
import { useKeycloak } from '@react-keycloak/ssr';
import Link from 'next/link';
import {
  BRAND_NAME,
  CDN_URL,
  CRM_REDIRECT_URI,
  OLD_VERSION_VBEE_URL,
} from '../../configs';
import Wave from './Wave';
import PlayButton from './PlayButton';
import { WaveBackground } from './index.style';

const Header = () => {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();

  return (
    <div className="font-sfd text-white relative">
      <div className="h-864 w-full background relative">
        <WaveBackground />
        <div className="wave absolute">
          <Wave />
        </div>
      </div>
      <div className="absolute top-0 w-full flex justify-center">
        <div className="w-full 2xl:w-1440">
          <div className="pt-24 lg:pt-32 px-6 xl:px-20 flex flex-col lg:flex-row justify-between items-center gap-y-4">
            <div>
              <div className="flex items-center gap-1">
                <img
                  src={`${CDN_URL}/images/icons/icon-title-white.png`}
                  className="w-2.5 h-2.5"
                  alt="icon"
                />
                <p className="text-sm 2xl:text-base font-semibold text-white">
                  {t('autoMakeContent')}
                </p>
              </div>
              <div className="pt-4 2xl:pt-8">
                <p className="text-3xl xl:text-5xl font-semibold text-white">
                  {BRAND_NAME}
                </p>
              </div>
              <div className="pt-6">
                <div className="max-w-xl 2xl:max-w-3xl 2xl:text-lg 2xl:font-medium">
                  <Trans i18nKey="headerCapture" />
                </div>
              </div>
              <div className="pt-4 2xl:pt-8 flex items-center gap-10">
                <PlayButton />
                <div className="flex flex-wrap gap-4">
                  {keycloak?.authenticated ? (
                    <Link passHref href={CRM_REDIRECT_URI}>
                      <button
                        type="button"
                        className="bg-black transition duration-300 py-2.5 px-5 font-medium rounded-md text-sm 2xl:text-base  hover:bg-white hover:text-black"
                      >
                        {t('redirectToCRM')}
                      </button>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="bg-black py-2.5 px-8 transition duration-300 font-medium rounded-md text-sm 2xl:text-base hover:bg-white hover:text-black"
                      onClick={() =>
                        keycloak.register({
                          redirectUri: CRM_REDIRECT_URI,
                        })
                      }
                    >
                      {t('signUpForTrial')}
                    </button>
                  )}
                  {!keycloak?.authenticated && (
                    <Link passHref href={OLD_VERSION_VBEE_URL}>
                      <button
                        type="button"
                        className="bg-yellow-400 py-2.5 px-5 transition duration-300 font-medium rounded-md text-sm 2xl:text-base hover:bg-white text-black"
                      >
                        {t('useOldVersion')}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="relative block">
              <div className="mt-6">
                <img
                  src={`${CDN_URL}/images/header/header-tablet.png`}
                  alt="laptop"
                  className="w-500 lg:w-960"
                />
              </div>
              <div className="animation-bounce absolute bottom-0 lg:-bottom-12 xl:-bottom-16 right-0 lg:-right-4 xl:-right-4">
                <img
                  src={`${CDN_URL}/images/feature/bg-feature.png`}
                  alt="mobile"
                  className="h-44 md:h-52 lg:h-64 xl:h-80 z-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
