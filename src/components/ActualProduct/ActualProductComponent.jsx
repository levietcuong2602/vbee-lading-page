/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import { useContext, useEffect, useState } from 'react';
import { CDN_URL } from '../../configs';
import { MediaContext } from '../../context';

const ActualComponent = ({ img, title, language, author, avatar, video }) => {
  const [clicked, setClicked] = useState(false);
  const [mediaLink, setMediaLink] = useContext(MediaContext);

  useEffect(() => {
    if (clicked && mediaLink !== video) {
      setClicked(false);
    }
  }, [clicked, mediaLink, video]);

  const handleClickVideo = () => {
    setClicked(true);
    setMediaLink(video);
  };

  return (
    <div className="flex flex-col gap-4" onClick={handleClickVideo}>
      <div className="relative flex justify-center items-center">
        {!clicked ? (
          <div className="relative flex">
            <img src={img} alt="img" className="w-80 h-52 rounded-md" />
            <div className="absolute w-full h-full flex justify-center items-center bg-black bg-opacity-30 cursor-pointer">
              <img
                src={`${CDN_URL}/images/icons/icon-play-circle.svg`}
                alt="icon"
              />
            </div>
          </div>
        ) : (
          <video className="w-80 h-52 rounded-md bg-gray-1" controls autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt="avatar"
          className="max-w-none cursor-pointer h-10"
        />
        <div className="">
          <p className="text-sm font-semibold cursor-pointer">{title}</p>
          <p className="flex text-gray-1 text-xs font-medium cursor-pointer">
            {language}, {author}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ActualComponent;
