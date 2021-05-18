import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { signOutFirebase } from '../../app/firestore/firebaseService';

function SignedInMenu() {
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();

  async function handleSignOut() {
    try {
      history.push('/');
      await signOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Menu.Item>
      <Image
        avatar
        spaced='right'
        src={currentUser.photoURL || '/assests/uder.png'}
      />
      <Dropdown pointing='top left' text={currentUser.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item
            as={Link}
            to={`/profile/${currentUser.uid}`}
            text='Your Profile'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            to='/account'
            text='Your Account'
            icon='settings'
          />
          <Dropdown.Item onClick={handleSignOut} text='Sign Out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

export default SignedInMenu;
