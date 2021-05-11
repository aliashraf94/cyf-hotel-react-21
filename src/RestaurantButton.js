import React from "react";

let RestaurantButton = props => {
  return (
    <button onClick={props.orderOne} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
