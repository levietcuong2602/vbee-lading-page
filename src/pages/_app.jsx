import cookie from 'cookie';
import React, { useEffect } from 'react';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';
import TagManager from 'react-gtm-module';

import '../languages';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/animation.css';
import '../styles/scrollbar.css';
import { handleReceivingTokens } from '../services/auth';
import { GTM_ID } from '../configs';

const keycloakCfg = {
  realm: process.env.IAM_REALM,
  url: `${process.env.IAM_URL}/auth`,
  clientId: process.env.IAM_CLIENT_ID,
};

const AppContainer = ({ Component, pageProps, cookies }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);

  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakCfg}
      persistor={SSRCookies(cookies)}
      initOptions={{ onload: 'check-sso' }}
      onTokens={handleReceivingTokens}
    >
      <Component {...pageProps} />
    </SSRKeycloakProvider>
  );
};

const parseCookies = (req) => {
  if (!req || !req.headers) return {};
  return cookie.parse(req.headers.cookie || '');
};

AppContainer.getInitialProps = async (context) =>
  // Extract cookies from AppContext
  ({
    cookies: parseCookies(context?.ctx?.req),
  });

export default AppContainer;
