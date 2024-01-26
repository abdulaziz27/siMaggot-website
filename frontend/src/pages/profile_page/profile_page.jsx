import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./profile_page.css";

import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";

import image from "../../assets/profile_page_image/profile_image.png";
import ProfilePageAccountOption from "./profile_page_component/profile_page_account_option";
import AddressPageAccountOption from "./profile_page_component/address_page_account_option";
import FavoriteProductAccountOption from "./profile_page_component/favorite_product_account_option";
import InformationProductAccountOption from "./profile_page_component/information_page_account_option";
import TransactionProductAccountOption from "./profile_page_component/transaction_page_account_option";
import OrderStatusAccountOption from "./profile_page_component/order_status_account_option";

import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";
import { logoutUser, getUserProfile } from "../../api";
import isAuthenticated from "../../auth";

const ProfilePage = () => {
	const [selectedOption, setSelectedOption] = useState("Profil");
	const [username, setUsername] = useState("");
	const [coverImage, setCoverImage] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const userProfileData = await getUserProfile();
				setUsername(userProfileData.data.username);
				setCoverImage(userProfileData.data.cover);
			} catch (error) {
				console.error("Error fetching user profile:", error);
			}
		};

		fetchUserProfile();
	}, []);

	useEffect(() => {
		if (!isAuthenticated()) {
			swal("Warning!", "Login terlebih dahulu!", "warning").then(() => {
				navigate("/login");
			});
		}
	}, [navigate]);

	const handleLogout = async () => {
		try {
			const result = await logoutUser();

			if (result.status === "Success") {
				localStorage.removeItem("accessToken");

				swal("Success!", "Logout berhasil!", "success").then(() => {
					navigate("/login");
				});
			} else {
				swal("Error!", "Logout gagal. Silakan coba lagi.", "error");
			}
		} catch (error) {
			swal("Error!", "Terjadi kesalahan selama proses logout.", "error");
			console.error("Error selama proses logout:", error);
		}
	};

	const renderSelectedPage = () => {
		switch (selectedOption) {
			case "Profil":
				return <ProfilePageAccountOption />;
			case "Alamat":
				return <AddressPageAccountOption />;
			case "Ubah Password":
				return <Link to="/change_password"></Link>;
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
			<Header />

			<div className="profile-page-container">
				<div className="profile-page-option">
					<div className="profile-page-option-height">
						<div className="profile-option-container">
							<img src={coverImage || image} alt="ProfileImage" />
							<div className="username-edit-profile">
								<h1>{username}</h1>
								<div
									className="edit-profile"
									onClick={() => setSelectedOption("Profil")}
								>
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

						<div className="horizontal-line-profile-option"></div>

						<div className="profile-logout-button-container">
							<div
								className="profile-logout-button-content"
								onClick={handleLogout}
							>
								<Icon icon="ant-design:logout-outlined" />
								Logout
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
