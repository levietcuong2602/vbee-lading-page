/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */

import { useKeycloak } from '@react-keycloak/ssr';
import { Trans, useTranslation } from 'react-i18next';
import { CDN_URL, CRM_REDIRECT_URI, OLD_VERSION_VBEE_URL } from '../../configs';

const LoginNotiDialog = ({ open, onClose }) => {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();

  return (
    <div>
      <div
        className={`fixed inset-0 ${
          open ? 'block' : 'hidden'
        } bg-black bg-opacity-20 z-50 flex items-center justify-center `}
        onClick={onClose}
      >
        <div
          className="inline-block p-4 sm:p-12 bg-white rounded-lg w-full h-auto max-w-2xl relative"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div
            onClick={onClose}
            className="absolute flex items-center justify-center right-0 top-0 w-10 h-10 cursor-pointer"
          >
            <img src="/images/icons/clear-icon.svg" alt="icon" width="60%" />
          </div>
          <div className="flex flex-col gap-5 px-2">
            <p className="text-2xl sm:text-3xl text-center text-black font-semibold mb-1 sm:mb-5">
              {t('usingService')}
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-10 mb-3">
              <div className="w-56 sm:w-full">
                <img src={`${CDN_URL}/images/vbee-v3-logo.png`} alt="vbee v3" />
              </div>
              <img
                src={`${CDN_URL}/images/icons/arrow-right-alt.svg`}
                alt="vbee v3"
              />
              <div className="w-52 sm:w-full">
                <img
                  src={`${CDN_URL}/images/vbee-studio-logo.png`}
                  alt="vbee v3"
                />
              </div>
            </div>
            <div className="text-center text-md sm:text-lg text-gray-1">
              <Trans i18nKey="notificationContent" />
            </div>
            <p className="text-center text-md sm:text-lg text-gray-1 my-2">
              {t('thanksContent')}
            </p>
            <div className="flex justify-center gap-3 sm:gap-10 flex-col sm:flex-row">
              <button
                type="button"
                className="bg-black text-white py-2.5 px-5 transition duration-300 font-medium rounded-md text-sm 2xl:text-base border hover:border-black hover:bg-white hover:text-black"
                onClick={() => window.location.assign(OLD_VERSION_VBEE_URL)}
              >
                {t('usingOldVersionButton')}
              </button>
              <button
                type="button"
                className="bg-primary text-white py-2.5 px-5 transition duration-300 font-medium rounded-md text-sm 2xl:text-base border hover:border-primary hover:bg-white hover:text-primary"
                onClick={() =>
                  keycloak.login({
                    redirectUri: CRM_REDIRECT_URI,
                  })
                }
              >
                {t('studioAccountButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNotiDialog;
