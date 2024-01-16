import React from "react";
import { Icon } from "@iconify/react";
import "../seller_page.css";
import { useState, useEffect } from "react";
import { addProduct } from "../../../api";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AddProductOption = () => {
	const navigate = useNavigate();
	const [productName, setProductName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [cover, setCover] = useState("");
	const [stock, setStock] = useState("");
	const [category, setCategory] = useState("");
	const [imagePreview, setImagePreview] = useState("");

	const handleProductNameChange = (event) => {
		setProductName(event.target.value);
	};

	const handlePriceChange = (event) => {
		setPrice(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleStockChange = (event) => {
		setStock(event.target.value);
	};
	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};

	const handleCoverChange = (event) => {
		const file = event.target.files[0];
		setCover(file);

		const reader = new FileReader();
		reader.onload = (e) => {
			const imagePreview = e.target.result;
			setImagePreview(imagePreview);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleFormSubmit = async () => {
		try {
			if (
				!productName ||
				!price ||
				!description ||
				!cover ||
				!stock ||
				!category
			) {
				console.error("Semua Bidang Harus diisi");
				swal("Error!", "Semua Bidang Harus diisi.", "error");
				return;
			}

			const formData = new FormData();
			formData.append("productName", productName);
			formData.append("price", price);
			formData.append("category", category);
			formData.append("description", description);
			formData.append("cover", cover);
			formData.append("stock", stock);

			const response = await addProduct(formData);

			swal("Success!", "Berhasil Menambahkan Produk", "success").then(
				() => {
					navigate("/seller");
				}
			);
			console.log("Berhasil Menambahkan Produk", response);

			setProductName("");
			setPrice("");
			setDescription("");
			setCover("");
			setStock("");
			setCategory("");
		} catch (error) {
			console.error("Terjadi Kesalahan Dalam Menambahkan Produk", error);
			swal(
				"Error!",
				"Terjadi Kesalahan Dalam Menambahkan Produk.",
				"error"
			);
		}
	};

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
									value={productName}
									onChange={handleProductNameChange}
								></input>
							</div>
						</div>

						<div className="add-product-seller-option-category-container">
							<div className="add-product-seller-option-category-content">
								<h2>Kategori</h2>
							</div>
							<div className="add-product-seller-option-category-fill-content">
								<select
									className="add-product-seller-input"
									value={category}
									onChange={handleCategoryChange}
								>
									<option value="">Pilih Kategori</option>
									<option value="Maggot">Maggot</option>
									<option value="Alat">Alat</option>
									<option value="Bundle">Bundle</option>
								</select>
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
									<input
										type="file"
										accept=".jpg, .jpeg, .png"
										multiple
										onChange={handleCoverChange}
									/>
								</div>
								{cover && (
									<div className="image-preview-container">
										<img src={imagePreview} alt="Preview" />
									</div>
								)}
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
									<textarea
										type="text"
										value={description}
										onChange={handleDescriptionChange}
									></textarea>
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
									value={stock}
									onChange={handleStockChange}
								></input>
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
										value={price}
										onChange={handlePriceChange}
									></input>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="add-product-seller-option-save-cancel-container">
					<div className="add-product-seller-option-save-cancel-button add-product-seller-cancel-button">
						Cancel
					</div>
					<div
						onClick={handleFormSubmit}
						className="add-product-seller-option-save-cancel-button add-product-seller-cancel-button"
					>
						Save & Add New
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
