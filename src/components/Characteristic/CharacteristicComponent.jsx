import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COLOR_CODE } from '../../constants/advantage';

const CharacteristicComponent = ({ getIcon, text }) => {
  const { t } = useTranslation();
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`p-6 w-56 rounded-md h-52 shadow-lg ${
        isHover ? 'bg-primary' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {getIcon(isHover ? COLOR_CODE.WHITE : COLOR_CODE.FIRST)}
      <p
        className={`text-lg font-semibold mt-5 ${
          isHover ? 'text-white' : 'text-black'
        }`}
      >
        {t(text)}
      </p>
    </div>
  );
};

export default CharacteristicComponent;
