import React from 'react';

import CardImgText from '../card-img-text/CardImgText';
import SectionHeader from '../section-header/SectionHeader';

const invite_list = [
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

const NotableSection = (props) => {
  return (
    <div className='notable-section p-4'>
      <SectionHeader title='notable personalities' />
      <div className='cards'>
        <div className='container-fluid layout'>
          <div className='tw-grid tw-grid-cols-4 tw-gap-4'>
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
                  See all Invited Personalities
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
