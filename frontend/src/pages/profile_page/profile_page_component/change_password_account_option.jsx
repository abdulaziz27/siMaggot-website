import React from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";

const ChangePasswordAccountOption = () => {
	return (
		<div className="change-password-account-option-page">
			<div className="back-button-password">
				<Icon icon="fluent:arrow-circle-left-16-regular" />
			</div>

			<div className="change-password-account-option-container">
				<div className="header-change-password-container">
					<h1>Pilih Metode Verifikasi</h1>
					<p>
						Pilih salah satu metode dibawah ini untuk mendapatkan
						kode verifikasi.
					</p>
				</div>
				<div className="verification-method-container">
					<a>
						<div className="verification-method-password">
							<Icon icon="bi:envelope" />
							<div className="verification-data-container">
								<h2>E-mail ke</h2>
								<p>e*****@g***.com</p>
							</div>
						</div>
					</a>
					<a>
						<div className="verification-method-password">
							<Icon icon="fluent:phone-chat-16-regular" />
							<div className="verification-data-container">
								<h2>SMS ke</h2>
								<p>****-****-*891</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ChangePasswordAccountOption;
