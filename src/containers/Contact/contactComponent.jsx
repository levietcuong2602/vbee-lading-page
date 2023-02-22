import { useTranslation } from 'react-i18next';

const ContactComponent = ({ data }) => {
  const { t, i18n } = useTranslation();
  const dataInfo = i18n.language === 'vi' ? data.infoVi : data.infoEn;

  return (
    <div className="w-72 h-60 p-6 rounded-md shadow-lg hover:bg-gray-2">
      <div className="">
        <img src={data.icon} alt="icon" />
      </div>
      <p className="mt-5 font-semibold text-lg">{t(data.type)}</p>
      <div className="mt-2.5">
        {dataInfo &&
          dataInfo.length &&
          dataInfo.map((item) => (
            <p key={item} className="font-medium text-gray-1">
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ContactComponent;
