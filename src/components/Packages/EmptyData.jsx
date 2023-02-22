import { useTranslation } from 'react-i18next';

const EmptyData = () => {
  const { t } = useTranslation();
  return (
    <div className="h-80 w-full flex justify-center items-center bg-gray-2 mt-4 shadow-md rounded-md">
      <p className="text-gray-1 text-3xl font-semibold">{t('noData')}</p>
    </div>
  );
};
export default EmptyData;
