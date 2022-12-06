import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import PageShape from '@/components/page-shape/PageShape';
import RegistrationSection from '@/components/registration-section/RegistrationSection';

const RegistrationPage = () => {
  return (
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
  );
};

export default RegistrationPage;
