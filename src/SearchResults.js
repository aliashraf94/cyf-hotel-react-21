import React, { useState } from "react";
import moment from "moment";

let SearchResults = props => {
  let diffInDays = (checkOutDate, checkInDate) => {
    let a = moment(checkOutDate);
    let b = moment(checkInDate);
    return a.diff(b, "days");
  };

  let [isHighlighted, setIsHighlighted] = useState(false);
  let hightlightRow = () => {
    setIsHighlighted(!isHighlighted);
  };

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
            <tr
              onClick={hightlightRow}
              className={isHighlighted ? "table-danger" : ""}
            >
              <th scope="row">{each.id}</th>
              <td>{each.title}</td>
              <td>{each.firstName}</td>
              <td>{each.surname}</td>
              <td>{each.email}</td>
              <td>{each.roomId}</td>
              <td>{each.checkInDate}</td>
              <td>{each.checkOutDate}</td>
              <td>{diffInDays(each.checkOutDate, each.checkInDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;