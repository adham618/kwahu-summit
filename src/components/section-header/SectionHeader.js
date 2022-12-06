import React from 'react';

const SectionHeader = (props) => {
  return (
    <div className='section-header'>
      <p>{props.hint}</p>
      <h3>{props.title}</h3>
    </div>
  );
};

export default SectionHeader;
