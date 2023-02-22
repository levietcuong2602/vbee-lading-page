import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useKeycloak } from '@react-keycloak/ssr';
import SelectLanguage from './SelectLanguage';
import CommunityComponent from './communityComponent';
import MenuMobile from './menuMobile';
import { CDN_URL, CRM_REDIRECT_URI } from '../../configs';
// import LoginNotiDialog from '../LoginNotiDialog';

const HeaderLayout = () => {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();
  // const [openNotiDialog, setOpenNotiDialog] = useState(false);

  // const handleCloseNotiDialog = () => setOpenNotiDialog(false);

  // const handleOpenNotiDialog = () => setOpenNotiDialog(true);

  return (
    <div className="flex justify-center">
      <div className="absolute top-0  w-full 2xl:w-1440 px-6 xl:px-20 pt-8 z-50 text-white">
        <div className="flex justify-between lg:gap-y-4 ">
          <Link passHref href="/" className="cursor-pointer">
            <img
              src={`${CDN_URL}/images/logo-4x-white.png`}
              alt="me"
              className="block h-11 cursor-pointer"
            />
          </Link>
          <div className="block lg:hidden">
            {/* <MenuMobile onOpenNotiDialog={handleOpenNotiDialog} /> */}
            <MenuMobile />
          </div>
          <div className="hidden lg:flex justify-between md:justify-end font-semibold items-center gap-4 sm:gap-8 text-xs sm:text-sm 2xl:text-base w-full">
            <div className="flex justify-center items-center gap-8">
              <Link
                href={keycloak.authenticated ? '/home' : '/'}
                className="cursor-pointer"
              >
                {t('aboutUs')}
              </Link>
              <Link href="/pricing" className="cursor-pointer">
                {t('pricing')}
              </Link>
              {/* <div className="cursor-pointer">{t('supportCenter')}</div> */}
              <div>
                <CommunityComponent />
              </div>
              <Link href="/contact" className="cursor-pointer">
                {t('contact')}
              </Link>
            </div>

            <div className="flex justify-center items-center gap-4 sm:gap-8">
              <SelectLanguage />
              <div>
                {keycloak?.authenticated ? (
                  <p className="text-sm font-semibold text-white cursor-pointer">
                    {keycloak?.idTokenParsed?.name}
                  </p>
                ) : (
                  <button
                    type="button"
                    className="px-3 py-2 bg-transparent transition duration-300 rounded-md text-sm font-bold text-white hover:bg-white hover:text-black border hover:border-white uppercase"
                    onClick={() =>
                      keycloak.register({
                        redirectUri: CRM_REDIRECT_URI,
                      })
                    }
                  >
                    {t('register')}
                  </button>
                )}
              </div>
              <div>
                {keycloak?.authenticated ? (
                  <button
                    type="button"
                    className="px-3 py-2 bg-white transition duration-300 rounded-md text-sm font-bold text-black hover:bg-transparent hover:text-white border hover:border-white uppercase"
                    onClick={() => keycloak.logout()}
                  >
                    {t('logout')}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="px-3 py-2 bg-white transition duration-300 rounded-md text-sm font-bold text-black hover:bg-transparent hover:text-white border hover:border-white uppercase"
                    onClick={() =>
                      keycloak.login({
                        redirectUri: CRM_REDIRECT_URI,
                      })
                    }
                  >
                    {t('login')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LoginNotiDialog open={openNotiDialog} onClose={handleCloseNotiDialog} /> */}
    </div>
  );
};

export default HeaderLayout;
