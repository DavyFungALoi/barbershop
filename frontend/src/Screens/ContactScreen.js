import React from "react";
import GoogleMaps from "../components/GoogleMaps";


const ContactScreen = () => {
  return (
    <div>
      <div>
        ContactDetails
        <div>
          Phone Number
          <div>Number</div>
          <div>Click to Call</div>
        </div>
        <div>
          Email
          <div>Email us at</div>
        </div>
        <div>Location</div>
        <div>We are located here</div>
        <GoogleMaps></GoogleMaps>
      </div>
    </div>
  );
};

export default ContactScreen;
