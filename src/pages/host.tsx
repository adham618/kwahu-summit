import React from 'react';

import CardTitleText from '@/components/card-title-text/CardTitleText';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

const desc_list = [
  'The African Continental Free Trade Area (AfCFTA) is the world’s largest free trade area bringing together the 55 countries of the African Union (AU) and eight (8) Regional Economic Communities (RECs) to create a single market for the continent. The aim is to enable the free flow of goods and services across the continent and boost the trading position of Africa in the global market.',
];

const desc_list_2 = [
  'It is estimated that the AfCFTA has the potential both to boost intra-Africa trade by 52.3 percent by eliminating import duties and to double this trade if non-tariff barriers are also reduced.',
  'With average tariffs of 6.1 percent, businesses currently face higher tariffs when they export within Africa than on the continent. The AfCFTA will progressively eliminate tariffs on intra-Africa trade, making it easier for African businesses to trade within the continent and benefit from the growing African market.',
  'The AfCFTA is expected to expand the size of Africa’s economy to US$29 trillion by 2050.',
];

export default function HostPage() {
  return (
    <Layout>
      <Seo templateTitle='Host' />

      <main>
        <div className='host-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/host-bg.png'
            name='The Host'
            desc='The Host'
          />
          <div className='section-space-y'></div>
          <CardTitleText title='What is the AfCFTA?' desc_list={desc_list} />
          <CardTitleText
            title='AfCFTA contributions to the African Economy'
            desc_list={desc_list_2}
          />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
