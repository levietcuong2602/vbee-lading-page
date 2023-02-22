import { BREAK_TIME_REGEX } from '../constants/tts';

const countTextLength = (text) => {
  const normalizeText = text.replace(BREAK_TIME_REGEX, '');
  const textLength = normalizeText.trim().length;
  return textLength;
};

export { countTextLength };
