import * as React from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import PlanningCommitteSection from '@/components/planning-committe-section/PlanningCommitteSection';
import Seo from '@/components/Seo';

export default function PlanningCommitteePage() {
  return (
    <Layout>
      <Seo templateTitle='Planning committee' />

      <main>
        <div className='planning-committee-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/planning-bg.png'
            title='Planning committee'
            desc='About the Summit'
          />
          <PlanningCommitteSection />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
