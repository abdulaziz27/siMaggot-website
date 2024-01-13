import "./login.css";
import { Icon } from "@iconify/react";
import LoginImage from "../../assets/login_register/login_hero.png";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../api";

function ResetPassword() {
	const navigate = useNavigate();

	const handleResetPassword = async (event) => {
		event.preventDefault();

		const email = event.target.email.value;

		try {
			const result = await resetPassword(email);

			if (result.status === "Success") {
				swal("Success!", "Link reset password telah dikirimkan ke email anda.", "success");
				navigate("/login");
			} else {
				swal("Error!", result.message, "error");
			}
		} catch (error) {
			console.error("Error selama proses reset:", error);
			swal("Error!", "Terjadi error selama proses reset. Coba lagi.", "error");
		}
	};

	return (
		<div className="loginregister">
			<h1>SiMaggot</h1>
			<div className="loginregister-container">
				<div className="greetingCard">
					<div className="backButton">
						<a href="./login">
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
					<h2>Reset Password</h2>
					<form onSubmit={handleResetPassword}>
						<label htmlFor="email">Email</label>
						<input
							className="email"
							type="text"
							id="email"
							placeholder="Masukkan Email disini"
						/>
						<div className="centered">
							<div className="register-button-container">
								<button type="submit" className="registerButton">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ResetPassword;
