import React from 'react';

import SectionDot from '../section-dot/SectionDot';
import SectionHeader from '../section-header/SectionHeader';

const About = (props) => {
  return (
    <div className='about-section section-space-y'>
      {props.hasDot ? <SectionDot /> : null}
      <SectionHeader hint='BACKGROUND TO SUMMIT' title='About the Summit' />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-10 col-sm-10'>
            <div className='content'>
              <p>
                Africa Prosperity Network (APN) , in partnership with the AfCFTA
                Secretariat and the Presidency of Ghana, (the host nation of
                AfCFTA Secretariat), presents the Kwahu Summit on Africa’s
                Prosperity. This is the summit where leading Africans in
                Politics and Business will convene to Contribute, Connect and
                Commit to restructuring the African reality, and reconstructing
                the African narrative.
              </p>
              <p>
                That project of ownership and partnerships among African
                nations, citizens and businesses is before us today like never
                before. On 1 January 2021, Africa signalled her resolve to forge
                ahead together with greater purpose through the coming into
                force of the African Continental Free Trade Area (AfCFTA) – a
                historic pact among AU member-states to create a single
                continental market for goods and services, as well as a customs
                union
              </p>
              <p>
                The AfCFTA has the potential to transform collectively, Africa’s
                economies and create opportunities in what is now the world’s
                largest free trade zone, with an estimated spending power of
                US$6.7 trillion by 2030, (ECA). The fate of Africa will be
                determined by how Africans guide and drive the first decade of
                the AfCFTA. To achieve this, African leaders in politics and
                industry, as well as other key stakeholders, must intentionally
                and actively reason, plan, and work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
