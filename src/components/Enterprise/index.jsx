import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import apis from '../../apis';
import { CDN_URL } from '../../configs';
import { MAIL_REGEX } from '../../constants/email';
import TitleComponent from '../TitleComponent';
import SuccessModal from './successModal';

const Enterprise = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (emailInput) => {
    setEmail(emailInput);
    if (MAIL_REGEX.test(emailInput)) setValidate(true);
    else setValidate(false);
  };

  const handleSubscribe = async () => {
    if (validate) {
      setLoading(true);
      const data = await apis.subscribe.subscribe({ email });
      setLoading(false);
      if (data.status) {
        setShowModal(true);
      }
    }
  };

  return (
    <div className="relative flex justify-center w-full">
      <div className="w-full h-96 bg-section2 opacity-60" />
      <div className="w-full absolute top-0  h-96 bg-section3 opacity-60" />
      <img
        alt="background"
        src={`${CDN_URL}/images/bg-mask-section.png`}
        className="w-screen h-96  absolute top-0"
      />
      <div className="absolute flex justify-center items-center h-96">
        <div>
          <TitleComponent
            title={t('enterprise')}
            subTitle={t('enterpriseApi')}
            description={t('enterpriseDetail')}
            isCenter
            isWhite
          />
          <div className="mt-4 sm:mt-16 flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              name="email"
              className="pl-5 py-2 pr-2 rounded-md outline-none focus:border-blue-500 w-80 md:w-96 text-gray-1"
              placeholder={t('placeholderEmail')}
              value={email}
              onChange={(e) => handleChangeEmail(e.target.value)}
              disabled={loading}
            />
            <button
              type="button"
              className={`px-6 py-2.5 text-white bg-black transition duration-300 hover:bg-primary border border-black hover:border-primary text-sm rounded-md flex items-center gap-2 font-medium ${
                loading && 'cursor-not-allowed'
              }`}
              onClick={handleSubscribe}
              disabled={!validate || loading}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                <p className="flex items-center gap-2">
                  {t('registerReceiveMail')}
                  <span>
                    <img
                      src={`${CDN_URL}/images/icons/icon-mail-white.svg`}
                      alt="icon-mail"
                    />
                  </span>
                </p>
              )}
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <SuccessModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Enterprise;
