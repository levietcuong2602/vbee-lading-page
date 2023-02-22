import api from './api';

const subscribe = async (data) => {
  const { email } = data;
  const response = await api({
    method: 'post',
    url: '/subscribers',
    data: { email },
  });
  return response;
};

export { subscribe };
