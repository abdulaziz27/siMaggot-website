import React from "react";
import { Icon } from "@iconify/react";
import "../seller_page.css";

const AddProductOption = () => {
	return (
		<div className="home-seller-option-menu-container">
			<div className="add-product-seller-option-menu-content">
				<div className="add-product-seller-option-menu-header">
					<h1>Tambah Produk</h1>
				</div>

				<div className="product-information-container-add-product-seller-option">
					<h1>Informasi Produk</h1>
					<div className="product-information-add-product-seller-option-content-container">
						<div className="add-product-seller-option-product-name-container">
							<div className="add-product-seller-option-product-name-content">
								<h2>Nama Produk</h2>
								<p>
									Nama produk min. 30 karakter dengan
									memasukkan informasi jelas mengenai produk.
									Disarankan untuk tidak menggunakan huruf
									kapital berlebih.
								</p>
								<p>
									Nama <b>tidak bisa diubah</b> setelah produk
									terjual, ya.
								</p>
							</div>
							<div className="add-product-seller-option-product-name-fill-content">
								<input
									className="add-product-seller-input"
									type="text"
								></input>
							</div>
						</div>

						<div className="add-product-seller-option-category-container">
							<div className="add-product-seller-option-category-content">
								<h2>Kategori</h2>
							</div>
							<div className="add-product-seller-option-category-fill-content">
								<div className="add-product-seller-category-fill-option">
									<Icon
										icon="charm:chevron-down"
										className="add-product-seller-category-chevron"
									/>
								</div>
							</div>
						</div>
						<div className="add-product-seller-option-display-container">
							<div className="add-product-seller-option-display-content">
								<h2>Etalase</h2>
								<p>
									Kamu dapat menambah etalase baru atau
									memilih dari daftar etalase yang ada.
								</p>
							</div>
							<div className="add-product-seller-option-display-fill-content">
								<div className="add-product-seller-display-fill-option">
									<Icon
										icon="charm:chevron-down"
										className="add-product-seller-category-chevron"
									/>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-photo-container">
							<div className="add-product-seller-option-product-photo-content">
								<h2>Foto Produk</h2>
								<p>
									Format gambar .jpg .jpeg .png dan ukuran
									minimum 300 x 300px (Untuk gambar optimal
									gunakan ukuran minimum 700 x 700 px).
								</p>
								<p>
									Pilih foto produk atau tarik dan letakkan
									hingga 5 foto sekaligus di sini. Disarankan
									upload min. 3 foto yang menarik dan berbeda
									satu sama lain untuk menarik perhatian
									pembeli.
								</p>
							</div>
							<div className="add-product-seller-option-product-photo-fill-content">
								<div className="add-product-display-photo-seller-content">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 70 70"
										fill="none"
									>
										<path
											d="M30.625 10.9375C30.625 13.8383 29.4727 16.6203 27.4215 18.6715C25.3703 20.7227 22.5883 21.875 19.6875 21.875C16.7867 21.875 14.0047 20.7227 11.9536 18.6715C9.90238 16.6203 8.75004 13.8383 8.75004 10.9375C8.75004 8.03669 9.90238 5.2547 11.9536 3.20352C14.0047 1.15234 16.7867 0 19.6875 0C22.5883 0 25.3703 1.15234 27.4215 3.20352C29.4727 5.2547 30.625 8.03669 30.625 10.9375ZM49.1094 28.6694C48.6991 28.4639 48.2346 28.3926 47.7816 28.4656C47.3286 28.5386 46.91 28.7522 46.585 29.0763L30.3538 49.6825L18.7163 37.555C18.2961 37.2753 17.7921 37.1494 17.2898 37.1989C16.7874 37.2483 16.3176 37.47 15.96 37.8262L0.00878906 56.875V65.625C0.00878906 66.7853 0.469725 67.8981 1.2902 68.7186C2.11067 69.5391 3.22347 70 4.38379 70H65.6338C66.2083 70 66.7772 69.8868 67.308 69.667C67.8388 69.4471 68.3211 69.1248 68.7274 68.7186C69.1336 68.3123 69.4559 67.83 69.6758 67.2992C69.8956 66.7684 70.0088 66.1995 70.0088 65.625V45.9375L49.1094 28.6694Z"
											fill="#9CAD5F"
											fill-opacity="0.1"
										/>
									</svg>
									<Icon
										icon="fe:plus"
										className="display-photo-add-icon"
									/>
								</div>
								<div className="add-product-display-photo-seller-content">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 70 70"
										fill="none"
									>
										<path
											d="M30.625 10.9375C30.625 13.8383 29.4727 16.6203 27.4215 18.6715C25.3703 20.7227 22.5883 21.875 19.6875 21.875C16.7867 21.875 14.0047 20.7227 11.9536 18.6715C9.90238 16.6203 8.75004 13.8383 8.75004 10.9375C8.75004 8.03669 9.90238 5.2547 11.9536 3.20352C14.0047 1.15234 16.7867 0 19.6875 0C22.5883 0 25.3703 1.15234 27.4215 3.20352C29.4727 5.2547 30.625 8.03669 30.625 10.9375ZM49.1094 28.6694C48.6991 28.4639 48.2346 28.3926 47.7816 28.4656C47.3286 28.5386 46.91 28.7522 46.585 29.0763L30.3538 49.6825L18.7163 37.555C18.2961 37.2753 17.7921 37.1494 17.2898 37.1989C16.7874 37.2483 16.3176 37.47 15.96 37.8262L0.00878906 56.875V65.625C0.00878906 66.7853 0.469725 67.8981 1.2902 68.7186C2.11067 69.5391 3.22347 70 4.38379 70H65.6338C66.2083 70 66.7772 69.8868 67.308 69.667C67.8388 69.4471 68.3211 69.1248 68.7274 68.7186C69.1336 68.3123 69.4559 67.83 69.6758 67.2992C69.8956 66.7684 70.0088 66.1995 70.0088 65.625V45.9375L49.1094 28.6694Z"
											fill="#9CAD5F"
											fill-opacity="0.1"
										/>
									</svg>
									<Icon
										icon="fe:plus"
										className="display-photo-add-icon"
									/>
								</div>
								<div className="add-product-display-photo-seller-content">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 70 70"
										fill="none"
									>
										<path
											d="M30.625 10.9375C30.625 13.8383 29.4727 16.6203 27.4215 18.6715C25.3703 20.7227 22.5883 21.875 19.6875 21.875C16.7867 21.875 14.0047 20.7227 11.9536 18.6715C9.90238 16.6203 8.75004 13.8383 8.75004 10.9375C8.75004 8.03669 9.90238 5.2547 11.9536 3.20352C14.0047 1.15234 16.7867 0 19.6875 0C22.5883 0 25.3703 1.15234 27.4215 3.20352C29.4727 5.2547 30.625 8.03669 30.625 10.9375ZM49.1094 28.6694C48.6991 28.4639 48.2346 28.3926 47.7816 28.4656C47.3286 28.5386 46.91 28.7522 46.585 29.0763L30.3538 49.6825L18.7163 37.555C18.2961 37.2753 17.7921 37.1494 17.2898 37.1989C16.7874 37.2483 16.3176 37.47 15.96 37.8262L0.00878906 56.875V65.625C0.00878906 66.7853 0.469725 67.8981 1.2902 68.7186C2.11067 69.5391 3.22347 70 4.38379 70H65.6338C66.2083 70 66.7772 69.8868 67.308 69.667C67.8388 69.4471 68.3211 69.1248 68.7274 68.7186C69.1336 68.3123 69.4559 67.83 69.6758 67.2992C69.8956 66.7684 70.0088 66.1995 70.0088 65.625V45.9375L49.1094 28.6694Z"
											fill="#9CAD5F"
											fill-opacity="0.1"
										/>
									</svg>
									<Icon
										icon="fe:plus"
										className="display-photo-add-icon"
									/>
								</div>
								<div className="add-product-display-photo-seller-content">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 70 70"
										fill="none"
									>
										<path
											d="M30.625 10.9375C30.625 13.8383 29.4727 16.6203 27.4215 18.6715C25.3703 20.7227 22.5883 21.875 19.6875 21.875C16.7867 21.875 14.0047 20.7227 11.9536 18.6715C9.90238 16.6203 8.75004 13.8383 8.75004 10.9375C8.75004 8.03669 9.90238 5.2547 11.9536 3.20352C14.0047 1.15234 16.7867 0 19.6875 0C22.5883 0 25.3703 1.15234 27.4215 3.20352C29.4727 5.2547 30.625 8.03669 30.625 10.9375ZM49.1094 28.6694C48.6991 28.4639 48.2346 28.3926 47.7816 28.4656C47.3286 28.5386 46.91 28.7522 46.585 29.0763L30.3538 49.6825L18.7163 37.555C18.2961 37.2753 17.7921 37.1494 17.2898 37.1989C16.7874 37.2483 16.3176 37.47 15.96 37.8262L0.00878906 56.875V65.625C0.00878906 66.7853 0.469725 67.8981 1.2902 68.7186C2.11067 69.5391 3.22347 70 4.38379 70H65.6338C66.2083 70 66.7772 69.8868 67.308 69.667C67.8388 69.4471 68.3211 69.1248 68.7274 68.7186C69.1336 68.3123 69.4559 67.83 69.6758 67.2992C69.8956 66.7684 70.0088 66.1995 70.0088 65.625V45.9375L49.1094 28.6694Z"
											fill="#9CAD5F"
											fill-opacity="0.1"
										/>
									</svg>
									<Icon
										icon="fe:plus"
										className="display-photo-add-icon"
									/>
								</div>
								<div className="add-product-display-photo-seller-content">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 70 70"
										fill="none"
									>
										<path
											d="M30.625 10.9375C30.625 13.8383 29.4727 16.6203 27.4215 18.6715C25.3703 20.7227 22.5883 21.875 19.6875 21.875C16.7867 21.875 14.0047 20.7227 11.9536 18.6715C9.90238 16.6203 8.75004 13.8383 8.75004 10.9375C8.75004 8.03669 9.90238 5.2547 11.9536 3.20352C14.0047 1.15234 16.7867 0 19.6875 0C22.5883 0 25.3703 1.15234 27.4215 3.20352C29.4727 5.2547 30.625 8.03669 30.625 10.9375ZM49.1094 28.6694C48.6991 28.4639 48.2346 28.3926 47.7816 28.4656C47.3286 28.5386 46.91 28.7522 46.585 29.0763L30.3538 49.6825L18.7163 37.555C18.2961 37.2753 17.7921 37.1494 17.2898 37.1989C16.7874 37.2483 16.3176 37.47 15.96 37.8262L0.00878906 56.875V65.625C0.00878906 66.7853 0.469725 67.8981 1.2902 68.7186C2.11067 69.5391 3.22347 70 4.38379 70H65.6338C66.2083 70 66.7772 69.8868 67.308 69.667C67.8388 69.4471 68.3211 69.1248 68.7274 68.7186C69.1336 68.3123 69.4559 67.83 69.6758 67.2992C69.8956 66.7684 70.0088 66.1995 70.0088 65.625V45.9375L49.1094 28.6694Z"
											fill="#9CAD5F"
											fill-opacity="0.1"
										/>
									</svg>
									<Icon
										icon="fe:plus"
										className="display-photo-add-icon"
									/>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-description-container">
							<div className="add-product-seller-option-description-content">
								<h2>Deskripsi</h2>
								<p>
									Pastikan deskripsi produk memuat penjelasan
									detail terkait produkmu agar pembeli mudah
									mengerti dan menemukan produkmu.
								</p>
								<p>
									Disarankan untuk tidak memasukkan info nomor
									HP, e-mail, dsb. ke dalam deskripsi produk
									untuk melindungi data pribadimu.
								</p>
							</div>
							<div className="add-product-seller-option-description-fill-content">
								<div className="add-product-seller-option-description-text-area-container">
									<textarea type="text"></textarea>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-video-container">
							<div className="add-product-seller-option-video-content">
								<h2>Video</h2>
							</div>
							<div className="add-product-seller-option-video-fill-content">
								<div className="add-video-product-link-seller-option-button">
									<Icon
										icon="octicon:plus-16"
										className="add-video-link-seller-icon"
									/>
									Tambah URL
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="product-information-container-add-product-seller-option">
					<h1>Variasi Produk 1</h1>
					<div className="product-information-add-product-seller-option-content-container">
						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-name-content">
								<h2>Nama Varian</h2>
							</div>
							<div className="add-product-seller-option-variant-name-fill-content">
								<input
									className="add-variant-product-seller-input"
									type="text"
								></input>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-photo-content">
								<h2>Foto Varian</h2>
								<p>
									Format gambar .jpg .jpeg .png dan ukuran
									minimum 300 x 300px (Untuk gambar optimal
									gunakan ukuran minimum 700 x 700 px).
								</p>
							</div>
							<div className="add-product-seller-option-variant-photo-fill-content">
								<div className="add-product-display-variant-seller-content">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 70 70"
										fill="none"
									>
										<path
											d="M30.625 10.9375C30.625 13.8383 29.4727 16.6203 27.4215 18.6715C25.3703 20.7227 22.5883 21.875 19.6875 21.875C16.7867 21.875 14.0047 20.7227 11.9536 18.6715C9.90238 16.6203 8.75004 13.8383 8.75004 10.9375C8.75004 8.03669 9.90238 5.2547 11.9536 3.20352C14.0047 1.15234 16.7867 0 19.6875 0C22.5883 0 25.3703 1.15234 27.4215 3.20352C29.4727 5.2547 30.625 8.03669 30.625 10.9375ZM49.1094 28.6694C48.6991 28.4639 48.2346 28.3926 47.7816 28.4656C47.3286 28.5386 46.91 28.7522 46.585 29.0763L30.3538 49.6825L18.7163 37.555C18.2961 37.2753 17.7921 37.1494 17.2898 37.1989C16.7874 37.2483 16.3176 37.47 15.96 37.8262L0.00878906 56.875V65.625C0.00878906 66.7853 0.469725 67.8981 1.2902 68.7186C2.11067 69.5391 3.22347 70 4.38379 70H65.6338C66.2083 70 66.7772 69.8868 67.308 69.667C67.8388 69.4471 68.3211 69.1248 68.7274 68.7186C69.1336 68.3123 69.4559 67.83 69.6758 67.2992C69.8956 66.7684 70.0088 66.1995 70.0088 65.625V45.9375L49.1094 28.6694Z"
											fill="#9CAD5F"
											fill-opacity="0.1"
										/>
									</svg>
									<Icon
										icon="fe:plus"
										className="display-variant-add-icon"
									/>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-price-content">
								<h2>Harga Satuan</h2>
							</div>
							<div className="add-product-seller-option-variant-price-fill-content">
								<div className="add-product-seller-variant-unit-price-container">
									<div className="add-product-seller-rp-variant">
										Rp
									</div>
									<input
										className="add-variant-product-seller-unit-price-input"
										type="text"
									></input>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-stock-content">
								<h2>Jumlah Stok</h2>
								<p>Isi jumlah stok sesuai dengan varian.</p>
							</div>
							<div className="add-prduct-seller-option-variant-stock-fill-content">
								<input
									className="add-variant-product-seller-stock-amount-input"
									type="text"
								></input>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-minpurchase-content">
								<h2>Minimum Pembelian</h2>
								<p>Minimum pembelian harus diatas 1.</p>
							</div>
							<div className="add-product-seller-option-variant-minpurchase-fill-content">
								<input
									className="add-variant-product-seller-stock-amount-input"
									type="text"
								></input>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-weight-content">
								<h2>Berat Produk</h2>
								<p>
									Pastikan berat produk sudah dalam skala
									gram. Hanya gunakan angka dan tidak
									menggunakan tanda baca apapun.
								</p>
							</div>
							<div className="add-product-seller-option-variant-weight-fill-content">
								<div className="add-product-seller-variant-unit-price-container">
									<input
										className="add-variant-product-seller-unit-price-input"
										type="text"
									></input>
									<div className="add-product-seller-rp-variant">
										gram
									</div>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-size-content">
								<h2>Ukuran Produk</h2>
								<p>
									Pastikan dengan jelas ukuran produk dengan
									menggunakan skala centimeter (cm).
								</p>
							</div>
							<div className="add-product-seller-option-variant-size-fill-content">
								<div className="add-product-seller-variant-size-input-container">
									<div className="add-product-seller-variant-size-input-content">
										<input
											className="add-variant-product-seller-size-input"
											type="text"
											placeholder="Panjang"
										></input>
										<div className="add-product-seller-size-cm-variant">
											cm
										</div>
									</div>

									<div className="add-product-seller-variant-size-input-content">
										<input
											className="add-variant-product-seller-size-input"
											type="text"
											placeholder="Lebar"
										></input>
										<div className="add-product-seller-size-cm-variant">
											cm
										</div>
									</div>

									<div className="add-product-seller-variant-size-input-content">
										<input
											className="add-variant-product-seller-size-input"
											type="text"
											placeholder="Tinggi"
										></input>
										<div className="add-product-seller-size-cm-variant">
											cm
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-delivery-content">
								<h2>Jenis Pengiriman</h2>
							</div>
							<div className="add-product-seller-option-variant-delivery-fill-content">
								<div className="add-product-seller-option-variant-delivery-type-container">
									<div className="add-product-seller-option-variant-delivery-type-content">
										<input
											type="radio"
											name="delivery-type"
											id="delivery-type1"
										/>

										<label
											className="add-product-seller-option-variant-delivery-type-information"
											htmlFor="delivery-type1"
										>
											<h3>Reguler</h3>
										</label>
									</div>

									<div className="add-product-seller-option-variant-delivery-type-content">
										<input
											type="radio"
											name="delivery-type"
											id="delivery-type2"
										/>

										<label
											className="add-product-seller-option-variant-delivery-type-information"
											htmlFor="delivery-type2"
										>
											<h3>Kargo</h3>
										</label>
									</div>
								</div>

								<div className="add-product-seller-option-variant-delivery-services-container">
									<h4>Pilih Jasa Kirim</h4>
									<Icon
										icon="charm:chevron-down"
										className="add-variant-delivery-chevron"
									/>
								</div>

								<div className="add-product-seller-option-variant-delivery-services-button">
									<Icon
										icon="fe:plus"
										className="add-product-seller-delivery-icon"
									/>
									Tambah Jasa Kirim
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="product-information-container-add-product-seller-option">
					<h1>Variasi Produk 2</h1>
					<div className="product-information-add-product-seller-option-content-container">
						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-name-content">
								<h2>Nama Varian</h2>
							</div>
							<div className="add-product-seller-option-variant-name-fill-content">
								<input
									className="add-variant-product-seller-input"
									type="text"
								></input>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-photo-content">
								<h2>Foto Varian</h2>
								<p>
									Format gambar .jpg .jpeg .png dan ukuran
									minimum 300 x 300px (Untuk gambar optimal
									gunakan ukuran minimum 700 x 700 px).
								</p>
							</div>
							<div className="add-product-seller-option-variant-photo-fill-content">
								<div className="add-product-display-variant-seller-content">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 70 70"
										fill="none"
									>
										<path
											d="M30.625 10.9375C30.625 13.8383 29.4727 16.6203 27.4215 18.6715C25.3703 20.7227 22.5883 21.875 19.6875 21.875C16.7867 21.875 14.0047 20.7227 11.9536 18.6715C9.90238 16.6203 8.75004 13.8383 8.75004 10.9375C8.75004 8.03669 9.90238 5.2547 11.9536 3.20352C14.0047 1.15234 16.7867 0 19.6875 0C22.5883 0 25.3703 1.15234 27.4215 3.20352C29.4727 5.2547 30.625 8.03669 30.625 10.9375ZM49.1094 28.6694C48.6991 28.4639 48.2346 28.3926 47.7816 28.4656C47.3286 28.5386 46.91 28.7522 46.585 29.0763L30.3538 49.6825L18.7163 37.555C18.2961 37.2753 17.7921 37.1494 17.2898 37.1989C16.7874 37.2483 16.3176 37.47 15.96 37.8262L0.00878906 56.875V65.625C0.00878906 66.7853 0.469725 67.8981 1.2902 68.7186C2.11067 69.5391 3.22347 70 4.38379 70H65.6338C66.2083 70 66.7772 69.8868 67.308 69.667C67.8388 69.4471 68.3211 69.1248 68.7274 68.7186C69.1336 68.3123 69.4559 67.83 69.6758 67.2992C69.8956 66.7684 70.0088 66.1995 70.0088 65.625V45.9375L49.1094 28.6694Z"
											fill="#9CAD5F"
											fill-opacity="0.1"
										/>
									</svg>
									<Icon
										icon="fe:plus"
										className="display-variant-add-icon"
									/>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-price-content">
								<h2>Harga Satuan</h2>
							</div>
							<div className="add-product-seller-option-variant-price-fill-content">
								<div className="add-product-seller-variant-unit-price-container">
									<div className="add-product-seller-rp-variant">
										Rp
									</div>
									<input
										className="add-variant-product-seller-unit-price-input"
										type="text"
									></input>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-stock-content">
								<h2>Jumlah Stok</h2>
								<p>Isi jumlah stok sesuai dengan varian.</p>
							</div>
							<div className="add-prduct-seller-option-variant-stock-fill-content">
								<input
									className="add-variant-product-seller-stock-amount-input"
									type="text"
								></input>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-minpurchase-content">
								<h2>Minimum Pembelian</h2>
								<p>Minimum pembelian harus diatas 1.</p>
							</div>
							<div className="add-product-seller-option-variant-minpurchase-fill-content">
								<input
									className="add-variant-product-seller-stock-amount-input"
									type="text"
								></input>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-weight-content">
								<h2>Berat Produk</h2>
								<p>
									Pastikan berat produk sudah dalam skala
									gram. Hanya gunakan angka dan tidak
									menggunakan tanda baca apapun.
								</p>
							</div>
							<div className="add-product-seller-option-variant-weight-fill-content">
								<div className="add-product-seller-variant-unit-price-container">
									<input
										className="add-variant-product-seller-unit-price-input"
										type="text"
									></input>
									<div className="add-product-seller-rp-variant">
										gram
									</div>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-size-content">
								<h2>Ukuran Produk</h2>
								<p>
									Pastikan dengan jelas ukuran produk dengan
									menggunakan skala centimeter (cm).
								</p>
							</div>
							<div className="add-product-seller-option-variant-size-fill-content">
								<div className="add-product-seller-variant-size-input-container">
									<div className="add-product-seller-variant-size-input-content">
										<input
											className="add-variant-product-seller-size-input"
											type="text"
											placeholder="Panjang"
										></input>
										<div className="add-product-seller-size-cm-variant">
											cm
										</div>
									</div>

									<div className="add-product-seller-variant-size-input-content">
										<input
											className="add-variant-product-seller-size-input"
											type="text"
											placeholder="Lebar"
										></input>
										<div className="add-product-seller-size-cm-variant">
											cm
										</div>
									</div>

									<div className="add-product-seller-variant-size-input-content">
										<input
											className="add-variant-product-seller-size-input"
											type="text"
											placeholder="Tinggi"
										></input>
										<div className="add-product-seller-size-cm-variant">
											cm
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-product-variant-container">
							<div className="add-product-seller-option-variant-delivery-content">
								<h2>Jenis Pengiriman</h2>
							</div>
							<div className="add-product-seller-option-variant-delivery-fill-content">
								<div className="add-product-seller-option-variant-delivery-type-container">
									<div className="add-product-seller-option-variant-delivery-type-content">
										<input
											type="radio"
											name="delivery-type"
											id="delivery-type1"
										/>

										<label
											className="add-product-seller-option-variant-delivery-type-information"
											htmlFor="delivery-type1"
										>
											<h3>Reguler</h3>
										</label>
									</div>

									<div className="add-product-seller-option-variant-delivery-type-content">
										<input
											type="radio"
											name="delivery-type"
											id="delivery-type2"
										/>

										<label
											className="add-product-seller-option-variant-delivery-type-information"
											htmlFor="delivery-type2"
										>
											<h3>Kargo</h3>
										</label>
									</div>
								</div>

								<div className="add-product-seller-option-variant-delivery-services-container">
									<h4>Pilih Jasa Kirim</h4>
									<Icon
										icon="charm:chevron-down"
										className="add-variant-delivery-chevron"
									/>
								</div>

								<div className="add-product-seller-option-variant-delivery-services-button">
									<Icon
										icon="fe:plus"
										className="add-product-seller-delivery-icon"
									/>
									Tambah Jasa Kirim
								</div>
							</div>
						</div>

						<div className="add-product-seller-option-delete-variant-button">
							Hapus
						</div>
					</div>
				</div>

				<div className="add-product-seller-option-add-variance-button">
					<Icon
						icon="fe:plus"
						className="add-product-seller-add-variant-icon"
					/>
					Tambah Variasi
				</div>

				<div className="add-product-seller-option-save-cancel-container">
					<div className="add-product-seller-option-save-cancel-button add-product-seller-cancel-button">
						Cancel
					</div>
					<div className="add-product-seller-option-save-cancel-button add-product-seller-cancel-button">
						Simpan & Tambah Baru
					</div>
					<div className="add-product-seller-option-save-cancel-button add-product-seller-save-button">
						Simpan
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddProductOption;
