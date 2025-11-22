import React from "react";

class TableRow extends React.Component {
	render() {
		const { name, price, quantity } = this.props.item;
		const totalPrice = price * quantity;

		return (
			<tr>
				<td>{name}</td>
				<td>{price}zł</td>
				<td>{quantity}</td>
				<td>{totalPrice}zł</td>
			</tr>
		);
	}
}

export default TableRow;
