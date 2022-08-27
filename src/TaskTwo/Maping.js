import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 23.760553125947684,
    lng: 90.38927467742258
  };

const Maping = () => {
    return (
        <LoadScript
        googleMapsApiKey="AIzaSyBYpCK5ie-ZCPzVbC4JvlFlEs5kHEsW-C4"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    );
};

export default Maping;