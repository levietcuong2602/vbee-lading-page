import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { useKeycloak } from '@react-keycloak/ssr';

import Header from '../components/Header';
import TTSTrial from '../components/TTSTrial';
import Characteristic from '../components/Characteristic';
import CaseStudy from '../components/CaseStudy';
import Advantages from '../components/Advantages';
import Features from '../components/Feature';
import UsingMethod from '../components/UsingMethod';
import Statistics from '../components/Statistics';
import ActualProduct from '../components/ActualProduct';
import Partner from '../components/Partner';
import Enterprise from '../components/Enterprise';
import Layout from '../components/Layout';
import { MediaContext } from '../context';

export default function Home() {
  const { keycloak, initialized } = useKeycloak();
  const [mediaLink, setMediaLink] = useState('');

  useEffect(() => {
    if (initialized && !keycloak?.authenticated) Router.push('/');
  }, [initialized, keycloak.authenticated]);
  return (
    <Layout>
      <MediaContext.Provider value={[mediaLink, setMediaLink]}>
        <div>
          <main className="font-sfd overflow-hidden bg-white">
            <Header />
            <div className="pt-16 flex justify-center">
              <TTSTrial />
            </div>
            <div className="mt-16 flex justify-center">
              <Characteristic />
            </div>
            <div className="flex justify-center py-20">
              <CaseStudy />
            </div>
            <div className="mt-16 bg-secondary-300 flex justify-center">
              <Advantages />
            </div>
            <div className="flex justify-center mt-14">
              <Features />
            </div>
            <div className="flex justify-center mt-2 2xl:mt-10 bg-secondary-300">
              <UsingMethod />
            </div>
            <div className="flex justify-center mb-56 sm:mb-32">
              <Statistics />
            </div>
            <div className="flex justify-center">
              <ActualProduct />
            </div>
            <div className="flex justify-center mt-28 mb-16">
              <Partner />
            </div>
            <div className="flex justify-center mb-12">
              <Enterprise />
            </div>
          </main>
          <footer />
        </div>
      </MediaContext.Provider>
    </Layout>
  );
}
