import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAhuthenticated, setIsAhuthenticated] = useState(true);
  const history =useHistory();
  function handleSignOut(params) {
    setIsAhuthenticated(false);
    history.push("/");
  }
  function handleSignIn(params) {
    setIsAhuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary></CartSummary>
            {isAhuthenticated ? <SignedIn signOut={handleSignOut} ></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
