import React from "react";
import "./App.css";

let TouristInfoCards = () => {
  return (
    <div className="card-div">
      <div className="card">
        <img
          src="https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            target="_blank"
            href="https://peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Visit Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://i.ytimg.com/vi/Si5EqdwCuds/maxresdefault.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            target="_blank"
            href="https://visitmanchester.com"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://qtxasset.com/fiercebiotech/1552900613/GettyImages-137099359.jpg/GettyImages-137099359.jpg?XTUN0AnXBjSZ_u3iRc8X6YCKcKUVkF5D"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            target="_blank"
            href="https://visitlondon.com"
            className="btn btn-primary"
          >
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
