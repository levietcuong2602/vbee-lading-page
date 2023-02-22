import { useTranslation } from 'react-i18next';
import { COLOR_CODE, NUMBER } from '../../constants/advantage';
import TitleComponent from '../TitleComponent';
import CircleProgress from './CircleProgress';
import { CDN_URL } from '../../configs';

const Advantages = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full 2xl:w-1440">
      <div className="flex justify-between gap-7 px-6 md:px-20 xl:px-44">
        <div className="py-16">
          <TitleComponent
            title={t('advantages')}
            subTitle={t('advantagesTitle')}
            description={t('advantagesDescription')}
          />
          <div className="mt-8 flex items-center gap-8">
            <CircleProgress number={NUMBER[80]} colorCode={COLOR_CODE.FIRST} />
            <div>
              <p className="font-semibold text-lg">{t('quicklyRecord')}</p>
              <p className="text-gray-1">{t('freeRecord')}</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-8">
            <CircleProgress number={NUMBER[85]} colorCode={COLOR_CODE.SECOND} />

            <div>
              <p className="font-semibold text-lg">{t('saveTimeProduce')}</p>
              <p className="text-gray-1">{t('autoProgress')}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={`${CDN_URL}/images/advantages/bg-advantage.png`}
            alt="img"
            className="hidden lg:block max-h-96 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
