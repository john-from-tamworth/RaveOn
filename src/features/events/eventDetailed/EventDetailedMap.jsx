import React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

function Marker() {
  return <Icon name='map marker alternate' size='big' color='pink' />;
}

function EventDetailedMap({ latLng }) {
  const zoom = 13;
  return (
    <Segment attached='bottom' style={{ padding: 0 }}>
      <div style={{ height: 300, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAdWLnKtrA54Ps2BmT - _txpIs2K2XLaHCg',
          }}
          center={latLng}
          zoom={zoom}
        >
          <Marker lat={latLng.lat} lng={latLng.lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
}

export default EventDetailedMap;
