/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import { useKeycloak } from '@react-keycloak/ssr';
import camelcaseKeys from 'camelcase-keys';
import { useTranslation } from 'react-i18next';
import { createRef, useEffect, useRef, useState } from 'react';
import {
  CRM_REDIRECT_URI,
  TEXT_MAX_LENGTH,
  TTS_WEBSOCKET_URL,
} from '../../configs';
import {
  AUDIO_TYPE,
  PING_INTERVAL,
  REQUEST_STATUS,
  STATUS_CONTROLLER,
  TYPE,
  PLAYING_AUDIO_TYPE,
  SILENCE_AUDIO_URL,
} from '../../constants/tts';
import Button from '../Button';
import SelectSpeed from './SelectSpeed';
import SelectVoice from './SelectVoice';
import { countTextLength } from '../../services/tts';

const TTSTrial = () => {
  const { t, i18n } = useTranslation();
  const { keycloak } = useKeycloak();

  const [text, setText] = useState('');
  const [currentVoice, setCurrentVoice] = useState('');
  const [currentSpeed, setCurrentSpeed] = useState(1);
  const [audio, setAudio] = useState('');
  const [audioType, setAudioType] = useState(PLAYING_AUDIO_TYPE.SILENCE);
  const [loading, setLoading] = useState(false);
  const [statusController, setStatusController] = useState(
    STATUS_CONTROLLER.NOT_ALLOW,
  );
  const [placeholder, setPlaceholder] = useState('');

  const audioPlayer = createRef();

  // const ws = useRef(null);

  const handlePause = () => {
    setStatusController(STATUS_CONTROLLER.PAUSING);
    audioPlayer.current.pause();
  };

  const handlePlay = () => {
    setStatusController(STATUS_CONTROLLER.PLAYING);
    audioPlayer.current.play();
  };

  const handleChangeText = (e) => {
    setText(e.currentTarget.value);
    setStatusController(STATUS_CONTROLLER.SYNTHESIS);
  };

  useEffect(() => {
    // ws.current = new WebSocket(TTS_WEBSOCKET_URL);
    // let pingInterval;
    // ws.current.onopen = () => {
    //   pingInterval = setInterval(() => {
    //     ws.current.send(JSON.stringify({ type: TYPE.PING }));
    //   }, PING_INTERVAL);
    // };

    // ws.current.onmessage = (res) => {
    //   const responseData = camelcaseKeys(JSON.parse(res.data), { deep: true });
    //   const { type, result } = responseData;

    //   if (type === TYPE.SYNTHESIS) {
    //     switch (result?.status) {
    //       case REQUEST_STATUS.IN_PROGRESS:
    //         break;
    //       case REQUEST_STATUS.SUCCESS: {
    //         setAudio(responseData.result.audioLink);
    //         break;
    //       }
    //       case REQUEST_STATUS.FAILURE: {
    //         break;
    //       }
    //       default:
    //         break;
    //     }
    //   }
    // };

    // ws.current.onclose = () => {
    //   console.log('Websocket is closed.');
    //   clearInterval(pingInterval);
    // };
  }, []);

  const handleOnClick = () => {
    setLoading(true);
    setAudio('');
    setAudioType(PLAYING_AUDIO_TYPE.SILENCE);
    audioPlayer.current.src = SILENCE_AUDIO_URL;
    audioPlayer.current.load();
    audioPlayer.current.play();

    // ws.current.send(
    //   JSON.stringify({
    //     type: TYPE.SYNTHESIS,
    //     payload: {
    //       text,
    //       voice_code: currentVoice?.code,
    //       audio_type: AUDIO_TYPE.WAV,
    //       speed: currentSpeed === 2 ? 1.9 : currentSpeed,
    //     },
    //   }),
    // );
  };

  const handleAudioEnd = () => {
    if (audioType === PLAYING_AUDIO_TYPE.SYNTHESIS) {
      setStatusController(STATUS_CONTROLLER.SYNTHESIS);
      audioPlayer.current.currentTime = 0;
      audioPlayer.current.pause();
      return;
    }

    if (audio) {
      setLoading(false);
      setAudioType(PLAYING_AUDIO_TYPE.SYNTHESIS);
      setStatusController(STATUS_CONTROLLER.PLAYING);
      audioPlayer.current.src = audio;
      audioPlayer.current.load();
      audioPlayer.current.play();
      return;
    }

    audioPlayer.current.src = SILENCE_AUDIO_URL;
    audioPlayer.current.load();
    audioPlayer.current.play();
  };

  const handleRegisterClick = () => {
    if (!keycloak.authenticated) {
      keycloak.register({
        redirectUri: CRM_REDIRECT_URI,
      });
    }
  };

  useEffect(() => {
    setPlaceholder(t('inputTextPlaceholder'));
  }, [i18n.language]);

  return (
    <div className="w-full 2xl:w-1440">
      <div className="px-8 lg:px-32 xl:px-52">
        <div className="shadow-xl bg-white ">
          <div className="bg-gray-0">
            <div className="px-6 py-3 flex flex-col md:flex-row items-center justify-between">
              <p className="text-lg font-semibold">{t('trialTts')}</p>
              <p className="font-semibold">
                {countTextLength(text)}
                <span className="text-gray-500"> / {TEXT_MAX_LENGTH}</span>
              </p>
            </div>
          </div>
          <textarea
            className="w-full h-64 md:h-56 px-6 pt-5 outline-none border focus:border-blue-500 resize-none font-medium text-gray-1"
            value={text}
            maxLength={TEXT_MAX_LENGTH}
            placeholder={placeholder}
            onChange={handleChangeText}
            disabled={loading}
          />
          <div className="pl-7 pr-4 py-4 flex flex-col md:flex-row justify-between items-center gap-y-2">
            <div className="flex flex-col items-center sm:flex-row gap-3.5">
              <SelectVoice
                currentVoice={currentVoice}
                setCurrentVoice={setCurrentVoice}
                loading={loading}
              />
              <SelectSpeed
                currentSpeed={currentSpeed}
                setCurrentSpeed={setCurrentSpeed}
                loading={loading}
              />
            </div>
            <div className="">
              {statusController === STATUS_CONTROLLER.NOT_ALLOW && (
                <Button title="speakNow" disabled />
              )}
              {statusController === STATUS_CONTROLLER.SYNTHESIS && (
                <Button
                  title="speakNow"
                  handleOnClick={handleOnClick}
                  disabled={!text.length || !currentVoice}
                  loading={loading}
                />
              )}
              {statusController === STATUS_CONTROLLER.PAUSING && (
                <Button title="speakNow" handleOnClick={handlePlay} />
              )}
              {statusController === STATUS_CONTROLLER.PLAYING && (
                <Button title="pause" handleOnClick={handlePause} />
              )}
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio
            ref={audioPlayer}
            controls
            autoPlay
            className="hidden"
            onEnded={handleAudioEnd}
          >
            <source src={audio} type="audio/ogg" />
          </audio>
        </div>
        <div className="flex justify-center">
          <p className="pt-9  text-gray-1 font-medium gap-1 text-center">
            {t('noteTTSTrial')}
            <span
              className="lowercase text-primary cursor-pointer mx-1"
              onClick={handleRegisterClick}
            >
              {t('register')}
            </span>
            {t('officialAccount')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TTSTrial;
