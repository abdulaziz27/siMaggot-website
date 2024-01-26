import React, { useState, useEffect } from "react";
import "../profile_page.css";
import image from "../../../assets/profile_page_image/profile_image.png";
import { getUserProfile, updateUserProfile } from "../../../api";

const ProfilePageAccountOption = () => {
	const [editMode, setEditMode] = useState(false);
	const [editedUserData, setEditedUserData] = useState({
		username: "",
		fullname: "",
		email: "",
		contact: "",
		address: "",
		cover: "",
	});
	const [selectedFile, setSelectedFile] = useState(null);


	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const userProfileData = await getUserProfile();
				setEditedUserData({
					username: userProfileData.data.username,
					fullname: userProfileData.data.fullname,
					email: userProfileData.data.email,
					contact: userProfileData.data.contact,
					address: userProfileData.data.address,
					cover: userProfileData.data.cover,
				});
			} catch (error) {
				console.error("Error fetching user profile:", error);
			}
		};

		fetchUserProfile();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedUserData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	const handleCancelEdit = () => {
		setEditMode(false);
	};

	const handleSaveChanges = async () => {
		try {
			const formData = new FormData();

			formData.append("username", editedUserData.username);
			formData.append("fullname", editedUserData.fullname);
			formData.append("contact", editedUserData.contact);
			formData.append("address", editedUserData.address);

			if (selectedFile) {
				formData.append("cover", selectedFile);
			}

			const result = await updateUserProfile(formData);

			if (result.status === "Success") {
				setEditMode(false);
			} else {
				console.error("Error updating user profile:", result.message);
				console.error(result.error);
			}
		} catch (error) {
			console.error("Error updating user profile:", error);
			console.error(error.response);
		}
	};


	return (
		<div className="profile-page-account-option">
			<div className="profile-page-header">
				{editMode ? (
					<h1>Edit Profile</h1>
				) : (
					<h1>Profile Saya</h1>
				)}
				<p>
					Kelola informasi profil Anda untuk mengontrol, melindungi
					dan mengamankan akun
				</p>
			</div>

			<div className="horizontal-line-option-page"></div>

			<div className="profile-information-change-container">
				<div className="profile-change-picture-container">
					<img src={editedUserData?.cover || image} alt="ProfileImage"></img>
					{editMode && (
						<div className="button-change-profile-picture">
							<label htmlFor="fileInput">Pilih Gambar</label>
							<input
								type="file"
								id="fileInput"
								accept="image/*"
								name="cover"
								onChange={handleFileChange}
								style={{ display: "none" }}
							/>
						</div>
					)}
				</div>

				<div className="vertical-line-option-page"></div>

				<div className="profile-information-container">
					<div className="username-information flex-row-profile-page">
						<p>Username</p>
						<h2>{editedUserData?.username}</h2>
					</div>
					<div className="name-change flex-row-profile-page">
						<p>Nama</p>
						{editMode ? (
							<input
								className="profile-username-input"
								type="text"
								name="fullname"
								value={editedUserData.fullname}
								onChange={handleInputChange}
							/>
						) : (
							<h2>{editedUserData?.fullname}</h2>
						)}
					</div>
					<div className="email-change-information flex-row-profile-page">
						<p>E-mail</p>
						{editMode ? (
							<input
								className="profile-username-input"
								type="email"
								name="email"
								value={editedUserData.email}
								onChange={handleInputChange}
							/>
						) : (
							<h2>{editedUserData?.email}</h2>
						)}
					</div>
					<div className="number-change-information flex-row-profile-page">
						<p>Nomor Telepon</p>
						{editMode ? (
							<input
								className="profile-username-input"
								type="number"
								name="contact"
								value={editedUserData.contact}
								onChange={handleInputChange}
							/>
						) : (
							<h2>{editedUserData?.contact}</h2>
						)}
					</div>
					<div className="number-change-information flex-row-profile-page">
						<p>Alamat</p>
						{editMode ? (
							<textarea
								className="profile-username-input profile-textarea"
								name="address"
								placeholder="Jalan, Perumahan, Blok, Provinsi, Kota, Kecamatan, Kode Pos"
								value={editedUserData?.address}
								onChange={handleInputChange}
							/>
						) : (
							<h2 placeholder="Jalan, Perumahan, Blok, Provinsi, Kota, Kecamatan, Kode Pos">{editedUserData?.address}</h2>
						)}
					</div>
					{editMode ? (
						<div className="button-container">
							<div className="button-cancel-information" onClick={handleCancelEdit}>
								Batal
							</div>
							<div className="button-save-information" onClick={handleSaveChanges}>
								Simpan
							</div>
						</div>
					) : (
						<div
							className="button-save-information"
							onClick={() => setEditMode(true)}
						>
							Edit
						</div>
					)}
				</div>
			</div>
		</div >
	);
};

export default ProfilePageAccountOption;
