import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import HomePage from "./pages/home_page/home_page";
import Login from "./pages/login_register/login";
import Register from "./pages/login_register/register";

import Cart from "./pages/cart/cart";
import Product from "./pages/product/product";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/cart" element={<Cart />} />
						<Route exact path="/product" element={<Product />} />
          </Routes>
        </Router>
      </Fragment>
    </div>
  );

}

export default App;
