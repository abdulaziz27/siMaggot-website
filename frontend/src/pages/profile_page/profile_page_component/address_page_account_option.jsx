import React from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";

const AddressPageAccountOption = () => {
	return (
		<div className="address-page-account-option">
			<div className="address-page-header">
				<h1>Alamat</h1>
				<div className="add-address-button">
					<Icon
						icon="fluent:add-12-filled"
						className="add-address-icon"
					/>
					<p>Tambah Alamat Baru</p>
				</div>
			</div>

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
