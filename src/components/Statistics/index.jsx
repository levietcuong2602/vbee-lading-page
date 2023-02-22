import { useTranslation } from 'react-i18next';
import { BRAND_NAME, CDN_URL } from '../../configs';
import TitleComponent from '../TitleComponent';
import { data } from './data';
import StatisticsComponent from './StatisticComponent';

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex justify-center w-full">
      <div className="w-full h-96 xl:max-h-560 bg-section1 opacity-60" />
      <div className="w-full h-96 xl:max-h-560 bg-section2 opacity-60" />
      <div className="w-full absolute top-0  h-96 xl:max-h-560 bg-section3 opacity-60" />
      <img
        alt="background"
        src={`${CDN_URL}/images/bg-mask-section.png`}
        className="w-screen h-96 xl:max-h-560 absolute top-0"
      />

      <div className="flex flex-col absolute w-full px-2 top-6 sm:top-14">
        <TitleComponent
          title={t('statistics')}
          subTitle={`${t('about')} ${BRAND_NAME}`}
          description={t('detailStatistics')}
          isWhite
          isCenter
        />
      </div>
      <div className="bg-white mx-6 sm:mx-8 md:mx-32 lg:mx-56 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 absolute -bottom-44 sm:-bottom-24 xl:-bottom-20 shadow-lg gap-6 sm:gap-10 lg:gap-16 py-6 lg:py-10 xl:py-12 px-20 rounded-md">
        {data.map((item) => (
          <StatisticsComponent
            key={item.id}
            getIcon={item.getIcon}
            number={item.number}
            suffixes={item.suffixes}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
