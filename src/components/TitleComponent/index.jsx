import { COLOR_CODE } from '../../constants/advantage';
import IconTriangle from '../Icons/IconTriangle';

const TitleComponent = ({
  title,
  subTitle,
  description,
  isWhite,
  isCenter,
  maxWidthDescription,
  styleSubtitleScope,
}) => (
  <div>
    <div className={`flex  items-center gap-1 ${isCenter && 'justify-center'}`}>
      <IconTriangle color={isWhite ? COLOR_CODE.WHITE : COLOR_CODE.FIRST} />
      <p
        className={`text-sm font-semibold uppercase ${
          isWhite ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </p>
    </div>
    <div className={styleSubtitleScope}>
      <div
        className={`flex pt-2.5 ${isCenter && 'justify-center'} ${
          isWhite && 'text-white'
        }`}
      >
        <p className="text-2xl md:text-4xl font-semibold">{subTitle}</p>
      </div>
      <div className={`flex mt-5 ${isCenter && 'justify-center'}`}>
        <p
          className={`font-medium text-sm md:text-base 
          ${isCenter && 'text-center'} ${isWhite ? 'text-white' : 'text-gray-1'}
          ${maxWidthDescription || 'max-w-xl'}`}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default TitleComponent;
