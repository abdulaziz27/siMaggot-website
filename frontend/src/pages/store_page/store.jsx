import React from 'react';
import { useEffect, useState } from "react";
import "./store.css";
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

const Store = () => {

    const [currentView, setCurrentView] = useState("products");
    const [selectedFilter, setSelectedFilter] = useState("terkait");
    
    const handleSwitchView = (view) => {
        setCurrentView(view);
      };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);

        // Belum ada logika sorting barang

      };

    return (
      <>
        <Navbar />
        <Header />
        <div className="store"> 
            <div className="store-container">
                <div className="infoToko">
                    <div className="profilToko">
                        <img src={shopLogo} alt="Logo Toko" />
                        <div className='isiProfilToko'>
                            <h3>Tendo Animal Feed</h3>
                            <p className="statusToko">Aktif 25 menit lalu</p>
                            <div className='tombolProfilToko'>
                                <a className="chatSekarang">
                                    <span><Icon icon="ep:chat-dot-round" color="#728a1a" /></span>
                                    <p className="hubungiToko">Chat Penjual</p>
                                </a>
                                <a className="shareToko">
                                    <span><Icon icon="material-symbols-light:share-outline" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="statistikToko">
                        <div className='isiStatistikToko'>
                            <p>Penilaian</p>
                            <p>Produk</p>
                        </div>
                        <div className='isiStatistikToko'>
                            <p className="nilaiToko">2,8 ribu</p>
                            <p className="nilaiToko">20</p>
                        </div>
                        <div className='isiStatistikToko'>
                            <p>Bergabung</p>
                            <p>Pengikut</p>
                        </div>
                        <div className='isiStatistikToko'>
                            <p className="nilaiToko">19 bulan lalu</p>
                            <p className="nilaiToko">1,2 ribu</p>
                        </div>
                    </div>
                </div>

                <div className="storeContent">
                    <div className="gantiHalaman">
                    <button onClick={() => handleSwitchView("products")} className={currentView === "products" ? "active" : ""}>
                        Produk
                    </button>
                    <button onClick={() => handleSwitchView("reviews")} className={currentView === "reviews" ? "active" : ""}>
                        Ulasan
                    </button>
                    </div>

                    <hr className='batasHalaman'/>

                    {currentView === "products" && (

                        <div className="barangJual">
                            <div className="filterBarang">
                                <p>Urutkan</p>
                                <button
                                    className={selectedFilter === "terkait" ? "selectedFilter" : ""}
                                    onClick={() => handleFilterChange("terkait")}
                                    >
                                    Terkait
                                </button>
                                    <button
                                    className={selectedFilter === "terbaru" ? "selectedFilter" : ""}
                                    onClick={() => handleFilterChange("terbaru")}
                                    >
                                    Terbaru
                                </button>
                                    <button
                                    className={selectedFilter === "terlaris" ? "selectedFilter" : ""}
                                    onClick={() => handleFilterChange("terlaris")}
                                    >
                                    Terlaris
                                </button>

                                <select id="filterHarga">
                                    <option value="noFilter">Harga</option>
                                    <option value="hargaRendah">Harga Terendah</option>
                                    <option value="hargaTinggi">Harga Tertinggi</option>
                                </select>
                            </div>
                            <div className="listBarang">
                                <ListBarangStore />
                            </div>
                            <div className="paginationStoreBarang"></div>
                        </div>
                    )}

                    {currentView === "reviews" && (

                        <div className="ulasanBarang">
                            <ListUlasan />
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer />
      </>
    
  )
}

// pagination barang
const itemsPerPage = 24;

const ListBarangStore = ({ titleList }) => {
  const products = [
    { image: productImage1, nama: "Nama Barang 1", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage2, nama: "Nama Barang 2", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage3, nama: "Nama Barang 3", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage4, nama: "Nama Barang 4", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage5, nama: "Nama Barang 5", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 6", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 1", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage2, nama: "Nama Barang 2", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage3, nama: "Nama Barang 3", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage4, nama: "Nama Barang 4", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage5, nama: "Nama Barang 5", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 6", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 1", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage2, nama: "Nama Barang 2", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage3, nama: "Nama Barang 3", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage4, nama: "Nama Barang 4", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage5, nama: "Nama Barang 5", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 6", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 1", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage2, nama: "Nama Barang 2", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage4, nama: "Nama Barang 4", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage5, nama: "Nama Barang 5", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 6", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage3, nama: "Nama Barang 3", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage4, nama: "Nama Barang 4", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage5, nama: "Nama Barang 5", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 6", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage1, nama: "Nama Barang 1", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage2, nama: "Nama Barang 2", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage3, nama: "Nama Barang 3", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage2, nama: "Nama Barang 2", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
      { image: productImage3, nama: "Nama Barang 3", harga: "xx.xxx", rating: "4.8", terjual: "xx+" },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="listBarangContainer">
        <div className="isiBarangContainer">
          {currentProducts.map((product, index) => (
            <Barang
              key={index}
              gambarBarangR={product.image}
              namaBarangR={product.nama}
              hargaBarangR={product.harga}
              ratingBarangR={product.rating}
              barangTerjualR={product.terjual}
            />
          ))}
        </div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        paginate={paginate}
        currentPage={currentPage}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </>
  );
};


const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, handlePrevClick, handleNextClick }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="paginationStore">
        <li className='paginationShortcut'>
          <a onClick={handlePrevClick} href="javascript:void(0)">
            <Icon icon="uiw:left" />
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <div className={`paginationAngka ${number === currentPage ? 'currentPagination' : ''}`}>
                <a onClick={() => paginate(number)} href="javascript:void(0)">
                {number}
                </a>
            </div>
            </li>
        ))}
        <li className='paginationShortcut'>
          <a onClick={handleNextClick} href="javascript:void(0)">
            <Icon icon="uiw:right" />
          </a>
        </li>
      </ul>
    </>
  );
};
  
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


function ListUlasan() {
    const ulasanData = [
        { fotoUser: productImage1, usernameU: "username", bintangUlasan: "5", tglUlasan: "2023-10-27", jenisBarangU: "Maggot only 130 gram", deskripsiUlasan: "Barang sampai dengan selamat 1",},
        { fotoUser: productImage2, usernameU: "username2", bintangUlasan: "4", tglUlasan: "2023-10-26", jenisBarangU: "Maggot only 131 gram", deskripsiUlasan: "Barang sampai dengan selamat 2",},
        { fotoUser: productImage3, usernameU: "username3", bintangUlasan: "3", tglUlasan: "2023-10-25", jenisBarangU: "Maggot only 132 gram", deskripsiUlasan: "Barang sampai dengan selamat 3",},
        { fotoUser: productImage4, usernameU: "username4", bintangUlasan: "2", tglUlasan: "2023-10-24", jenisBarangU: "Maggot only 133 gram", deskripsiUlasan: "Barang sampai dengan selamat 4",},
        { fotoUser: productImage5, usernameU: "username5", bintangUlasan: "1", tglUlasan: "2023-10-23", jenisBarangU: "Maggot only 134 gram", deskripsiUlasan: "Barang sampai dengan selamat 5",},
        { fotoUser: productImage1, usernameU: "username6", bintangUlasan: "5", tglUlasan: "2023-10-22", jenisBarangU: "Maggot only 135 gram", deskripsiUlasan: "Barang sampai dengan selamat 6",},
        { fotoUser: productImage2, usernameU: "username2", bintangUlasan: "3", tglUlasan: "2023-10-21", jenisBarangU: "Maggot only 136 gram", deskripsiUlasan: "Barang sampai dengan selamat 7",},
        { fotoUser: productImage3, usernameU: "username3", bintangUlasan: "3", tglUlasan: "2023-10-25", jenisBarangU: "Maggot only 132 gram", deskripsiUlasan: "Barang sampai dengan selamat 3",},
        { fotoUser: productImage4, usernameU: "username4", bintangUlasan: "2", tglUlasan: "2023-10-24", jenisBarangU: "Maggot only 133 gram", deskripsiUlasan: "Barang sampai dengan selamat 4",},
        { fotoUser: productImage1, usernameU: "username6", bintangUlasan: "5", tglUlasan: "2023-10-22", jenisBarangU: "Maggot only 135 gram", deskripsiUlasan: "Barang sampai dengan selamat 6",},
        { fotoUser: productImage1, usernameU: "username", bintangUlasan: "5", tglUlasan: "2023-10-27", jenisBarangU: "Maggot only 130 gram", deskripsiUlasan: "Barang sampai dengan selamat 1",},
        { fotoUser: productImage2, usernameU: "username2", bintangUlasan: "4", tglUlasan: "2023-10-26", jenisBarangU: "Maggot only 131 gram", deskripsiUlasan: "Barang sampai dengan selamat 2",},
      ];
    
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(ulasanData.length / itemsPerPage);
    const [filterBintang, setFilterBintang] = useState(null);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const filteredUlasanData = filterBintang
        ? ulasanData.filter((ulasan) => parseInt(ulasan.bintangUlasan) === filterBintang)
        : ulasanData;

    const paginatedUlasanData = filteredUlasanData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleFilterChange = (bintang) => {
        setFilterBintang(bintang);
        setCurrentPage(1);
      };

    const calculateAverageRating = () => {
        if (ulasanData.length === 0) {
          return 0;
        }
      
        const totalBintang = ulasanData.reduce((sum, ulasan) => sum + parseInt(ulasan.bintangUlasan), 0);
        const averageRating = totalBintang / ulasanData.length;
        return averageRating.toFixed(1);
      };

    const calculateSatisfactionPercentage = () => {
        if (ulasanData.length === 0) {
          return 0;
        }
      
        const satisfiedUlasanCount = ulasanData.filter(ulasan => parseInt(ulasan.bintangUlasan) >= 3).length;
        const satisfactionPercentage = (satisfiedUlasanCount / ulasanData.length) * 100;
        return satisfactionPercentage.toFixed(0);
      };
        
      return (
        <>
          <div className="ulasanPembeli">
            <div className="summaryRating">
                <div className="ratingProduk">
                    <p className="ratingBintang">
                        <span className="star">&#9733;</span>{"  "}
                        {calculateAverageRating()}<span className="outOf5"> / 5.0</span>
                    </p>
                    <p className="kepuasan">{calculateSatisfactionPercentage()}% pembeli merasa puas</p>
                </div>
                <div className="filterRating">
                    <button onClick={() => handleFilterChange(null)} className={filterBintang === null ? 'selectedRating' : ''}>Semua</button>
                    <button onClick={() => handleFilterChange(5)} className={filterBintang === 5 ? 'selectedRating' : ''}>5 Bintang</button>
                    <button onClick={() => handleFilterChange(4)} className={filterBintang === 4 ? 'selectedRating' : ''}>4 Bintang</button>
                    <button onClick={() => handleFilterChange(3)} className={filterBintang === 3 ? 'selectedRating' : ''}>3 Bintang</button>
                    <button onClick={() => handleFilterChange(2)} className={filterBintang === 2 ? 'selectedRating' : ''}>2 Bintang</button>
                    <button onClick={() => handleFilterChange(1)} className={filterBintang === 1 ? 'selectedRating' : ''}>1 Bintang</button>
                </div>
            </div>
            <div className="listUlasan">
                {paginatedUlasanData.map((ulasan, index) => (
                    <React.Fragment key={index}>
                    <UlasanPembeli {...ulasan} />
                    {index !== paginatedUlasanData.length - 1 && <hr />}
                    </React.Fragment>
                ))}
                </div>
                <ul className="paginationStore"> 
                    <li>
                        <a onClick={handlePrevPage}>
                            <Icon icon="uiw:left" />
                        </a>
                    </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li>
                                <div className={currentPage === index + 1 ? 'currentPagination' : ''}>
                                    <a
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    >
                                    {index + 1}
                                    </a>
                                </div>
                            </li>
                        ))}
                    <li>
                        <a onClick={handleNextPage}>
                            <Icon icon="uiw:right" />
                        </a>
                    </li>
                </ul>
          </div>
        </>
      )
  }


  function UlasanPembeli({ fotoUser, usernameU, bintangUlasan, tglUlasan, jenisBarangU, deskripsiUlasan }) {
    const renderStarRating = () => {
      const starCount = parseInt(bintangUlasan);
      const stars = Array.from({ length: bintangUlasan }, (_, index) => (
        <span key={index} className={`star ${index < starCount ? 'filled' : ''}`}>&#9733;</span>
      ));
      return stars;
    };
  
    return (
      <>
        <div className="ulasanContainer">
          <img src={fotoUser} alt="userLogo" />
          <div className="isiUlasanPembeli">
            <h4 className="pengulasBarang">{usernameU}</h4>
            <p className="jumlahBintang">
              {renderStarRating()}
            </p>
            <p className="tglJenisBarang">{tglUlasan} | Variasi: {jenisBarangU}</p>
            <p className="deskripsiUlasan">{deskripsiUlasan}</p>
          </div>
        </div>
      </>
    );
  }
 


export default Store;