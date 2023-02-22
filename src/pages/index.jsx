import { useKeycloak } from '@react-keycloak/ssr';
import { useEffect } from 'react';
import { CRM_REDIRECT_URI } from '../configs';
import Home from './home';

export default function Index() {
  const { initialized, keycloak } = useKeycloak();

  useEffect(() => {
    if (initialized && keycloak?.authenticated)
      window.location.assign(CRM_REDIRECT_URI);
  }, [initialized, keycloak.authenticated]);

  return !keycloak.authenticated && <Home />;
}
