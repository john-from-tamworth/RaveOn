import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Card, Grid, Header, Image, Tab } from 'semantic-ui-react';
import PhotoUploader from '../../../app/common/photos/PhotoUploader';
import { deleteFromFirebaseStorage } from '../../../app/firestore/firebaseService';
import {
  deletePhotoFromCollection,
  getUserPhotos,
  setMainPhoto,
} from '../../../app/firestore/firestoreService';
import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';
import { listenToUserPhotos } from '../profileActions';

function PhotoUpload({ profile, isCurrentUser }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const { loading } = useSelector((state) => state.async);
  const { photos } = useSelector((state) => state.profile);
  const [updating, setUpdating] = useState({ isUpdating: false, target: null });
  const [deleting, setDeleting] = useState({ isDeleting: false, target: null });

  useFirestoreCollection({
    query: () => getUserPhotos(profile.id),
    data: (photos) => dispatch(listenToUserPhotos(photos)),
    deps: [profile.id, dispatch],
  });

  async function handleSetMainPhoto(photo, target) {
    //this function sets loading inidicator on when the users main photo is being updated.
    setUpdating({ isUpdating: true, target }); //it then cancels loading indicator when completed.
    try {
      await setMainPhoto(photo);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUpdating({ isUpdating: false, target: null });
    }
  }

  async function handleDeletPhoto(photo, target) {
    setDeleting({ isDeleting: true, target });
    try {
      await deleteFromFirebaseStorage(photo.name);
      await deletePhotoFromCollection(photo.id);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeleting({ isDeleting: false, target: null });
    }
  }

  return (
    <Tab.Pane loading={loading}>
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
            <PhotoUploader setEditMode={setEditMode} />
          ) : (
            <Card.Group itemsPerRow={5}>
              {photos.map((photo) => (
                <Card key={photo.id}>
                  <Image src={photo.url} />
                  <Button.Group fluid widths={2}>
                    <Button
                      name={photo.id}
                      loading={
                        updating.isUpdating && updating.target === photo.id
                      }
                      onClick={(e) => handleSetMainPhoto(photo, e.target.name)}
                      disabled={photo.url === profile.photoURL}
                      color='pink'
                      content='Make Profile'
                    />
                    <Button
                      name={photo.id}
                      onClick={(e) => handleDeletPhoto(photo, e.target.name)}
                      loading={
                        deleting.isDeleting && deleting.target === photo.id
                      }
                      disabled={photo.url === profile.photoURL}
                      color='orange'
                      icon='trash alternate outline'
                    />
                  </Button.Group>
                </Card>
              ))}
            </Card.Group>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
}

export default PhotoUpload;
