import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import data from '../data.json'

class Table extends React.Component {
	render() {
		const totalPrice = data.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);

		return (
			<table>
				<TableHeader />
				<TableBody items={data} />
				<TableFooter total={totalPrice} />
			</table>
		);
	}
}

export default Table;
