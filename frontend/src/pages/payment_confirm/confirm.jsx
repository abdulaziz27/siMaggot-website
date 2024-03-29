import { useEffect, useState } from "react";
import "./confirm.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import methodIcon from "../../assets/payment_method/bni.png";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import isAuthenticated from "../../auth";

const Confirm = () => {
	const navigate = useNavigate();

	const handleStatusPembayaranClick = () => {
		navigate("/profile");
	};

	const handleBelanjaLagiClick = () => {
		navigate("/shop");
	};

	useEffect(() => {
		if (!isAuthenticated()) {
			swal("Warning!", "Login terlebih dahulu!", "warning").then(() => {
				navigate("/login");
			});
		}
	}, [navigate]);

	return (
		<>
			<Navbar />
			<Header />

			<div className="pembayaran">
				<div className="pembayaranContainer">
					<div className="batasPembayaran">
						<h2>Selesaikan pembayaran dalam</h2>
						<p className="timerPembayaran">23:59:10</p>
						<p className="ketBatas">Batas Akhir pembayaran</p>
						<h3>Kamis, 14 November 2023 00:00</h3>
					</div>
					<div className="atributPembayaran">
						<div className="metodePembayaran">
							<h3>Transfer Bank BNI</h3>
							<div className="iconMetode">
								<img src={methodIcon} alt="bank" />
							</div>
						</div>
						<div className="keteranganPembayaran">
							<div className="rekening">
								<label>Nomor rekening</label>
								<p className="nomorRekening">12345678901234</p>
								<div className="iconSalin">
									Salin
									<span>
										<Icon
											icon="mingcute:copy-fill"
											color="#728a1a"
										/>
									</span>
								</div>
							</div>
							<div className="total">
								<label>Total Pembayaran</label>
								<p className="totalPembayaran">Rp. 73.030</p>
								<div className="iconSalin">
									Salin
									<span>
										<Icon
											icon="mingcute:copy-fill"
											color="#728a1a"
										/>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="buttonPembayaran">
						<button className="cekPembayaran" onClick={handleStatusPembayaranClick}>
							Cek Status Pembayaran
						</button>
						<button className="belanjaLagi" onClick={handleBelanjaLagiClick}>Belanja Lagi</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Confirm;
