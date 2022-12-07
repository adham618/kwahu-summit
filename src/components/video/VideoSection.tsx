/* eslint-disable @next/next/no-img-element */
import React from 'react';

import VideoModal from '@/components/video/VideoModal';

const VideoSection = () => {
  const [ShowVideoModal, setShowVideoModal] = React.useState(false);
  return (
    <div className='video-section p-4'>
      <div className='container-fluid'>
        <button onClick={() => setShowVideoModal(true)} className='video-box'>
          <img src='/images/video-bg.png' alt='video-bg' />
          <span className='play-icon'>
            <img src='/images/icons/play-icon.png' alt='play' />
          </span>
        </button>
      </div>
      {ShowVideoModal && (
        <VideoModal
          showModal={ShowVideoModal}
          setShowModal={setShowVideoModal}
        />
      )}
    </div>
  );
};

export default VideoSection;
