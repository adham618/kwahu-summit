/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardAddress = (props) => {
  return (
    <div className='card-address'>
      <div className='title'>
        <h3>{props.title}</h3>
      </div>
      <div className='card-row'>
        <div className='card-date'>
          <h3>{props.date}</h3>
        </div>
        <div className='card-desc'>
          <p className='tw-text-lg'>{props.desc}</p>
          {props.byInvitation && (
            <div className='tw-mb-5 tw-text-lg tw-font-semibold tw-text-[#00A139]'>
              Strictly by Invitation
            </div>
          )}
          <h3 className='hosted'>Hosted by:</h3>
          <div className='card-box'>
            <div className='icon'>
              <img src={props.image} alt='icon' />
            </div>
            <div className='name'>
              <h3 className='tw-font-sans !tw-text-sm tw-font-semibold !tw-text-black'>
                {props.name}
              </h3>
              <p>{props.degi}</p>
            </div>
          </div>
          <div className='card-location'>
            <img src='/images/icons/location.svg' alt='location' />
            <p>{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAddress;
