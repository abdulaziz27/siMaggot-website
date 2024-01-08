import React from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";

import image from "../../../assets/check_out/maggot_bsf.jpeg";

const OrderStatusAccountOption = () => {
	return (
		<div className="order-status-page-account-option">
			<div className="order-status-page-header">
				<h1>Notifikasi Status Pesanan</h1>
				<p>Tandai sebagai sudah dibaca</p>
			</div>

			<div className="horizontal-line-order-status-option-page"></div>

			<div className="order-status-information-page-container">
				<div className="order-status-account-container">
					<img src={image}></img>
					<div className="order-status-notification-container">
						<h2>Pesanan Selesai</h2>
						<p>Pesanan anda telah tiba di tujuan.</p>
						<p>13-11-2023 15:30</p>
					</div>
				</div>

				<div className="horizontal-line-order-status-item"></div>

				<div className="order-status-account-container">
					<img src={image}></img>
					<div className="order-status-notification-container">
						<h2>Selesaikan Pembayaranmu</h2>
						<p>
							Hai <strong>username</strong>, pesananmu sebesar{" "}
							<strong>Rp73.030</strong> belum dibayar. Segera
							selesaikan pembayaranmu sebelum{" "}
							<strong>09-11-2023 00:00.</strong> Abaikan pesan ini
							jika kamu sudah membayar.
						</p>
						<p>09-11-2023 15:30</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderStatusAccountOption;
