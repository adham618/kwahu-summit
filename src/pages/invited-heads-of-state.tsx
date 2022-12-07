import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeaderText from '@/components/header-text/HeaderText';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import InviteSection from '@/components/invite-section/InviteSection';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function InvitedHeadsOfStatePage() {
  return (
    <Layout>
      <Seo templateTitle='Invited heads of state' />

      <main>
        <div className='speaker-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/speaker-bg.png'
            name='Invited Heads of State'
            desc='Invited Heads of State'
          />
          <HeaderText />
          <InviteSection hideButton={false} />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
