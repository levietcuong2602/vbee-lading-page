import { useTranslation } from 'react-i18next';
import { BRAND_NAME } from '../../configs';
import TitleComponent from '../TitleComponent';
import CharacteristicComponent from './CharacteristicComponent';
import { data } from './data';

const Characteristic = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full 2xl:w-1440">
      <div className="flex justify-center px-6 md:px-12 xl:px-20">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <TitleComponent
              title={BRAND_NAME}
              subTitle={`${t('characteristicTitle')} ${BRAND_NAME}`}
              description={t('characteristicCaption')}
              isCenter
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 pt-11">
            {data.map((item) => (
              <div key={item.id} className="flex justify-center">
                <CharacteristicComponent
                  getIcon={item.getIcon}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Characteristic;
