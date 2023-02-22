import api from './api';

const getVietNameseVoices = async () => {
  const voice = await api({
    method: 'GET',
    url: '/voices',
    params: {
      language_code: 'vi-VN',
    },
  });
  return voice;
};

export { getVietNameseVoices };
