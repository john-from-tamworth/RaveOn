import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';
import PlacesTest from './PlacesTest';
import TestMap from './TestMap';
import { decrement, increment } from './testReducer';

function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const [location, setLocation] = useState(defaultProps);

  function handleSetLocation(latLng) {
    setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
  }

  return (
    <>
      <h1>Testing 123</h1>
      <h3>data is: {data} </h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content='Decrement'
        color='red'
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
        content='open Modal'
        color='teal'
      />
      <div style={{ marginTop: 15 }}>
        <PlacesTest setLocation={handleSetLocation} />
        <TestMap location={location} />
      </div>
    </>
  );
}

export default Sandbox;
