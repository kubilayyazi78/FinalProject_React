import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGrDY3VWLNniQ/profile-displayphoto-shrink_800_800/0/1604248314506?e=1629331200&v=beta&t=u3pgNRtjh2Ml6pC66dvWw5JliNihCAfQHUubQT9tCYA"
        ></Image>
        <Dropdown pointing="top left" text="Kubilay Yazı">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
