/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardImgText = (props) => {
  return (
    <div className='card-img-text tw-flex tw-flex-col'>
      <div className='cover'>
        <img
          className='tw-h-[422.23px] tw-w-[320.46px]'
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className='content tw-flex-grow'>
        <h3 className='!tw-text-xl'>{props.name}</h3>
        <p>{props.degi}</p>
      </div>
    </div>
  );
};

export default CardImgText;
