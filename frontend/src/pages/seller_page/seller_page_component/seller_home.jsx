import React from "react";
import { Icon } from "@iconify/react";
import "../seller_page.css";

const HomeSellerOption = () => {
	return (
		<div className="home-seller-option-menu-container">
			<div className="home-seller-option-menu-content">
				<div className="home-seller-option-menu-header">
					<h1>Penting hari ini</h1>
					<p>
						Aktivitas terbaru yang perlu kamu pantau untuk kepuasan
						pembeli.
					</p>
				</div>

				<div className="home-seller-order-product-container">
					<div className="home-seller-order-product-content">
						<Icon
							icon="fluent:chevron-left-12-filled"
							className="chevron-seller-order"
						/>
						<div className="seller-order-card-1"></div>
						<div className="seller-order-card-2"></div>
						<div className="seller-order-card-3">
							<h1>MG123456789</h1>
							<h2>Pesanan</h2>
							<p>Belum diproses</p>
						</div>
						<div className="seller-order-card-4"></div>
						<div className="seller-order-card-5"></div>
						<Icon
							icon="fluent:chevron-right-12-filled"
							className="chevron-seller-order"
						/>
					</div>
				</div>

				<div className="home-seller-product-information-container">
					<div className="seller-product-information">
						<p>Dalam Keranjang</p>
						<p>50</p>
					</div>

					<div className="seller-product-information">
						<p>Pesanan Baru</p>
						<p>50</p>
					</div>

					<div className="seller-product-information">
						<p>Siap Dikirim</p>
						<p>50</p>
					</div>

					<div className="seller-product-information">
						<p>Dikirim</p>
						<p>50</p>
					</div>

					<div className="seller-product-information">
						<p>Selesai</p>
						<p>50</p>
					</div>

					<div className="seller-product-information">
						<p>Ulasan Baru</p>
						<p>50</p>
					</div>

					<div className="seller-product-information">
						<p>Komplain</p>
						<p>50</p>
					</div>

					<div className="seller-product-information">
						<p>Dibatalkan Pembeli</p>
						<p>50</p>
					</div>

					<div className="seller-product-information">
						<p>Dibatalkan Penjual</p>
						<p>50</p>
					</div>
				</div>
			</div>

			<div className="home-seller-option-side-information-width">
				<div className="home-seller-option-side-information">
					<h2>Panduan Seller</h2>
					<div className="seller-option-side-content"></div>
					<h2>Artikel</h2>
					<div className="seller-option-side-content"></div>
				</div>
			</div>
		</div>
	);
};

export default HomeSellerOption;
