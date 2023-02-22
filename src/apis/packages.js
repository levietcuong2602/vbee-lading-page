import api from './api';

const getPackages = async () => {
  const packages = await api({
    method: 'GET',
    url: '/packages',
  });
  return packages;
};

export { getPackages };
