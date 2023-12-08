import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./profile_page.css";

import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import HeaderLogin from "../../components/header/header_login";

import image from "../../assets/profile_page_image/profile_image.jpeg";
import ProfilePageAccountOption from "./profile_page_component/profile_page_account_option";
import AddressPageAccountOption from "./profile_page_component/address_page_account_option";
import FavoriteProductAccountOption from "./profile_page_component/favorite_product_account_option";
import InformationProductAccountOption from "./profile_page_component/information_page_account_option";
import TransactionProductAccountOption from "./profile_page_component/transaction_page_account_option";
import OrderStatusAccountOption from "./profile_page_component/order_status_account_option";

const ProfilePage = () => {
	const [selectedOption, setSelectedOption] = useState("Profil");

	const renderSelectedPage = () => {
		switch (selectedOption) {
			case "Profil":
				return <ProfilePageAccountOption />;
			case "Alamat":
				return <AddressPageAccountOption />;
			case "Ubah Password":
				return <a href="./change_password"></a>;
			case "Produk Favorit":
				return <FavoriteProductAccountOption />;
			case "Daftar Transaksi":
				return <TransactionProductAccountOption />;
			case "Status Pesanan":
				return <OrderStatusAccountOption />;
			case "Info Website":
				return <InformationProductAccountOption />;
			default:
				return <ProfilePageAccountOption />;
		}
	};
	return (
		<div className="profile-main-page-container">
			<Navbar />
			<HeaderLogin />

			<div className="profile-page-container">
				<div className="profile-page-option">
					<div className="profile-page-option-height">
						<div className="profile-option-container">
							<img src={image}></img>
							<div className="username-edit-profile">
								<h1>username</h1>
								<div className="edit-profile">
									<Icon
										icon="fa-regular:edit"
										className="edit-icon"
									/>
									<h2>Edit Profile</h2>
								</div>
							</div>
						</div>

						<div className="horizontal-line-profile-option"></div>

						<div className="account-option-container">
							<div className="account-option-header">
								<Icon
									icon="fluent:person-20-regular"
									className="account-option-icon"
								/>
								<h3>Akun Saya</h3>
							</div>
							<div className="account-option-list">
								<ul>
									<p
										className={
											selectedOption === "Profil"
												? "selected"
												: ""
										}
										onClick={() =>
											setSelectedOption("Profil")
										}
									>
										Profil
									</p>
									<p
										className={
											selectedOption === "Alamat"
												? "selected"
												: ""
										}
										onClick={() =>
											setSelectedOption("Alamat")
										}
									>
										Alamat
									</p>
									<p>
										<a href="./change_password">
											Ubah Password
										</a>
									</p>
									<p
										className={
											selectedOption === "Produk Favorit"
												? "selected"
												: ""
										}
										onClick={() =>
											setSelectedOption("Produk Favorit")
										}
									>
										Produk Favorit
									</p>
								</ul>
							</div>
						</div>

						<div className="horizontal-line-profile-option"></div>

						<div className="order-option-container">
							<div className="order-option-header">
								<Icon
									icon="bi:box-seam"
									className="box-option-icon"
								/>
								<h3>Pesanan Saya</h3>
							</div>
							<div className="order-option-list">
								<ul>
									<p
										className={
											selectedOption ===
											"Daftar Transaksi"
												? "selected"
												: ""
										}
										onClick={() =>
											setSelectedOption(
												"Daftar Transaksi"
											)
										}
									>
										Daftar Transaksi
									</p>
								</ul>
							</div>
						</div>

						<div className="horizontal-line-profile-option"></div>

						<div className="notification-option-container">
							<div className="notification-option-header">
								<Icon
									icon="bi:bell"
									className="notification-option-icon"
								/>
								<h3>Notifikasi</h3>
							</div>
							<div className="account-option-list">
								<ul>
									<p
										className={
											selectedOption === "Status Pesanan"
												? "selected"
												: ""
										}
										onClick={() =>
											setSelectedOption("Status Pesanan")
										}
									>
										Status Pesanan
									</p>
									<p
										className={
											selectedOption === "Info Website"
												? "selected"
												: ""
										}
										onClick={() =>
											setSelectedOption("Info Website")
										}
									>
										Info Website
									</p>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="profile-page-width">{renderSelectedPage()}</div>
			</div>

			<Footer />
		</div>
	);
};

export default ProfilePage;
