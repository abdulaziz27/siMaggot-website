import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import HomePage from "../src/pages/home_page/home_page";

function App() {
	return (
		<div className="App">
			<Fragment>
				<Router>
					<Routes>
						<Route exact path="/" element={<HomePage />} />
					</Routes>
				</Router>
			</Fragment>
		</div>
	);
}

export default App;
