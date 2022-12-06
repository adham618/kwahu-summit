import React from 'react';

import SectionHeader from '../section-header/SectionHeader';

const FAQSection = () => {
  return (
    <div className='faq-section'>
      <SectionHeader title='Frequently Asked Questions' />
      <div className='faq-block'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <div className='accordion' id='accordionExample'>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What is Summit ?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                        Speaking in Kigali, Rwanda last week at the Commonwealth
                        Business Forum, the MTN Group President and CEO, Ralph
                        Mupita, welcomed the Kwahu Summit as “timely, and a
                        necessary platform to get Africa’s business leaders
                        fully engaged (along with the political leaders) in the
                        process of deepening intra-Africa trade,”
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      What format will the event take?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                        Speaking in Kigali, Rwanda last week at the Commonwealth
                        Business Forum, the MTN Group President and CEO, Ralph
                        Mupita, welcomed the Kwahu Summit as “timely, and a
                        necessary platform to get Africa’s business leaders
                        fully engaged (along with the political leaders) in the
                        process of deepening intra-Africa trade,”
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      Who can participate in the Pre-Summit?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                        Speaking in Kigali, Rwanda last week at the Commonwealth
                        Business Forum, the MTN Group President and CEO, Ralph
                        Mupita, welcomed the Kwahu Summit as “timely, and a
                        necessary platform to get Africa’s business leaders
                        fully engaged (along with the political leaders) in the
                        process of deepening intra-Africa trade,”
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingFour'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      When and where will the event take place?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFour'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                        Speaking in Kigali, Rwanda last week at the Commonwealth
                        Business Forum, the MTN Group President and CEO, Ralph
                        Mupita, welcomed the Kwahu Summit as “timely, and a
                        necessary platform to get Africa’s business leaders
                        fully engaged (along with the political leaders) in the
                        process of deepening intra-Africa trade,”
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingFive'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      Which parts of the event will be private and who will be
                      able to attend?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFive'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p>
                        Speaking in Kigali, Rwanda last week at the Commonwealth
                        Business Forum, the MTN Group President and CEO, Ralph
                        Mupita, welcomed the Kwahu Summit as “timely, and a
                        necessary platform to get Africa’s business leaders
                        fully engaged (along with the political leaders) in the
                        process of deepening intra-Africa trade,”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
