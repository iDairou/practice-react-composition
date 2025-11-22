import React from "react";
import { createRoot } from "react-dom/client";

import {
	TableBody,
	TableFooter,
	TableHeader,
	TableRow,
	Table,
} from "./components/index";


function App() {
	return (
		<Table>
			<TableHeader />
			<TableBody>
				<TableRow />
				<TableRow />
				<TableRow />
			</TableBody>
			<TableFooter />
		</Table>
	);
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
