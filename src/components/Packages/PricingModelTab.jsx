import { useTranslation } from 'react-i18next';
import { DURATION } from '../../constants/pricing';

const PricingModelTab = ({ pricingModel, setPricingModel }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-7">
      <div className="flex justify-center w-full">
        <div className="flex items-center bg-gray-2 rounded-md w-2/3 sm:w-1/2 lg:w-1/3 text-gray-1">
          <button
            type="button"
            className={`rounded-md font-medium w-1/2 py-2 px-2 text-sm lg:text-base ${
              pricingModel === DURATION.MONTHLY && 'bg-primary text-white'
            }`}
            onClick={() => {
              setPricingModel(DURATION.MONTHLY);
            }}
          >
            {t('payByMonth')}
          </button>
          <button
            type="button"
            className={`rounded-md font-medium w-1/2 py-2 px-2 text-sm lg:text-base ${
              pricingModel === DURATION.YEARLY && 'bg-primary text-white'
            }`}
            onClick={() => {
              setPricingModel(DURATION.YEARLY);
            }}
          >
            {t('payByYear')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingModelTab;
