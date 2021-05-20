import React, { useState } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import PhotoUploaderDropzone from './PhotoUploaderDropzone';

function PhotoUploader() {
  const [files, setFiles] = useState([]);
  return (
    <Grid>
      <Grid.Column width={4}>
        <Header color='pink' sub content='Step 1 - Add Photo' />
        <PhotoUploaderDropzone setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color='pink' sub content='Step 2 - Resize' />
      </Grid.Column>
      <Grid.Column width={4}>
        <Header color='pink' sub content='Step 3 - Preview & Upload' />
      </Grid.Column>
    </Grid>
  );
}

export default PhotoUploader;
