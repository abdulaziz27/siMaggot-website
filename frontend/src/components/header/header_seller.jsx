import React, { useState } from "react";
import "../header/header.css";
import { Icon } from "@iconify/react";
import image_toko from "../../assets/profile_page_image/shop_icon.jpeg";
import image_profile from "../../assets/profile_page_image/profile_image.png";

const HeaderSeller = () => {
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
				<a href="./seller" className="logo-seller-container">
					<h1 id="logo-seller-1">SiMaggot</h1>
					<h1 id="logo-seller-2">Seller</h1>
				</a>

				<div className="search-bar-seller-container">
					<Icon icon="iconamoon:search" className="search-icon" />
					<input
						className="search-input"
						type="text"
						placeholder="Cari barang di sini"
						name="search"
					></input>
				</div>

				<a className="button-notification">
					<Icon
						icon="clarity:notification-line"
						name="notification"
					/>
				</a>

				<div className="vertikal-line-header-seller"></div>

				<a href="./profile" className="button-profile">
					<img src={image_profile}></img>
					<h2>Profil</h2>
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
							<a href="./">Beranda</a>
							<a href="./shop">Toko</a>
							<a>Tentang</a>
							<a>Blog</a>
							<a href="./profile">Profil</a>
							<a href="./shop">Toko</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default HeaderSeller;
