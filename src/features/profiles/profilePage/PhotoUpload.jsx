import React, { useState } from 'react';
import { Button, Card, Grid, Header, Image, Tab } from 'semantic-ui-react';
import PhotoUploader from '../../../app/common/photos/PhotoUploader';

function PhotoUpload({ profile, isCurrentUser }) {
  const [editMode, setEditMode] = useState(true);

  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header floated='left' icon='user' content={`Photos`} />
          {isCurrentUser && (
            <Button
              onClick={() => setEditMode(!editMode)}
              floated='right'
              basic
              content={editMode ? 'Cancel' : 'Upload Photo'}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <PhotoUploader />
          ) : (
            <Card.Group itemsPerRow={5}>
              <Card>
                <Image src={'/assets/user.png'} />
                <Button.Group fluid widths={2}>
                  <Button color='pink' content='Main' />
                  <Button color='orange' icon='trash alternate outline' />
                </Button.Group>
              </Card>
            </Card.Group>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
}

export default PhotoUpload;
