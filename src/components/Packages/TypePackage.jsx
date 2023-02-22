import { VBEE_API, VBEE_STUDIO } from '../../configs';

const TypePackage = ({ buyStudioPackage, setBuyStudioPackage }) => (
  <div className="flex">
    <div className="w-2/12 sm:w-1/4 border-b border-primary" />
    <div className="w-8/12 sm:w-1/2 bg-gray-2 flex rounded-t-md">
      <button
        type="button"
        className={`uppercase py-4 px-2 w-1/2 flex justify-center items-center text-gray-1 text-sm lg:text-base md:text-xl font-medium ${
          buyStudioPackage
            ? 'rounded-t-md bg-white border-t border-l border-r border-primary text-primary'
            : 'border-b border-primary'
        }`}
        onClick={() => setBuyStudioPackage(true)}
      >
        {VBEE_STUDIO}
      </button>
      <button
        type="button"
        className={`uppercase py-4 px-2 w-1/2 flex justify-center items-center text-gray-1 text-sm lg:text-base md:text-xl font-medium ${
          !buyStudioPackage
            ? 'rounded-t-md bg-white border-t border-l border-r border-primary text-primary'
            : 'border-b border-primary'
        }`}
        onClick={() => setBuyStudioPackage(false)}
      >
        {VBEE_API}
      </button>
    </div>
    <div className="w-2/12 sm:w-1/4 border-b border-primary" />
  </div>
);

export default TypePackage;
