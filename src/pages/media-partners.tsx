import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import InvitedMediaSection from '@/components/InvitedMediaSection';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';
export default function MediaPartnersPage() {
  return (
    <Layout>
      <Seo templateTitle='Media partners' />

      <main>
        <div className='peduase-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/media-partners.png'
            name='Invited media'
            desc='About the Summit'
          />
          <InvitedMediaSection />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
