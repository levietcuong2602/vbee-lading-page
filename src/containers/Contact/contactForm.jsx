import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import apis from '../../apis';
import SuccessModal from '../../components/Enterprise/successModal';
import { CDN_URL } from '../../configs';
import { MAIL_REGEX } from '../../constants/email';

const ContactForm = () => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState({
    fullName: false,
    email: false,
    subject: false,
    description: false,
    check: false,
  });

  const handleSubmit = async () => {
    let newError = error;

    if (!fullName) newError = { ...newError, fullName: true };
    else newError = { ...newError, fullName: false };

    if (!MAIL_REGEX.test(email)) newError = { ...newError, email: true };
    else newError = { ...newError, email: false };

    if (!subject) newError = { ...newError, subject: true };
    else newError = { ...newError, subject: false };

    if (!description) newError = { ...newError, description: true };
    else newError = { ...newError, description: false };

    if (!check) newError = { ...newError, check: true };
    else newError = { ...newError, check: false };

    setError(newError);

    const isValid =
      fullName && MAIL_REGEX.test(email) && subject && description && check;

    if (isValid) {
      setLoading(true);

      const data = await apis.contact.sendCustomerInfo({
        fullName,
        email,
        subject,
        description,
      });
      setLoading(false);
      if (data.status) {
        setShowModal(true);
      }
    }
  };
  return (
    <div className="w-3/4 md:w-1/2 flex justify-center">
      <div className="">
        <div className="flex items-center gap-1">
          <img
            src={`${CDN_URL}/images/icons/icon-title.png`}
            alt=""
            className="w-2.5 h-2.5"
          />
          <p className="text-primary text-sm font-semibold">
            {t('contactFormTitle')}
          </p>
        </div>
        <p className="font-semibold text-4xl mt-2.5 mb-6">
          {t('contactFormCapture')}
        </p>
        <form className="flex flex-col items-start w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="font-medium text-sm">
                {t('fullName')}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                className={`mt-1.5 text-sm py-2 px-2.5 w-full border rounded-md outline-none focus:border-blue-500 ${
                  error?.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t('placeholderFullName')}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-sm">
                {t('email')} <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`mt-1.5 text-sm py-2 px-2.5 w-full border rounded-md outline-none focus:border-blue-500 ${
                  error?.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={t('placeholderEmailForm')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2.5 w-full">
            <label htmlFor="subject" className="font-medium text-sm">
              {t('topic')} <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              className={`mt-1.5 text-sm py-2 px-2.5 w-full border rounded-md outline-none focus:border-blue-500 ${
                error?.subject ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('placeholderTopic')}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mt-2.5 w-full">
            <label htmlFor="content" className="font-medium text-sm">
              {t('contentLabel')} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              className={`"mt-1.5 text-sm py-2 px-2.5 w-full border border-gray-300 rounded-md outline-none focus:border-blue-500 h-24 resize-none ${
                error?.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t('placeholderContent')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex mt-2.5">
            <label htmlFor="agree" className="flex items-start">
              <input
                type="checkbox"
                value={check}
                onChange={() => setCheck(!check)}
                className="form-checkbox w-6 h-6"
              />
              <span
                className={`ml-2 text-sm font-medium ${
                  error.check ? 'text-red-500' : 'text-gray-1'
                }`}
              >
                {t('checkboxCapture')}
              </span>
            </label>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-white bg-primary rounded-md mt-5 py-2.5 w-full hover:bg-black hover:text-white transition duration-300"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              </div>
            ) : (
              <p> {t('textButtonForm')}</p>
            )}
          </button>
        </form>
      </div>
      {showModal && (
        <SuccessModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default ContactForm;
