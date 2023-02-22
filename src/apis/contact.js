import api from './api';

const sendCustomerInfo = async ({ email, fullName, subject, description }) => {
  const response = await api({
    method: 'POST',
    url: '/customer-requests',
    data: { email, fullName, subject, description },
  });
  return response;
};

export { sendCustomerInfo };
