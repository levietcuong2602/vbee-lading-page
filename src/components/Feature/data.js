/* eslint-disable react/jsx-filename-extension */
import { CDN_URL } from '../../configs';
import IconFeather from '../Icons/IconFeather';
import IconLink from '../Icons/IconLink';
import IconMusic from '../Icons/IconMusic';
import IconSlider from '../Icons/IconSlider';
import IconType from '../Icons/IconType';
import IconVolume from '../Icons/IconVolume';

export const data = [
  {
    id: 1,
    getIcon: (color) => <IconLink color={color} />,
    title: 'processFromMultiResource',
    detail: 'detailProcessFromMultiResource',
    hoverImages: [
      {
        image: `${CDN_URL}/images/feature/feature-hover-1.png`,
        style: 'top-8 -left-12 w-64',
      },
    ],
  },
  {
    id: 2,
    getIcon: (color) => <IconSlider color={color} />,
    title: 'editSound',
    detail: 'detailEditSound',
    hoverImages: [
      {
        image: `${CDN_URL}/images/feature/feature-hover-2.png`,
        style: 'top-36 left-10 w-36',
      },
      {
        image: `${CDN_URL}/images/feature/feature-hover-2-2.png`,
        style: 'top-416 -left-10 w-96',
      },
    ],
  },
  {
    id: 3,
    getIcon: (color) => <IconFeather color={color} />,
    title: 'searchAndReplace',
    detail: 'detailSearchAndReplace',
    hoverImages: [
      {
        image: `${CDN_URL}/images/feature/feature-hover-3.png`,
        style: 'top-32 left-28 w-48',
      },
    ],
  },
  {
    id: 4,
    getIcon: (color) => <IconMusic color={color} />,
    img: `${CDN_URL}/images/icons/icon-music.svg`,
    title: 'backgroundMusicStore',
    detail: 'detailBackgroundMusicStore',
    hoverImages: [
      {
        image: `${CDN_URL}/images/feature/feature-hover-4.png`,
        style: 'top-40 left-12 w-40',
      },
    ],
  },
  {
    id: 5,
    getIcon: (color) => <IconType color={color} />,
    title: 'quicklyAddDictionary',
    detail: 'detailQuicklyAddDictionary',
    hoverImages: [
      {
        image: `${CDN_URL}/images/feature/feature-hover-5.png`,
        style: 'top-40 -left-4 w-40',
      },
    ],
  },
  {
    id: 6,
    getIcon: (color) => <IconVolume color={color} />,
    img: `${CDN_URL}/images/icons/icon-volume.svg`,
    title: 'freeListenTrial',
    detail: 'detailFreeListenTrial',
    hoverImages: [
      {
        image: `${CDN_URL}/images/feature/feature-hover-6.png`,
        style: 'top-80 -left-8 w-48',
      },
    ],
  },
];
