import React from "react";

class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr colspan="4">
          <th>Nazwa</th>
          <th>Cena</th>
          <th>Ilość</th>
          <th>Razem</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;