import React from 'react';

const RegistrationSection = () => {
  return (
    <div className='registration-section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='registration-head'>
              <span>"*" indicates required fields</span>
              <h3>
                Kindly complete this registration form to attend The Africa
                Prosperity Dialogues 2023 in Ghana.
              </h3>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='regi-form'>
              <select>
                <option value='1'>Title*</option>
                <option value='1'>Title*</option>
                <option value='1'>Title*</option>
                <option value='1'>Title*</option>
                <option value='1'>Title*</option>
              </select>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='FIRST NAME*'
              />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='MIDDLE NAME*'
              />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='SURNAME*'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='Gender*'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='Email*'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='PHONE*'
              />
            </div>
          </div>
          <div className='col-md-12'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='Address*'
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='regi-form'>
              <label htmlFor='nationality'>Nationality*</label>
              <select id='nationality'>
                <option value='1'>select counTry</option>
                <option value='1'>select counTry</option>
                <option value='1'>select counTry</option>
                <option value='1'>select counTry</option>
              </select>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='regi-form'>
              <label htmlFor='STATE'>STATE*</label>
              <select id='STATE'>
                <option value='1'>Select state</option>
                <option value='1'>Select state</option>
                <option value='1'>Select state</option>
                <option value='1'>Select state</option>
                <option value='1'>Select state</option>
              </select>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='registration-summit'>
              <h3>Summit Participation</h3>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='regi-form'>
              <label htmlFor='pc'>Participant Categories**</label>
              <select id='pc'>
                <option value='1'>select country</option>
                <option value='1'>select country</option>
                <option value='1'>select country</option>
                <option value='1'>select country</option>
                <option value='1'>select country</option>
              </select>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='regi-form'>
              <label htmlFor='STATE'>I will attend:*</label>
            </div>
            <div className='regi-form regi-checkbox'>
              <input
                className='tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-[2px] !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0'
                type='checkbox'
                id='intra-africa'
              />
              <label htmlFor='intra-africa'>
                Intra-Africa Trade Forum – 26th & 27th January, 2023
              </label>
            </div>
            <div className='regi-form regi-checkbox'>
              <input
                className='tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-[2px] !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0'
                type='checkbox'
                id='presidential'
              />
              <label htmlFor='presidential'>
                Presidential & Business Executives Dialogue – 28th January, 2023
              </label>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='regi-form'>
              <button className='btn btn-reg'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSection;
