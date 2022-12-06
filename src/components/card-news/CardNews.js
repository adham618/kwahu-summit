/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardNews = (props) => {
  return (
    <div className='card-news'>
      <div className='cover'>
        <img src={props.image} alt='Cover' />
      </div>
      <div className='content'>
        <h3>{props.title}</h3>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default CardNews;
