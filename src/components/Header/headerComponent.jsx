import { useTranslation } from 'react-i18next';
import { CDN_URL } from '../../configs';
import { BackgroundOverlay } from './index.style';
import Wave from './Wave';

const HeaderComponent = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex justify-center">
      <div className="h-500 xl:h-500 w-full background relative">
        <BackgroundOverlay type={title} />
        <div className="wave absolute">
          <Wave />
        </div>
      </div>
      <div className="absolute h-full flex items-center">
        <div className="">
          <p className="text-4xl lg:text-52 text-white font-semibold">
            {t(title)}
          </p>
          <div className="flex justify-center items-center mt-5 gap-1 text-white font-semibold">
            <img
              src={`${CDN_URL}/images/icons/icon-home.svg`}
              alt="icon-home"
            />
            <p className="text-sm 2xl:text-base">{t('home')}</p>
            <img
              src={`${CDN_URL}/images/icons/icon-chevron-right.svg`}
              alt="right"
            />
            <p className="text-sm 2xl:text-base">{t(title)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
