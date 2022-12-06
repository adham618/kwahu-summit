import React from 'react';

import CardImgText from '../card-img-text/CardImgText';
import SectionHeader from '../section-header/SectionHeader';

const invite_list = [
  {
    name: 'Aliko Dangote',
    degi: 'Chairman and CEO, Dangote Group',
    image: '/images/profiles/img5.png',
  },
  {
    name: 'H.E. Aziz Akhannouch',
    degi: 'Prime Minister of Morocco',
    image: '/images/profiles/img6.png',
  },
  {
    name: 'H.E. Mohamed Bazoum',
    degi: 'President of Niger',
    image: '/images/profiles/img7.png',
  },
  {
    name: 'H.E. Muhammadu Buhari',
    degi: 'President of the Federal Republic of Nigeria',
    image: '/images/profiles/img8.png',
  },
  {
    name: 'Aliko Dangote',
    degi: 'Chairman and CEO, Dangote Group',
    image: '/images/profiles/img5.png',
  },
  {
    name: 'H.E. Aziz Akhannouch',
    degi: 'Prime Minister of Morocco',
    image: '/images/profiles/img6.png',
  },
  {
    name: 'H.E. Mohamed Bazoum',
    degi: 'President of Niger',
    image: '/images/profiles/img7.png',
  },
  {
    name: 'H.E. Muhammadu Buhari',
    degi: 'President of the Federal Republic of Nigeria',
    image: '/images/profiles/img8.png',
  },
  {
    name: 'Aliko Dangote',
    degi: 'Chairman and CEO, Dangote Group',
    image: '/images/profiles/img5.png',
  },
  {
    name: 'H.E. Aziz Akhannouch',
    degi: 'Prime Minister of Morocco',
    image: '/images/profiles/img6.png',
  },
  {
    name: 'H.E. Mohamed Bazoum',
    degi: 'President of Niger',
    image: '/images/profiles/img7.png',
  },
  {
    name: 'H.E. Muhammadu Buhari',
    degi: 'President of the Federal Republic of Nigeria',
    image: '/images/profiles/img8.png',
  },
];

const NotableSection = (props) => {
  return (
    <div className='notable-section p-4'>
      <SectionHeader title='notable personalities' />
      <div className='cards'>
        <div className='container-fluid'>
          <div className='row'>
            {invite_list.map((invite, index) => (
              <div className='col-md-3' key={index}>
                <CardImgText
                  name={invite.name}
                  image={invite.image}
                  degi={invite.degi}
                />
              </div>
            ))}
          </div>
          <div className='col-md-12'>
            <div className='cards-btn d-flex align-items-center justify-content-end mt-3'>
              {props.hideButton ? (
                <button className='btn btn-invite btn-outline-success'>
                  See all Invited Personalities{' '}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotableSection;
