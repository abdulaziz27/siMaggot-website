import { useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import LoginImage from "../../assets/login_register/login_hero.png";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";

function Login() {
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();

	function iconPass() {
		setVisible(!visible);
	}

	const handleLogin = async (event) => {
		event.preventDefault();

		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		try {
			const result = await loginUser(email, password);

			if (result.status === "Success") {
				console.log(result);

				localStorage.setItem("accessToken", result.credential);

				swal("Success!", "Login berhasil!", "success").then(() => {
					navigate("/");
				});
			} else {
				swal("Error!", "Login gagal. Silakan coba lagi.", "error");
			}
		} catch (error) {
			swal("Error!", "Terjadi kesalahan selama proses login.", "error");
			console.error("Error selama proses login:", error);
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
					<h2>Masuk</h2>
					<form onSubmit={handleLogin}>
						<label htmlFor="email">Email</label>
						<input
							className="email"
							type="text"
							id="email"
							placeholder="Masukkan Email disini"
						/>
						<label htmlFor="password">Password</label>
						<input
							className="password"
							type={visible ? "text" : "password"}
							id="password"
							placeholder="Masukkan Password disini"
						/>

						<span onClick={iconPass} className="visible">
							<Icon
								icon={visible ? "ph:eye" : "formkit:eyeclosed"}
							/>
						</span>

						<div className="lupa-container">
							<a className="lupaPassword" href="./reset-password">
								Lupa Password
							</a>
						</div>

						<div className="centered">
							<div className="register-button-container">
								<button type="submit" className="registerButton">
									Masuk
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
								Belum punya akun?{" "}
								<a href="./register" className="daftar-link">
									Daftar
								</a>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
