import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { BRAND_NAME, CDN_URL } from '../../configs';
import FeatureComponent from './FeatureComponent';
import { data } from './data';
import TitleComponent from '../TitleComponent';

const Features = () => {
  const { t } = useTranslation();
  const [isHover, setIsHover] = useState(0);
  const dataLeft = data.slice(0, data.length / 2);
  const dataRight = data.slice(data.length / 2);

  return (
    <div className="w-full 2xl:w-1440">
      <div className="px-8 lg:px-28 xl:px-48">
        <TitleComponent
          title={`${t('feature')} ${BRAND_NAME}`}
          subTitle={`${BRAND_NAME} ${t('titleFeature')}`}
          description={t('detailTitleFeature')}
          isCenter
        />
        <div className="relative mt-14 flex justify-center md:hidden">
          <img
            src={`${CDN_URL}/images/feature/bg-feature.png`}
            alt="img-mobile"
            className="max-h-560"
          />
        </div>
        <div className="flex justify-center ">
          <div className=" flex flex-col sm:flex-row w-full justify-between mt-14 gap-y-14">
            <div className="grid grid-cols-1 gap-y-14 ">
              {dataLeft.map((item) => (
                <div className="flex justify-center" key={item.id}>
                  <FeatureComponent
                    key={item.id}
                    id={item.id}
                    getIcon={item.getIcon}
                    title={item.title}
                    detail={item.detail}
                    setIsHover={setIsHover}
                  />
                </div>
              ))}
            </div>
            <div className="relative hidden md:block">
              <img
                src={`${CDN_URL}/images/feature/bg-feature.png`}
                alt="img-mobile"
                className="max-h-560"
                style={{ filter: `brightness(${isHover ? '0.5' : '1'})` }}
              />
              <div>
                {data[isHover - 1]?.hoverImages.map((item) => (
                  <div className={`absolute ${item.style}`} key={item.image}>
                    <img src={item.image} className="w-full" alt="hover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 justify-center gap-y-14">
              {dataRight.map((item) => (
                <div className="flex justify-center" key={item.id}>
                  <FeatureComponent
                    id={item.id}
                    getIcon={item.getIcon}
                    title={item.title}
                    detail={item.detail}
                    setIsHover={setIsHover}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* This block is used to correct errors when building tailwind */}
      <div className="hidden">
        <div className="top-8 -left-12 w-64" />
        <div className="top-36 left-10 w-36" />
        <div className="top-416 -left-10 w-96" />
        <div className="top-32 left-28 w-48" />
        <div className="top-40 left-12 w-40" />
        <div className="top-40 -left-4 w-40" />
        <div className="top-80 -left-8 w-48" />
      </div>
    </div>
  );
};

export default Features;
