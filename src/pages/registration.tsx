import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import RegistrationSection from '@/components/registration-section/RegistrationSection';
import Seo from '@/components/Seo';

export default function RegistrationPage() {
  return (
    <Layout>
      <Seo templateTitle='Registration' />

      <main>
        <div className='registration-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/registration-bg.png'
            name='REGISTRATION'
            desc='Summit online registration'
          />
          <RegistrationSection />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
