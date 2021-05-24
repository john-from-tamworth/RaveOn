import React from 'react';
import { Tab } from 'semantic-ui-react';
import About from './About';
import PhotoUpload from './PhotoUpload';

function ProfileContent({ profile, isCurrentUser }) {
  const panes = [
    {
      menuItem: 'About',
      render: () => <About profile={profile} isCurrentUser={isCurrentUser} />,
    },
    {
      menuItem: 'Photos',
      render: () => (
        <PhotoUpload profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    { menuItem: 'Events', render: () => <Tab.Pane>Events</Tab.Pane> },
    { menuItem: 'Followers', render: () => <Tab.Pane>Followers</Tab.Pane> },
    { menuItem: 'Following', render: () => <Tab.Pane>Following</Tab.Pane> },
  ];
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
    />
  );
}

export default ProfileContent;
