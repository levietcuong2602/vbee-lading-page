/* eslint-disable react/jsx-filename-extension */

import IconCheckCircle from '../Icons/IconCheckCircle';
import IconGlobe from '../Icons/IconGlobe';
import IconHeart from '../Icons/IconHeart';
import IconRadio from '../Icons/IconRadio';

export const data = [
  {
    id: 0,
    getIcon: (color) => <IconCheckCircle color={color} />,
    number: '150',
    suffixes: 'm',
    text: 'requests',
  },
  {
    id: 1,
    getIcon: (color) => <IconGlobe color={color} />,
    number: '50',
    suffixes: '+',
    text: 'supportedLanguages',
  },
  {
    id: 2,
    getIcon: (color) => <IconRadio color={color} />,
    number: '200',
    suffixes: '+',
    text: 'totalVoice',
  },
  {
    id: 3,
    getIcon: (color) => <IconHeart color={color} />,
    number: '1',
    suffixes: 'm+',
    text: 'users',
  },
];
