import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import apis from '../../apis';
import { CDN_URL } from '../../configs';

const SelectVoice = ({ currentVoice, setCurrentVoice, loading }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [voices, setVoices] = useState([]);

  const handleOnclickSpeed = (value) => {
    setCurrentVoice(value);
    setIsOpen(false);
  };

  const fetchPackages = async () => {
    const data = await apis.tts.getVietNameseVoices();
    if (data.result && data.result.voices) {
      setVoices(data.result.voices);
      if (data.result.voices.length > 0) {
        setCurrentVoice(data.result.voices[0]);
      }
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);
  const selectVoiceRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        selectVoiceRef.current &&
        !selectVoiceRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectVoiceRef]);

  return (
    <div className="relative" ref={selectVoiceRef}>
      <button
        type="button"
        className={`px-3 py-2 text-sm font-medium rounded-md border border-gray-300 flex hover:bg-gray-200 ${
          loading ? 'cursor-not-allowed' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
        disabled={loading}
      >
        {!currentVoice ? (
          <div className="flex items-center gap-1">
            <span>
              <img
                alt="icon-globe"
                src={`${CDN_URL}/images/icons/icon-globe.png`}
                className="mr-1.5 h-5 w-5"
              />
            </span>
            {t('voice')}
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <span className="font-semibold text-primary text-left w-6 relative">
              <img
                src={currentVoice.roundImage}
                alt="avatar"
                className="w-5 h-5 max-h-5 max-w-none"
              />
              <img
                src={currentVoice?.language?.roundImage}
                alt="avatar"
                className="w-3 absolute top-3.5 left-3"
              />
            </span>
            {currentVoice.name}
          </div>
        )}
      </button>

      <div
        className={`${
          isOpen ? 'absolute' : 'hidden'
        } bg-white text-base z-10 top-11 list-none divide-y divide-gray-100 shadow-md w-52`}
      >
        <div className="scrollbar">
          <div className="rounded-md overflow">
            {voices.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`text-sm hover:bg-gray-2 text-gray-1 w-full flex items-center font-medium px-4 py-2 ${
                  currentVoice.id === item.id && 'bg-red-200'
                }`}
                onClick={() => handleOnclickSpeed(item)}
              >
                <span className="font-semibold text-primary text-left w-11 relative">
                  <img src={item.roundImage} alt="avatar" className="w-8 h-8" />
                  <img
                    src={item?.language?.roundImage}
                    alt="avatar"
                    className="w-4 absolute top-6 left-4"
                  />
                </span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectVoice;
