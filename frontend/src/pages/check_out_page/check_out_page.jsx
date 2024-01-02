import React, { useState, useRef, useEffect } from "react";
import "../check_out_page/check_out_page.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import gambar1 from "../../assets/check_out/maggot_bsf.jpeg";
import gambar2 from "../../assets/check_out/premium_dried_maggot.jpeg";
import gambar3 from "../../assets/check_out/map_dunia.jpeg";

const CheckOutPage = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isAddressOpen, setIsAddressOpen] = useState(false);
	const [isNewAddressOpen, setIsNewAddressOpen] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] =
		useState("Transfer Bank");
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const addressDropdown = () => {
		setIsAddressOpen(!isAddressOpen);
	};

	const newAddressDropdown = () => {
		setIsAddressOpen(false);
		setIsNewAddressOpen(!isNewAddressOpen);
	};

	const selectPaymentMethod = (method) => {
		setSelectedPaymentMethod(method);
		setIsDropdownOpen(false);
	};

	const closeMenu = () => {
		if (isNewAddressOpen) {
			setIsNewAddressOpen(false);
			setIsAddressOpen(true);
		} else {
			setIsAddressOpen(false);
		}
	};

	const handleOutsideClick = (event) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target)
		) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

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
								<div
									className="button-alamat"
									onClick={addressDropdown}
								>
									Pilih Alamat Lain
								</div>

								{isAddressOpen && (
									<div className="change-alamat-dropdown-container">
										<div className="change-alamat-content">
											<div className="close-alamat-button">
												<Icon
													icon="ph:arrow-circle-left-light"
													onClick={closeMenu}
												/>
											</div>

											<h1>Pilih Alamat Pengiriman</h1>

											<div className="horizontal-line-choose-address"></div>

											<div
												className="add-new-alamat-button"
												onClick={newAddressDropdown}
											>
												Tambah Alamat Baru
											</div>

											<div className="address-option-checkout-container">
												<div className="address-option-checkout">
													<input
														type="radio"
														name="addressOption"
														id="addressOption1"
													/>

													<label
														className="address-option-checkout-information"
														htmlFor="addressOption1"
													>
														<h2>Nama Penerima</h2>
														<h2>081234567891</h2>
														<p>
															Jl. DI Panjaitan
															No.128, Karangreja,
															Purwokerto Kidul,
															Kec. Purwokerto
															Sel., Kabupaten
															Banyumas, Jawa
															Tengah, 53147
														</p>
													</label>

													<div className="address-update-checkout-button">
														<h3>Ubah</h3>
													</div>
												</div>

												<div className="address-option-checkout">
													<input
														type="radio"
														name="addressOption"
														id="addressOption2"
													/>
													<label
														className="address-option-checkout-information"
														htmlFor="addressOption2"
													>
														<h2>Nama Penerima</h2>
														<h2>081234567891</h2>
														<p>
															Jl. DI Panjaitan
															No.128, Karangreja,
															Purwokerto Kidul,
															Kec. Purwokerto
															Sel., Kabupaten
															Banyumas, Jawa
															Tengah, 53147
														</p>
													</label>
													<div className="address-update-checkout-button">
														<h3>Ubah</h3>
													</div>
												</div>

												<div className="address-option-checkout">
													<input
														type="radio"
														name="addressOption"
														id="addressOption3"
													/>
													<label
														className="address-option-checkout-information"
														htmlFor="addressOption3"
													>
														<h2>Nama Penerima</h2>
														<h2>081234567891</h2>
														<p>
															Jl. DI Panjaitan
															No.128, Karangreja,
															Purwokerto Kidul,
															Kec. Purwokerto
															Sel., Kabupaten
															Banyumas, Jawa
															Tengah, 53147
														</p>
													</label>
													<div className="address-update-checkout-button">
														<h3>Ubah</h3>
													</div>
												</div>
											</div>

											<div className="horizontal-line-choose-address"></div>

											<div className="button-choose-address-container">
												<div
													className="button-choose-address button-cancel-address"
													onClick={closeMenu}
												>
													Batalkan
												</div>
												<div className="button-choose-address button-confirm-address">
													Konfirmasi
												</div>
											</div>
										</div>
									</div>
								)}

								{isNewAddressOpen && (
									<div className="change-alamat-dropdown-container">
										<div className="change-alamat-content">
											<div className="close-alamat-button">
												<Icon
													icon="ph:arrow-circle-left-light"
													onClick={closeMenu}
												/>
											</div>

											<h1>Alamat Baru</h1>

											<div className="horizontal-line-choose-address"></div>

											<div className="new-address-option-checkout-container">
												<div className="text-area-nama-telpon-container">
													<input
														className="full-name-new-address-checkout"
														type="text"
														placeholder="Nama Lengkap"
													></input>
													<input
														className="telpon-new-address-checkout"
														type="number"
														placeholder="No Telepon"
													></input>
												</div>

												<div className="text-area-new-address-container">
													<textarea
														className="provinsi-new-address-checkout"
														type="text"
														placeholder="Provinsi, Kota, Kecamatan, Kode Pos"
													></textarea>
												</div>

												<div className="text-area-new-address-container">
													<textarea
														className="jalan-new-address-checkout"
														type="text"
														placeholder="Nama Jalan, Gedung, Alamat, No. Rumah"
													></textarea>
												</div>

												<div className="text-area-new-address-container">
													<textarea
														className="detail-new-address-checkout"
														type="text"
														placeholder="Detail Lainnya (Cth: Blok / Unit No., Patokan)"
													></textarea>
												</div>

												<div className="add-new-address-map-container">
													<img src={gambar3}></img>
													<div className="add-new-address-map-button">
														<Icon icon="pepicons-pop:plus" />
														<h4>Tambah Lokasi</h4>
													</div>
												</div>
											</div>

											<div className="horizontal-line-choose-address"></div>

											<div className="button-choose-address-container">
												<div
													className="button-choose-address button-cancel-address"
													onClick={closeMenu}
												>
													Batalkan
												</div>
												<div className="button-choose-address button-ok-new-address">
													OK
												</div>
											</div>
										</div>
									</div>
								)}
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

							<div
								className="metode-pembayaran-check-out"
								ref={dropdownRef}
							>
								<h6>Metode Pembayaran</h6>
								<div
									className="menu-transfer-bank"
									onClick={toggleDropdown}
								>
									<p>{selectedPaymentMethod}</p>
									<Icon
										icon="streamline:interface-setting-menu-horizontal-circle-navigation-dots-three-circle-button-horizontal-menu"
										className="icon-menu-transfer"
									/>
								</div>
								<div
									className={`metode-pembayaran-list ${
										isDropdownOpen ? "show" : ""
									}`}
								>
									<div className="transfer-bank-dropdown-header">
										<Icon
											icon="ph:arrow-circle-left-light"
											className="arrow-button-transfer-bank-dropdown"
											onClick={closeMenu}
										/>
										<div className="option-payment-method">
											<h1>Pilih Metode Pembayaran</h1>
										</div>
									</div>

									<div className="horizontal-line-metode-pembayaran-dropdown"></div>

									<div className="transfer-bank-dropdown-choice">
										<div
											className="transfer-bank-container"
											onClick={() =>
												selectPaymentMethod(
													"Transfer Bank"
												)
											}
										>
											<Icon
												icon="fa:bank"
												className="transfer-bank-icon"
											/>
											<h2>Transfer Bank</h2>
										</div>
										<div
											className="cash-on-delivery-container"
											onClick={() =>
												selectPaymentMethod(
													"Cash on Delivery (COD)"
												)
											}
										>
											<Icon
												icon="mdi:cash-on-delivery"
												className="cash-on-delivery-icon"
											/>
											<h2>Cash on Delivery (COD)</h2>
										</div>
									</div>
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
