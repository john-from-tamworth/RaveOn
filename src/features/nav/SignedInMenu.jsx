import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { signOutUser } from "../auth/authActions";

function SignedInMenu() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();
  return (
    <Menu.Item>
      <Image
        avatar
        spaced="right"
        src={currentUser.photoURL || "/assests/uder.png"}
      />
      <Dropdown pointing="top left" text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="Your Profile" icon="user" />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push("/");
            }}
            text="Sign Out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

export default SignedInMenu;
