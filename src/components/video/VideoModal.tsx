import * as React from 'react';

import PlayBtn from '@/assets/PlayBtn.svg';
type VideoModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function VideoModal({
  showModal,
  setShowModal,
}: VideoModalProps) {
  const [playbtn, setplaybtn] = React.useState(false);
  const [videoThumbnail, setvideoThumbnail] = React.useState(true);
  const [playing, setplaying] = React.useState(false);
  const vidRef = React.useRef<HTMLVideoElement>(null);
  const handlePlayVideo = () => {
    playing ? vidRef.current?.pause() : vidRef.current?.play();
    setplaying(!playing);
    setplaybtn(!playbtn);
  };

  return (
    <>
      {showModal && (
        <>
          <div
            onClick={() => setShowModal(false)}
            className='top-[-200px] tw-fixed tw-inset-0 tw-z-[9999] tw-min-h-screen tw-cursor-pointer tw-bg-black/50 tw-transition-all tw-duration-300'
          ></div>
          <div className='tw-fixed tw-left-1/2 tw-top-1/2 tw-z-[99999] tw-h-[600px] tw-max-h-[90vh] tw-min-h-[477px] tw-w-[886px] tw-max-w-[90%]  tw--translate-x-1/2 tw--translate-y-1/2 tw-transform tw-rounded-3xl tw-border-4 tw-border-[#CFCED6] tw-bg-white'>
            <div className='tw-relative tw-mx-auto tw-flex tw-h-full tw-w-full tw-max-w-full tw-justify-center tw-overflow-hidden tw-rounded-3xl'>
              <video
                onPlay={() => setvideoThumbnail(false)}
                onEnded={() => setplaying(false)}
                ref={vidRef}
                className='tw-mx-auto tw-ml-auto tw-h-full tw-w-full tw-rounded-3xl tw-object-cover'
                playsInline
              >
                <source src='/video.mp4' type='video/mp4' />
              </video>
              <div
                className={`${
                  videoThumbnail
                    ? 'tw-absolute tw-inset-0 tw-h-full tw-w-full tw-rounded-3xl'
                    : 'tw-hidden'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className='tw-h-full tw-w-full tw-rounded-3xl tw-object-cover'
                  src='/images/video-bg.png'
                  alt='videoThumbnail'
                />
              </div>
              <div
                onClick={handlePlayVideo}
                className={`tw-absolute tw-inset-0 tw-flex tw-h-full tw-w-full tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-3xl ${
                  playing ? '' : 'tw-bg-black/20'
                }`}
              >
                <PlayBtn
                  className={`${
                    playing ? 'tw-hidden' : ''
                  } tw-h-10 tw-w-10 sm:tw-h-16 sm:tw-w-16`}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
