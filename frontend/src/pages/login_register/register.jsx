import "./login.css";
import { Icon } from "@iconify/react";
import LoginImage from "../../assets/login_register/login_hero.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/UserActions";
import Message from "../../components/LoadingError/error";
import Loading from "../../components/LoadingError/loading";


const Register = () => {
	window.scrollTo(0, 0);

	const [visible, setVisible] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  
	const dispatch = useDispatch();
	const navigate = useNavigate();
  
	const userRegister = useSelector((state) => state.userRegister);
	const { error, loading, userInfo } = userRegister;
  
	const submitHandler = (e) => {
	  e.preventDefault();
	  dispatch(register(name, email, password));
	};

	function iconPass() {
		setVisible((prevVisible) => !prevVisible);
	  }
	
	  useEffect(() => {
		if (userInfo) {
		  navigate("/login");
		}
	  }, [userInfo, navigate]);
	

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
				{error && <Message variant={"alert-danger"}>{error}</Message>}
        		{loading && <Loading />}
					<h2>Daftar</h2>
					<form action="" onSubmit={submitHandler}>
						<label htmlFor="email">No. HP / Email</label>
						<input
							className="email-register"
							type="text"
							id="email"
							placeholder="Masukkan No. HP / Email disini"
							value={email}
              				onChange={(e) => setEmail(e.target.value)}
						/>

						<label htmlFor="username">Username</label>
						<input
							className="username-register"
							type="text"
							id="username"
							placeholder="Masukkan Username disini"
							value={name}
              				onChange={(e) => setName(e.target.value)}
						/>

						<label htmlFor="password">Password</label>
						<input
							className="password-register"
							type={visible ? "text" : "password"}
							id="password"
							placeholder="Masukkan Password disini"
							value={password}
             				onChange={(e) => setPassword(e.target.value)}
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
