import React from 'react';
import { Header, Menu, MenuItem } from 'semantic-ui-react';
import Calendar from 'react-calendar';

function EventFilters() {
  return (
    <>
      <Menu vertical size='large' style={{ width: '100%' }}>
        <Header
          className='filter'
          icon='filter'
          attched
          color='pink'
          content='Filters'
        />
        <MenuItem content='All Events' />
        <MenuItem content="I'm Going" />
        <MenuItem content="I'm Hosting" />
      </Menu>
      <Header
        icon='calendar outline'
        attached
        color='pink'
        content='Select Date'
      />
      <Calendar />
    </>
  );
}

export default EventFilters;
