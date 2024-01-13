import React, { useState, useEffect } from "react";
import "../header/header.css";
import { Icon } from "@iconify/react";
import image_toko from "../../assets/profile_page_image/shop_icon.jpeg";
import image_profile from "../../assets/profile_page_image/profile_image.jpeg";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		setIsLoggedIn(!!accessToken);
	}, []);

	const handleCartClick = () => {
		if (isLoggedIn) {
			navigate("/cart");
		} else {
			showLoginAlert("cart");
		}
	};

	const handleNotificationClick = () => {
		if (isLoggedIn) {
			// link ke hal notifikasi (navigate)
		} else {
			showLoginAlert("notification");
		}
	};

	const handleChatClick = () => {
		if (isLoggedIn) {
			// link ke hal chat (navigate)
		} else {
			showLoginAlert("chat");
		}
	};

	const showLoginAlert = (feature) => {
		swal({
			title: "Login Dulu",
			text: "Untuk menggunakan fitur ini, Anda perlu login.",
			icon: "warning",
			buttons: {
				cancel: "Batal",
				login: {
					text: "Login",
					value: "login",
				},
			},
		}).then((value) => {
			if (value === "login") {
				navigate("/login");
			}
		});
	};

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

				<a className="button-cart-login" onClick={handleCartClick}>
					<Icon icon="system-uicons:cart" name="cart" />
				</a>

				<a className="button-notification" onClick={handleNotificationClick}>
					<Icon
						icon="clarity:notification-line"
						name="notification"
					/>
				</a>

				<a className="button-chat" onClick={handleChatClick}>
					<Icon icon="ep:chat-dot-round" name="chat" />
				</a>

				<div className="vertikal-line-header"></div>

				{isLoggedIn ? (
					<>
						<a href="./shop" className="button-shop">
							<img src={image_toko}></img>
							<h2>Toko</h2>
						</a>

						<a href="./profile" className="button-profile">
							<img src={image_profile}></img>
							<h2>Profil</h2>
						</a>
					</>
				) : (
					<>
						<a href="./login" className="button-masuk" type="button">
							<h2>Masuk</h2>
						</a>

						<a href="./register" className="button-daftar" type="button">
							<h2>Daftar</h2>
						</a>
					</>
				)}

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
