import React from 'react';

import ContactSection from '@/components/contact-section/ContactSection';
import FAQSection from '@/components/faq-section/FAQSection';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import MapSection from '@/components/map-section/MapSection';
import PageShape from '@/components/page-shape/PageShape';

const HelpPage = () => {
  return (
    <div className='help-page'>
      <PageShape />
      <Header />
      <HeroSectionSM image='/images/header-bg/help-bg.png' name='Help' />
      <FAQSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HelpPage;
