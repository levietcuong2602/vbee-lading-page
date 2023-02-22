import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const CircleProgress = ({ number, colorCode }) => (
  <div className="w-20 sm:w-16 max-w-none relative flex">
    <VisibilitySensor>
      {({ isVisible }) => {
        const percentage = isVisible ? number : 0;
        return (
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathTransitionDuration: 3,
              pathColor: colorCode,
            })}
          />
        );
      }}
    </VisibilitySensor>
    <div className="absolute w-full h-full flex justify-center items-center">
      <CountUp duration={2} end={number} redraw>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <div>
              <span ref={countUpRef} />%
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
    </div>
  </div>
);

export default CircleProgress;
