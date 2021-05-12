import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

function LoadingIndicator({ inverted = true, content = 'Now Loading...' }) {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader content={content} />
    </Dimmer>
  );
}

export default LoadingIndicator;
