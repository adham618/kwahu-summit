/* eslint-disable @next/next/no-img-element */
import React from 'react';

import CardImgText from '../card-img-text/CardImgText';
import SectionHeader from '../section-header/SectionHeader';

const invite_list = [
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

const InviteSection = (props) => {
  return (
    <div className='invite-section p-4 tw-relative'>
      <SectionHeader title='Invited Heads of State' />
      <div className='cards'>
        <div className='container-fluid'>
          <div className='gap-4 tw-grid tw-grid-cols-4'>
            {invite_list.map((invite, index) => (
              <div className='tw-contents' key={index}>
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
