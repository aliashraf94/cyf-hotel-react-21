import React, { useState } from "react";
import moment from "moment";

const Customer = ({ each }) => {
  let [isHighlighted, setIsHighlighted] = useState(false);
  let hightlightRow = () => {
    setIsHighlighted(!isHighlighted);
  };
  let diffInDays = (checkOutDate, checkInDate) => {
    let a = moment(checkOutDate);
    let b = moment(checkInDate);
    return a.diff(b, "days");
  };
  return (
    <tr onClick={hightlightRow} className={isHighlighted ? "table-danger" : ""}>
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
  );
};

export default Customer;
