import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import swal from "sweetalert";
import {
  getSellerProducts,
  getAuthenticateSeller,
  deleteProduct,
  updateProduct,
} from "../../../api";

const ProductListOption = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editProductId, setEditProductId] = useState(null);
  const [editedProductName, setEditedProductName] = useState("");
  const [editedProductCover, setEditedProductCover] = useState("");
  const [editedProductPrice, setEditedProductPrice] = useState("");
  const [editedProductStock, setEditedProductStock] = useState("");
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authenticateSeller = await getAuthenticateSeller();
        const sellerId = authenticateSeller.data.sellerId;
        const response = await getSellerProducts(sellerId);

        const products =
          response.data && Array.isArray(response.data) ? response.data : [];
        setSellerProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Terjadi kesalahan mengambil produk:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);

      const authenticateSeller = await getAuthenticateSeller();
      const sellerId = authenticateSeller.data.sellerId;

      const updatedProductsResponse = await getSellerProducts(sellerId);
      const updatedProducts = updatedProductsResponse.data;

      setSellerProducts(updatedProducts);

      swal("Success!", "Berhasil menghapus produk.", "success");
    } catch (error) {
      console.error("Error saat menghapus produk:", error.message);
    }
  };

  const handleEditProduct = (productId, productName, price, stock) => {
    console.log("Editing product:", productId);
    setEditProductId(productId);
    setEditedProductName(productName);
    setEditedProductPrice(price);
    setEditedProductStock(stock);

    setIsEditFormVisible(true);
  };

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        productName: editedProductName,
        price: editedProductPrice,
        stock: editedProductStock,
      };

      // Filter out undefined values
      const filteredProductData = Object.fromEntries(
        Object.entries(updatedProductData).filter(([_, value]) => value !== undefined)
      );

      await updateProduct(editProductId, filteredProductData);

      const authenticateSeller = await getAuthenticateSeller();
      const sellerId = authenticateSeller.data.sellerId;

      const updatedProductsResponse = await getSellerProducts(sellerId);
      const updatedProducts = updatedProductsResponse.data;

      setSellerProducts(updatedProducts);
      setEditProductId(null);
      setEditedProductName("");
      setEditedProductPrice("");
      setEditedProductStock("");

      swal("Success!", "Berhasil mengupdate produk.", "success");
    } catch (error) {
      console.error("Error saat mengupdate produk:", error.message);
    }
  };

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
                    onClick={() =>
                      handleEditProduct(
                        product.id,
                        product.productName,
                        product.price,
                        product.stock
                      )
                    }
                  />
                  <Icon
                    icon="bi:trash3"
                    className="list-product-seller-delete-icon"
                    onClick={() => handleDeleteProduct(product.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Tampilkan formulir pengeditan produk jika sedang dalam mode pengeditan */}
        {isEditFormVisible && editProductId && (
          <div className="edit-product-form-container">
            <h2>Edit Product</h2>
            <label>
              Product Name:
              <input
                type="text"
                value={editedProductName}
                onChange={(e) => setEditedProductName(e.target.value)}
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={editedProductPrice}
                onChange={(e) => setEditedProductPrice(e.target.value)}
              />
            </label>
            <label>
              Stock:
              <input
                type="text"
                value={editedProductStock}
                onChange={(e) => setEditedProductStock(e.target.value)}
              />
            </label>
            <button onClick={handleUpdateProduct}>Update Product</button>
            <button onClick={() => { setEditProductId(null); setIsEditFormVisible(false); }}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListOption;