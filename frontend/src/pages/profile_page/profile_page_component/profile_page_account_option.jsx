import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import "../profile_page.css";

import image from "../../../assets/profile_page_image/profile_image.jpeg";

const ProfilePageAccountOption = () => {
	const months = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	];

	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

	const [showMonthDropdown, setShowMonthDropdown] = useState(false);
	const [showDayDropdown, setShowDayDropdown] = useState(false);
	const [showYearDropdown, setShowYearDropdown] = useState(false);

	const [selectedMonth, setSelectedMonth] = useState("Bulan");
	const [selectedDay, setSelectedDay] = useState("Tanggal");
	const [selectedYear, setSelectedYear] = useState("Tahun");

	const monthDropdownRef = useRef(null);
	const dayDropdownRef = useRef(null);
	const yearDropdownRef = useRef(null);

	const toggleMonthDropdown = () => {
		setShowMonthDropdown(!showMonthDropdown);
	};

	const toggleDayDropdown = () => {
		setShowDayDropdown(!showDayDropdown);
	};

	const toggleYearDropdown = () => {
		setShowYearDropdown(!showYearDropdown);
	};

	const handleMonthSelect = (selectedMonth) => {
		setSelectedMonth(selectedMonth);
		setShowMonthDropdown(false);
		updateDays(selectedMonth);
	};

	const handleDaySelect = (selectedDay) => {
		setSelectedDay(selectedDay);
		setShowDayDropdown(false);
	};

	const handleYearSelect = (selectedYear) => {
		setSelectedYear(selectedYear);
		setShowYearDropdown(false);
	};

	const updateDays = (selectedMonth) => {
		const daysInMonth = getDaysInMonth(selectedMonth);
		const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
		setDaysArray(daysArray);
	};

	const getDaysInMonth = (selectedMonth) => {
		switch (selectedMonth) {
			case "Januari":
			case "Maret":
			case "Mei":
			case "Juli":
			case "Agustus":
			case "Oktober":
			case "Desember":
				return 31;
			case "April":
			case "Juni":
			case "September":
			case "November":
				return 30;
			case "Februari":
				return 28;
			default:
				return 0;
		}
	};

	const [daysArray, setDaysArray] = useState([]);
	useEffect(() => {
		updateDays(selectedMonth);
	}, [selectedMonth]);

	const handleClickOutside = (event) => {
		if (
			monthDropdownRef.current &&
			!monthDropdownRef.current.contains(event.target)
		) {
			setShowMonthDropdown(false);
		}
		if (
			dayDropdownRef.current &&
			!dayDropdownRef.current.contains(event.target)
		) {
			setShowDayDropdown(false);
		}
		if (
			yearDropdownRef.current &&
			!yearDropdownRef.current.contains(event.target)
		) {
			setShowYearDropdown(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="profile-page-account-option">
			<div className="profile-page-header">
				<h1>Profil Saya</h1>
				<p>
					Kelola informasi profil Anda untuk mengontrol, melindungi
					dan mengamankan akun
				</p>
			</div>

			<div className="horizontal-line-option-page"></div>

			<div className="profile-information-change-container">
				<div className="profile-change-picture-container">
					<img src={image}></img>
					<div className="button-change-profile-picture">
						Pilih Gambar
					</div>
				</div>

				<div className="vertical-line-option-page"></div>

				<div className="profile-information-container">
					<div className="username-information flex-row-profile-page">
						<p>Username</p>
						<h2>iniUsername</h2>
					</div>
					<div className="name-change flex-row-profile-page">
						<p>Nama</p>
						<input
							className="profile-username-input"
							type="text"
							name="profile-username"
							placeholder="iniNama"
						></input>
					</div>
					<div className="email-change-information flex-row-profile-page">
						<p>E-mail</p>
						<h2>email@gmail.com</h2>
						<h3>Ubah</h3>
					</div>
					<div className="number-change-information flex-row-profile-page">
						<p>Nomor Telepon</p>
						<h2>081234567891</h2>
						<h3>Ubah</h3>
					</div>
					<div className="gender-information flex-row-profile-page">
						<p>Jenis Kelamin</p>
						<div className="radio-button-gender">
							<input
								type="radio"
								id="male"
								value="male"
								name="gender"
							/>
							<label htmlFor="male">Laki-laki</label>

							<input
								type="radio"
								id="female"
								value="female"
								name="gender"
							/>
							<label htmlFor="female">Perempuan</label>
						</div>
					</div>
					<div className="birth-date-information-container flex-row-profile-page">
						<p>Tanggal lahir</p>
						<div className="birth-date-information">
							<div
								className="birth-date-option-dropdown flex-row-birth-date-profile-page"
								onClick={toggleDayDropdown}
								ref={dayDropdownRef}
							>
								<h4>{selectedDay}</h4>
								<Icon
									icon="system-uicons:chevron-down"
									className={`chevron-birth-button ${
										showDayDropdown ? "open" : ""
									}`}
								/>

								{showDayDropdown && (
									<ul className="day-dropdown">
										{daysArray.map((day, index) => (
											<li
												key={index}
												onClick={() =>
													handleDaySelect(day)
												}
											>
												{day}
											</li>
										))}
									</ul>
								)}
							</div>

							<div
								className="birth-date-option-dropdown flex-row-birth-date-profile-page"
								onClick={toggleMonthDropdown}
								ref={monthDropdownRef}
							>
								<h4>{selectedMonth}</h4>
								<Icon
									icon="system-uicons:chevron-down"
									className={`chevron-birth-button ${
										showMonthDropdown ? "open" : ""
									}`}
								/>

								{showMonthDropdown && (
									<ul className="month-dropdown">
										{months.map((month, index) => (
											<li
												key={index}
												onClick={() =>
													handleMonthSelect(month)
												}
											>
												{month}
											</li>
										))}
									</ul>
								)}
							</div>

							<div
								className="birth-date-option-dropdown flex-row-birth-date-profile-page"
								onClick={toggleYearDropdown}
								ref={yearDropdownRef}
							>
								<h4>{selectedYear}</h4>
								<Icon
									icon="system-uicons:chevron-down"
									className={`chevron-birth-button ${
										showYearDropdown ? "open" : ""
									}`}
								/>

								{showYearDropdown && (
									<ul className="year-dropdown">
										{years.map((year, index) => (
											<li
												key={index}
												onClick={() =>
													handleYearSelect(year)
												}
											>
												{year}
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</div>
					<div className="button-save-information">Simpan</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePageAccountOption;
