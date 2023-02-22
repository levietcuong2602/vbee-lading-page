import styled from 'styled-components';
import { CDN_URL } from '../../configs';

const WaveBackground = styled.div`
  background-image: url(${CDN_URL}/images/header/background-overlay.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  height: 100%;
  width: 100%;
`;
const BackgroundOverlay = styled.div`
  background-image: ${(props) =>
    `url(${CDN_URL}/images/${props.type}/bg-${props.type}-mask.png)`};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.1;
  height: 100%;
  width: 100%;
`;

export { WaveBackground, BackgroundOverlay };
