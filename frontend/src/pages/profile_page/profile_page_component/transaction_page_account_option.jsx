import React, { useState } from "react";
import "../profile_page.css";
import AllTransactionProfileOption from "./transaction_page_account_compoentn/all_transaction_profile_option";
import CancelTransactionProfileOption from "./transaction_page_account_compoentn/cancel_transaction_profile_option";
import PayTransactionProfileOption from "./transaction_page_account_compoentn/pay_transaction_profile_option";
import PackedTransactionProfileOption from "./transaction_page_account_compoentn/packed_transaction_profile_option";
import DeliveryTransactionProfileOption from "./transaction_page_account_compoentn/delivery_transaction_account_option";
import DoneTransactionProfileOption from "./transaction_page_account_compoentn/done_transaction_account_option";

const TransactionProductAccountOption = () => {
	const [selectedOption, setSelectedOption] = useState("All");

	const renderSelectedPage = () => {
		switch (selectedOption) {
			case "All":
				return <AllTransactionProfileOption />;
			case "Pay":
				return <PayTransactionProfileOption />;
			case "Packed":
				return <PackedTransactionProfileOption />;
			case "Delivery":
				return <DeliveryTransactionProfileOption />;
			case "Done":
				return <DoneTransactionProfileOption />;
			case "Cancel":
				return <CancelTransactionProfileOption />;
			default:
				return <AllTransactionProfileOption />;
		}
	};

	return (
		<div className="transaction-page-account-option">
			<div className="transaction-page-header">
				<h1>Daftar Transaksi</h1>
			</div>

			<div className="transaction-sort-option-container">
				<h2>Status</h2>
				<div
					className={`transaction-sort-option ${
						selectedOption === "All" ? "selected" : ""
					}`}
					onClick={() => setSelectedOption("All")}
				>
					Semua
				</div>
				<div
					className={`transaction-sort-option ${
						selectedOption === "Pay" ? "selected" : ""
					}`}
					onClick={() => setSelectedOption("Pay")}
				>
					Belum Dibayar
				</div>
				<div
					className={`transaction-sort-option ${
						selectedOption === "Packed" ? "selected" : ""
					}`}
					onClick={() => setSelectedOption("Packed")}
				>
					Sedang Dikemas
				</div>
				<div
					className={`transaction-sort-option ${
						selectedOption === "Delivery" ? "selected" : ""
					}`}
					onClick={() => setSelectedOption("Delivery")}
				>
					Dikirim
				</div>
				<div
					className={`transaction-sort-option ${
						selectedOption === "Done" ? "selected" : ""
					}`}
					onClick={() => setSelectedOption("Done")}
				>
					Selesai
				</div>
				<div
					className={`transaction-sort-option ${
						selectedOption === "Cancel" ? "selected" : ""
					}`}
					onClick={() => setSelectedOption("Cancel")}
				>
					Dibatalkan
				</div>
			</div>

			<div className="transaction-item-account-container">
				{renderSelectedPage()}
			</div>
		</div>
	);
};

export default TransactionProductAccountOption;
