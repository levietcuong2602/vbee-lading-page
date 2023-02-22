import { useTranslation } from 'react-i18next';
import { CDN_URL, WEBSITE } from '../../configs';

const Advertisement = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <img
        src={`${CDN_URL}/bg-enterprise-5.png`}
        alt="advertisement"
        className="w-full h-40 lg:h-52"
      />
      <div className="absolute top-4 sm:top-12 xl:top-16 w-full">
        <div className="flex justify-center px-4">
          <div className="">
            <p className="font-semibold text-sm 2xl:text-base text-primary uppercase">
              {WEBSITE}
            </p>
            <p className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl">
              {t('emotionalVoice')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
