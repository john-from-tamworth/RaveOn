import React, { useState } from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import PhotoCropper from './PhotoCropper';
import PhotoUploaderDropzone from './PhotoUploaderDropzone';
import cuid from 'cuid';
import { getFileExtension } from '../util/utils';
import { uploadToFirebaseStorage } from '../../firestore/firebaseService';
import { toast } from 'react-toastify';
import { updateUserProfilePhoto } from '../../firestore/firestoreService';

function PhotoUploader({ setEditMode }) {
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleUploadImage() {
    setLoading(true);
    const filename = cuid() + '.' + getFileExtension(files[0].name);
    const uploadTask = uploadToFirebaseStorage(image, filename);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('upload is ' + progress + '% done');
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          updateUserProfilePhoto(downloadURL, filename)
            .then(() => {
              setLoading(false);
              handleCancelCrop();
              setEditMode(false);
            })
            .catch((error) => {
              toast.error(error.message);
              setLoading(false);
            });
        });
      }
    );
  }

  function handleCancelCrop() {
    setFiles([]);
    setImage(null);
  }

  return (
    <Grid>
      <Grid.Column width={4}>
        <Header color='pink' sub content='Step 1 - Add Photo' />
        <PhotoUploaderDropzone setFiles={setFiles} />
      </Grid.Column>
      <Grid.Column width={1} />
      <Grid.Column width={4}>
        <Header color='pink' sub content='Step 2 - Resize' />
        {files.length > 0 && (
          <PhotoCropper setImage={setImage} imagePreview={files[0].preview} />
        )}
      </Grid.Column>
      <Grid.Column width={4}>
        <Header color='pink' sub content='Step 3 - Preview & Upload' />
        {files.length > 0 && (
          <>
            <div
              className='img-preview'
              style={{ minHeight: 200, minWidth: 200, overflow: 'hidden' }}
            ></div>
            <Button.Group>
              <Button
                onClick={handleUploadImage}
                loading={loading}
                style={{ width: 100 }}
                color='pink'
                icon='check circle outline'
              ></Button>
              <Button
                disabled={loading}
                onClick={handleCancelCrop}
                style={{ width: 100 }}
                color='orange'
                icon='window close outline'
              ></Button>
            </Button.Group>
          </>
        )}
      </Grid.Column>
    </Grid>
  );
}

export default PhotoUploader;
