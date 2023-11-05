import React from "react";
import "../header/header.css";
import { Icon } from "@iconify/react";

const Header = () => {
	return (
		<div className="header-container">
			<div className="header">
				<h1 id="logo">Maggot Yahoot</h1>

				<div className="search-bar-container">
					<Icon icon="iconamoon:search" className="search-icon" />
					<input
						className="search-input"
						type="text"
						placeholder="Cari barang di sini"
						name="search"
					></input>
				</div>

				<a href="/cart" className="button-cart">
					<Icon icon="bx:cart" name="cart" />
				</a>

				<a href="./login" className="button-masuk" type="button">
					<h2>Masuk</h2>
				</a>

				<a href="./register" className="button-daftar" type="button">
					<h2>Daftar</h2>
				</a>
			</div>
		</div>
	);
};

export default Header;
