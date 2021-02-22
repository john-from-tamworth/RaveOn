import React from 'react';
import { Button, Container } from "semantic-ui-react";
import EventDasboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";


function App() {
  return (
    <>
    <NavBar />
    <Container className='main'>
     <EventDasboard /> 
     </Container>
  </>
  );
}

export default App;
