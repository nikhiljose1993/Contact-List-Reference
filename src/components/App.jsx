import React, { Fragment } from "react";

import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <Fragment>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => {
        return (
          <Card
            key={index}
            name={contact.name}
            mail={contact.email}
            mobileNo={contact.phone}
            img={contact.imgURL}
          />
        );
      })}
    </Fragment>
  );
}

export default App;
