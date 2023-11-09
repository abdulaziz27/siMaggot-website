import React, { useState, useRef, useEffect } from "react";
import "../shop_page/shop_page.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import image from "../../assets/images/1335919.jpeg";

const ShopPage = () => {
	// Dropdown Sort Menu
	const options = [
		"Paling Sesuai",
		"Ulasan",
		"Terbaru",
		"Harga Tertinggi",
		"Harga Terendah",
	];

	const storedOption = localStorage.getItem("selectedOption");
	const [selectedOption, setSelectedOption] = useState(
		storedOption || options[0]
	);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		setIsDropdownOpen(false);
		localStorage.setItem("selectedOption", option);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closeDropdownOnOutsideClick = (e) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", closeDropdownOnOutsideClick);
		return () => {
			window.removeEventListener("click", closeDropdownOnOutsideClick);
		};
	}, []);

	const renderOptions = () => {
		return options.map((option, index) => (
			<li
				key={index}
				onClick={() => handleOptionSelect(option)}
				className={selectedOption === option ? "selected" : ""}
			>
				{option}
			</li>
		));
	};

	// looping
	const times = Array(30).fill(null);

	// Checkbox Lokasi
	const [checkboxesLokasi, setCheckboxesLokasi] = useState({
		"Kab. Banyumas": false,
		"DKI Jakarta": false,
		Jabodetabek: false,
		"Jawa Barat": false,
		"Jawa Tengah": false,
	});

	const handleCheckboxChangeLokasi = (event) => {
		const { name, checked } = event.target;
		setCheckboxesLokasi({ ...checkboxesLokasi, [name]: checked });
	};

	// Checkbox Kategori
	const [checkboxesKategori, setCheckboxesKategori] = useState({
		Maggot: false,
		"Alat Budidaya": false,
		"Perawatan Maggot": false,
		"Bibit Maggot": false,
		"Pakan Hewan": false,
	});

	const handleCheckboxChangeKategori = (event) => {
		const { name, checked } = event.target;
		setCheckboxesKategori({ ...checkboxesKategori, [name]: checked });
	};

	// Checkbox Rating
	const [checkboxesRating, setCheckboxesRating] = useState({
		"5.0": false,
		"4.0 ke atas": false,
		"3.0 ke atas": false,
		"2.0 ke atas": false,
		"1.0 ke atas": false,
	});

	const handleCheckboxChangeRating = (event) => {
		const { name, checked } = event.target;
		setCheckboxesRating({ ...checkboxesRating, [name]: checked });
	};

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(8);
	const lastPostIndex = currentPage * postPerPage;
	const firstPostIndex = lastPostIndex - postPerPage;

	return (
		<div className="main-shop-page-container">
			<Navbar />
			<Header />
			<div className="main-filter-container">
				<div className="filter-container">
					<div className="filter-height">
						<h1>
							<Icon
								icon="iconoir:filter"
								className="icon-filter"
							/>
							Filter
						</h1>

						<div className="lokasi-filter-container">
							<h2>Lokasi</h2>
							{Object.entries(checkboxesLokasi).map(
								([location, isCheckedLokasi]) => (
									<label
										key={location}
										className="custom-checkbox"
									>
										<input
											type="checkbox"
											name={location}
											checked={isCheckedLokasi}
											onChange={
												handleCheckboxChangeLokasi
											}
										/>
										<span className="checkmark">
											{isCheckedLokasi && (
												<Icon
													icon="mingcute:check-fill"
													className="mark-icon"
												/>
											)}
										</span>
										{location}
									</label>
								)
							)}
							<p>Lihat selengkapnya</p>
						</div>

						<div className="horizontal-line-filter"></div>

						<div className="harga-filter-container">
							<h2>Harga</h2>
							<div className="min-harga input-area-harga">
								<div className="rp-area">Rp</div>
								<input
									className="harga-input"
									type="text"
									name="minharga"
									placeholder="Harga Minimum"
								></input>
							</div>

							<div className="max-harga input-area-harga">
								<div className="rp-area">Rp</div>
								<input
									className="harga-input"
									type="text"
									name="maxharga"
									placeholder="Harga Maksimum"
								></input>
							</div>

							<div className="button-terapkan-harga-filter">
								Terapkan
							</div>
						</div>

						<div className="horizontal-line-filter"></div>

						<div className="kategori-filter-container">
							<h2>Kategori</h2>
							{Object.entries(checkboxesKategori).map(
								([kategori, isCheckedKategori]) => (
									<label
										key={kategori}
										className="custom-checkbox"
									>
										<input
											type="checkbox"
											name={kategori}
											checked={isCheckedKategori}
											onChange={
												handleCheckboxChangeKategori
											}
										/>
										<span className="checkmark">
											{isCheckedKategori && (
												<Icon
													icon="mingcute:check-fill"
													className="mark-icon"
												/>
											)}
										</span>
										{kategori}
									</label>
								)
							)}
						</div>

						<div className="horizontal-line-filter"></div>

						<div className="rating-filter-container">
							<h2>Rating</h2>
							{Object.entries(checkboxesRating).map(
								([rating, isCheckedRating]) => (
									<label
										key={rating}
										className="custom-checkbox"
									>
										<input
											type="checkbox"
											name={rating}
											checked={isCheckedRating}
											onChange={
												handleCheckboxChangeRating
											}
										/>
										<span className="checkmark">
											{isCheckedRating && (
												<Icon
													icon="mingcute:check-fill"
													className="mark-icon"
												/>
											)}
										</span>
										<Icon
											icon="material-symbols:star"
											className="icon-star-filter"
										/>
										{rating}
									</label>
								)
							)}
						</div>

						<div className="horizontal-line-filter"></div>

						<div className="last-add-filter-container">
							<h2>Terakhir ditambahkan</h2>
							<div className="last-add-button-container">
								<div className="last-add-button">7 Hari</div>
								<div className="last-add-button">14 Hari</div>
								<div className="last-add-button">1 Bulan</div>
								<div className="last-add-button">3 Bulan</div>
							</div>
						</div>
					</div>
				</div>

				<div className="sort-menu-shop-container">
					<div className="dropdown-sort-menu-container">
						<p>Urutkan</p>

						<div className="terkait sort-button">Terkait</div>
						<div className="terbaru sort-button">Terbaru</div>
						<div className="terlaris sort-button">Terlaris</div>

						<div className="dropdown-menu" ref={dropdownRef}>
							<div
								className="selected-option"
								onClick={toggleDropdown}
							>
								{selectedOption}
								<Icon
									icon="bx:chevron-down"
									className={`arrow-icon ${
										isDropdownOpen ? "open" : ""
									}`}
								/>
							</div>
							<ul
								className={`dropdown-list ${
									isDropdownOpen ? "show" : ""
								}`}
							>
								{renderOptions()}
							</ul>
						</div>
					</div>

					<div className="card-barang-shop-container">
						{times.map((_, index) => (
							<div className="card-barang-shop">
								<div className="gambar-barang-shop">
									<img src={image} />
								</div>

								<div className="info-barang-shop-container">
									<h3>Nama Barang</h3>
									<h4>RP. xx.xxx</h4>
									<p>
										<Icon
											icon="material-symbols:star"
											className="icon-star-filter"
										/>
										4.8 | xx+ terjual
									</p>

									<div className="button-beli-shop">
										<a>Beli</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default ShopPage;
