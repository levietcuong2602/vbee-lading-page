import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { CRM_REDIRECT_URI } from '../../configs';

const ButtonToCRM = () => {
  const { t } = useTranslation();
  return (
    <Link passHref href={CRM_REDIRECT_URI}>
      <button
        className="py-2.5 px-8  bg-primary text-white transition duration-300 rounded-md font-medium hover:bg-black hover:text-white flex items-center"
        type="button"
      >
        {t('openStudio')}
      </button>
    </Link>
  );
};

export default ButtonToCRM;
