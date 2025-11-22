import React from "react";

class TableFooter extends React.Component {
  render() {
    const {total} = this.props
    return (
      <tfoot>
        <tr>
          <td style={{ textAlign: "right", fontWeight: "bold" }}>
            Suma do zapłaty:
          </td>
          <td style={{ fontWeight: "bold" }}>
            {total}zł
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default TableFooter;