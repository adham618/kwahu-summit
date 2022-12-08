/* eslint-disable @next/next/no-img-element */
import GoogleMapReact from 'google-map-react';
import React from 'react';

const MapSection = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className='map-section'>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBeEQgpHcPzV4BwOa60xgE9AwhlofidWh8' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        />
      </div>
    </div>
  );
};

export default MapSection;
