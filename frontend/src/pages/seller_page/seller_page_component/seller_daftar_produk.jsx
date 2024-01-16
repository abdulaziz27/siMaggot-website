import React from "react";
import { Icon } from "@iconify/react";
import "../seller_page.css";
import { useState, useEffect } from "react";
import { getSellerProducts, GetAuthenticateSeller } from "../../../api";

const ProductListOption = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authenticateSeller = await GetAuthenticateSeller();
        const sellerId = authenticateSeller.data.sellerId;
        console.log("Seller ID:", sellerId);

        const response = await getSellerProducts(sellerId);

        const products =
          response.data && Array.isArray(response.data) ? response.data : [];
        console.log("API Response:", products);

        setSellerProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Terjadi kesalahan mengambil produk:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
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
            <h2>{`Info Produk (${sellerProducts.length})`}</h2>
          </div>

          <div className="list-product-seller-information-item-container">
            <h2>Terjual</h2>
            <h2>Harga</h2>
            <h2>Stock</h2>
          </div>
        </div>

        <div className="horizontal-line-list-product-seller-option"></div>
        {sellerProducts.map((product) => (
          <div
            key={product.id}
            className="list-product-seller-option-item-price-fill-container"
          >
            {/* Render individual product information */}
            {/* Use product.id, product.name, product.sold, etc. to access data */}
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
                    <img src={product.cover} alt="Product" />
                  </div>
                  <p>{product.productName}</p>
                </div>

                <div className="list-product-seller-information-item-fill-container">
                  <div className="list-product-seller-sold-item-content">
                    <h2>{product.sold}</h2>
                  </div>
                  <div className="list-product-seller-price-item-content">
                    <h2>{product.price}</h2>
                  </div>
                  <div className="list-product-seller-stock-item-content">
                    <h2>{product.stock}</h2>
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
        ))}
      </div>
    </div>
  );
};

export default ProductListOption;
