import { useState } from "react";
import "./cart.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import productImage from "../../assets/cart/img.png";
import productImage1 from "../../assets/cart/img1.png";
import productImage2 from "../../assets/cart/img2.png";


const dataBarang = [
  {
    id:1,
    gambarBarang: {productImage},
    namaBarang: "Telur Maggot BSF Lalat Indukan Super 1 gram",
    hargaSatuan: "3.500",
    totalTiapBarang: "7.000"
  },

  {
    id:2,
    gambarBarang: { productImage2},
    namaBarang: "Tepung Maggot BSF - 1kg",
    hargaSatuan: "39.980",
    totalTiapBarang: "39.980"
  },

  {
    id:3,
    gambarBarang: { productImage1 },
    namaBarang: "Telur Premium Dried Maggot / Maggot Kering BSF Flake 100gr",
    hargaSatuan: "17.550",
    totalTiapBarang: "17.550"
  }

]


const Cart = () => {
    
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
                    <label htmlFor="checkSemuaBarang" className="alignLeft"> Pilih Semua</label>
                    <p>Harga Satuan</p>
                    <p>Kuantitas</p>
                    <p className="totalTiapBarang">Total Harga</p>
                </div>

                <div className="tokoBarangDibeli">
                  <input type="checkbox" className="checkToko" name="checkToko" id="checkToko" />
                  <h2 className="namaToko" >Toko Maggot Mantul</h2>
                  <a className="lokasiToko">Kab. Banyumas</a>
                  <div className="jenisBarangDibeli">
                    <JenisBarang 
                      gambarBarang={productImage}
                      namaBarang="Telur Maggot BSF Lalat Indukan Super 1 gram"
                      hargaSatuan="3.500"
                      totalTiapBarang="7.000"
                    />
                  </div>
                </div>

                <div className="tokoBarangDibeli">
                  <input type="checkbox" className="checkToko" name="checkToko" id="checkToko" />
                  <h2 className="namaToko" >Literally Maggot Store</h2>
                  <a className="lokasiToko">Jakarta Selatan</a>
                  <div className="jenisBarangDibeli">

                    <JenisBarang 
                      gambarBarang={productImage2}
                      namaBarang="Tepung Maggot BSF - 1kg" 
                      hargaSatuan="39.980"
                      totalTiapBarang="39.980"
                    />

                    <hr /> 

                    <JenisBarang 
                      gambarBarang={productImage1}
                      namaBarang="Telur Premium Dried Maggot / Maggot Kering BSF Flake 100gr" 
                      hargaSatuan="17.550"
                      totalTiapBarang="17.550"
                    />

                  </div>
                  
                </div>

                <TokoBarangDiBeli 
                  namaToko="Nama Toko 1"
                  lokasiToko="Kab. Lokasi Toko"
                  idBarang="0"
                />

              </div>

              <div className="rekomendasiBarang">
                <ListRekomendasi titleList="Terakhir Dilihat" />
                <hr />
                <ListRekomendasi titleList="Rekomendasi Untukmu" />
              </div>

              <div className="ringkasanBelanja-container">
                <div className="ringkasanBelanja">
                  <h3>Ringkasan Belanja</h3>
                  <div className="daftarHarga">
                    <p className="hargaBarangText">Total Harga (1 barang)</p>
                    <p className="hargaBarang">Rp. 7.000</p>
                    <p className="hargaBarangText">Total Harga (2 barang)</p>
                    <p className="hargaBarang">Rp. 57.530</p>
                  </div>
                  <hr />
                  <p className="totalHargaText">Total Harga </p>
                  <p className="totalHarga">Rp. 64.530</p>
                  <button>Beli (2)</button>
                </div>
              </div>

            </div>
        </div>
        <Footer />
      </>
    
  )
}


function TokoBarangDiBeli({namaToko, lokasiToko, idBarang}) {
  const [barang, setBarang] = useState(dataBarang);
  return (
    <>
      <div className="tokoBarangDibeli">
        <input type="checkbox" className="checkToko" name="checkToko" id="checkToko" />
        <h2 className="namaToko" >{namaToko}</h2>
        <a className="lokasiToko">{lokasiToko}</a>
        <div className="jenisBarangDibeli">
          <JenisBarang 
            gambarBarang={productImage}
            namaBarang={barang[0].namaBarang}
            hargaSatuan={barang[0].hargaSatuan}
            totalTiapBarang={barang[0].totalTiapBarang}
          />

        </div>
      </div>
    </>
  )
}


function JenisBarang({gambarBarang, namaBarang, hargaSatuan, totalTiapBarang}) {
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



function ListRekomendasi({titleList}) {
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


function Barang({gambarBarangR, namaBarangR, hargaBarangR, ratingBarangR, barangTerjualR}) {
  return(
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