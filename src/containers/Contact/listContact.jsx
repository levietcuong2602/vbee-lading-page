import { useTranslation } from 'react-i18next';
import TitleComponent from '../../components/TitleComponent';
import ContactComponent from './contactComponent';
import { dataContact } from './data';

const ListContact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <TitleComponent
        title={t('contactTitle')}
        subTitle={t('contactQuestion')}
        description={t('contactCapture')}
        isCenter
        maxWidthDescription="max-w-2xl"
      />
      <div className="flex items-center flex-wrap gap-6 justify-center mt-20">
        {dataContact.map((item) => (
          <ContactComponent key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ListContact;
