import React from 'react';

import CardAddress from '@/components/card-address/CardAddress';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import PageShape from '@/components/page-shape/PageShape';

const AccraPage = () => {
  return (
    <div className='accra-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/accra-bg.png'
        name='Accra'
        desc='Event guide'
      />
      <div className='p-4'>
        <CardAddress
          title='Welcome reception'
          date='27 January (Evening)'
          desc='An exclusive welcome cocktail reception with participants for the Presidential and Business Executives’ Dialogues'
          image='/images/avatar-icon.png'
          name='Hosted by KGL Group'
          location='Kempinski Hotel, Accra, Ghana'
        />
        <CardAddress
          title='Banquet & Awards'
          date='27 January (Evening)'
          desc='Official Banquet, Awards ceremony, and Launch of the Africa Investment Promotion Agencies. Strictly by Invitation'
          image='/images/avatar-icon.png'
          name='Hosted by KGL Group'
          location='Kempinski Hotel, Accra, Ghana'
        />
      </div>
      <Footer />
    </div>
  );
};

export default AccraPage;
