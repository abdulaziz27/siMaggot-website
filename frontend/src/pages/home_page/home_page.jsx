import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
//import { useSwipeable } from "react-swipeable";
import "./home_page.css";
import { getAllProducts } from "../../api";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

// Components
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
// import HeaderLogin from "../../components/header/header_login";

// Slide Banner
import image1 from "../../assets/kategori_produk_banner/big_banner.png";
import image2 from "../../assets/kategori_produk_banner/width_banner_1.png";
import image3 from "../../assets/kategori_produk_banner/width_banner_2.png";
import ArticleComponent from "../../components/article/article_card";

const HomePage = () => {
	const [slideIndex, setSlideIndex] = useState(1);
	const [imagePaths, setImagePaths] = useState([]);
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();

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
						<Link to={`/product/${product.id}`}>Beli</Link>
					</div>
				</div>
			</div>
		));
	};

	const handleAddToCart = () => {
		swal("Berhasil ditambahkan ke keranjang!", {
			icon: "success",
			buttons: {
				confirm: "Lihat Keranjang",
			},
		}).then((willNavigate) => {
			if (willNavigate) {
				navigate("/cart");
			}
		});
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
							className={`mySlides fade ${
								index + 1 === slideIndex ? "active" : ""
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
								className={`dot ${
									index + 1 === slideIndex ? "active-dot" : ""
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
					<Link to="./shop">Lihat Semua</Link>
				</div>

				<div className="card-barang-container">
					{featuredProducts.map((product, index) => (
						<div className="card-barang" key={index}>
							<Link
								to={`/product/${product.id}`}
								className="gambar-barang"
							>
								<img
									src={product.cover}
									alt={`Product ${index + 1}`}
								/>
							</Link>

							<div className="info-barang-container">
								<Link
									to={`/product/${product.id}`}
									className="link-barang"
									style={{ textDecoration: "none" }}
								>
									<h3>{product.productName}</h3>
									<h4>
										Rp. {product.price.toLocaleString()}
									</h4>
									<p>
										<Icon
											icon="material-symbols:star"
											className="icon-star-filter"
										/>
										{product.rating} | {product.stock}{" "}
										terjual
									</p>
								</Link>
								<div
									className="button-beli"
									onClick={handleAddToCart}
								>
									beli
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
					<Link to="./shop">Lihat Semua</Link>
				</div>

				<div className="card-barang-container">{renderProducts()}</div>
			</div>

			<div className="horizontal-line">
				<hr></hr>
			</div>

			<ArticleComponent />

			<Footer />
		</div>
	);
};

export default HomePage;
