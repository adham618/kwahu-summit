import React from 'react';

import VideoSection from '../video/video-section';

const NewsDetailSection3 = () => {
  return (
    <div className='text-title-section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-title-inner'>
              <div className='quote-card'>
                <p>
                  The Africa Prosperity Network has, today, launched the Kwahu
                  Summit for Africa’s prosperity.
                </p>
              </div>
              <div className='desc-card'>
                <p>
                  The launch which featured top African business leaders,
                  political leaders, and local and international media occurred
                  at the Accra Marriot Hotel on the sidelines of the African
                  Development Bank’s annual meeting currently happening in
                  Accra, Ghana.
                </p>
                <p>
                  Speaking at the launch, His Excellency Wamkele Mene who is the
                  Executive Secretary of the AfCFTA Secretariate emphasized the
                  need for Africans to have impactful dialogues about Africa’s
                  trade relations with the rests of the world in light of the
                  state of intra-Africa trade. His Excellency Wamkele Mene
                  declared AfCfFTA Secretariate’s support for the Kwahu Summit
                  and urged that the Summit would effectively engage the full
                  range of sustainable development actors, governments, and
                  businesses to explore how to accelerate the AfCFTA
                  implementation as well as the explore the kind of economic
                  development vision Africa must have for decades to come.
                </p>
                <p>
                  On behalf of the Government of Ghana, Honorable Kojo Oppong
                  Nkrumah, Ghana’s Minister of Information, spoke about the
                  government’s support for the thought leadership platform the
                  Kwahu Summit creates for Africans to leverage opportunities
                  and resources on the continent to achieve more.
                </p>

                <p>
                  Mr. Yofi Grant, Chief Executive Officer of the Ghana
                  Investment Promotion Centre (GIPC) emphasized the need for
                  Africans to proactively direct global discourses and
                  collaborations on Africa’s development, given the share of
                  global natural resources the Continent possesses and the
                  potential of the Continent’s demography for consumerism,
                  leadership, and labor force.
                </p>
                <p>
                  The maiden edition of the Kwahu Summit on Africa’s prosperity
                  will take place at the Rock City Hotel in Kwahu on 28th and
                  29th October 2022. The partners of the Summit are AfCFTA
                  Secretariat the Government of the Republic of Ghana, and the
                  Ghana Investment Promotion Centre (GIPC).
                </p>
              </div>

              <div className='video-section'>
                <VideoSection />
              </div>
              <div className='gallery-section'>Gallery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailSection3;
