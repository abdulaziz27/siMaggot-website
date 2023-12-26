import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import HomePage from "./pages/home_page/home_page";
import Login from "./pages/login_register/login";
import Register from "./pages/login_register/register";

import Cart from "./pages/cart/cart";
import Product from "./pages/product/product";
import ShopPage from "./pages/shop_page/shop_page";
import CheckOutPage from "./pages/check_out_page/check_out_page";
import ProfilePage from "./pages/profile_page/profile_page";
import Cart from "./pages/cart/cart";
import Product from "./pages/product/product";
import ChangePasswordAccountOption from "./pages/profile_page/profile_page_component/change_password_account_option";

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
						<Route
							exact
							path="/profile"
							element={<ProfilePage />}
						/>
						<Route exact path="/cart" element={<Cart />} />
						<Route exact path="/product" element={<Product />} />
						<Route
							exact
							path="/change_password"
							element={<ChangePasswordAccountOption />}
						/>
					</Routes>
				</Router>
			</Fragment>
		</div>
	);
}

export default App;
