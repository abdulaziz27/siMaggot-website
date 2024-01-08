import { useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import LoginImage from "../../assets/login_register/login_hero.png";

function Register() {
	const [visible, setVisible] = useState(false);

	function iconPass() {
		if (visible == true) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	}

	return (
		<div className="loginregister">
			<h1>Maggot Yahoot</h1>
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
					<form action="">
						<label htmlFor="email">No. HP / Email</label>
						<input
							className="email-register"
							type="text"
							id="email"
							placeholder="Masukkan No. HP / Email disini"
						/>

						<label htmlFor="username">Username</label>
						<input
							className="username-register"
							type="text"
							id="username"
							placeholder="Masukkan Username disini"
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
								<a className="registerButton">Daftar</a>
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
