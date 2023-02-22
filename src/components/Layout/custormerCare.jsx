import { useRef, useState } from 'react';
import {
  CDN_URL,
  VBEE_MESSENGER_URL,
  VBEE_SUPPORT_PHONE_NUMBER,
  VBEE_ZALO_URL,
} from '../../configs';

const CustomerCare = () => {
  const [isHover, setIsHover] = useState(false);
  const latestAction = useRef(null);
  let timeout = null;

  const handleMouseLeave = () => {
    latestAction.current = 'leave';
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (latestAction.current === 'leave') {
        setIsHover(false);
      }
    }, 500);
  };

  const handleMouseEnter = () => {
    latestAction.current = 'enter';
    setIsHover(true);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer">
        <img
          alt="live"
          src={`${CDN_URL}/images/contact/live-chat.png`}
          className="w-12"
        />
      </div>
      {isHover && (
        <div>
          <a
            className="w-10 absolute -top-10"
            href={`tel:${VBEE_SUPPORT_PHONE_NUMBER}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              alt="live"
              src={`${CDN_URL}/images/contact/phone.png`}
              className="w-8"
            />
          </a>
          <a
            className="w-10 absolute top-2 -right-12"
            href={VBEE_ZALO_URL}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              alt="live"
              src={`${CDN_URL}/images/contact/zalo.png`}
              className="w-8"
            />
          </a>

          <a
            className="w-10 absolute -top-8 -right-8"
            href={VBEE_MESSENGER_URL}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              alt="live"
              src={`${CDN_URL}/images/contact/messenger.png`}
              className="w-8"
            />
          </a>
        </div>
      )}
    </div>
  );
};
export default CustomerCare;
