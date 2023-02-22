import { useTranslation } from 'react-i18next';
import ActualComponent from './ActualProductComponent';

const ListActualProductComponent = ({ title, products, language }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center gap-2.5">
        <p className="text-lg font-medium text-center xl:text-left text-gray-1 uppercase">
          {t(title)}
        </p>
        <div className="flex flex-wrap justify-center items-end gap-4">
          {products.map((product) => (
            <ActualComponent
              key={product.id}
              img={product.img}
              title={language === 'vi' ? product.titleVi : product.titleEn}
              language={language === 'vi' ? product.langVi : product.langEn}
              author={product.author}
              avatar={product.avatar}
              video={product.video}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListActualProductComponent;
