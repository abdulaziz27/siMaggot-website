import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../profile_page.css";

import image1 from "../../../../assets/check_out/maggot_bsf.jpeg";
import image2 from "../../../../assets/check_out/premium_dried_maggot.jpeg";

const PayTransactionProfileOption = () => {
	const [isCancelOrderOpen, setIsCancelOrderOpen] = useState(false);

	const cancelOrderDropdown = () => {
		setIsCancelOrderOpen(!isCancelOrderOpen);
	};

	const closeMenu = () => {
		setIsCancelOrderOpen(false);
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
					<p>BELUM BAYAR</p>
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
					<h1>Jumlah Harus Dibayar :</h1>
					<h2>Rp73.030</h2>
				</div>

				<div className="payment-time-button-container">
					<p>
						Bayar sebelum <u>09-11-2023 00:00</u> dengan Bank BNI
					</p>
					<div className="button-payment-transaction">
						<div className="pay-now-button">Bayar Sekarang</div>
						<div
							className="cancel-order-button"
							onClick={cancelOrderDropdown}
						>
							Batalkan Pesanan
						</div>
					</div>
				</div>
			</div>

			{isCancelOrderOpen && (
				<div className="profile-order-transaction-dropdown-container">
					<div className="profile-order-transaction-dropdown-content">
						<div className="order-transaction-dropdown-header">
							<h1>Pilih Alasan Pembatalan</h1>
							<div
								className="order-transaction-dropdown-close-button"
								onClick={closeMenu}
							>
								<Icon icon="carbon:close-outline" />
							</div>
						</div>

						<div className="horizontal-line-order-transaction-dropdown"></div>

						<div className="cancel-order-transaction-alert-container">
							<Icon
								icon="mdi:bell-circle-outline"
								className="icon-alert-order-transaction"
							/>
							<p>
								Mohon pilih alasan pembatalan. Tindakan ini akan
								membatalkan semua produk dalam pesanan. Tindakan
								tidak dapat dibatalkan.
							</p>
						</div>

						<div className="cancel-order-option-reason-container">
							<div className="cancel-order-option-reason-content">
								<input
									type="radio"
									name="cancelOrderOption"
									id="cancelOrder1"
								/>

								<label
									className="cancel-order-option-reason"
									htmlFor="cancelOrder1"
								>
									<p>Ingin mengubah alamat pengiriman</p>
								</label>
							</div>

							<div className="cancel-order-option-reason-content">
								<input
									type="radio"
									name="cancelOrderOption"
									id="cancelOrder2"
								/>

								<label
									className="cancel-order-option-reason"
									htmlFor="cancelOrder2"
								>
									<p>
										Ingin memasukkan/mengubah kode voucher
									</p>
								</label>
							</div>

							<div className="cancel-order-option-reason-content">
								<input
									type="radio"
									name="cancelOrderOption"
									id="cancelOrder3"
								/>

								<label
									className="cancel-order-option-reason"
									htmlFor="cancelOrder3"
								>
									<p>
										Ingin mengubah pesanan (ukuran, warna,
										jumlah, dll)
									</p>
								</label>
							</div>

							<div className="cancel-order-option-reason-content">
								<input
									type="radio"
									name="cancelOrderOption"
									id="cancelOrder4"
								/>

								<label
									className="cancel-order-option-reason"
									htmlFor="cancelOrder4"
								>
									<p>Tidak mudah melanjutkan pembayaran</p>
								</label>
							</div>

							<div className="cancel-order-option-reason-content">
								<input
									type="radio"
									name="cancelOrderOption"
									id="cancelOrder5"
								/>

								<label
									className="cancel-order-option-reason"
									htmlFor="cancelOrder5"
								>
									<p>
										Menemukan harga yang lebih murah di toko
										lain
									</p>
								</label>
							</div>

							<div className="cancel-order-option-reason-content">
								<input
									type="radio"
									name="cancelOrderOption"
									id="cancelOrder6"
								/>

								<label
									className="cancel-order-option-reason"
									htmlFor="cancelOrder6"
								>
									<p>Tidak Ingin membeli lagi</p>
								</label>
							</div>

							<div className="cancel-order-option-reason-content">
								<input
									type="radio"
									name="cancelOrderOption"
									id="cancelOrder7"
								/>

								<label
									className="cancel-order-option-reason"
									htmlFor="cancelOrder7"
								>
									<p>Lainnya</p>
								</label>
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
							<div className="button-cancel-order-dropdown-option dropdown-cancel-order-button">
								BATALKAN PESANAN
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PayTransactionProfileOption;
