import React from 'react';
import { Loader as Load, Dimmer } from 'semantic-ui-react';

const Loader = () => {
  return (
    <Dimmer active>
      <Load />
    </Dimmer>
  );
}

export default Loader;