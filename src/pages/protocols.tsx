import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import ProtocolsSection from '@/components/protocols-section/ProtocolsSection';

const ProtocolsPage = () => {
  return (
    <div className='protocols-page'>
      <Header />
      <HeroSectionSM
        image='/images/header-bg/protocols-bg.png'
        name='Protocols'
        desc='Event guide'
      />
      <ProtocolsSection />
      <Footer />
    </div>
  );
};

export default ProtocolsPage;
