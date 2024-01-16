import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "../../profile_page.css";


import { getTransactions } from "../../../../api";
import { useNavigate } from "react-router-dom";

const AllTransactionProfileOption = () => {
	const [transactions, setTransactions] = useState([]);
	const [isCancelOrderOpen, setIsCancelOrderOpen] = useState(false);
	const [creationTime, setCreationTime] = useState(null);
	const navigate = useNavigate();

	const cancelOrderDropdown = () => {
		setIsCancelOrderOpen(!isCancelOrderOpen);
	};

	const closeMenu = () => {
		setIsCancelOrderOpen(false);
	};

	useEffect(() => {
		const fetchUserTransactions = async () => {
			try {
				const userTransactions = await getTransactions();
				setTransactions(userTransactions);

				if (userTransactions.length > 0) {
					setCreationTime(new Date(userTransactions[0].date));
				}
			} catch (error) {
				console.error('Error fetching user transactions:', error);
			}
		};

		fetchUserTransactions();
	}, []);

	const add24Hours = (date) => {
		const newDate = new Date(date);
		newDate.setHours(newDate.getHours() + 24);

		// Format Tgl
		const formattedDate = `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()}`;

		return formattedDate;
	};

	const handlePayNow = () => {
		navigate('/payment');
	};

	return (
		<div>
			{transactions.map((transaction) => (
				<div key={transaction.id}>
					<div className="transaction-item-account-header">
						<div className="row-direction-transaction">
							<h3>{transaction.products[0].seller.name}</h3>
							<div className="chat-button-transaction" onClick={() => navigate('/chat')}>
								<Icon
									icon="bi:chat-dots"
									className="chat-transaction-icon"
								/>
								<p>Chat</p>
							</div>

							<div className="store-button-transaction">
								<Icon
									icon="bi:shop-window"
									className="shop-transaction-icon"
								/>
								<p>Kunjungi Toko</p>
							</div>
						</div>

						<div>
							<p>{transaction.status}</p>
						</div>
					</div>

					<div className="horizontal-line-transaction"></div>

					<div className="item-transaction-information-contanier">
						{transaction.products.map((product) => (
							<div key={product.productId} className="item-transaction">
								<div className="row-direction-item-transaction">
									<img src={product.cover} alt={product.productName} />
									<div className="item-transaction-information">
										<h1>{product.productName}</h1>
										<p>Kategori: {product.category}</p>
										<h2>x{product.quantity}</h2>
									</div>
								</div>
								<h4>{`Rp. ${product.subtotal.toLocaleString()}`}</h4>
							</div>
						))}

						<div className="horizontal-line-item-transaction"></div>

					</div>

					<div className="horizontal-line-transaction"></div>

					<div className="transaction-item-account-footer">
						<div className="total-pay-item-transaction">
							<h1>Jumlah yang Harus Dibayar :</h1>
							<h2>{`Rp. ${transaction.total.toLocaleString()}`}</h2>
						</div>

						<div className="payment-time-button-container">
							<p>
								Bayar sebelum <u className="red-text">{creationTime ? add24Hours(creationTime) : '-'}</u> dengan Bank BNI
							</p>
							<div className="button-payment-transaction">
								<div className="pay-now-button" onClick={handlePayNow}>Bayar Sekarang</div>
								<div
									className="cancel-order-button"
									onClick={cancelOrderDropdown}
								>
									Batalkan Pesanan
								</div>
							</div>
						</div>
					</div>

					{isCancelOrderOpen && (
						<div className="profile-order-transaction-dropdown-container">
							<div className="profile-order-transaction-dropdown-content">
								<div className="order-transaction-dropdown-header">
									<h1>Pilih Alasan Pembatalan</h1>
									<div
										className="order-transaction-dropdown-close-button"
										onClick={closeMenu}
									>
										<Icon icon="carbon:close-outline" />
									</div>
								</div>

								<div className="horizontal-line-order-transaction-dropdown"></div>

								<div className="cancel-order-transaction-alert-container">
									<Icon
										icon="mdi:bell-circle-outline"
										className="icon-alert-order-transaction"
									/>
									<p>
										Mohon pilih alasan pembatalan. Tindakan ini akan
										membatalkan semua produk dalam pesanan. Tindakan
										tidak dapat dibatalkan.
									</p>
								</div>

								<div className="cancel-order-option-reason-container">
									<div className="cancel-order-option-reason-content">
										<input
											type="radio"
											name="cancelOrderOption"
											id="cancelOrder1"
										/>

										<label
											className="cancel-order-option-reason"
											htmlFor="cancelOrder1"
										>
											<p>Ingin mengubah alamat pengiriman</p>
										</label>
									</div>

									<div className="cancel-order-option-reason-content">
										<input
											type="radio"
											name="cancelOrderOption"
											id="cancelOrder2"
										/>

										<label
											className="cancel-order-option-reason"
											htmlFor="cancelOrder2"
										>
											<p>
												Ingin memasukkan/mengubah kode voucher
											</p>
										</label>
									</div>

									<div className="cancel-order-option-reason-content">
										<input
											type="radio"
											name="cancelOrderOption"
											id="cancelOrder3"
										/>

										<label
											className="cancel-order-option-reason"
											htmlFor="cancelOrder3"
										>
											<p>
												Ingin mengubah pesanan (ukuran, warna,
												jumlah, dll)
											</p>
										</label>
									</div>

									<div className="cancel-order-option-reason-content">
										<input
											type="radio"
											name="cancelOrderOption"
											id="cancelOrder4"
										/>

										<label
											className="cancel-order-option-reason"
											htmlFor="cancelOrder4"
										>
											<p>Tidak mudah melanjutkan pembayaran</p>
										</label>
									</div>

									<div className="cancel-order-option-reason-content">
										<input
											type="radio"
											name="cancelOrderOption"
											id="cancelOrder5"
										/>

										<label
											className="cancel-order-option-reason"
											htmlFor="cancelOrder5"
										>
											<p>
												Menemukan harga yang lebih murah di toko
												lain
											</p>
										</label>
									</div>

									<div className="cancel-order-option-reason-content">
										<input
											type="radio"
											name="cancelOrderOption"
											id="cancelOrder6"
										/>

										<label
											className="cancel-order-option-reason"
											htmlFor="cancelOrder6"
										>
											<p>Tidak Ingin membeli lagi</p>
										</label>
									</div>

									<div className="cancel-order-option-reason-content">
										<input
											type="radio"
											name="cancelOrderOption"
											id="cancelOrder7"
										/>

										<label
											className="cancel-order-option-reason"
											htmlFor="cancelOrder7"
										>
											<p>Lainnya</p>
										</label>
									</div>
								</div>

								<div className="horizontal-line-order-transaction-dropdown"></div>

								<div className="button-cancel-order-dropdown-option-contanier">
									<div
										className="button-cancel-order-dropdown-option later-cancel-order-button"
										onClick={closeMenu}
									>
										NANTI SAJA
									</div>
									<div className="button-cancel-order-dropdown-option dropdown-cancel-order-button">
										BATALKAN PESANAN
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default AllTransactionProfileOption;
