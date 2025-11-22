import React from "react";
import TableRow from "./TableRow";

class TableBody extends React.Component {
	render() {
		return (
			<tbody>
				{this.props.items.map((item) => (
					<TableRow key={item.id} item={item} />
				))}
			</tbody>
		);
	}
}

export default TableBody;
