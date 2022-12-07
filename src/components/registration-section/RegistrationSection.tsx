import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const RegistrationSection = () => {
  type Inputs = {
    title: string;
    firstName: string;
    middleName: string;
    SURNAME: string;
    Gender: string;
    email: string;
    phone: string;
    nationality: string;
    STATE: string;
    intraAfrica: string;
    presidential: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  //   Handling form registerOptions
  const registerOptions = {
    title: {
      required: 'The Title Field is required',
      minLength: {
        value: 3,
        message: 'Title must be at least 3 characters',
      },
    },
    firstName: {
      required: 'The First Name Field is required',
      minLength: {
        value: 3,
        message: 'First Name must be at least 3 characters',
      },
      maxLength: {
        value: 20,
        message: 'First Name cannot exceed 20 characters',
      },
    },
    middleName: {
      required: 'The Middle Name Field is required',
      minLength: {
        value: 3,
        message: 'Middle Name must be at least 3 characters',
      },
      maxLength: {
        value: 20,
        message: 'Middle Name cannot exceed 20 characters',
      },
    },
    SURNAME: {
      required: 'The Surname Field is required',
      minLength: {
        value: 3,
        message: 'Surname must be at least 3 characters',
      },
      maxLength: {
        value: 20,
        message: 'Surname cannot exceed 20 characters',
      },
    },
    Gender: {
      required: 'The Gender Field is required',
    },
    email: {
      required: 'The Email Field is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    },
    phone: {
      required: 'The Phone Field is required',
      minLength: {
        value: 11,
        message: 'Phone Number must be at least 11 characters',
      },
      maxLength: {
        value: 11,
        message: 'Phone Number cannot exceed 11 characters',
      },
    },
    nationality: {
      required: 'The Nationality Field is required',
    },
    STATE: {
      required: 'The State Field is required',
    },
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='registration-section'>
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
              <input
                className='form-control'
                {...register('title', registerOptions.title)}
                type='text'
                placeholder='TITLE*'
              />
              {errors.title && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.title.message}
                </span>
              )}
            </div>
          </div>
          <div className='col-md-3'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='FIRST NAME*'
                {...register('firstName', registerOptions.firstName)}
              />
              {errors.firstName && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.firstName.message}
                </span>
              )}
            </div>
          </div>
          <div className='col-md-3'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='MIDDLE NAME*'
                {...register('middleName', registerOptions.middleName)}
              />
              {errors.middleName && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.middleName.message}
                </span>
              )}
            </div>
          </div>
          <div className='col-md-3'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='SURNAME*'
                {...register('SURNAME', registerOptions.SURNAME)}
              />
              {errors.SURNAME && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.SURNAME.message}
                </span>
              )}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='regi-form'>
              <select
                className='form-control'
                placeholder='Gender*'
                {...register('Gender', registerOptions.Gender)}
                defaultValue=''
              >
                <option value='' disabled hidden>
                  Gender*
                </option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
              {errors.Gender && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.Gender.message}
                </span>
              )}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='email'
                placeholder='Email*'
                {...register('email', registerOptions.email)}
              />
              {errors.email && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='regi-form'>
              <input
                className='form-control'
                type='text'
                placeholder='PHONE*'
                {...register('phone', registerOptions.phone)}
              />
              {errors.phone && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.phone.message}
                </span>
              )}
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
              <select
                {...register('nationality', registerOptions.nationality)}
                id='nationality'
                defaultValue=''
              >
                <option value='' disabled hidden>
                  select counTry
                </option>
                <option value='1'>select counTry</option>
                <option value='1'>select counTry</option>
                <option value='1'>select counTry</option>
              </select>
              {errors.nationality && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.nationality.message}
                </span>
              )}
            </div>
          </div>
          <div className='col-md-6'>
            <div className='regi-form'>
              <label htmlFor='STATE'>STATE*</label>
              <select
                {...register('STATE', registerOptions.STATE)}
                id='STATE'
                defaultValue=''
              >
                <option value='' disabled hidden>
                  Select state
                </option>
                <option value='1'>Select state</option>
                <option value='1'>Select state</option>
                <option value='1'>Select state</option>
                <option value='1'>Select state</option>
              </select>
              {errors.STATE && (
                <span className='tw-mt-2 tw-block tw-text-[14px] tw-font-bold tw-leading-5 tw-text-red-500'>
                  {errors.STATE.message}
                </span>
              )}
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
              <select id='pc' defaultValue=''>
                <option value='' disabled hidden>
                  select country
                </option>
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
            <div className='regi-form regi-checkbox mb-0'>
              <input
                className='tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-[2px] !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0'
                type='checkbox'
                id='intra-africa'
                {...register('intraAfrica')}
              />
              <label htmlFor='intra-africa'>
                Intra-Africa Trade Forum – 26th & 27th January, 2023
              </label>
            </div>
            <div className='regi-form regi-checkbox mb-0'>
              <input
                className='tw-mr-2.5 tw-h-4 tw-w-4 tw-cursor-pointer tw-rounded-[2px] !tw-border-2 tw-border-solid !tw-border-[#00A139] tw-text-[#00A139] tw-ring-offset-0 focus:tw-shadow-none focus:tw-ring-0 focus:tw-ring-offset-0'
                type='checkbox'
                id='presidential'
                {...register('presidential')}
              />
              <label htmlFor='presidential'>
                Presidential & Business Executives Dialogue – 28th January, 2023
              </label>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='regi-form'>
              <button disabled={isSubmitting} className='btn btn-reg'>
                Submit
              </button>
            </div>
            {isSubmitSuccessful && (
              <div className='tw-mt-2 tw-text-[14px] tw-font-bold tw-text-green-500'>
                Registration Successful
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationSection;
