import { useEffect, useState } from "react";
import "./cart.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import productImage from "../../assets/cart/img.jpg";
import productImage1 from "../../assets/cart/img 1.jpg";
import productImage2 from "../../assets/cart/img2.jpg";

import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { getCart } from "../../api";


const dataBarang = [
  {
    id: 1,
    gambarBarang: { productImage },
    namaBarang: "Telur Maggot BSF Lalat Indukan Super 1 gram",
    hargaSatuan: "3.500",
    totalTiapBarang: "7.000"
  },

  {
    id: 2,
    gambarBarang: { productImage2 },
    namaBarang: "Tepung Maggot BSF - 1kg",
    hargaSatuan: "39.980",
    totalTiapBarang: "39.980"
  },

  {
    id: 3,
    gambarBarang: { productImage1 },
    namaBarang: "Telur Premium Dried Maggot / Maggot Kering BSF Flake 100gr",
    hargaSatuan: "17.550",
    totalTiapBarang: "17.550"
  }

]

function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const data = await getCart();
        console.log(data); // Log the data to inspect the structure
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
                    />
                  ))}
                </div>
              </div>
            ))}

          </div>

          <div className="rekomendasiBarang">
            <ListRekomendasi titleList="Terakhir Dilihat" />
            <hr />
            <ListRekomendasi titleList="Rekomendasi Untukmu" />
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

function JenisBarang({ gambarBarang, namaBarang, hargaSatuan, totalTiapBarang }) {
  return (
    <>
      <form action="" className="listBarang">
        <input type="checkbox" name="checkBarang" id="checkBarang" />
        <img className="productImage" src={gambarBarang} alt="Gambar Produk" />
        <label htmlFor="checkBarang" className="alignLeft">{namaBarang}</label>
        <p>Rp. {hargaSatuan}</p>
        <p><ButtonKuantitas /></p>
        <p className="totalTiapBarang">Rp. {totalTiapBarang}</p>
        <textarea className="isiCatatan" name="isiCatatan" id="isiCatatan" cols="30" rows="3"></textarea>
        <a className="catatanBeli">Tulis Catatan</a>
      </form>
    </>
  )
}


function ButtonKuantitas() {

  const [counter, setCounter] = useState(1);

  return (
    <>
      <div className="buttonKuantitas">
        <a className="trashIcon" onClick={() => setCounter(1)}>
          <Icon icon="bi:trash" color="red" />
        </a>
        <div className="counter">
          <button onClick={() => setCounter(counter - 1)}>一</button>
          <input type="text" value={counter} />
          <button onClick={() => setCounter(counter + 1)}>十</button>
        </div>
      </div>
    </>
  )
}



function ListRekomendasi({ titleList }) {
  return (
    <>
      <div className="rekomendasiContainer">
        <h2>{titleList}</h2>
        <a>Lihat Semua</a>
        <div className="barangRekomendasiContainer">
          <Barang
            gambarBarangR={productImage}
            namaBarangR="Nama Barang 1"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />

          <Barang
            gambarBarangR={productImage}
            namaBarangR="Nama Barang 2"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />

          <Barang
            gambarBarangR={productImage}
            namaBarangR="Nama Barang 3"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />

          <Barang
            gambarBarangR={productImage}
            namaBarangR="Nama Barang 4"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />


        </div>
      </div>
    </>
  )
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