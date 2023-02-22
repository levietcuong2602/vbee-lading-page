import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { COLOR_CODE } from '../../constants/advantage';

const StatisticsComponent = ({ getIcon, number, suffixes, text }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-start gap-2 md:gap-4">
      {getIcon(COLOR_CODE.FIRST)}
      <div className="">
        <div className="flex gap-1 text-3xl xl:text-4xl font-semibold">
          <CountUp duration={3} end={number} redraw>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p className="text-primary">{t(suffixes)}</p>
        </div>
        <p>{t(text)}</p>
      </div>
    </div>
  );
};

export default StatisticsComponent;
