import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";
import image from "../../../assets/profile_page_image/sucess_change_password.png";

const ChangePasswordAccountOption = () => {
	const [selectedMethod, setSelectedMethod] = useState(null);
	const [showVerificationOptions, setShowVerificationOptions] =
		useState(true);
	const [isChanging, setIsChanging] = useState(false);
	const [isSubmitClicked, setIsSubmitClicked] = useState(false);
	const [isNextClicked, setIsNextClicked] = useState(false);
	const [visible, setVisible] = useState(false);

	const handleMethodClick = (method) => {
		setIsChanging(true);
		setTimeout(() => {
			setSelectedMethod(method);
			setShowVerificationOptions(false);
			setIsChanging(false);
		}, 500);
	};

	const handleBackButtonClick = () => {
		setIsChanging(true);
		setTimeout(() => {
			if (isNextClicked) {
				setIsNextClicked(false);
			} else if (isSubmitClicked) {
				setShowVerificationOptions(false);
				setIsSubmitClicked(false);
			} else {
				setSelectedMethod(null);
				setShowVerificationOptions(true);
			}
			setIsChanging(false);
		}, 500);
	};

	const handleSubmitClick = () => {
		setIsChanging(true);
		setTimeout(() => {
			setIsSubmitClicked(true);
			setIsChanging(false);
		}, 500);
	};

	const handleNextButtonClick = () => {
		setIsChanging(true);
		setTimeout(() => {
			setIsNextClicked(true);
			setIsChanging(false);
		}, 500);
	};

	function iconPassword() {
		setVisible(!visible);
	}

	return (
		<div>
			{isChanging && <div></div>}
			{!isChanging && showVerificationOptions ? (
				<div className="change-password-main-page">
					<div className="change-password-account-option-page">
						<div className="back-button-password">
							<a href="./profile">
								<Icon icon="fluent:arrow-circle-left-16-regular" />
							</a>
						</div>

						<div className="change-password-account-option-container">
							<div className="header-change-password-container">
								<h1>Pilih Metode Verifikasi</h1>
								<p>
									Pilih salah satu metode dibawah ini untuk
									mendapatkan kode verifikasi.
								</p>
							</div>

							<div className="verification-method-container">
								<a onClick={() => handleMethodClick("email")}>
									<div className="verification-method-password">
										<Icon
											icon="bi:envelope"
											className="password-email"
										/>
										<div className="verification-data-container">
											<h2>E-mail ke</h2>
											<p>e*****@g***.com</p>
										</div>
									</div>
								</a>
								<a onClick={() => handleMethodClick("sms")}>
									<div className="verification-method-password">
										<Icon
											icon="fluent:phone-chat-16-regular"
											className="password-phone"
										/>
										<div className="verification-data-container">
											<h2>SMS ke</h2>
											<p>****-****-*891</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="verification-method-option-container">
					{!isChanging && (
						<div className="change-password-account-option-page">
							<div
								className="back-button-password"
								onClick={handleBackButtonClick}
							>
								<Icon icon="fluent:arrow-circle-left-16-regular" />
							</div>

							{selectedMethod === "email" && (
								<div className="verification-content-container">
									<Icon
										icon="bi:envelope"
										className="email-verification-icon"
									/>
									<h1>Masukkan Kode Verifikasi</h1>
									<p>
										Kode verifikasi telah dikirim melalui
										e-mail ke e*****@g***.com.
									</p>
									<input
										className="verification-code-input"
										type="text"
										name="verification-code"
										spellcheck="false"
										maxLength="8"
									></input>
									<p>
										Tidak menerima kode? <b>Kirim ulang</b>
									</p>
									<div
										className="submit-verification-button"
										onClick={handleSubmitClick}
									>
										Submit
									</div>
								</div>
							)}

							{selectedMethod === "sms" && (
								<div className="verification-content-container">
									<Icon
										icon="fluent:phone-chat-16-regular"
										className="phone-verification-icon"
									/>
									<h1>Masukkan Kode Verifikasi</h1>
									<p>
										Kode verifikasi telah dikirim melalui
										SMS ke ****-****-*891.
									</p>
									<input
										className="verification-code-input"
										type="text"
										name="verification-code"
										spellcheck="false"
										maxLength="8"
									></input>
									<p>
										Tidak menerima kode? <b>Kirim ulang</b>
									</p>
									<div
										className="submit-verification-button"
										onClick={handleSubmitClick}
									>
										Submit
									</div>
								</div>
							)}

							{isSubmitClicked && !isNextClicked && (
								<div className="verification-new-password-page">
									<div className="verification-new-password-content">
										<div
											className="back-button-password"
											onClick={handleBackButtonClick}
										>
											<Icon icon="fluent:arrow-circle-left-16-regular" />
										</div>

										<div className="header-new-password-container">
											<h1>Kata Sandi Baru</h1>
											<p>
												Buat kata sandi yang kuat untuk
												akun dengan e-mail
												email@gmail.com
											</p>
										</div>

										<div className="input-new-password-container">
											<input
												className="input-new-password"
												type={
													visible
														? "text"
														: "password"
												}
												name="new-password"
												spellcheck="false"
												placeholder="Ketik Ulang Kata Sandi Baru"
											/>
											<span
												onClick={iconPassword}
												className="visible-icon"
											>
												<Icon
													icon={
														visible
															? "ph:eye"
															: "ph:eye-slash"
													}
												/>
											</span>

											<p>Minimum 8 Karakter</p>

											<div className="input-new-password-area">
												<input
													className="input-new-password"
													type={
														visible
															? "text"
															: "password"
													}
													name="new-password"
													spellcheck="false"
													placeholder="Ketik Ulang Kata Sandi Baru"
												/>
												<span
													onClick={iconPassword}
													className="visible-icon"
												>
													<Icon
														icon={
															visible
																? "ph:eye"
																: "ph:eye-slash"
														}
													/>
												</span>
											</div>
										</div>

										<div className="new-password-information">
											<Icon
												icon="bi:info-circle"
												className="info-circle-icon"
											/>
											<p>
												Setelah kata sandi diubah,
												silakan masuk kembali dengan
												kata sandi baru di semua
												perangkatmu.
											</p>
										</div>

										<div
											className="button-next-password"
											onClick={handleNextButtonClick}
										>
											Lanjut
										</div>
									</div>
								</div>
							)}

							{isNextClicked && (
								<div className="sucess-change-password-page">
									<div className="sucess-change-password-content">
										<div
											className="back-button-password"
											onClick={handleBackButtonClick}
										>
											<Icon icon="fluent:arrow-circle-left-16-regular" />
										</div>
										<div className="sucess-change-password-container">
											<img src={image}></img>
											<h1>Kata Sandi Berhasil Diubah</h1>
											<p>
												Demi keamanan, akun kamu telah
												dikeluarkan dari semua perangkat
											</p>
											<a href="./">
												<div className="button-back-to-login">
													Ke Halaman Login
												</div>
											</a>
										</div>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ChangePasswordAccountOption;
