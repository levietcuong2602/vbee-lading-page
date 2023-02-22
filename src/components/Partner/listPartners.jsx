import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { data } from './data';
import { getTypeDevice, responsive } from './deviceType';
import 'react-multi-carousel/lib/styles.css';
import { AUTO_PLAY_SPEED, DEVICE_TYPE } from '../../constants/device';

const ListPartners = () => {
  const [isHover, setIsHover] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setDeviceWidth(ref.current.offsetWidth ?? 0);
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={ref}
    >
      <Carousel
        ssr
        deviceType={getTypeDevice(deviceWidth)}
        containerClass="w-full"
        itemClass="carousel-item flex justify-center items-center"
        responsive={responsive}
        infinite
        renderButtonGroupOutside
        autoPlay
        autoPlaySpeed={AUTO_PLAY_SPEED}
        arrows={isHover}
        removeArrowOnDeviceType={[DEVICE_TYPE.TABLET, DEVICE_TYPE.MOBILE]}
      >
        {data.map((item) => (
          <img
            src={item.img}
            alt={`partner-${item.id}`}
            key={item.id}
            className="h-24"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ListPartners;
