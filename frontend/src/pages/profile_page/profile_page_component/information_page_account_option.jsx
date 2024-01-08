import React from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";

const InformationProductAccountOption = () => {
	return (
		<div className="information-page-account-option">
			<div className="information-page-header">
				<h1>Notifikasi Informasi Website</h1>
				<p>Tandai sebagai sudah dibaca</p>
			</div>

			<div className="horizontal-line-information-option-page"></div>

			<div className="notification-information-page-container">
				<div className="notification-account-container">
					<Icon
						icon="bi:shield-fill-exclamation"
						className="notification-information-icon"
					/>
					<div className="information-notification-container">
						<h2>Notifikasi Log In Baru</h2>
						<p>
							SiMaggot mendeteksi adanya percobaan log in pada
							akunmu pada 27-10-2023 19:52. Jika ini bukan kamu
							segera ganti kata sandi anda.
						</p>
						<p>27-10-2023 19:52</p>
					</div>
				</div>

				<div className="notification-account-container">
					<Icon
						icon="bi:shield-fill-exclamation"
						className="notification-information-icon"
					/>
					<div className="information-notification-container">
						<h2>Notifikasi Log In Baru</h2>
						<p>
							SiMaggot mendeteksi adanya percobaan log in pada
							akunmu pada 27-10-2023 19:52. Jika ini bukan kamu
							segera ganti kata sandi anda.
						</p>
						<p>27-10-2023 19:52</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InformationProductAccountOption;
