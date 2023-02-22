import { useTranslation } from 'react-i18next';
import Enterprise from '../components/Enterprise';
import Header from '../components/Header/headerComponent';
import Packages from '../components/Packages';
import Layout from '../components/Layout';
import TitleComponent from '../components/TitleComponent';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>
        <div>
          <Header title="pricing" />
        </div>
        <div className="my-7 px-2">
          <TitleComponent
            title={t('titlePricing')}
            subTitle={t('listPrice')}
            description={t('pricingCapture')}
            isCenter
          />
        </div>
        <div className="flex justify-center mb-7">
          <Packages />
        </div>
        <div className="mb-12">
          <Enterprise />
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
