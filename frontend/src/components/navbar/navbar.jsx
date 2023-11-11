import React from "react";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<Link to={`/`}>
			Beranda
			</Link>
			<Link to={`/shop`}>
			Toko
			</Link>
			<Link to={`/about`}>
			Tentang
			</Link>
			<Link to={`/blog`}>
			Blog
			</Link>
		</div>
	);
};

export default Navbar;
