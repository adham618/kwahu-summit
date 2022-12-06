/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardImgText = (props) => {
  return (
    <div className='card-img-text'>
      <div className='cover'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='content'>
        <h3>{props.name}</h3>
        <p>{props.degi}</p>
      </div>
    </div>
  );
};

export default CardImgText;
