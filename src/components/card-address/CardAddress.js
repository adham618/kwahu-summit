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
          <p>{props.desc}</p>
          <h3 className='hosted'>Hosted by:</h3>
          <div className='card-box'>
            <div className='icon'>
              <img src={props.image} alt='icon' />
            </div>
            <div className='name'>
              <h3>{props.name}</h3>
              <p>{props.degi}</p>
            </div>
          </div>
          <div className='card-location'>
            <img src='/images/location.png' alt='location' />
            <p>{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAddress;
