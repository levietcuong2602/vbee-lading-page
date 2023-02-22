import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CDN_URL } from '../../configs';
import { dataSpeed } from './dataSpeed';

const SelectSpeed = ({ currentSpeed, setCurrentSpeed, loading }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnclickSpeed = (value) => {
    setCurrentSpeed(value);
    setIsOpen(false);
  };

  const selectSpeedRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        selectSpeedRef.current &&
        !selectSpeedRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectSpeedRef]);

  return (
    <div className="relative" ref={selectSpeedRef}>
      <button
        type="button"
        className={`px-3 py-2 font-medium text-sm rounded border border-gray-300 flex hover:bg-gray-200 ${
          loading ? 'cursor-not-allowed' : ''
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        disabled={loading}
      >
        <span>
          <img
            alt="icon-fast"
            src={`${CDN_URL}/images/icons/icon-fast-forward.png`}
            className="mr-1.5 h-5 w-5"
          />
        </span>
        {t('speedSpeak')} ({currentSpeed}x)
      </button>
      {isOpen && (
        <div className="absolute -top-64 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded-md shadow-md w-44">
          <div>
            {dataSpeed.map((item) => (
              <button
                key={item.title}
                type="button"
                className={`text-sm hover:bg-gray-2  w-full text-gray-1 flex font-medium px-4 py-2 ${
                  item.speed === currentSpeed && 'bg-red-200'
                }`}
                onClick={() => handleOnclickSpeed(item.speed)}
              >
                <span className="font-semibold text-primary text-left w-11">
                  {item.speed}x
                </span>
                {t(item.title)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectSpeed;
