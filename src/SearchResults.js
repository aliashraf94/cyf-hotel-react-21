import React, { useState } from "react";
import Customer from "./Customer";

let SearchResults = props => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(each => (
            <Customer each={each} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
