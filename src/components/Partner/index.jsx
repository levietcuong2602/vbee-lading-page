import { useTranslation } from 'react-i18next';
import { VBEE } from '../../configs';
import 'react-multi-carousel/lib/styles.css';
import ListPartners from './listPartners';
import TitleComponent from '../TitleComponent';

const Partner = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full 2xl:w-1440">
      <div className="px-4">
        <TitleComponent
          title={`${t('companion')} ${VBEE}`}
          subTitle={t('myPartner')}
          isCenter
        />
        <ListPartners />
      </div>
    </div>
  );
};

export default Partner;
