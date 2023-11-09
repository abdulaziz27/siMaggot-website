import React from "react";
import "../check_out_page/check_out_page.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import gambar1 from "../../assets/check_out/maggot_bsf.jpeg";
import gambar2 from "../../assets/check_out/premium_dried_maggot.jpeg";

const CheckOutPage = () => {
	return (
		<div className="check-out-page-container">
			<Navbar />
			<Header />

			<div className="check-out-container">
				<h1>Checkout</h1>

				<div className="check-out-content-container">
					<div className="alamat-pengirim-produk-dipesan-container">
						<div className="alamat-pengiriman-container">
							<h2>Alamat Pengiriman</h2>

							<div className="horizontal-line-check-out"></div>

							<div className="penerima-container">
								<h3>Nama Penerima</h3>
								<h4>081234567891</h4>
								<p>
									Jl. DI Panjaitan No.128, Karangreja,
									Purwokerto Kidul, Kec. Purwokerto Sel.,
									Kabupaten Banyumas, Jawa Tengah, 53147
								</p>
							</div>

							<div className="horizontal-line-check-out"></div>

							<div className="button-alamat-container">
								<div className="button-alamat">
									Pilih Alamat Lain
								</div>
							</div>
						</div>

						<div className="produk-dipesan-container">
							<div className="produk-dipesan-space-between">
								<div className="produk-dipesan-title">
									<h2>Produk Dipesan</h2>
								</div>

								<div className="title-produk-dipesan">
									<p>Harga Satuan</p>
									<p>Kuantitas</p>
									<p>Total Harga</p>
								</div>
							</div>

							<div className="horizontal-line-produk-dipesan"></div>

							<div className="maggot-store-produk">
								<h3>Literally Maggot Store</h3>
								<p>Jakarta Selatan</p>
								<div className="informasi-produk-dipesan-container">
									<div className="informasi-produk-pesanan-space-between">
										<div className="informasi-produk-pesanan">
											<div className="gambar-produk-pesanan">
												<img src={gambar1}></img>
											</div>

											<div className="product-information">
												<h4>Tepung Maggot BSF</h4>
												<p>Variasi : 1kg</p>
											</div>
										</div>

										<div className="harga-satuan-total-produk-pesanan">
											<div className="harga-satuan-produk">
												<p>Rp39.980</p>
											</div>
											<div className="kuantitas-produk">
												<p>1</p>
											</div>
											<div className="total-harga-produk">
												<h5>Rp39.980</h5>
											</div>
										</div>
									</div>

									<div className="horizontal-line-informasi-produk-dipesan"></div>

									<div className="informasi-produk-pesanan-space-between">
										<div className="informasi-produk-pesanan">
											<div className="gambar-produk-pesanan">
												<img src={gambar2}></img>
											</div>

											<div className="product-information">
												<h4>
													Premium Dried Maggot /
													Maggot Kering BSF Flake
												</h4>
												<p>Variasi : 100gr</p>
											</div>
										</div>

										<div className="harga-satuan-total-produk-pesanan">
											<div className="harga-satuan-produk">
												<p>Rp17.550</p>
											</div>
											<div className="kuantitas-produk">
												<p>1</p>
											</div>
											<div className="total-harga-produk">
												<h5>Rp17.550</h5>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="horizontal-line-produk-dipesan"></div>

							<div className="pesan-penjual-pengiriman-container">
								<div className="pesan-penjual-container">
									<h6>Pesan : </h6>
									<input
										className="pesan-penjual-input"
										type="text"
										name="chat-penjual"
										placeholder="(Opsional) Tinggalkan pesan ke penjual"
									></input>
								</div>

								<div className="pengiriman-produk-pesanan-container">
									<h3>Pengiriman : </h3>
									<div className="ubah-pengiriman-produk-pesanan">
										<h4>Regular</h4>
										<p>UBAH</p>
									</div>
									<h5>Rp15.500</h5>
								</div>
							</div>

							<div className="horizontal-line-produk-dipesan"></div>

							<div className="total-pesanan-pesanan-produk-width">
								<div className="total-pesanan-pesanan-produk-container">
									<p>Total Pesanan (2 Produk) :</p>
									<h5>Rp73.030</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="ringkasan-belanja-container">
						<div className="ringkasan-belanja-height">
							<h2>Ringkasan Belanja</h2>

							<div className="barang-belanja-container">
								<div className="total-harga-barang-container">
									<p>Total Harga (2 Barang)</p>
									<p>Rp 57.530</p>
								</div>

								<div className="total-ongkos-kirim-container">
									<p>Total Ongkos Kirim</p>
									<p>Rp 15.500</p>
								</div>

								<div className="horizontal-line-barang-belanja"></div>

								<div className="total-belanja-container">
									<p>Total belanja</p>
									<p>Rp 73.030</p>
								</div>
							</div>

							<div className="horizontal-line-check-out"></div>

							<div className="metode-pembayaran-check-out">
								<h6>Metode Pembayaran</h6>
								<div className="menu-transfer-bank">
									<p>Transfer Bank </p>
									<Icon
										icon="streamline:interface-setting-menu-horizontal-circle-navigation-dots-three-circle-button-horizontal-menu"
										className="icon-menu-transfer"
									/>
								</div>
							</div>

							<div className="button-check-out-barang-belanja">
								<h1>Buat Pesanan</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default CheckOutPage;
