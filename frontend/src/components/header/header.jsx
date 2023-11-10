import React from "react";
import "../header/header.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header-container">
			<div className="header">
				<Link to={`/`}>
				<h1 id="logo">SiMaggot</h1>
				</Link>

				<div className="search-bar-container">
					<Icon icon="iconamoon:search" className="search-icon" />
					<input
						className="search-input"
						type="text"
						placeholder="Cari barang di sini"
						name="search"
					></input>
				</div>

				<Link to={`/cart`}>
					<Icon icon="bx:cart" name="cart" className="button-cart"/>
				</Link>

				<Link to="/login" className="button-masuk" type="button">
					<h2>Masuk</h2>
				</Link>

				<Link to="/register" className="button-daftar" type="button">
					<h2>Daftar</h2>
				</Link>
			</div>
		</div>
	);
};

export default Header;
