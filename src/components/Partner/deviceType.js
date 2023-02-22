import {
  DESKTOP_SIZE,
  DEVICE_TYPE,
  LARGE_DESKTOP_SIZE,
  MOBILE_SIZE,
  TABLE_SIZE,
} from '../../constants/device';

export const responsive = {
  largeDesktop: {
    breakpoint: { max: LARGE_DESKTOP_SIZE.MAX, min: LARGE_DESKTOP_SIZE.MIN },
    items: LARGE_DESKTOP_SIZE.ITEMS,
  },
  desktop: {
    breakpoint: { max: DESKTOP_SIZE.MAX, min: DESKTOP_SIZE.MIN },
    items: DESKTOP_SIZE.ITEMS,
  },
  tablet: {
    breakpoint: { max: TABLE_SIZE.MAX, min: TABLE_SIZE.MIN },
    items: TABLE_SIZE.ITEMS,
  },
  mobile: {
    breakpoint: { max: MOBILE_SIZE.MAX, min: MOBILE_SIZE.MIN },
    items: MOBILE_SIZE.ITEMS,
  },
};

export const getTypeDevice = (width) => {
  if (width > LARGE_DESKTOP_SIZE.MIN) return DEVICE_TYPE.LARGE_DESKTOP;
  if (width > DESKTOP_SIZE.MIN && width <= DESKTOP_SIZE.MAX)
    return DEVICE_TYPE.DESKTOP;
  if (width > TABLE_SIZE.MIN && width <= TABLE_SIZE.MAX)
    return DEVICE_TYPE.TABLET;
  return DEVICE_TYPE.MOBILE;
};
