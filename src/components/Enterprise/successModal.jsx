/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */

import { useTranslation } from 'react-i18next';
import { CDN_URL } from '../../configs';

const SuccessModal = ({ showModal, setShowModal }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className={`fixed inset-0 ${
          showModal ? 'block' : 'hidden'
        } bg-black bg-opacity-20 z-50 flex items-center  justify-center `}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <div
          className="inline-block py-8 px-8 bg-white rounded-lg w-full h-auto  max-w-xl relative"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="">
            <div className="flex justify-center">
              <img
                alt="icon"
                src={`${CDN_URL}/images/icons/success.png`}
                className="w-20 h-20"
              />
            </div>
            <p className="text-3xl w-full font-semibold text-center mt-3">
              {t('subscriptionSuccess')}
            </p>
            <div className="flex justify-center">
              <p className="text-gray-1 text-center w-ful max-w-sm mt-6">
                {t('detailSubscription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessModal;
