import React, { useState, useRef, useEffect } from "react";
import "../shop_page/shop_page.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import swal from "sweetalert";
import { getAllProducts, addProductToCart } from "../../api";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
	const [products, setProducts] = useState([]);
	const options = ["Harga Tertinggi", "Harga Terendah"];
	const navigate = useNavigate();

	const fetchAllProducts = async () => {
		try {
			const productsData = await getAllProducts();
			setProducts(productsData.data);
			console.log(productsData);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	const handleAddToCart = async (productId) => {
		try {
			const response = await addProductToCart(productId, 1);
			swal(response.message, {
				icon: "success",
				buttons: {
					confirm: "Lihat Keranjang",
				},
			}).then((willNavigate) => {
				if (willNavigate) {
					navigate("/cart");
				}
			});
		} catch (error) {
			console.error("Error adding product to cart:", error);
			swal("Gagal menambahkan produk ke keranjang", {
				icon: "error",
			});
		}
	};

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

	const [isAllLocationOpen, setIsAllLocationOpen] = useState(false);

	const locationContainer = () => {
		setIsAllLocationOpen(!isAllLocationOpen);
	};

	const closeLocation = () => {
		setIsAllLocationOpen(false);
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

	const renderProducts = () => {
		return products.map((product) => (
			<div className="card-barang-shop" key={product.id}>
				<div className="gambar-barang-shop">
					{product.cover ? (
						<img src={product.cover} alt={product.productName} />
					) : (
						<p>Cover image not available</p>
					)}
				</div>

				<div className="info-barang-shop-container">
					<h3>{product.productName}</h3>
					<h4>Rp. {product.price.toLocaleString()}</h4>
					<p>
						<Icon
							icon="material-symbols:star"
							className="icon-star-filter"
						/>
						{product.rating} | {product.stock} terjual
					</p>

					<div
						className="button-beli-shop"
						onClick={() => handleAddToCart(product.id)}
					>
						beli
					</div>
				</div>
			</div>
		));
	};

	// Filter Dropdown
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isFilter430Open, SetisFilter430Open] = useState(true);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const shouldShowFilterContainer = windowWidth !== 500 || windowWidth <= 500;

	const Filter430Dropdown = () => {
		SetisFilter430Open(!isFilter430Open);
	};

	const closeFilter430 = () => {
		SetisFilter430Open(false);
	};

	return (
		<div className="main-shop-page-container">
			<Navbar />
			<Header />
			<div className="main-filter-container">
				<div
					className="filter-button-navbar"
					onClick={Filter430Dropdown}
				>
					<Icon
						icon="iconoir:filter"
						className="icon-filter-navbar"
					/>
					<h2>Filter</h2>
				</div>

				{isFilter430Open && shouldShowFilterContainer && (
					<div className="filter-container">
						<div className="filter-height">
							<div
								className="close-navbar-shop-filter-button"
								onClick={closeFilter430}
							>
								<Icon icon="mi:chevron-left" />
								Close Filter
							</div>
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

								<p onClick={locationContainer}>
									Lihat selengkapnya
								</p>
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
									<div className="last-add-button">
										7 Hari
									</div>
									<div className="last-add-button">
										14 Hari
									</div>
									<div className="last-add-button">
										1 Bulan
									</div>
									<div className="last-add-button">
										3 Bulan
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className="sort-menu-shop-container">
					<div className="filter-navbar-container">
						<div className="filter-navbar-shop-container">
							<div className="filter-navbar-shop-content"></div>
						</div>
					</div>

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
									className={`arrow-icon ${isDropdownOpen ? "open" : ""
										}`}
								/>
							</div>
							<ul
								className={`dropdown-list ${isDropdownOpen ? "show" : ""
									}`}
							>
								{renderOptions()}
							</ul>
						</div>
					</div>

					<div className="card-barang-shop-container">
						{renderProducts()}

						{/* <div className="pagination-shop">
							<a href="#">
								<Icon
									icon="ic:round-chevron-left"
									className="pagination-chevron-button"
								/>
							</a>
							<a href="#">1</a>
							<a href="#" className="active">
								2
							</a>
							<a href="#">3</a>
							<a href="#">4</a>
							<a href="#">5</a>
							<a href="#">6</a>
							<a href="#">
								<Icon
									icon="ic:round-chevron-right"
									className="pagination-chevron-button"
								/>
							</a>
						</div> */}
					</div>
				</div>

				{isAllLocationOpen && (
					<div className="location-filter-dropdown-container">
						<div className="location-filter-content">
							<div className="close-location-filter-button">
								<Icon
									icon="ph:arrow-circle-left-light"
									onClick={closeLocation}
								/>
							</div>

							<div className="location-filter-horizontal-line"></div>

							<div className="choose-location-filter-content"></div>
						</div>
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default ShopPage;
