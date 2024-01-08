import React, { useState } from "react";
import "../header/header.css";
import { Icon } from "@iconify/react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className="header-container">
			<div className="header">
				<a href="./">
					<h1 href="./" id="logo">
						SiMaggot
					</h1>
				</a>

				<div className="search-bar-container">
					<Icon icon="iconamoon:search" className="search-icon" />
					<input
						className="search-input"
						type="text"
						placeholder="Cari barang di sini"
						name="search"
					></input>
				</div>

				<a href="./cart" className="button-cart">
					<Icon icon="system-uicons:cart" name="cart" />
				</a>

				<a href="./login" className="button-masuk" type="button">
					<h2>Masuk</h2>
				</a>

				<a href="./register" className="button-daftar" type="button">
					<h2>Daftar</h2>
				</a>

				<div className="menu-navbar-button" onClick={toggleMenu}>
					<Icon icon="ic:round-menu" />
				</div>

				{isMenuOpen && (
					<div className="menu-navbar-container">
						<div
							className="close-navbar-button"
							onClick={closeMenu}
						>
							<Icon icon="gg:close-o" />
						</div>
						<div className="menu-navbar-content">
							<div className="navbar-login-register-container">
								<a
									href="./login"
									className="button-masuk-navbar"
									type="button"
								>
									<h2>Masuk</h2>
								</a>

								<a
									href="./register"
									className="button-daftar-navbar"
									type="button"
								>
									<h2>Daftar</h2>
								</a>
							</div>
							<a href="./">Beranda</a>
							<a href="./shop">Toko</a>
							<a>Tentang</a>
							<a>Blog</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
