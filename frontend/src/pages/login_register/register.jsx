import { useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import LoginImage from "../../assets/login_register/login_hero.png";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api";

function Register() {
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();

	function iconPass() {
		setVisible(!visible);
	}

	const handleRegister = async (event) => {
		event.preventDefault();

		const email = document.getElementById("email").value;
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;

		try {
			const result = await registerUser(username, email, password);

			if (result.status === "Success") {
				console.log(result);

				swal("Success!", "Registrasi berhasil!", "success").then(() => {
					navigate("/login");
				});
			} else {
				swal("Error!", "Registrasi gagal. Silakan coba lagi.", "error");
			}
		} catch (error) {
			swal("Error!", "Terjadi kesalahan selama proses registrasi.", "error");
			console.error("Error selama proses registrasi:", error);
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
					<h2>Daftar</h2>
					<form onSubmit={handleRegister}>
						<label htmlFor="username">Username</label>
						<input
							className="username-register"
							type="text"
							id="username"
							placeholder="Masukkan Username disini"
						/>

						<label htmlFor="email">Email</label>
						<input
							className="email-register"
							type="text"
							id="email"
							placeholder="Masukkan Email disini"
						/>

						<label htmlFor="password">Password</label>
						<input
							className="password-register"
							type={visible ? "text" : "password"}
							id="password"
							placeholder="Masukkan Password disini"
						/>

						<span onClick={iconPass} className="visible">
							<Icon
								icon={visible ? "ph:eye" : "formkit:eyeclosed"}
							/>
						</span>

						<div className="centered">
							<div className="register-button-container">
								<button type="submit" className="registerButton">
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

export default Register;
