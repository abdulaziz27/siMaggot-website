import { useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import LoginImage from "../../assets/login_register/login_hero.png";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { addSeller } from "../../api";

function RegisterSeller() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [description, setDescription] = useState("");
	const [cover, setCover] = useState("");
	const [imagePreview, setImagePreview] = useState("");
  
	const handleNameChange = (event) => {
	  setName(event.target.value);
	};
  
	const handeAddressChange = (event) => {
	  setAddress(event.target.value);
	};
  
	const handleDescriptionChange = (event) => {
	  setDescription(event.target.value);
	};
  
	const handleCoverChange = (event) => {
	  const file = event.target.files[0];
	  setCover(file);
  
	  const reader = new FileReader();
	  reader.onload = (e) => {
		const imagePreview = e.target.result;
		setImagePreview(imagePreview);
	  };
  
	  if (file) {
		reader.readAsDataURL(file);
	  }
	};
  
	const handleFormSubmit = async () => {
	  try {
		if (!name || !address || !description || !cover) {
		  console.error("Semua Bidang Harus diisi");
		  swal("Error!", "Semua Bidang Harus diisi.", "error");
		  return;
		}
  
		const formData = new FormData();
		formData.append("name", name);
		formData.append("address", address);
		formData.append("description", description);
		formData.append("cover", cover);
  
		const response = await addSeller(formData);
  
		if (response.status === "Success") {
		  const sellerId = response.data.sellerId;
		  swal("Success!", "Berhasil Mendaftarkan Seller.", "success").then(() => {
			navigate(`/seller`);
		  });
		} else {
		  console.error("Terjadi Kesalahan Dalam Menambahkan Produk", response);
		  swal("Error!", "Terjadi Kesalahan Dalam Menambahkan Produk.", "error");
		}
		setName("");
		setAddress("");
		setDescription("");
		setCover("");
	  } catch (error) {
		console.error("Terjadi Kesalahan", error);
		swal("Error!", "Terjadi Kesalahan.", "error");
	  }
	};

	return (
		<div className="loginregister">
			<h1>SiMaggot</h1>
			<div className="loginregister-container">
				<div className="greetingCard">
					<div className="backButton">
						<a href="./">
							<Icon
								icon="pajamas:go-back"
								color="white"
								className="icon-back"
							/>
						</a>
					</div>

					<img
						className="greetingImage"
						src={LoginImage}
						alt="GreetingCard"
					/>
				</div>

				<div className="loginform">
					<h2>Daftar Seller</h2>
					<form >
						<label htmlFor="name">Nama</label>
						<input
							className="username-register"
							type="text"
							id="name"
							placeholder="Masukkan Nama disini"
							value={name}
  onChange={handleNameChange}
						/>

						<label htmlFor="address">Alamat</label>
						<input
							className="address-register"
							type="text"
							id="address"
							placeholder="Masukkan Alamat disini"
							value={address}
							onChange={handeAddressChange}
						/>

						<label htmlFor="description">Deskripsi</label>
						<input
							className="description-register"
							type="text"
							id="description"
							placeholder="Masukkan Deskripsi disini"
							value={description}
							onChange={handleDescriptionChange}
						/>

						<label htmlFor="cover">Cover</label>
						<input
							className="cover-register"
							type="file"
							accept=".jpg, .jpeg, .png"
							multiple
							onChange={handleCoverChange}
						/>
						<div className="image-preview-register">
							{cover && (
								<div className="image-preview-container">
									<img src={imagePreview} alt="Preview" />
								</div>
							)}
						</div>

						<div className="centered">
							<div className="register-button-container">
								<button
														onClick={handleFormSubmit}

									type="button"
									className="registerButton"
								>
									Daftar
								</button>
							</div>

							<p className="otherAccount">atau masuk dengan</p>

							<div className="google-button-container">
								<a className="googleButton">
									<Icon
										icon="devicon:google"
										className="icon-google"
									/>
									<h3>Google</h3>
								</a>
							</div>

							<p className="existAccount">
								Sudah punya akun? <a href="./login">Masuk</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterSeller;
