import { useEffect, useState } from "react";
import "./cart.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import isAuthenticated from "../../auth";

import { getCart, editCartProduct, deleteCartItem, getAllProducts } from "../../api";


function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(null);

  const [productsRekomendasi, setProductsRekomendasi] = useState([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      swal("Warning!", "Login terlebih dahulu!", "warning").then(() => {
        navigate("/login");
      });
    }
  }, [navigate]);

  const fetchRekomendasiProducts = async () => {
    try {
      const productsData = await getAllProducts();
      const rekomendasi = productsData.data.slice(0, 4);
      setProductsRekomendasi(rekomendasi);
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  useEffect(() => {
    fetchRekomendasiProducts();
  }, []);

  const handleDeleteCartItem = async (productId) => {
    try {
      await deleteCartItem(productId);
      const updatedCartData = await getCart();
      setCartData(updatedCartData.data.carts);
      swal("Success!", "Berhasil delete item!", "success");
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const data = await getCart();
        console.log(data);
        setCartData(data.data.carts);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  if (!cartData) {
    return <div>Loading...</div>;
  }

  const handleBeliClick = () => {
    swal({
      title: "Pembelian Berhasil",
      text: "Terima kasih telah berbelanja!",
      icon: "success",
    }).then(() => {
      navigate("/check_out");
    });
  };

  // Group products by sellerId
  const productsBySeller = {};
  cartData.products.forEach(product => {
    const sellerId = product.seller.sellerId;
    if (!productsBySeller[sellerId]) {
      productsBySeller[sellerId] = [];
    }
    productsBySeller[sellerId].push(product);
  });

  const handleQuantityChange = async (productId, newQuantity) => {
    try {
      await editCartProduct(productId, newQuantity);
      const updatedCartData = await getCart();
      setCartData(updatedCartData.data.carts);
      console.log(setCartData);
    } catch (error) {
      console.error("Error editing cart product:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Header />

      <div className="keranjang">
        <div className="keranjang-container">

          <h1 className="titleKeranjang">Keranjang</h1>

          <div className="barangDibeli">
            <div className="headerBarangDibeli">
              <input type="checkbox" name="checkSemuaBarang" id="checkSemuaBarang" />
              <label htmlFor="checkSemuaBarang" className="alignLeft"> {" "} Pilih Semua</label>
              <p>Harga Satuan</p>
              <p>Kuantitas</p>
              <p className="totalTiapBarang">Total Harga</p>
            </div>

            {Object.keys(productsBySeller).map((sellerId) => (
              <div key={sellerId} className="tokoBarangDibeli">
                <input
                  type="checkbox"
                  className="checkToko"
                  name={`checkToko-${sellerId}`}
                  id={`checkToko-${sellerId}`}
                />
                <h2 className="namaToko">{productsBySeller[sellerId][0].seller.name}</h2>
                <a className="lokasiToko">{productsBySeller[sellerId][0].seller.address}</a>

                {/* Iterate over products of the current seller */}
                <div className="jenisBarangDibeli">
                  {productsBySeller[sellerId].map((product) => (
                    <JenisBarang
                      key={product.productId}
                      gambarBarang={product.cover}
                      namaBarang={product.productName}
                      hargaSatuan={product.price.toLocaleString()}
                      totalTiapBarang={(product.price * product.quantity).toLocaleString()}
                      quantity={product.quantity}
                      onQuantityChange={(newQuantity) => handleQuantityChange(product.productId, newQuantity)}
                      onDelete={() => handleDeleteCartItem(product.productId)}
                    />
                  ))}
                </div>
              </div>
            ))}

          </div>

          <div className="rekomendasiBarang">
            <ListRekomendasi titleList="Terakhir Dilihat" productsRekomendasi={productsRekomendasi} />
            <hr />
            <ListRekomendasi titleList="Rekomendasi Untukmu" productsRekomendasi={productsRekomendasi} />
          </div>

          <RingkasanBelanja cartData={cartData} handleBeliClick={handleBeliClick} />
        </div>
      </div>
      <Footer />
    </>

  )
}

function RingkasanBelanja({ cartData, handleBeliClick }) {

  const productsBySeller = {};
  cartData.products.forEach(product => {
    const sellerId = product.seller.sellerId;
    if (!productsBySeller[sellerId]) {
      productsBySeller[sellerId] = [];
    }
    productsBySeller[sellerId].push(product);
  });

  return (
    <div className="ringkasanBelanja-container">
      <div className="ringkasanBelanja">
        <h3>Ringkasan Belanja</h3>
        {Object.keys(productsBySeller).map((sellerId, index) => (
          <div key={sellerId}>
            <div className="daftarHarga">
              <p className="hargaBarangText">Total Harga ({productsBySeller[sellerId].length} barang)  -   Rp. {calculateTotalHarga(productsBySeller[sellerId]).toLocaleString()}</p >
            </div>
          </div>
        ))}
        <hr />
        <p className="totalHargaText">Total Harga - Rp. {cartData.total.toLocaleString()}</p>
        <button onClick={handleBeliClick}>Beli ({cartData.products.length})</button>
      </div>
    </div>
  );
}

function calculateTotalHarga(products) {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
}

function JenisBarang({ gambarBarang, namaBarang, hargaSatuan, totalTiapBarang, quantity, onQuantityChange, onDelete }) {
  const handleQuantityIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="listBarang">
      <input type="checkbox" name="checkBarang" id="checkBarang" />
      <img className="productImage" src={gambarBarang} alt="Gambar Produk" />
      <label htmlFor="checkBarang" className="alignLeft">{namaBarang}</label>
      <p>Rp. {hargaSatuan}</p>
      <div className="buttonKuantitas">
        <div className="trashButton" onClick={onDelete}>
          <Icon icon="bi:trash" color="red" />
        </div>
        <div className="counter">
          <button onClick={handleQuantityDecrement}>一</button>
          <input value={quantity} readOnly />
          <button onClick={handleQuantityIncrement}>十</button>
        </div>
      </div>
      <p className="totalTiapBarang">Rp. {totalTiapBarang}</p>
      <textarea className="isiCatatan" name="isiCatatan" id="isiCatatan" cols="30" rows="3"></textarea>
      <span className="catatanBeli">Tulis Catatan</span>
    </div>
  );
}


function ListRekomendasi({ titleList, productsRekomendasi }) {
  return (
    <>
      <div className="rekomendasiContainer">
        <h2>{titleList}</h2>
        <a>Lihat Semua</a>
        <div className="barangRekomendasiContainer">
          {productsRekomendasi.map((product) => (
            <Barang
              key={product.id}
              gambarBarangR={product.cover}
              namaBarangR={product.productName}
              hargaBarangR={product.price.toLocaleString()}
              ratingBarangR={product.rating}
              barangTerjualR={`${product.sold}+`}
            />
          ))}
        </div>
      </div>
    </>
  );
}


function Barang({ gambarBarangR, namaBarangR, hargaBarangR, ratingBarangR, barangTerjualR }) {
  return (
    <>
      <div className="barangContainer">
        <img className="productImage" src={gambarBarangR} alt="Gambar Produk" />
        <div className="deskripsiBarang">
          <h4>{namaBarangR}</h4>
          <h3>Rp. {hargaBarangR}</h3>
          <p>
            <span className="star">&#9733;</span>{"  "}
            {ratingBarangR} | {barangTerjualR} terjual
          </p>
          <div className="alignRight">
            <button>Beli</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default Cart;