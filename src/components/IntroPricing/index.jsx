import { useTranslation } from 'react-i18next';
import { CDN_URL } from '../../configs';

const IntroPricing = ({ title, nameList, capture }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-8 px-4">
      <div className="">
        {title && (
          <div className="flex justify-center items-center gap-1">
            <img
              src={`${CDN_URL}/images/icons/icon-title.png`}
              alt="icon"
              className="w-2.5 h-2.5"
            />
            <p className="small-title">{t(title)}</p>
          </div>
        )}
        <p className="text-4xl font-semibold text-center mt-2.5">
          {t(nameList)}
        </p>
        <div className="flex justify-center mt-5">
          <p className="font-semibold text-gray-1 text-center max-w-2xl">
            {t(capture)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroPricing;
