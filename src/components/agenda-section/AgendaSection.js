import Link from 'next/link';
import React from 'react';

const AgendaSection = () => {
  return (
    <div className='text-title-section tw-px-0 md:tw-px-[70px]'>
      <div className='layout'>
        <div className='text-title-inner'>
          <div className='title'>
            <h3>Agenda 2063: The Africa We Want.</h3>
          </div>

          <div className='desc-card !tw-pl-0 md:!tw-pl-[120px]'>
            <p>
              AGENDA 2063 is Africa’s blueprint and master plan for transforming
              Africa into the global powerhouse of the future. It is the
              continent’s strategic framework that aims to deliver on its goal
              for inclusive and sustainable development and is a concrete
              manifestation of the pan-African drive for unity,
              self-determination, freedom, progress and collective prosperity
              pursued under Pan-Africanism and African Renaissance The genesis
              of Agenda 2063 was the realisation by African leaders that there
              was a need to refocus and reprioritise Africa’s agenda from the
              struggle against apartheid and the attainment of political
              independence for the continent which had been the focus of The
              Organisation of African Unity (OAU), the precursor of the African
              Union;
            </p>
            <p>
              And instead to prioritise inclusive social and economic
              development, continental and regional integration, democratic
              governance and peace and security amongst other issues aimed at
              repositioning Africa to becoming a dominant player in the global
              arena
            </p>
          </div>
          <div className='quote-card'>
            <p>
              As an affirmation of their commitment to support Africa’s new path
              for attaining inclusive and sustainable economic growth and
              development African heads of state and government signed the 50th
              Anniversary Solemn Declaration during the Golden Jubilee
              celebrations of the formation of the OAU /AU in May 2013. The
              declaration marked the re-dedication of Africa towards the
              attainment of the Pan African Vision of An integrated, prosperous
              and peaceful Africa, driven by its own citizens, representing a
              dynamic force in the international arena and Agenda 2063 is the
              concrete manifestation of how the continent intends to achieve
              this vision within a 50 year period from 2013 to 2063. The Africa
              of the future was captured in a letter presented by the former
              Chairperson of the African Union Commission, Dr. Nkosazana
              Dlaminin Zuma.
            </p>
          </div>
          <div className='desc-card !tw-pl-0 md:!tw-pl-[120px]'>
            <p>
              The need to envision a long-term 50 year development trajectory
              for Africa is important as Africa needs to revise and adapt its
              development agenda due to ongoing structural transformations;
              increased peace and reduction in the number of conflicts; renewed
              economic growth and social progress; the need for people centered
              development, gender equality and youth empowerment; changing
              global contexts such as increased globalization and the ICT
              revolution; the increased unity of Africa which makes it a global
              power to be reckoned with and capable of rallying support around
              its own common agenda; and emerging development and investment
              opportunities in areas such as agri-business, infrastructure
              development, health and education as well as the value addition in
              African commodities
            </p>
          </div>
          <div className='quote-card'>
            <p>
              Agenda 2063 encapsulates not only Africa’s{' '}
              <Link href='/'>Aspirations</Link> for the Future but also
              identifies key <Link href='/'>Flagship Programmes</Link> which can
              boost Africa’s economic growth and development and lead to the
              rapid transformation of the continent.
            </p>
            <p>
              Agenda 2063 also identifies key activities to be undertaken in its{' '}
              <Link href='/'>10 year Implementation Plans</Link> which will
              ensure that Agenda 2063 delivers both quantitative and qualitative{' '}
              <Link href='/'>Transformational Outcomes</Link> for Africa’s
              people
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaSection;
