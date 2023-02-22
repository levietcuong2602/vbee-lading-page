import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonToCRM from '../Button/buttonToCRM';
import TitleComponent from '../TitleComponent';
import { CDN_URL } from '../../configs';

const UsingMethod = () => {
  const { t } = useTranslation();
  const [showDescriptionDirect, setShowDescriptionDirect] = useState(true);
  const [showDescriptionAPI, setShowDescriptionAPI] = useState(false);
  const [heightDescription, setHeightDescription] = useState();
  const refDirect = useRef();

  const handleChangeDescriptionDirect = () => {
    if (showDescriptionDirect) {
      setShowDescriptionDirect(false);
      return;
    }
    setShowDescriptionDirect(true);
    setShowDescriptionAPI(false);
  };

  const handleChangeDescriptionAPI = () => {
    if (showDescriptionAPI) {
      setShowDescriptionAPI(false);
      return;
    }
    setShowDescriptionDirect(false);
    setShowDescriptionAPI(true);
  };

  useEffect(() => {
    setHeightDescription(refDirect.current.clientHeight ?? 0);
  }, []);

  return (
    <div className="w-full 2xl:w-1440">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-20 xl:px-44 gap-20 py-14">
        <img
          src={`${CDN_URL}/images/bg-using-method.png`}
          alt=""
          className="w-448"
        />
        <div>
          <TitleComponent
            title={t('use')}
            subTitle={t('titleUse')}
            description={t('detailTitleUse')}
          />
          <div className="flex items-start gap-3 mt-5">
            <button
              type="button"
              className="border-none "
              onClick={handleChangeDescriptionDirect}
            >
              {showDescriptionDirect ? (
                <img
                  src={`${CDN_URL}/images/icons/icon-sub.svg`}
                  alt="icon"
                  className="w-7.5 max-w-none	"
                />
              ) : (
                <img
                  src={`${CDN_URL}/images/icons/icon-add.svg`}
                  alt="icon"
                  className="w-7.5 max-w-none	"
                />
              )}
            </button>
            <div className="flex  flex-col">
              <p
                className={`text-base sm:text-lg font-semibold ${
                  showDescriptionDirect ? 'text-primary' : 'text-black'
                }`}
              >
                {t('useDirect')}
              </p>
              <p
                className="text-gray-1 mt-2.5 text-sm sm:text-base max-w-xl collapse"
                ref={refDirect}
                style={{
                  maxHeight: showDescriptionDirect ? heightDescription : 0,
                }}
              >
                {t('detailUseDirect')}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-3 mt-5">
              <button
                type="button"
                className="border-none"
                onClick={handleChangeDescriptionAPI}
              >
                {showDescriptionAPI ? (
                  <img
                    src={`${CDN_URL}/images/icons/icon-sub.svg`}
                    alt="icon"
                    className="w-7.5 max-w-none	"
                  />
                ) : (
                  <img
                    src={`${CDN_URL}/images/icons/icon-add.svg`}
                    alt="icon"
                    className="w-7.5 max-w-none	"
                  />
                )}
              </button>
              <div className="flex flex-col">
                <p
                  className={`text-base sm:text-lg font-semibold ${
                    showDescriptionAPI ? 'text-primary' : 'text-black'
                  }`}
                >
                  {t('useAPI')}
                </p>
                <p
                  className="text-gray-1 mt-2.5 text-sm sm:text-base max-w-xl collapse "
                  style={{
                    maxHeight: showDescriptionAPI ? heightDescription : 0,
                  }}
                >
                  {t('detailUseAPI')}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <ButtonToCRM />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsingMethod;
