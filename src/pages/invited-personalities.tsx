import React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeaderText from '@/components/header-text/HeaderText';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NotableSection from '@/components/notable-section/notable-section';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function InvitedPersonalitiesPage() {
  return (
    <Layout>
      <Seo templateTitle='Invited-personalities' />

      <main>
        <div className='speaker-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/speaker-2-bg.png'
            name='Invited Personalities'
            desc='Invited Personalities'
          />
          <HeaderText />
          <NotableSection hideButton={false} />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
