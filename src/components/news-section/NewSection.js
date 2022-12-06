/* eslint-disable @next/next/no-img-element */
import React from 'react';

import CardNews from '../card-news/CardNews';
import SectionHeader from '../section-header/SectionHeader';
const NewsSection = () => {
  return (
    <div className='news-section p-4'>
      <SectionHeader title='New' />
      <div className='news-card'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <CardNews
                image='/images/news/news-1.png'
                title='“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, '
                date='1 November 2022 | 22:48'
              />
            </div>
            <div className='col-md-4'>
              <CardNews
                image='/images/news/news-2.png'
                title='KWAHU SUMMIT LAUNCHED – GHANA TO HOST AFRICA’S PROSPERITY DIALOGUES'
                date='1 November 2022 | 22:48'
              />
            </div>
            <div className='col-md-4'>
              <CardNews
                image='/images/news/news-3.png'
                title='Benefits of African Economic Integration'
                date='1 November 2022 | 22:48'
              />
            </div>
          </div>
          <div className='row justify-content-end'>
            <div className='col-md-4'>
              <div className='view-more-news'>
                <button className='btn view-all-news btn-link'>
                  View all news
                  <img
                    className='arrow-right'
                    src='/images/green-arrow-right.png'
                    alt='arrow right'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
