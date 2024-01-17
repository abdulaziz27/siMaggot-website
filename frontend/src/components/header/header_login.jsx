import React, { useState } from "react";
import "../header/header.css";
import { Icon } from "@iconify/react";
import image_toko from "../../assets/profile_page_image/shop_icon.jpeg";
import image_profile from "../../assets/profile_page_image/profile_image.png";

const HeaderLogin = () => {
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

				<a href="./cart" className="button-cart-login">
					<Icon icon="system-uicons:cart" name="cart" />
				</a>

				<a className="button-notification">
					<Icon
						icon="clarity:notification-line"
						name="notification"
					/>
				</a>

				<a className="button-chat">
					<Icon icon="ep:chat-dot-round" name="chat" />
				</a>

				<div className="vertikal-line-header"></div>

				<a href="./shop" className="button-shop">
					<img src={image_toko}></img>
					<h2>Toko</h2>
				</a>

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
							<a href="/">Beranda</a>
							<a href="/shop">Toko</a>
							<a>Tentang</a>
							<a href="/blog">Blog</a>
							<a href="/profile">Profil</a>
							<a href="/shop">Toko</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default HeaderLogin;
