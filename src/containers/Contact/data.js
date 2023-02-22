import {
  CDN_URL,
  VBEE_EMAIL,
  VBEE_EMAIL_SUPPORT,
  VBEE_SUPPORT_PHONE_NUMBER,
} from '../../configs';

export const dataContact = [
  {
    id: 0,
    type: 'callCenter',
    icon: `${CDN_URL}/images/icons/icon-phone.svg`,
    infoVi: [VBEE_SUPPORT_PHONE_NUMBER],
    infoEn: [VBEE_SUPPORT_PHONE_NUMBER],
  },
  {
    id: 1,
    type: 'emailBox',
    icon: `${CDN_URL}/images/icons/icon-mail-box.svg`,
    infoVi: [VBEE_EMAIL, VBEE_EMAIL_SUPPORT],
    infoEn: [VBEE_EMAIL, VBEE_EMAIL_SUPPORT],
  },
  {
    id: 2,
    type: 'address',
    icon: `${CDN_URL}/images/icons/icon-position.svg`,
    infoVi: ['101B1 Nguyễn Khánh Toàn, Quan Hoa, Cầu Giấy, Hà Nội'],
    infoEn: ['101B1 Nguyen Khanh Toan, Quan Hoa, Cau Giay. Ha Noi'],
  },
  {
    id: 3,
    type: 'workTime',
    icon: `${CDN_URL}/images/icons/icon-phone.svg`,
    infoVi: [
      'Thứ 2 - Thứ 6: 8.00 đến 17.30',
      'Thứ 7: 8.00 đến 12.00',
      'Chủ nhật nghỉ',
    ],
    infoEn: [
      'Monday - Friday: 8.00 to 17.30',
      'Saturday: 8.00 to 12.00',
      'The Sunday is day off',
    ],
  },
];
