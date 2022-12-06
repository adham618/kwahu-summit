import React from 'react';

import CardAddress from '@/components/card-address/CardAddress';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import PageShape from '@/components/page-shape/PageShape';

const PeduasePage = () => {
  return (
    <div className='peduase-page'>
      <PageShape />
      <Header />
      <HeroSectionSM
        image='/images/header-bg/peduase-bg.png'
        name='Peduase'
        desc='Event guide'
      />
      <div className='p-4'>
        <CardAddress
          title='Presidential & Business Executives’ Dialogues'
          date='28 january'
          desc='A high-level roundtable discussion on the ‘Kwahu Compact’ by African Heads of State, Business Leaders, and other notable personalities.'
          image='/images/avatar.png'
          name='Nana Addo Danquah Akufo-Addo'
          degi='President of the Republic of Ghana'
          location='Peduase, Aburi Mountains, Eastern Ghana'
        />
      </div>
      <Footer />
    </div>
  );
};

export default PeduasePage;
