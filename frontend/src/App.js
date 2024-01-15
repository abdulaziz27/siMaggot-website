import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import HomePage from "./pages/home_page/home_page";
import Login from "./pages/login_register/login";
import Register from "./pages/login_register/register";
import ShopPage from "./pages/shop_page/shop_page";
import CheckOutPage from "./pages/check_out_page/check_out_page";
import ProfilePage from "./pages/profile_page/profile_page";
import Cart from "./pages/cart/cart";
import Product from "./pages/product/product";
import ChangePasswordAccountOption from "./pages/profile_page/profile_page_component/change_password_account_option";
import Confirm from "./pages/payment_confirm/confirm";
import SellerPage from "./pages/seller_page/seller_page";
import Store from "./pages/store_page/store";
import ResetPassword from "./pages/login_register/reset_password";
import Chat from "./pages/chat/chat"

function App() {
	return (
		<div className="App">
			<Fragment>
				<Router>
					<Routes>
						<Route exact path="/" element={<HomePage />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<Register />} />
						<Route exact path="/reset-password" element={<ResetPassword />} />
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
						<Route path="/product/:productId" element={<Product />} />
						<Route
							exact
							path="/change_password"
							element={<ChangePasswordAccountOption />}
						/>
						<Route exact path="/payment" element={<Confirm />} />
						<Route exact path="/seller" element={<SellerPage />} />
						<Route exact path="/store" element={<Store />} />
						<Route exact path="/chat" element={<Chat />} />
					</Routes>
				</Router>
			</Fragment>
		</div>
	);
}

export default App;
