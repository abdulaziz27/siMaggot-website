import React from "react";
import "../navbar/navbar.css";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<a href="./">Beranda</a>
			<a href="./shop">Belanja</a>
			<a>Tentang</a>
			<a>Blog</a>
		</div>
	);
};

export default Navbar;
