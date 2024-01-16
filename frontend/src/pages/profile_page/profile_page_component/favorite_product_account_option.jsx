import React from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";

import { useState, useEffect } from "react";
import { getAllProducts, addProductToCart } from "../../../api";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const FavoriteProductAccountOption = () => {
	const navigate = useNavigate();
	const [favoriteProducts, setFavoriteProducts] = useState([]);

	useEffect(() => {
		const fetchFavoriteProducts = async () => {
			try {
				const response = await getAllProducts(true);
				// const slicing = response.data.slice(0, 6);
				setFavoriteProducts(response);
			} catch (error) {
				console.error("Error fetching favorite products:", error);
			}
		};

		fetchFavoriteProducts();
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

	return (
		<div className="favorite-page-account-option">
			<div className="favorite-page-header">
				<h1>Favorit Saya</h1>
			</div>

			<div className="horizontal-line-option-page"></div>

			<div className="favorite-page-sort-option-container">
				<h2>Urutkan</h2>
				<div className="favorite-sort-option">Terbaru Disimpan</div>
				<div className="favorite-sort-option">Terlama Disimpan</div>
				<div className="favorite-sort-option">Ulasan Terbanyak</div>
			</div>

			<div className="card-barang-favorite-page-container">
				{favoriteProducts.map((product) => (
					<div key={product.id} className="card-barang-favorite-page">
						<Link to={`/product/${product.id}`} className="gambar-barang-favorite-page">
							<img src={product.cover} alt={product.productName} />
						</Link>

						<div className="info-barang-favorite-page-container">
							<Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
								<h3>{product.productName}</h3>
								<h4>RP. {product.price}</h4>
								<p>
									<Icon
										icon="material-symbols:star"
										className="icon-star-filter-favorite-page"
									/>
									{product.rating} | {product.sold} terjual
								</p>
							</Link>
							<div
								className="button-beli-favorite-page"
								onClick={() => handleAddToCart(product.id)}>
								beli
							</div>
						</div>
					</div>
				))}

				<div class="pagination-favorite-product">
					<a href="#">
						<Icon
							icon="ic:round-chevron-left"
							className="favorite-chevron-button"
						/>
					</a>
					<a href="#">1</a>
					<a href="#" class="active-favorite">
						2
					</a>
					<a href="#">3</a>
					<a href="#">
						<Icon
							icon="ic:round-chevron-right"
							className="favorite-chevron-button"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default FavoriteProductAccountOption;
