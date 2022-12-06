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
import VideoSection from '@/components/video/video-section';
import WhoAttending from '@/components/who-attending/whoAttending';
export default function HomePage() {
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
            <NotableSection hideButton={true} />
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
