const TYPE = {
  PING: 'PING',
  SYNTHESIS: 'SYNTHESIS',
};

const PING_INTERVAL = 30000;

const AUDIO_TYPE = {
  WAV: 'wav',
  MP3: 'mp3',
};

const REQUEST_STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

const STATUS_CONTROLLER = {
  NOT_ALLOW: 'NOT_ALLOW',
  SYNTHESIS: 'SYNTHESIS',
  PROCESSING: 'PROCESSING',
  PAUSING: 'PAUSING',
  PLAYING: 'PLAYING',
};

const PLAYING_AUDIO_TYPE = {
  SILENCE: 'SILENCE',
  SYNTHESIS: 'SYNTHESIS',
};

const SILENCE_AUDIO_URL = '/audios/silence.mp3';

const BREAK_TIME_REGEX = /[<]break\s+time[=]([0-9.]+)[s][/][>]/g;

export {
  TYPE,
  PING_INTERVAL,
  AUDIO_TYPE,
  REQUEST_STATUS,
  STATUS_CONTROLLER,
  PLAYING_AUDIO_TYPE,
  SILENCE_AUDIO_URL,
  BREAK_TIME_REGEX,
};