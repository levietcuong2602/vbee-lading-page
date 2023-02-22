import ButtonToCRM from '../Button/buttonToCRM';
import TitleComponent from '../TitleComponent';
import CaseStudyComponent from './CaseStudyComponent';
import { data } from './data';

const { useTranslation } = require('react-i18next');

const CaseStudy = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full 2xl:w-1440">
      <div className="px-6 md:px-12 xl:px-44">
        <TitleComponent
          title={t('caseStudy')}
          subTitle={t('caseStudyTitle')}
          description={t('caseStudyDetail')}
          styleSubtitleScope="flex flex-col xl:flex-row justify-between items-center mt-2.5 gap-1"
        />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {data.map((item) => (
              <CaseStudyComponent
                image={item.image}
                text={item.text}
                audio={item.audio}
                key={item.id}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="pt-11 flex justify-center">
          <ButtonToCRM />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
