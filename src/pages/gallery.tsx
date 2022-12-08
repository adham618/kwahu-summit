/* eslint-disable @next/next/no-img-element */
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import LightGallery from 'lightgallery/react';
import React from 'react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';
export default function GalleryPage() {
  const images = [
    {
      src: 'images/gallery/img-1.png',
      thumbnail: 'images/gallery/img-1.png',
    },
    {
      src: 'images/gallery/img-2.png',
      thumbnail: 'images/gallery/img-2.png',
    },
    {
      src: 'images/gallery/img-3.png',
      thumbnail: 'images/gallery/img-3.png',
    },
    {
      src: 'images/gallery/img-4.png',
      thumbnail: 'images/gallery/img-4.png',
    },
    {
      src: 'images/gallery/img-5.png',
      thumbnail: 'images/gallery/img-5.png',
    },
    {
      src: 'images/gallery/img-6.png',
      thumbnail: 'images/gallery/img-6.png',
    },
    {
      src: 'images/gallery/img-7.png',
      thumbnail: 'images/gallery/img-7.png',
    },
    {
      src: 'images/gallery/img-8.png',
      thumbnail: 'images/gallery/img-8.png',
    },
    {
      src: 'images/gallery/img-9.png',
      thumbnail: 'images/gallery/img-9.png',
    },
    {
      src: 'images/gallery/img-10.png',
      thumbnail: 'images/gallery/img-10.png',
    },
    {
      src: 'images/gallery/img-11.png',
      thumbnail: 'images/gallery/img-11.png',
    },
    {
      src: 'images/gallery/img-12.png',
      thumbnail: 'images/gallery/img-12.png',
    },
    {
      src: 'images/gallery/img-13.png',
      thumbnail: 'images/gallery/img-13.png',
    },
    {
      src: 'images/gallery/img-14.png',
      thumbnail: 'images/gallery/img-14.png',
    },
    {
      src: 'images/gallery/img-15.png',
      thumbnail: 'images/gallery/img-15.png',
    },
    {
      src: 'images/gallery/img-16.png',
      thumbnail: 'images/gallery/img-16.png',
    },
    {
      src: 'images/gallery/img-17.png',
      thumbnail: 'images/gallery/img-17.png',
    },
    {
      src: 'images/gallery/img-18.png',
      thumbnail: 'images/gallery/img-18.png',
    },
    {
      src: 'images/gallery/img-19.png',
      thumbnail: 'images/gallery/img-19.png',
    },
    {
      src: 'images/gallery/img-20.png',
      thumbnail: 'images/gallery/img-20.png',
    },
    {
      src: 'images/gallery/img-21.png',
      thumbnail: 'images/gallery/img-21.png',
    },
  ];
  return (
    <Layout>
      <Seo templateTitle='Gallery' />

      <main>
        <div className='gallery-page'>
          <PageShape />
          <Header />
          <HeroSectionSM
            image='/images/header-bg/gallery-bg.png'
            name='Gallery'
            desc='Kwahu Summit Launch'
          />
          <div className='layout'>
            {' '}
            <LightGallery speed={500} plugins={[lgThumbnail]}>
              {images.map((image, index) => (
                <a key={index} href={image.src}>
                  <img
                    className='tw-max-h-[300px] tw-max-w-[300px]'
                    alt='img'
                    src={image.thumbnail}
                  />
                </a>
              ))}
            </LightGallery>
          </div>

          <Footer />
        </div>
      </main>
    </Layout>
  );
}
