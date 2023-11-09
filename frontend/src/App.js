import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import HomePage from "./pages/home_page/home_page";
import Login from "./pages/login_register/login";
import Register from "./pages/login_register/register";
import ShopPage from "./pages/shop_page/shop_page";
import CheckOutPage from "./pages/check_out_page/check_out_page";

function App() {
	return (
		<div className="App">
			<Fragment>
				<Router>
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<Register />} />
						<Route exact path="/shop" element={<ShopPage />} />
						<Route
							exact
							path="/check_out"
							element={<CheckOutPage />}
						/>
					</Routes>
				</Router>
			</Fragment>
		</div>
	);
}

export default App;
