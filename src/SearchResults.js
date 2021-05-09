import React from "react";

let SearchResults = props => {
  console.log(props);
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
          </tr>
        </thead>
        <tbody>
          {props.results.map(each => (
            <tr>
              <th scope="row">{each.id}</th>
              <td>{each.title}</td>
              <td>{each.firstName}</td>
              <td>{each.surname}</td>
              <td>{each.email}</td>
              <td>{each.roomId}</td>
              <td>{each.checkInDate}</td>
              <td>{each.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
