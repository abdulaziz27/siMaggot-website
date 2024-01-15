import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../profile_page.css";

import image1 from "../../../../assets/check_out/maggot_bsf.jpeg";
import image2 from "../../../../assets/check_out/premium_dried_maggot.jpeg";

const DeliveryTransactionProfileOption = () => {
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
						<div className="pay-now-button">Produk Diterima</div>
						<div className="cancel-order-button">
							Hubungi Penjual
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryTransactionProfileOption;
