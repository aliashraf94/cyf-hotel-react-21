import React from "react";

let Footer = props => {
  return (
    <footer>
      <ul>
        {props.addressArray.map(address => (
          <li>{address}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
