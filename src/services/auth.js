import { setCookie } from '../utils/cookie';

const handleReceivingTokens = (tokens) => {
  setCookie('accessToken', tokens.token);
  setCookie('refreshToken', tokens.refreshToken);
};

export { handleReceivingTokens };
