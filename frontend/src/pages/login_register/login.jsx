import { useEffect, useState } from "react";
import React from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import LoginImage from "../../assets/login_register/login_hero.png";
import { login } from "../../redux/actions/UserActions.js";
import Message from "../../components/LoadingError/error.js";
import Loading from "../../components/LoadingError/loading.js";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  window.scrollTo(0, 0);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  function iconPass() {
    setVisible((prevVisible) => !prevVisible);
  }

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <div className="loginregister">
      <h1>Maggot Yahoot</h1>
      <div className="loginregister-container">
        <div className="greetingCard">
          <div className="backButton">
            <Link to="/">
              <Icon icon="pajamas:go-back" color="white" className="icon-back" />
            </Link>
          </div>

          <img className="greetingImage" src={LoginImage} alt="GreetingCard" />
        </div>

        <div className="loginform">
          {error && <Message variant={"alert-danger"}>{error}</Message>}
          {loading && <Loading />}
          <h2>Masuk</h2>
          <form action="" onSubmit={submitHandler}>
            <label htmlFor="email">No. HP / Username / Email</label>
            <input
              className="email"
              type="text"
              id="email"
              placeholder="Masukkan No. HP / Username / Email disini"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="password"
              type={visible ? "text" : "password"}
              id="password"
              placeholder="Masukkan Password disini"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span onClick={iconPass} className="visible">
              <Icon icon={visible ? "ph:eye" : "formkit:eyeclosed"} />
            </span>

            <div className="lupa-container">
              <a className="lupaPassword" href="#">
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
                  <Icon icon="devicon:google" className="icon-google" />
                  <h3>Google</h3>
                </a>
              </div>

              <p className="existAccount">
                Belum punya akun?{" "}
                <Link to="/register" className="daftar-link">
                  Daftar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
