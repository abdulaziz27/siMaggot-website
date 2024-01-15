import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
//import { useSwipeable } from "react-swipeable";
import "./home_page.css";
import { getAllProducts } from "../../api";

// Components
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
// import HeaderLogin from "../../components/header/header_login";

// Slide Banner
import image1 from "../../assets/kategori_produk_banner/big_banner.png";
import image2 from "../../assets/kategori_produk_banner/width_banner_1.png";
import image3 from "../../assets/kategori_produk_banner/width_banner_2.png";

// for banner
const imageFolder = require.context(
	"../../assets/images",
	false,
	/\.(png|jpe?g|svg)$/
);

// for artikel
const imageFolder_artikel = require.context(
	"../../assets/images",
	false,
	/\.(png|jpe?g|svg)$/
);

const HomePage = () => {
	const [slideIndex, setSlideIndex] = useState(1);
	const [imagePaths, setImagePaths] = useState([]);
	const [isHovered, setIsHovered] = useState(false);

	// slice for card produk
	const imageFiles = imageFolder.keys().slice(0, 6);

	const plusSlides = (n) => {
		let newIndex = slideIndex + n;

		if (newIndex < 1) {
			newIndex = imagePaths.length;
		} else if (newIndex > imagePaths.length) {
			newIndex = 1;
		}

		setSlideIndex(newIndex);
	};

	const currentSlide = (n) => {
		if (n >= 1 && n <= imagePaths.length) {
			setSlideIndex(n);
		}
	};

	useEffect(() => {
		const importAll = (r) => r.keys().map(r);
		const imageFiles = importAll(
			require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
		);
		setImagePaths(imageFiles);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			plusSlides(1);
		}, 7000);

		return () => {
			clearInterval(interval);
		};
	}, [slideIndex, imagePaths]);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	// Swipe
	{
		/*
	const cardSwipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe(-1),
		onSwipedRight: () => handleSwipe(1),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	const handleSwipe = (direction) => {
		const newIndex = currentIndex + direction;
		const maxIndex = Math.ceil(imageFiles.length / 2) - 1; // Assuming each card takes 2 images
		setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
	};
	*/
	}

	// Artikel
	const imageFiles_artikel = imageFolder_artikel.keys();
	const [cardsPerPage, setCardsPerPage] = useState(4);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		if (currentIndex + 1 <= imageFiles_artikel.length - cardsPerPage) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const updateCardsPerPage = () => {
		if (window.innerWidth <= 430) {
			setCardsPerPage(2);
		} else {
			setCardsPerPage(4);
		}
	};

	useEffect(() => {
		updateCardsPerPage();

		window.addEventListener("resize", updateCardsPerPage);

		return () => {
			window.removeEventListener("resize", updateCardsPerPage);
		};
	}, []);

	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [products, setProducts] = useState([]);

	const fetchFeaturedProducts = async () => {
		try {
			const productsData = await getAllProducts();
			const featured = productsData.data.slice(0, 6);
			setFeaturedProducts(featured);
		} catch (error) {
			console.error("Error fetching featured products:", error);
		}
	};

	useEffect(() => {
		fetchFeaturedProducts();
	}, []);

	const fetchAllProducts = async () => {
		try {
			const productsData = await getAllProducts();
			const latest = productsData.data.slice(0, 6);
			setProducts(latest);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	const renderProducts = () => {
		return products.map((product) => (
			<div className="card-barang" key={product.id}>
				<div className="gambar-barang">
					{product.cover ? (
						<img src={product.cover} alt={product.productName} />
					) : (
						<p>Cover image not available</p>
					)}
				</div>

				<div className="info-barang-container">
					<h3>{product.productName}</h3>
					<h4>Rp. {product.price.toLocaleString()}</h4>
					<p>
						<Icon
							icon="material-symbols:star"
							className="icon-star-filter"
						/>
						{product.rating} | {product.stock} terjual
					</p>

					<div className="button-beli">
						<a href={`/product/${product.id}`}>Beli</a>
					</div>
				</div>
			</div>
		));
	};

	return (
		<div className="main-page-container">
			<Navbar />
			<Header />

			<div className="slide-banner-container">
				<div
					className="slide-event-banner"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{imagePaths.map((image, index) => (
						<div
							key={index}
							className={`mySlides fade ${index + 1 === slideIndex ? "active" : ""
								}`}
						>
							<img src={image} alt={`Slide ${index + 1}`} />
						</div>
					))}

					<a
						className={`prev ${isHovered ? "visible" : ""}`}
						onClick={() => plusSlides(-1)}
					>
						<Icon icon="bx:chevron-left" className="chevron" />
					</a>
					<a
						className={`next ${isHovered ? "visible" : ""}`}
						onClick={() => plusSlides(1)}
					>
						<Icon icon="bx:chevron-right" className="chevron" />
					</a>

					<div className="dot-slide-character-banner">
						{imagePaths.map((image, index) => (
							<span
								key={index}
								className={`dot ${index + 1 === slideIndex ? "active-dot" : ""
									}`}
								onClick={() => currentSlide(index + 1)}
							></span>
						))}
					</div>
				</div>
			</div>

			<div className="kategori-produk-container">
				<div className="title">
					<h1>Kategori Produk</h1>
				</div>

				<div className="kategori-wrapper">
					<div className="big-category">
						<div className="big-category-image">
							<img src={image1}></img>
						</div>

						<a>
							<div
								className="big-category-title"
								id="button-kategori"
							>
								<h2>Produk Maggot</h2>
								<Icon
									icon="bx:right-arrow-alt"
									className="right-arrow"
								/>
							</div>
						</a>
					</div>

					<div className="wide-category">
						<div className="kategori-2" id="kategori-2">
							<div className="wide-category-image">
								<img src={image2}></img>
							</div>

							<a>
								<div
									className="wide-category-title"
									id="button-kategori"
								>
									<h2>Alat-Alat dan Perawatan</h2>
									<Icon
										icon="bx:right-arrow-alt"
										className="right-arrow"
									/>
								</div>
							</a>
						</div>

						<div className="kategori-2" id="kategori-2">
							<div className="wide-category-image">
								<img src={image3}></img>
							</div>

							<a>
								<div
									className="wide-category-title"
									id="button-kategori"
								>
									<h2>Jasa & Paket Bundling</h2>
									<Icon
										icon="bx:right-arrow-alt"
										className="right-arrow"
									/>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="horizontal-line">
				<hr></hr>
			</div>

			<div className="produk-terlaris-container">
				<div className="title-produk-terlaris">
					<h1>Produk Terlaris</h1>
					<a href="./shop">Lihat Semua</a>
				</div>

				<div className="card-barang-container">
					{featuredProducts.map((product, index) => (
						<div className="card-barang" key={index}>
							<div className="gambar-barang">
								<img src={product.cover} alt={`Product ${index + 1}`} />
							</div>

							<div className="info-barang-container">
								<h3>{product.productName}</h3>
								<h4>Rp. {product.price.toLocaleString()}</h4>
								<p>
									<Icon
										icon="material-symbols:star"
										className="icon-star-filter"
									/>
									{product.rating} | {product.stock} terjual
								</p>

								<div className="button-beli">
									<a href={`/product/${product.id}`}>Beli</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="horizontal-line">
				<hr></hr>
			</div>

			<div className="produk-terbaru-container">
				<div className="title-produk-terbaru">
					<h1>Produk Terbaru</h1>
					<a href="./shop">Lihat Semua</a>
				</div>

				<div className="card-barang-container">
					{renderProducts()}
				</div>
			</div>

			<div className="horizontal-line">
				<hr></hr>
			</div>

			<div className="artikel-edukasi-container">
				<div className="title-artikel-edukasi">
					<h1>Artikel Edukasi</h1>
					<a>Lihat Semua</a>
				</div>

				<div className="card-artikel-container">
					{imageFiles_artikel
						.slice(currentIndex, currentIndex + cardsPerPage)
						.map((imageFile_artikel, index) => {
							const imageUrl = imageFolder(imageFile_artikel);

							return (
								<div className="card-artikel" key={index}>
									<div className="gambar-artikel">
										<img
											src={imageUrl}
											alt={`Product ${index + 1}`}
										/>
									</div>

									<div className="info-artikel-container">
										<a>
											<h3>
												Maggot, Belatung Kaya Nutrisi
												dan Bermanfaat untuk Lingkungan
											</h3>
										</a>

										<h4>
											Maggot merupakan larva lalat tentara
											hitam atau black soldier fly [BSF].
											Ukurannya 0,3 cm sampai 1,5 cm....
										</h4>

										<p>
											<Icon
												icon="bx:time-five"
												className="icon-time"
											/>
											14 Oktober 2023
										</p>
									</div>
								</div>
							);
						})}

					{currentIndex > 0 && (
						<a className="prev-button" onClick={handlePrev}>
							<Icon
								icon="bx:chevron-left"
								className="chevron chev-left-b"
							/>
						</a>
					)}

					{currentIndex + cardsPerPage <
						imageFiles_artikel.length && (
							<a className="next-button" onClick={handleNext}>
								<Icon
									icon="bx:chevron-right"
									className="chevron chev-right-b"
								/>
							</a>
						)}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default HomePage;
