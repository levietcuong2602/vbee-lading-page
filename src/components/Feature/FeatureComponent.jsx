import { useTranslation } from 'react-i18next';
import { COLOR_CODE } from '../../constants/advantage';

const FeatureComponent = ({ id, getIcon, title, detail, setIsHover }) => {
  const { t } = useTranslation();
  return (
    <div
      className="flex rounded-md items-start w-64 h-40 gap-3 p-3.5 hover:shadow-md"
      onMouseEnter={() => setIsHover(id)}
      onMouseLeave={() => setIsHover(0)}
    >
      {getIcon(COLOR_CODE.FIRST)}
      <div className="">
        <p className="font-semibold w-40 ">{t(title)}</p>
        <p className="text-gray-1 w-40">{t(detail)}</p>
      </div>
    </div>
  );
};
export default FeatureComponent;
