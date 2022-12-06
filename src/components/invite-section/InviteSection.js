/* eslint-disable @next/next/no-img-element */
import React from 'react';

import CardImgText from '../card-img-text/CardImgText';
import SectionHeader from '../section-header/SectionHeader';

const invite_list = [
  {
    name: 'H.E. Abdel Fattah El-Sisi',
    degi: 'President of the Arab Republic of Egypt',
    image: '/images/profiles/img-4.png',
  },
  {
    name: 'H.E. Aziz Akhannouch',
    degi: 'Prime Minister of Morocco',
    image: '/images/profiles/img-3.png',
  },
  {
    name: 'H.E. Mohamed Bazoum',
    degi: 'President of Niger',
    image: '/images/profiles/img-2.png',
  },
  {
    name: 'H.E. Muhammadu Buhari',
    degi: 'President of the Federal Republic of Nigeria',
    image: '/images/profiles/img-1.png',
  },
  {
    name: 'H.E. Abdel Fattah El-Sisi',
    degi: 'President of the Arab Republic of Egypt',
    image: '/images/profiles/img-4.png',
  },
  {
    name: 'H.E. Aziz Akhannouch',
    degi: 'Prime Minister of Morocco',
    image: '/images/profiles/img-3.png',
  },
  {
    name: 'H.E. Mohamed Bazoum',
    degi: 'President of Niger',
    image: '/images/profiles/img-2.png',
  },
  {
    name: 'H.E. Muhammadu Buhari',
    degi: 'President of the Federal Republic of Nigeria',
    image: '/images/profiles/img-1.png',
  },
  {
    name: 'H.E. Abdel Fattah El-Sisi',
    degi: 'President of the Arab Republic of Egypt',
    image: '/images/profiles/img-4.png',
  },
  {
    name: 'H.E. Aziz Akhannouch',
    degi: 'Prime Minister of Morocco',
    image: '/images/profiles/img-3.png',
  },
  {
    name: 'H.E. Mohamed Bazoum',
    degi: 'President of Niger',
    image: '/images/profiles/img-2.png',
  },
  {
    name: 'H.E. Muhammadu Buhari',
    degi: 'President of the Federal Republic of Nigeria',
    image: '/images/profiles/img-1.png',
  },
];

const InviteSection = (props) => {
  return (
    <div className='invite-section p-4 tw-relative'>
      <SectionHeader title='Invited Heads of State' />
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
                  See all Invited Heads of State{' '}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <img
        className='tw-absolute tw-left-0 tw-top-[-1px] -tw-z-10'
        src='/images/CircleDown.svg'
        alt='vector'
      />
    </div>
  );
};

export default InviteSection;
