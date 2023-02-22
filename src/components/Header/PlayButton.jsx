import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayButton = () => (
  <div>
    <div className="video-box">
      <div className="style-border pulse-effect-active">
        <div className="video-button" title="Video">
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </div>
    </div>
  </div>
);

export default PlayButton;
