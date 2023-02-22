/* eslint-disable react/jsx-filename-extension */
import IconCPU from '../Icons/IconCPU';
import IconGlobe from '../Icons/IconGlobe';
import IconHeart from '../Icons/IconHeart';
import IconMic from '../Icons/IconMic';
import IconUserCheck from '../Icons/IconUserCheck';

export const data = [
  {
    id: 1,
    getIcon: (color) => <IconHeart color={color} />,
    text: 'qualityVoice',
  },
  {
    id: 2,
    getIcon: (color) => <IconUserCheck color={color} />,
    text: 'fullVoice',
  },
  {
    id: 3,
    getIcon: (color) => <IconGlobe color={color} />,
    text: 'multiVoice',
  },
  {
    id: 4,
    getIcon: (color) => <IconCPU color={color} />,
    text: 'processAI',
  },
  {
    id: 5,
    getIcon: (color) => <IconMic color={color} />,
    text: 'reproduceVoice',
  },
];
