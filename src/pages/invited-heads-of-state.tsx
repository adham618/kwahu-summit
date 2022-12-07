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
  const data = [
    {
      name: 'H.E. Abdel Fattah El-Sisi',
      degi: 'President of the Arab Republic of Egypt',
      image: '/images/profiles/Abdel-Fattah-El-Sisi.png',
    },
    {
      name: 'H.E. Aziz Akhannouch',
      degi: 'Prime Minister of Morocco',
      image: '/images/profiles/Aziz-Akhannouch.png',
    },
    {
      name: 'H.E. Mohamed Bazoum',
      degi: 'President of Niger',
      image: '/images/profiles/Mohamed-Bazoum.png',
    },
    {
      name: 'H.E. Muhammadu Buhari',
      degi: 'President of the Federal Republic of Nigeria',
      image: '/images/profiles/Muhammadu-Buhari.png',
    },
    {
      name: 'H.E Cyril Ramaphosa',
      degi: 'President of South Africa',
      image: '/images/profiles/Cyril-Ramaphosa.png',
    },
    {
      name: 'H.E. Denis Sassou Nguesso',
      degi: 'President of the Republic of the Congo',
      image: '/images/profiles/Denis-Sassou-Nguesso.png',
    },
    {
      name: 'H.E. Yoweri K. Museveni',
      degi: 'President of Uganda',
      image: '/images/profiles/Yoweri-Museveni.png',
    },
    {
      name: 'H.E. Evariste Ndayishimiye',
      degi: 'President of Burundi',
      image: '/images/profiles/Evariste-Ndayishimiye.png',
    },
    {
      name: 'H.E. Faure Gnassingbe',
      degi: 'President of Togo',
      image: '/images/profiles/Faure-Gnassingbe.png',
    },
    {
      name: 'H.E Félix A. Tshisekedi Tshilombo',
      degi: 'President, the Democratic Republic of the Congo',
      image: '/images/profiles/Tshisekedi-Tshilombo.png',
    },
    {
      name: 'H.E. Hakainde Hichilema',
      degi: 'President of Zambia',
      image: '/images/profiles/Hakainde-Hichilema.png',
    },
    {
      name: 'H.E. João Manuel Gonçalves Lourenço',
      degi: 'President of Angola',
      image: '/images/profiles/João-Manuel-Gonçalves-Lourenço.png',
    },
  ];

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
          <InviteSection data={data} hideButton={false} />
          <Footer />
        </div>
      </main>
    </Layout>
  );
}
