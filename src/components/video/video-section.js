/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const VideoSection = () => {
  return (
    <div className='video-section p-4'>
      <div className='container-fluid'>
        <Link className='video-box' href='/'>
          <img src='/images/video-bg.png' alt='bg' />
          <span className='play-icon'>
            <img src='/images/icons/play-icon.png' alt='play' />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VideoSection;
