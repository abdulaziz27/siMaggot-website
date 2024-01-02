import { useState } from "react";
import "./product.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import shopLogo from "../../assets/product/toko.jpeg";
import productImage1 from "../../assets/product/img.png";
import productImage2 from "../../assets/product/img1.png";
import productImage3 from "../../assets/product/img2.png";
import productImage4 from "../../assets/product/img3.png";
import productImage5 from "../../assets/product/img4.png";


function Product() {
    return (
      <>
        <Navbar />
        <Header />
        <div className="productInfo">
            <div className="productContainer">

                <div className="heroProduk">
                  <img className="heroImg" src={productImage1} alt="productImage" />
                  <div className="ketImg">
                    <img className="selectedKetImg" src={productImage1} alt="productImage" />
                    <img src={productImage2} alt="productImage" />
                    <img src={productImage3} alt="productImage" />
                    <img src={productImage4} alt="productImage" />
                    <img src={productImage5} alt="productImage" />
                  </div>
                </div>

                <div className="infoBarang">
                  <h2>Pakan Makanan Landak Mini Hedgehog Maggot Kering Kibble Magot Tendo</h2>
                  <div className="nilaiJualBarang">
                    <p>
                      <span className="star">&#9733;</span>{"   "}
                      4.9
                    </p>
                    <p>|</p>
                    <p>135 Penilaian</p>
                    <p>|</p>
                    <p>428 Terjual</p>
                  </div>
                  <h1 className="hargaBarang">Rp. 31.900 - Rp. 79.00</h1>
                  <div className="atributJual">
                    <p>Jenis Pakan</p>
                    <div className="listPakan">
                      <a>Maggot only</a>
                      <a>Kibble Maggot</a>
                    </div>
                    <p>Ukuran</p>
                    <div className="listUkuran">
                      <a>130 gram</a>
                      <a>220 gram</a>
                      <a>300 gram</a>
                    </div>
                    <p>Kuantitas</p>
                    <div className="kuantitas">
                      <ButtonKuantitas />
                      <p>tersisa 257 buah</p>
                    </div>
                  </div>
                  <button className="keranjang"> + Keranjang</button>
                  <button className="beliLangsung">Beli Langsung</button>
                  <div className="tandai">
                    <a className="favorit">
                      <span><Icon icon="ph:heart" color="#728a1a" /></span>
                      <p>Favorit</p>
                    </a>
                    <a className="bagikan" href="./">
                      <span><Icon icon="material-symbols:share-outline" color="#728a1a" /></span>
                      <p>Bagikan</p>
                    </a>
                  </div>
                </div>

                <div className="toko">
                  <div className="profilToko">
                    <img src={shopLogo} alt="Logo Toko" />
                    <h3>Tendo Animal Feed</h3>
                    <p className="statusToko">Aktif 25 menit lalu</p>
                    <a className="chatSekarang">
                      <span><Icon icon="ep:chat-dot-round" color="#728a1a" /></span>
                      <p className="hubungiToko">Chat Sekarang</p>
                    </a>
                    <a className="kunjungiToko">
                      <span><Icon icon="bi:shop-window" /></span>
                      <p className="hubungiToko">Kunjungi Toko</p>
                    </a>          
                  </div>

                  <div className="infoToko">
                    <p>Penilaian</p>
                    <p className="nilaiToko">2,8 ribu</p>
                    <p>Bergabung</p>
                    <p className="nilaiToko">19 bulan lalu</p>
                    <p>Produk</p>
                    <p className="nilaiToko">20</p>
                    <p>Pengikut</p>
                    <p className="nilaiToko">1,2 ribu</p>
                  </div>
                </div>

                <div className="deskripsiProduk">
                  <h2 className="title">Deskripsi Produk</h2>
                  <p>
                    Maggot Kering / Kibble Magot Pakan Makanan Landak Mini Hedgehog Tendo <br /><br />

                    Suplemen Terbaik untuk mendukung tumbuh kembang landak mini lebih optimal. Mengandung maggot yang kaya akan protein. 
                    Sangat cocok untuk landak mini yang melahirkan/ hamil, kandungan proteinnya sangat tinggi untuk mendukung proses menyusui landak.
                    Kandungan Probiotiknya juga sangat baik untuk mendukung pencernaan landak kesayangan kalian <br /><br />

                    Kaya akan ISO Protein, ISO LIPID, Pro vitamin dan Carotenoid <br /><br />

                    Kegunaan: <br />
                    -Mempercepat pertumbuhan landak mini, meningkatan dan mempertajam warna landak mini <br />
                    -Meningkatkan Imunitas & nafsu makan landak mini <br />
                    -Progress landak mini kesayangan anda semakin optimal <br /><br />

                    Takaran Makan: <br />
                    Landak Mini Ukuran Dewasa: 2x sehari dengan masing masing pemberian sebesar 1,5 sendok makan. <br />
                    Landak Mini Ukuran anak anak: 2x sehari dengan masing masing pemberian sebesar 1 sendok teh. <br /><br />

                    Nutrisi <br />
                    Protein 45% <br />
                    Lemak 25% <br />
                    Serat 7% <br />
                    Abu 5% <br />
                    Kelembapan 10% <br />
                    Carotenoid 8% <br /><br />

                    Berat Bersih: 130 gram (Maggot Only), 220 gram (Kibble Maggot), 300 gram (Maggot Only) <br />
                  </p>
                  <hr />
                </div>

                <div className="ulasanPembeli">
                  <h2 className="title">Ulasan Pembeli</h2>
                  <div className="summaryRating">
                    <div className="ratingProduk">
                      <p className="ratingBintang">
                        <span className="star">&#9733;</span>{"  "}
                        4.9<span className="outOf5"> / 5.0</span>
                      </p>
                      <p className="kepuasan">97% pembeli merasa puas</p>
                      <p className="jumlahRating">666 rating  135 ulasan</p>
                    </div>
                    <div className="filterRating">
                      <button className="selectedRating">Semua</button>
                      <button>5 Bintang (127)</button>
                      <button>4 Bintang (7)</button>
                      <button>3 Bintang (1)</button>
                      <button>2 Bintang (0)</button>
                      <button>1 Bintang (0)</button>
                    </div>
                  </div>
                  <div className="listUlasan">
                    <UlasanPembeli />
                    <hr />
                    <UlasanPembeli />
                    <hr />
                    <UlasanPembeli />
                    <hr />
                    <UlasanPembeli />
                  </div>
                </div>

                <div className="produkLain">
                  <p className="produkToko">Produk Pilihan Toko</p>
                  <Barang 
                    gambarBarangR={productImage1}
                    namaBarangR="Nama Barang 1"
                    hargaBarangR="xx.xxx"
                    ratingBarangR="4.8"
                    barangTerjualR="xx+"
                  />
                  <Barang 
                    gambarBarangR={productImage1}
                    namaBarangR="Nama Barang 1"
                    hargaBarangR="xx.xxx"
                    ratingBarangR="4.8"
                    barangTerjualR="xx+"
                  />
                  <Barang 
                    gambarBarangR={productImage1}
                    namaBarangR="Nama Barang 1"
                    hargaBarangR="xx.xxx"
                    ratingBarangR="4.8"
                    barangTerjualR="xx+"
                  />
                  <Barang 
                    gambarBarangR={productImage1}
                    namaBarangR="Nama Barang 1"
                    hargaBarangR="xx.xxx"
                    ratingBarangR="4.8"
                    barangTerjualR="xx+"
                  />
                </div>
                <div className="rekomendasiProduk">
                    <ListRekomendasi titleList="Lainnya di toko ini" />
                    <hr />
                    <ListRekomendasi titleList="Pilihan lainnya untukmu" />
              </div>
            </div>
        </div>
        <Footer />
      </>
    
  )
}

function ButtonKuantitas() {
  
  const [counter, setCounter] = useState(1);

  return (
    <>
      <div className="buttonKuantitas">
        <div className="counter">
          <button onClick={() => setCounter(counter - 1)}>一</button>
          <input type="text" value={counter} />
          <button onClick={() => setCounter(counter + 1)}>十</button>
        </div>
      </div>
      
    </>
  )
}

function UlasanPembeli() {
  return(
    <>
      <div className="ulasanContainer">
        <img src={productImage3} alt="userLogo" />
        <div className="isiUlasanPembeli">
          <h4 className="pengulasBarang">Username1</h4>
          <p className="jumlahBintang">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </p>
          <p className="tglJenisBarang">2023-10-21 | Variasi: Maggot only 130 gram</p>
          <p className="deskripsiUlasan">
            Barang sampai dengan selamat
          </p>
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
            gambarBarangR={productImage1}
            namaBarangR="Nama Barang 1"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />

          <Barang 
            gambarBarangR={productImage2}
            namaBarangR="Nama Barang 2"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />

          <Barang 
            gambarBarangR={productImage3}
            namaBarangR="Nama Barang 3"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />

          <Barang 
            gambarBarangR={productImage4}
            namaBarangR="Nama Barang 4"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />

          <Barang 
            gambarBarangR={productImage5}
            namaBarangR="Nama Barang 5"
            hargaBarangR="xx.xxx"
            ratingBarangR="4.8"
            barangTerjualR="xx+"
          />

          <Barang 
            gambarBarangR={productImage1}
            namaBarangR="Nama Barang 6"
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


export default Product;