import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../article/article_card.css";
import { Icon } from "@iconify/react";

const ArticleComponent = () => {
	const articleData = [
		{
			title: "Budidaya Maggot dan Potensi Keuntungannya",
			summary:
				"Mendengar kata maggot bagi sebagian awan mungkin masih terdengar asing di telinga. Namun, ketika mendengar kata belatung mungkin sudah sering kita dengar dan lebih familiar karena bentuknya yang menggelikan dan membuat bulu kuduk merinding.",
			date: "14 Oktober 2023",
		},
		{
			title: "Tangani Sampah Organik dengan Budi Daya Maggot",
			summary:
				"Budi daya maggot atau larva lalat jenis black soldier fly (BSF) di Desa Margoyoso, Salaman mulai digalakkan. Hal ini bertujuan untuk mengurai permasalahan sampah. Sebab, maggot akan mengonsumsi berbagai jenis sampah organik sejak menetas dari telur.",
			date: "14 Desember 2022",
		},
		{
			title: "Pelatihan Pemasaran Produk Olahan Hasil Budidaya Maggot Melalui E-Commerce",
			summary:
				"Mahasiswa KKN Institut Teknologi Telkom Purwokerto Mengajak Pengelola TPS Dalam Pelatihan Pemasaran Produk Olahan Hasil Budidaya Maggot Melalui E-commerce: Meningkatkan Akses Pasar dan Potensi Pendapatan Petani",
			date: "9 Januari 2023",
		},
		{
			title: "Budidaya Maggot dan Potensi Keuntungannya",
			summary:
				"Mendengar kata maggot bagi sebagian awan mungkin masih terdengar asing di telinga. Namun, ketika mendengar kata belatung mungkin sudah sering kita dengar dan lebih familiar karena bentuknya yang menggelikan dan membuat bulu kuduk merinding.",
			date: "14 Oktober 2023",
		},
		{
			title: "Tangani Sampah Organik dengan Budi Daya Maggot",
			summary:
				"Budi daya maggot atau larva lalat jenis black soldier fly (BSF) di Desa Margoyoso, Salaman mulai digalakkan. Hal ini bertujuan untuk mengurai permasalahan sampah. Sebab, maggot akan mengonsumsi berbagai jenis sampah organik sejak menetas dari telur.",
			date: "14 Desember 2022",
		},
	];

	const imageFolder_artikel = require.context(
		"../../assets/article",
		false,
		/\.(png|jpe?g|svg)$/
	);

	const imageFiles_artikel = imageFolder_artikel.keys();
	const [cardsPerPage, setCardsPerPage] = useState(4);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		if (currentIndex + 1 <= imageFiles_artikel.length - cardsPerPage) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};
	const updateCardsPerPage = () => {
		if (window.innerWidth <= 430) {
			setCardsPerPage(2);
		} else {
			setCardsPerPage(4);
		}
	};

	useEffect(() => {
		updateCardsPerPage();

		window.addEventListener("resize", updateCardsPerPage);

		return () => {
			window.removeEventListener("resize", updateCardsPerPage);
		};
	}, []);

	return (
		<div className="article-artikel-edukasi-container">
			<div className="article-title-artikel-edukasi">
				<h1>Artikel Edukasi</h1>
				<a href="/blog">Lihat Semua</a>
			</div>

			<div className="article-card-artikel-container">
				{imageFiles_artikel
					.slice(currentIndex, currentIndex + cardsPerPage)
					.map((imageFile_artikel, index) => {
						const articleIndex = currentIndex + index;
						const imageUrl = imageFolder_artikel(imageFile_artikel);

						return (
							<div className="article-card-artikel" key={index}>
								<div className="article-gambar-artikel">
									<img
										src={imageUrl}
										alt={`Product ${articleIndex + 1}`}
									/>
								</div>

								<div className="article-info-artikel-container">
									<Link to={`/artikel/${articleIndex + 1}`}>
										<h3>
											{articleData[articleIndex].title}
										</h3>
									</Link>

									<h4>{articleData[articleIndex].summary}</h4>

									<p>
										<Icon
											icon="bx:time-five"
											className="article-icon-time"
										/>
										{articleData[articleIndex].date}
									</p>
								</div>
							</div>
						);
					})}

				{currentIndex > 0 && (
					<a className="article-prev-button" onClick={handlePrev}>
						<Icon
							icon="bx:chevron-left"
							className="article-chevron chev-left-b"
						/>
					</a>
				)}

				{currentIndex + cardsPerPage < imageFiles_artikel.length && (
					<a className="article-next-button" onClick={handleNext}>
						<Icon
							icon="bx:chevron-right"
							className="article-chevron chev-right-b"
						/>
					</a>
				)}
			</div>
		</div>
	);
};

export default ArticleComponent;
