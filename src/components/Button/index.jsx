import { useTranslation } from 'react-i18next';

const Button = ({ title, handleOnClick, disabled, loading }) => {
  const { t } = useTranslation();
  return (
    <button
      className={`py-2.5 px-8  bg-primary text-white transition duration-300 rounded-md font-medium hover:bg-black hover:text-white flex items-center ${
        loading ? 'cursor-not-allowed' : ''
      }`}
      type="button"
      onClick={handleOnClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
      ) : (
        <p>{t(title)}</p>
      )}
    </button>
  );
};

export default Button;
