import React from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";

import image from "../../../assets/images/1335919.jpeg";

const FavoriteProductAccountOption = () => {
	// looping
	const times = Array(30).fill(null);

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
				{times.map((_, index) => (
					<div className="card-barang-favorite-page">
						<div className="gambar-barang-favorite-page">
							<img src={image} />
						</div>

						<div className="info-barang-favorite-page-container">
							<h3>Nama Barang</h3>
							<h4>RP. xx.xxx</h4>
							<p>
								<Icon
									icon="material-symbols:star"
									className="icon-star-filter-favorite-page"
								/>
								4.8 | xx+ terjual
							</p>

							<div className="button-beli-favorite-page">
								<a>Beli</a>
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
					<a href="#">4</a>
					<a href="#">5</a>
					<a href="#">6</a>
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
