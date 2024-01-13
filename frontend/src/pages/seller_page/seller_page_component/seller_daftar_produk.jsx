import React from "react";
import { Icon } from "@iconify/react";
import "../seller_page.css";
import image from "../../../assets/seller/maggot_seller.png";

const ProductListOption = () => {
	return (
		<div className="home-seller-option-menu-container">
			<div className="list-product-seller-option-menu-content">
				<div className="list-product-seller-option-menu-header">
					<h1>Daftar Produk</h1>
					<div className="tambah-product-list-seller-option-menu-button">
						<Icon icon="charm:plus" />
						Tambah Produk
					</div>
				</div>

				<div className="list-product-seller-option-search-filter-container">
					<div className="list-product-seller-option-search-content">
						<Icon
							icon="bi:search"
							className="search-list-product-seller-icon"
						/>
						<input
							type="text"
							placeholder="Cari nama produk"
							spellCheck="false"
						></input>
					</div>

					<div className="list-product-seller-option-filter-container">
						<div className="list-product-seller-option-filter-wrapper">
							<h3>Etalase</h3>
							<Icon
								icon="charm:chevron-down"
								className="chevron-list-product-seller-filter-icon"
							/>
						</div>

						<div className="list-product-seller-option-filter-wrapper">
							<h3>Kategori</h3>
							<Icon
								icon="charm:chevron-down"
								className="chevron-list-product-seller-filter-icon"
							/>
						</div>

						<div className="list-product-seller-option-filter-wrapper">
							<h3>Urutkan</h3>
							<Icon
								icon="charm:chevron-down"
								className="chevron-list-product-seller-filter-icon"
							/>
						</div>
					</div>
				</div>

				<div className="list-product-seller-option-header-product-information-container">
					<div className="list-product-seller-checkbox-item-container">
						<label className="list-product-seller-checkbox-content">
							<input type="checkbox" />
							<span className="checkmark-list-product-seller">
								<Icon
									icon="mingcute:check-fill"
									className="mark-icon-list-product-seller"
								/>
							</span>
						</label>
						<h2>Info Produk (5)</h2>
					</div>

					<div className="list-product-seller-information-item-container">
						<h2>Terjual</h2>
						<h2>Harga</h2>
						<h2>Stock</h2>
					</div>
				</div>

				<div className="horizontal-line-list-product-seller-option"></div>

				<div className="list-product-seller-option-item-price-fill-container">
					<label className="list-product-seller-checkbox-content">
						<input type="checkbox" />
						<span className="checkmark-list-product-seller">
							<Icon
								icon="mingcute:check-fill"
								className="mark-icon-list-product-seller"
							/>
						</span>
					</label>

					<div className="list-product-seller-information-item-fill-wrapper">
						<div className="list-product-seller-information-item-fill-content">
							<div className="list-product-seller-image-item-container">
								<div className="list-product-seller-image-content">
									<img src={image}></img>
								</div>
								<p>
									Maggot, Belatung Kaya Nutrisi dan Bermanfaat
									untuk Lingkungan
								</p>
							</div>

							<div className="list-product-seller-information-item-fill-container">
								<div className="list-product-seller-sold-item-content">
									<h2>1</h2>
								</div>
								<div className="list-product-seller-price-item-content">
									<h2>30000 - 50000</h2>
								</div>
								<div className="list-product-seller-stock-item-content">
									<h2>12</h2>
								</div>
							</div>

							<div className="list-product-seller-icon-edit-delete-container">
								<Icon
									icon="bi:pencil-square"
									className="list-product-seller-edit-icon"
								/>
								<Icon
									icon="bi:trash3"
									className="list-product-seller-delete-icon"
								/>
							</div>
						</div>

						<div className="list-product-seller-view-varian-product-button">
							Lihat Varian Produk
						</div>
					</div>
				</div>

				<div className="horizontal-line-list-product-seller-option"></div>

				<div className="list-product-seller-option-item-price-fill-container">
					<label className="list-product-seller-checkbox-content">
						<input type="checkbox" />
						<span className="checkmark-list-product-seller">
							<Icon
								icon="mingcute:check-fill"
								className="mark-icon-list-product-seller"
							/>
						</span>
					</label>

					<div className="list-product-seller-information-item-fill-wrapper">
						<div className="list-product-seller-information-item-fill-content">
							<div className="list-product-seller-image-item-container">
								<div className="list-product-seller-image-content">
									<img src={image}></img>
								</div>
								<p>
									Maggot, Belatung Kaya Nutrisi dan Bermanfaat
									untuk Lingkungan
								</p>
							</div>

							<div className="list-product-seller-information-item-fill-container">
								<div className="list-product-seller-sold-item-content">
									<h2>1</h2>
								</div>
								<div className="list-product-seller-price-item-content">
									<h2>30000 - 50000</h2>
								</div>
								<div className="list-product-seller-stock-item-content">
									<h2>12</h2>
								</div>
							</div>

							<div className="list-product-seller-icon-edit-delete-container">
								<Icon
									icon="bi:pencil-square"
									className="list-product-seller-edit-icon"
								/>
								<Icon
									icon="bi:trash3"
									className="list-product-seller-delete-icon"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="horizontal-line-list-product-seller-option"></div>

				<div className="list-product-seller-option-item-price-fill-container">
					<label className="list-product-seller-checkbox-content">
						<input type="checkbox" />
						<span className="checkmark-list-product-seller">
							<Icon
								icon="mingcute:check-fill"
								className="mark-icon-list-product-seller"
							/>
						</span>
					</label>

					<div className="list-product-seller-information-item-fill-wrapper">
						<div className="list-product-seller-information-item-fill-content">
							<div className="list-product-seller-image-item-container">
								<div className="list-product-seller-image-content">
									<img src={image}></img>
								</div>
								<p>
									Maggot, Belatung Kaya Nutrisi dan Bermanfaat
									untuk Lingkungan
								</p>
							</div>

							<div className="list-product-seller-information-item-fill-container">
								<div className="list-product-seller-sold-item-content">
									<h2>1</h2>
								</div>
								<div className="list-product-seller-price-item-content">
									<h2>30000 - 50000</h2>
								</div>
								<div className="list-product-seller-stock-item-content">
									<h2>12</h2>
								</div>
							</div>

							<div className="list-product-seller-icon-edit-delete-container">
								<Icon
									icon="bi:pencil-square"
									className="list-product-seller-edit-icon"
								/>
								<Icon
									icon="bi:trash3"
									className="list-product-seller-delete-icon"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="horizontal-line-list-product-seller-option"></div>

				<div className="list-product-seller-option-item-price-fill-container">
					<label className="list-product-seller-checkbox-content">
						<input type="checkbox" />
						<span className="checkmark-list-product-seller">
							<Icon
								icon="mingcute:check-fill"
								className="mark-icon-list-product-seller"
							/>
						</span>
					</label>

					<div className="list-product-seller-information-item-fill-wrapper">
						<div className="list-product-seller-information-item-fill-content">
							<div className="list-product-seller-image-item-container">
								<div className="list-product-seller-image-content">
									<img src={image}></img>
								</div>
								<p>
									Maggot, Belatung Kaya Nutrisi dan Bermanfaat
									untuk Lingkungan
								</p>
							</div>

							<div className="list-product-seller-information-item-fill-container">
								<div className="list-product-seller-sold-item-content">
									<h2>1</h2>
								</div>
								<div className="list-product-seller-price-item-content">
									<h2>30000 - 50000</h2>
								</div>
								<div className="list-product-seller-stock-item-content">
									<h2>12</h2>
								</div>
							</div>

							<div className="list-product-seller-icon-edit-delete-container">
								<Icon
									icon="bi:pencil-square"
									className="list-product-seller-edit-icon"
								/>
								<Icon
									icon="bi:trash3"
									className="list-product-seller-delete-icon"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="horizontal-line-list-product-seller-option"></div>

				<div className="list-product-seller-option-item-price-fill-container">
					<label className="list-product-seller-checkbox-content">
						<input type="checkbox" />
						<span className="checkmark-list-product-seller">
							<Icon
								icon="mingcute:check-fill"
								className="mark-icon-list-product-seller"
							/>
						</span>
					</label>

					<div className="list-product-seller-information-item-fill-wrapper">
						<div className="list-product-seller-information-item-fill-content">
							<div className="list-product-seller-image-item-container">
								<div className="list-product-seller-image-content">
									<img src={image}></img>
								</div>
								<p>
									Maggot, Belatung Kaya Nutrisi dan Bermanfaat
									untuk Lingkungan
								</p>
							</div>

							<div className="list-product-seller-information-item-fill-container">
								<div className="list-product-seller-sold-item-content">
									<h2>1</h2>
								</div>
								<div className="list-product-seller-price-item-content">
									<h2>30000 - 50000</h2>
								</div>
								<div className="list-product-seller-stock-item-content">
									<h2>12</h2>
								</div>
							</div>

							<div className="list-product-seller-icon-edit-delete-container">
								<Icon
									icon="bi:pencil-square"
									className="list-product-seller-edit-icon"
								/>
								<Icon
									icon="bi:trash3"
									className="list-product-seller-delete-icon"
								/>
							</div>
						</div>

						<div className="list-product-seller-view-varian-product-button">
							Lihat Varian Produk
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductListOption;
