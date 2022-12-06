import React from 'react';

import CardNews from '../card-news/CardNews';
import SectionHeader from '../section-header/SectionHeader';
const NewsAll = () => {
  return (
    <div className='news-all p-4'>
      <SectionHeader title='News' />
      <div className='news-all-box'>
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
                title='“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, '
                date='1 November 2022 | 22:48'
              />
            </div>
            <div className='col-md-4'>
              <CardNews
                image='/images/news/news-3.png'
                title='“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, '
                date='1 November 2022 | 22:48'
              />
            </div>
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
                title='“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, '
                date='1 November 2022 | 22:48'
              />
            </div>
            <div className='col-md-4'>
              <CardNews
                image='/images/news/news-3.png'
                title='“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, '
                date='1 November 2022 | 22:48'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAll;
