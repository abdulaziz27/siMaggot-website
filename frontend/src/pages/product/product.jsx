import { useState, useEffect } from "react";
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

import { useParams, Link } from "react-router-dom";
import { getProductById, getAllProducts } from "../../api";


function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [productsRekomendasi, setProductsRekomendasi] = useState([]);
  const [productsPilihan, setProductsPilihan] = useState([]);


  const fetchRekomendasiProducts = async () => {
    try {
      const productsData = await getAllProducts();
      const rekomendasi = productsData.data.slice(0, 6);
      setProductsRekomendasi(rekomendasi);
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  const fetchProductsPilihan = async () => {
    try {
      const productsData = await getAllProducts();
      const selectedProduct = productsData.data.slice(6, 10); // Adjust the range as needed
      setProductsPilihan(selectedProduct);
    } catch (error) {
      console.error("Error fetching shop selected products:", error);
    }
  };

  useEffect(() => {
    fetchProductsPilihan();
    fetchRekomendasiProducts();
  }, []);

  useEffect(() => {
    getProductById(productId).then(data => {
      setProduct(data);
    });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Header />

      <div className="productInfo">
        <div className="productContainer">

          <div className="heroProduk">
            <img className="heroImg" src={product.data.cover} alt="productImage" />
            <div className="ketImg">
              <img className="selectedKetImg" src={productImage1} alt="productImage" />
              <img src={productImage2} alt="productImage" />
              <img src={productImage3} alt="productImage" />
              <img src={productImage4} alt="productImage" />
              <img src={productImage5} alt="productImage" />
            </div>
          </div>

          <div className="infoBarang">
            <h2>{product.data.productName}</h2>
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
            <h1 className="hargaBarang">Rp. {product.data.price.toLocaleString()}</h1>
            <div className="atributJual">
              <p>Kategori</p>
              <div className="listPakan">
                <a>{product.data.category}</a>
              </div>
              {/* <p>Jenis Pakan</p>
              <div className="listPakan">
                <a>Maggot only</a>
                <a>Kibble Maggot</a>
              </div> */}
              <p>Ukuran</p>
              <div className="listUkuran">
                <a>1000 gram</a>
              </div>
              <p>Kuantitas</p>
              <div className="kuantitas">
                <ButtonKuantitas />
                <p>tersisa {product.data.stock} buah</p>
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
              <h3>Agyl's Toko</h3>
              <p className="statusToko">Aktif 25 menit lalu</p>
              <a className="chatSekarang">
                <span><Icon icon="ep:chat-dot-round" color="#728a1a" /></span>
                <p className="hubungiToko">Chat Sekarang</p>
              </a>
              <Link to={`/store/${product.data.sellerId}`} className="kunjungiToko">
                <span><Icon icon="bi:shop-window" /></span>
                <p className="hubungiToko">Kunjungi Toko</p>
              </Link>
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
            <p dangerouslySetInnerHTML={{ __html: product.data.description.replace(/\n/g, '<br />') }} />
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
            {productsPilihan.map((selectedProduct) => (
              <Barang
                key={selectedProduct.id}
                gambarBarangR={selectedProduct.cover}
                namaBarangR={selectedProduct.productName}
                hargaBarangR={selectedProduct.price.toLocaleString()}
                ratingBarangR={selectedProduct.rating}
                barangTerjualR={`${selectedProduct.sold}+`}
              />
            ))}
          </div>
          <div className="rekomendasiProduk">
            <ListRekomendasi titleList="Lainnya di toko ini" productsRekomendasi={productsRekomendasi} />
            <hr />
            <ListRekomendasi titleList="Pilihan lainnya untukmu" productsRekomendasi={productsRekomendasi} />
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
  return (
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


export default Product;