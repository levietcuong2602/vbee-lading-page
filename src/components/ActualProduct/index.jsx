import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BRAND_NAME } from '../../configs';
import ButtonToCRM from '../Button/buttonToCRM';
import TitleComponent from '../TitleComponent';
import { data } from './data';
import ListActualProductComponent from './ListActualProductComponent';

const groupCategory = (language) => {
  const category = language === 'vi' ? 'categoryVi' : 'categoryEn';
  return data.reduce((result, object) => {
    const currentRes = result;
    const key = object[category];
    if (!result[key]) {
      currentRes[key] = [];
    }
    currentRes[key].push(object);
    return currentRes;
  }, {});
};

const ActualProduct = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation('actualProduct');
  const [classifyData] = useState(groupCategory(i18n.language));
  return (
    <div className="w-full 2xl:w-1440">
      <div className="px-6 md:px-12 xl:px-20">
        <TitleComponent
          title={BRAND_NAME}
          subTitle={t('titleActualProduct')}
          isCenter
        />
        <div className="flex flex-col gap-14 mt-2 sm:mt-14">
          {Object.keys(classifyData).map((item) => (
            <ListActualProductComponent
              key={item}
              products={classifyData[item]}
              title={item}
              language={i18n.language}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <ButtonToCRM />
        </div>
      </div>
    </div>
  );
};
ActualProduct.getInitialProps = async () => ({
  namespacesRequired: ['actualProduct'],
});

export default ActualProduct;
