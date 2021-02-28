import { createEvent } from "@testing-library/react";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import EventDasboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventForm/EventForm";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/events" component={EventDasboard} />
        <Route path="/events/:id" component={EventDetailedPage} />
        <Route path="/createEvent" component={EventForm} />
      </Container>
    </>
  );
}

export default App;
