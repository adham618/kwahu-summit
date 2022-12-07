import * as React from 'react';

import About from '@/components/about/About';
import FAQSection from '@/components/faq-section/FAQSection';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSection from '@/components/hero-section/HeroSection';
import InviteSection from '@/components/invite-section/InviteSection';
import KeyTopics from '@/components/key-topics/KeyTopics';
import Layout from '@/components/layout/Layout';
import NewSection from '@/components/news-section/NewSection';
import NotableSection from '@/components/notable-section/notable-section';
import Seo from '@/components/Seo';
import SponsorsSection from '@/components/sponsors-section/SponsorsSection';
import VideoSection from '@/components/video/VideoSection';
import WhoAttending from '@/components/who-attending/whoAttending';
export default function HomePage() {
  const data = [
    {
      name: 'Aliko Dangote',
      degi: 'Chairman and CEO, Dangote Group',
      image: '/images/profiles/Aliko-Dangote.png',
    },
    {
      name: 'Ngozi Okonjo-Iweala',
      degi: 'Director-General, World Trade Organization',
      image: '/images/profiles/Ngozi-Okonjo-Iweala.png',
    },
    {
      name: 'Dr. Adesina Akinwumi',
      degi: 'President, African Development Bank',
      image: '/images/profiles/Adesina-Akinwumi.png',
    },
    {
      name: 'Tidjane Thiam',
      degi: 'Executive Chairman, Freedom Acquisition I Corporation',
      image: '/images/profiles/Tidjane-Thiam.png',
    },
    {
      name: 'Prof. Benedict Oramah',
      degi: 'President, Afrexim Bank',
      image: '/images/profiles/Benedict-Oramah.png',
    },
    {
      name: 'Ralph Mupita',
      degi: 'Group CEO, MTN',
      image: '/images/profiles/Ralph-Mupita.png',
    },
    {
      name: 'Miriam C. Olusanya',
      degi: 'Managing Director, Guaranty Trust Bank',
      image: '/images/profiles/Miriam-Olusanya.png',
    },
    {
      name: 'Hadi Halloche',
      degi: 'Global Co-Head, Trafigura Group Pte LTD',
      image: '/images/profiles/Hadi-Halloche.png',
    },
    {
      name: 'Bernard Mensah',
      degi: 'President, International Bank of America',
      image: '/images/profiles/Bernard-Mensah.png',
    },
    {
      name: 'Sir David Frank Adjaye',
      degi: 'Renowned architect',
      image: '/images/profiles/David-Frank-Adjaye.png',
    },
    {
      name: 'Kayra Harding Bart',
      degi: 'Vice President, National Assembly of Panama',
      image: '/images/profiles/Kayra-Harding-Bart.png',
    },
    {
      name: 'Carl Cruz',
      degi: 'MD, Unilever West Africa',
      image: '/images/profiles/Carl-Cruz.png',
    },
  ];
  return (
    <Layout>
      <Seo />
      <main>
        <div className='home-page'>
          <div className='main-head'>
            <Header />
            <HeroSection />
            <About hasDot={true} />
            <VideoSection />
            <WhoAttending />
            <InviteSection hideButton={true} />
            <NotableSection data={data} hideButton={true} />
            <KeyTopics />
            <NewSection />
            <FAQSection />
            <SponsorsSection />
            <Footer />
          </div>
        </div>
      </main>
    </Layout>
  );
}
