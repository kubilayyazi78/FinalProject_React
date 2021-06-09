import React from "react";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary></CartSummary>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
