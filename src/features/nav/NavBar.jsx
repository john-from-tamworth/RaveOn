import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Icon, Container, Menu, MenuHeader } from "semantic-ui-react";

export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="assets/logo3.png" alt="logo" style={{ marginRight: 15 }} />
          RaveOn
        </Menu.Item>
        <Menu.Item as={NavLink} to="events" name="Events" />
        <Menu.Item as={NavLink} to="createevent">
          <Button animated inverted>
            <Button.Content visible>Create Event</Button.Content>
            <Button.Content hidden>
              <Icon name="forward" />
            </Button.Content>
          </Button>
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
