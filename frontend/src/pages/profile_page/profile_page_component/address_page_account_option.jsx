import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";

import gambar3 from "../../../assets/check_out/map_dunia.jpeg";

const AddressPageAccountOption = () => {
	const [isNewAddressOpen, setIsNewAddressOpen] = useState(false);

	const newAddressDropdown = () => {
		setIsNewAddressOpen(!isNewAddressOpen);
	};

	const closeMenu = () => {
		setIsNewAddressOpen(false);
	};

	return (
		<div className="address-page-account-option">
			<div className="address-page-header">
				<h1>Alamat</h1>
				<div
					className="add-address-button"
					onClick={newAddressDropdown}
				>
					<Icon
						icon="fluent:add-12-filled"
						className="add-address-icon"
					/>
					<p>Tambah Alamat Baru</p>
				</div>
			</div>

			{isNewAddressOpen && (
				<div className="profile-new-address-dropdown-container">
					<div className="profile-new-address-content">
						<div className="profile-close-new-address-button">
							<Icon
								icon="ph:arrow-circle-left-light"
								onClick={closeMenu}
							/>
						</div>

						<h1>Alamat Baru</h1>

						<div className="horizontal-line-choose-profile-new-address"></div>

						<div className="new-address-option-profile-container">
							<div className="profile-text-area-nama-telpon-container">
								<input
									className="profile-full-name-new-address-checkout"
									type="text"
									placeholder="Nama Lengkap"
								></input>
								<input
									className="profile-telpon-new-address-checkout"
									type="number"
									placeholder="No Telepon"
								></input>
							</div>

							<div className="profile-text-area-new-address-container">
								<textarea
									className="profile-provinsi-new-address-checkout"
									type="text"
									placeholder="Provinsi, Kota, Kecamatan, Kode Pos"
								></textarea>
							</div>

							<div className="profile-text-area-new-address-container">
								<textarea
									className="profile-jalan-new-address-checkout"
									type="text"
									placeholder="Nama Jalan, Gedung, Alamat, No. Rumah"
								></textarea>
							</div>

							<div className="profile-text-area-new-address-container">
								<textarea
									className="profile-detail-new-address-checkout"
									type="text"
									placeholder="Detail Lainnya (Cth: Blok / Unit No., Patokan)"
								></textarea>
							</div>

							<div className="profile-add-new-address-map-container">
								<img src={gambar3}></img>
								<div className="profile-add-new-address-map-button">
									<Icon icon="pepicons-pop:plus" />
									<h4>Tambah Lokasi</h4>
								</div>
							</div>
						</div>

						<div className="horizontal-line-choose-profile-new-address"></div>

						<div className="profile-button-choose-address-container">
							<div
								className="profile-button-choose-address profile-button-cancel-address"
								onClick={closeMenu}
							>
								Batalkan
							</div>
							<div className="profile-button-choose-address profile-button-ok-new-address">
								OK
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="horizontal-line-option-page"></div>

			<div className="address-option-account-container">
				<div className="address-option-account">
					<input
						type="radio"
						name="addressOption"
						id="addressOption1"
					/>

					<label
						className="address-option-account-information"
						htmlFor="addressOption1"
					>
						<h2>Nama Penerima</h2>
						<h2>081234567891</h2>
						<p>
							Jl. DI Panjaitan No.128, Karangreja, Purwokerto
							Kidul, Kec. Purwokerto Sel., Kabupaten Banyumas,
							Jawa Tengah, 53147
						</p>
					</label>

					<div className="address-update-button">
						<h3>Ubah</h3>
					</div>
				</div>

				<div className="address-option-account">
					<input
						type="radio"
						name="addressOption"
						id="addressOption2"
					/>
					<label
						className="address-option-account-information"
						htmlFor="addressOption2"
					>
						<h2>Nama Penerima</h2>
						<h2>081234567891</h2>
						<p>
							Jl. DI Panjaitan No.128, Karangreja, Purwokerto
							Kidul, Kec. Purwokerto Sel., Kabupaten Banyumas,
							Jawa Tengah, 53147
						</p>
					</label>
					<div className="address-update-button">
						<h3>Ubah</h3>
					</div>
				</div>

				<div className="address-option-account">
					<input
						type="radio"
						name="addressOption"
						id="addressOption3"
					/>
					<label
						className="address-option-account-information"
						htmlFor="addressOption3"
					>
						<h2>Nama Penerima</h2>
						<h2>081234567891</h2>
						<p>
							Jl. DI Panjaitan No.128, Karangreja, Purwokerto
							Kidul, Kec. Purwokerto Sel., Kabupaten Banyumas,
							Jawa Tengah, 53147
						</p>
					</label>
					<div className="address-update-button">
						<h3>Ubah</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressPageAccountOption;
