import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../profile_page.css";

import image1 from "../../../../assets/check_out/maggot_bsf.jpeg";
import image2 from "../../../../assets/check_out/premium_dried_maggot.jpeg";

const DoneTransactionProfileOption = () => {
	const [isScoreOpen, setIsScoreOpen] = useState(false);

	const scoreDropdown = () => {
		setIsScoreOpen(!isScoreOpen);
	};

	const closeMenu = () => {
		setIsScoreOpen(false);
	};

	return (
		<div>
			<div className="transaction-item-account-header">
				<div className="row-direction-transaction">
					<h3>Literally Maggot Store</h3>
					<div className="chat-button-transaction">
						<Icon
							icon="bi:chat-dots"
							className="chat-transaction-icon"
						/>
						<p>Chat</p>
					</div>

					<div className="store-button-transaction">
						<Icon
							icon="bi:shop-window"
							className="shop-transaction-icon"
						/>
						<p>Kunjungi Toko</p>
					</div>
				</div>

				<div>
					<p>ARRIVED</p>
				</div>
			</div>

			<div className="horizontal-line-transaction"></div>

			<div className="item-transaction-information-contanier">
				<div className="item-transaction">
					<div className="row-direction-item-transaction">
						<img src={image1}></img>
						<div className="item-transaction-information">
							<h1>Tepung Maggot BSF</h1>
							<p>Variasi : 1kg</p>
							<h2>x1</h2>
						</div>
					</div>

					<h4>Rp39.980</h4>
				</div>

				<div className="horizontal-line-item-transaction"></div>

				<div className="item-transaction">
					<div className="row-direction-item-transaction">
						<img src={image2}></img>
						<div className="item-transaction-information">
							<h1>
								Premium Dried Maggot / Maggot Kering BSF Flake
							</h1>
							<p>Variasi : 100gr</p>
							<h2>x1</h2>
						</div>
					</div>

					<h4>Rp17.550</h4>
				</div>
			</div>

			<div className="horizontal-line-transaction"></div>

			<div className="transaction-item-account-footer">
				<div className="total-pay-item-transaction">
					<h1>Total Pembayaran :</h1>
					<h2>Rp73.030</h2>
				</div>

				<div className="payment-time-button-container">
					<p>
						Terimakasih Telah Berbelanja di SiMaggot Web!
					</p>
					<div className="button-payment-transaction">
						<div
							className="score-payment-button"
							onClick={scoreDropdown}
						>
							Beri Rating
						</div>
						<div className="cancel-order-button">
							Hubungi Penjual
						</div>
						<div className="cancel-order-button">Beli Lagi</div>
					</div>
				</div>
			</div>

			{isScoreOpen && (
				<div className="profile-order-transaction-dropdown-container">
					<div className="profile-order-transaction-dropdown-content">
						<div className="order-transaction-dropdown-header">
							<h1>Nilai Produk</h1>
							<div
								className="order-transaction-dropdown-close-button"
								onClick={closeMenu}
							>
								<Icon icon="carbon:close-outline" />
							</div>
						</div>

						<div className="horizontal-line-order-transaction-dropdown"></div>

						<div className="transaction-profile-product-review-container">
							<div className="transaction-profile-product-review-information-container">
								<div className="product-review-image-content">
									<img src={image1}></img>
								</div>
								<div className="product-review-information-content">
									<h3>Tepung Maggot BSF</h3>
									<p>Variasi : 1kg</p>
								</div>
							</div>

							<div className="product-review-score-star-container">
								<h4>Kualitas Produk</h4>
								<div className="product-review-star-container">
									<Icon icon="material-symbols-light:star-outline" />
									<Icon icon="material-symbols-light:star-outline" />
									<Icon icon="material-symbols-light:star-outline" />
									<Icon icon="material-symbols-light:star-outline" />
									<Icon icon="material-symbols-light:star-outline" />
								</div>
							</div>

							<div className="product-review-text-area-content">
								<textarea
									className="product-transaction-review-text-area"
									type="text"
									placeholder="Bagikan penilaianmu tentang produk ini untuk membantu Pembeli lain."
								></textarea>
							</div>

							<div className="product-review-add-photo-video-container">
								<div className="product-review-add-photo-video-content">
									<Icon icon="bi:camera-fill" />
									Tambah Foto
								</div>
								<div className="product-review-add-photo-video-content">
									<Icon icon="bi:camera-reels-fill" />
									Tambah Video
								</div>
							</div>
						</div>

						<div className="horizontal-line-order-transaction-dropdown"></div>

						<div className="transaction-profile-product-review-container">
							<div className="transaction-profile-product-review-information-container">
								<div className="product-review-image-content">
									<img src={image2}></img>
								</div>
								<div className="product-review-information-content">
									<h3>Tepung Maggot BSF</h3>
									<p>Variasi : 1kg</p>
								</div>
							</div>

							<div className="product-review-score-star-container">
								<h4>Kualitas Produk</h4>
								<div className="product-review-star-container">
									<Icon icon="material-symbols-light:star-outline" />
									<Icon icon="material-symbols-light:star-outline" />
									<Icon icon="material-symbols-light:star-outline" />
									<Icon icon="material-symbols-light:star-outline" />
									<Icon icon="material-symbols-light:star-outline" />
								</div>
							</div>

							<div className="product-review-text-area-content">
								<textarea
									className="product-transaction-review-text-area"
									type="text"
									placeholder="Bagikan penilaianmu tentang produk ini untuk membantu Pembeli lain."
								></textarea>
							</div>

							<div className="product-review-add-photo-video-container">
								<div className="product-review-add-photo-video-content">
									<Icon icon="bi:camera-fill" />
									Tambah Foto
								</div>
								<div className="product-review-add-photo-video-content">
									<Icon icon="bi:camera-reels-fill" />
									Tambah Video
								</div>
							</div>
						</div>

						<div className="horizontal-line-order-transaction-dropdown"></div>

						<div className="button-cancel-order-dropdown-option-contanier">
							<div
								className="button-cancel-order-dropdown-option later-cancel-order-button"
								onClick={closeMenu}
							>
								NANTI SAJA
							</div>
							<div className="button-cancel-order-dropdown-option okay-cancel-order-button">
								OK
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DoneTransactionProfileOption;
