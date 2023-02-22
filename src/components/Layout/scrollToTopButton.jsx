import { useEffect, useState } from 'react';
import { CDN_URL } from '../../configs';
import { DISTANCE_SHOW_BUTTON } from '../../constants';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > DISTANCE_SHOW_BUTTON) {
      setVisible(true);
    } else if (scrolled <= DISTANCE_SHOW_BUTTON) {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      className="rounded-md bg-primary hover:bg-black"
    >
      <img
        src={`${CDN_URL}/images/icons/icon-top.png`}
        alt="button"
        className={`w-8 p-2 ${visible ? 'block' : 'hidden'}`}
      />
    </button>
  );
};

export default ScrollToTopButton;
