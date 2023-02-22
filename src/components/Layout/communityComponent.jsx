import { useState } from 'react';
import { VBEE_BLOG_URL, VBEE_FACEBOOK_URL } from '../../configs';

const { useTranslation } = require('react-i18next');

const CommunityComponent = () => {
  const { t } = useTranslation();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="mt-4 pb-4">{t('community')}+</div>
      {isHover && (
        <div className="bg-semi-black flex flex-col text-gray-2 absolute top-10 w-52 py-3 pl-3 rounded-md">
          <a
            href={VBEE_FACEBOOK_URL}
            className="cursor-pointer py-2 text-white hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            {t('facebookGroups')}
          </a>
          <a
            href={VBEE_BLOG_URL}
            className="cursor-pointer py-2 text-white hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            {t('blogs')}
          </a>
        </div>
      )}
    </div>
  );
};

export default CommunityComponent;
