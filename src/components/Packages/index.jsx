import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TypePackage from './TypePackage';
import PricingModelTab from './PricingModelTab';
import { DURATION, TYPE } from '../../constants/pricing';
import PackageItem from './PackageItem';

import { filterPackages } from '../../utils/pricing';
import api from '../../apis';
import LoadingPackage from './loadingPackage';
import EmptyData from './EmptyData';

const Packages = () => {
  const { t } = useTranslation();
  const [buyStudioPackage, setBuyStudioPackage] = useState(true);
  const [pricingModel, setPricingModel] = useState(DURATION.MONTHLY);
  const [packages, setPackages] = useState([]);
  const [currentPackages, setCurrentPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPackages = async () => {
    setLoading(true);
    const data = await api.packages.getPackages();
    setLoading(false);
    if (data.result) {
      setPackages(data.result.packages);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    const typePackages = buyStudioPackage ? TYPE.STUDIO : TYPE.API;
    setCurrentPackages(filterPackages(pricingModel, packages, typePackages));
  }, [buyStudioPackage, packages, pricingModel]);

  return (
    <div className="w-full 2xl:w-1440">
      <div className="mx-4 md:mx-16 xl:mx-28">
        <div>
          <TypePackage
            buyStudioPackage={buyStudioPackage}
            setBuyStudioPackage={setBuyStudioPackage}
          />
        </div>
        <div>
          <PricingModelTab
            pricingModel={pricingModel}
            setPricingModel={setPricingModel}
          />
        </div>
        {loading && <LoadingPackage />}
        {!loading && currentPackages.length === 0 && <EmptyData />}
        {!loading && currentPackages.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-7 mb">
            {currentPackages.map((item) => (
              <PackageItem
                data={item}
                key={item.name}
                highlight={buyStudioPackage && item.mostPopular}
              />
            ))}
          </div>
        )}

        <div className="mt-11 font-medium text-gray-1 text-sm">
          <p className="text-center">* {t('vbeeVoiceCanEarnMoney')}</p>
          <p className="font-bold text-center">** {t('prohibitCase')}</p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
