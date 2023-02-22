import {
  CDN_URL,
  // VBEE_AI_CALL_CENTER,
  // VBEE_AI_CLIP,
  // VBEE_BLOG,
  VBEE_DEVELOPER_URL,
  VBEE_DOCUMENT_URL,
  VBEE_DOMAIN_URL,
  VBEE_FACEBOOK_SOCIAL_URL,
  VBEE_GOOGLE_URL,
  // VBEE_SMART_DIALOG,
  VBEE_TIKTOK_URL,
  VBEE_USER_GUIDE_URL,
  VBEE_YOUTUBE_URL,
  VBEE_ZALO_URL,
} from '../../configs';

export const dataProducts = [
  {
    id: 0,
    name: 'userGuide',
    url: VBEE_USER_GUIDE_URL,
  },
  {
    id: 2,
    name: 'domain',
    url: VBEE_DOMAIN_URL,
  },
  {
    id: 3,
    name: 'developer',
    url: VBEE_DEVELOPER_URL,
  },
  {
    id: 4,
    name: 'documentation',
    url: VBEE_DOCUMENT_URL,
  },
];

export const dataSocial = [
  {
    id: `social_1`,
    name: 'facebook',
    img: `${CDN_URL}/images/icons/icon-facebook.svg`,
    url: VBEE_FACEBOOK_SOCIAL_URL,
  },
  {
    id: `social_2`,
    name: 'zalo',
    img: `${CDN_URL}/images/icons/icon-zalo.svg`,
    url: VBEE_ZALO_URL,
  },
  {
    id: `social_3`,
    name: 'google',
    img: `${CDN_URL}/images/icons/icon-google.svg`,
    url: `mailto:${VBEE_GOOGLE_URL}`,
  },
  {
    id: `social_4`,
    name: 'youtube',
    img: `${CDN_URL}/images/icons/icon-youtube.svg`,
    url: VBEE_YOUTUBE_URL,
  },
  {
    id: `social_5`,
    name: 'tiktok',
    img: `${CDN_URL}/images/icons/icon-tiktok.svg`,
    url: VBEE_TIKTOK_URL,
  },
];
