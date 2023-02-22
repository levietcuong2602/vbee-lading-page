/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { createRef, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CDN_URL } from '../../configs';
import { COLOR_CODE } from '../../constants/advantage';
import { STATUS_CONTROLLER } from '../../constants/tts';
import { MediaContext } from '../../context';
import IconPlayCircle from '../Icons/IconPlayCircle';

const CaseStudyComponent = ({ image, text, description, audio }) => {
  const { t } = useTranslation();
  const [isHover, setIsHover] = useState(false);
  const [status, setStatus] = useState(STATUS_CONTROLLER.NOT_ALLOW);
  const [mediaLink, setMediaLink] = useContext(MediaContext);

  const audioPlayer = createRef();

  const handleClick = () => {
    audioPlayer.current.src = audio;
    audioPlayer.current.load();
    audioPlayer.current.play();
    setStatus(STATUS_CONTROLLER.PLAYING);
    setMediaLink(audio);
  };

  const handlePause = () => {
    setStatus(STATUS_CONTROLLER.PAUSING);
    audioPlayer.current.pause();
  };

  const handlePlay = () => {
    setStatus(STATUS_CONTROLLER.PLAYING);
    audioPlayer.current.play();
    setMediaLink(audio);
  };

  const handleAudioEnd = () => {
    setStatus(STATUS_CONTROLLER.PAUSING);
  };

  useEffect(() => {
    if (status === STATUS_CONTROLLER.PLAYING && mediaLink !== audio) {
      audioPlayer.current.pause();
      setStatus(STATUS_CONTROLLER.PAUSING);
    }
  }, [audio, audioPlayer, mediaLink, status]);

  return (
    <div
      className="relative flex cursor-pointer img-hover-zoom "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsHover(true)}
    >
      <img src={image} className={`w-full max-w-xs rounded-md `} alt="" />
      {status === STATUS_CONTROLLER.NOT_ALLOW && isHover && (
        <div className="absolute w-full max-w-xs bottom-0 h-4/5 rounded-md bg-case flex items-end">
          <div className="w-full flex flex-col mb-6 lg:mb-2 xl:mb-6 gap-y-3">
            <div className="w-full flex justify-between items-center px-6">
              <p className="text-white font-semibold">{t(text)}</p>
              <button type="button" onClick={handleClick}>
                <IconPlayCircle color={COLOR_CODE.FIRST} />
              </button>
            </div>
            <p className="text-white mx-6 font-semibold text-xs">
              {t(description)}
            </p>
          </div>
        </div>
      )}

      {status === STATUS_CONTROLLER.PLAYING && (
        <div
          className="absolute w-full h-full flex justify-center items-center"
          onClick={handlePause}
        >
          <img src={`${CDN_URL}/images/icons/icon-playing.svg`} alt="icon" />
        </div>
      )}

      {status === STATUS_CONTROLLER.PAUSING && (
        <div
          className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-30"
          onClick={handlePlay}
        >
          <img
            src={`${CDN_URL}/images/icons/icon-play-circle.svg`}
            alt="icon"
          />
        </div>
      )}

      {!isHover && (
        <div className="absolute w-full max-w-xs bottom-0 h-1/3 rounded-md bg-case flex items-end">
          <p className="text-white mb-6 mx-6 font-semibold">{t(text)}</p>
        </div>
      )}
      <audio
        ref={audioPlayer}
        controls
        autoPlay
        className="hidden"
        onEnded={handleAudioEnd}
      />
    </div>
  );
};

export default CaseStudyComponent;
