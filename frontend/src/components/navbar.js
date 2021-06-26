import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";
import { Signin } from "../actions/userActions";

function Navbar(props) {
  console.log("Navbar props: ", props);
  const { email, password } = props;
  console.log("email: ", email);
  console.log("password: ", password);

  let dispatch = useDispatch();
  const [go, setGo] = useState(false);
  const [user, setUser] = useState();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  console.log("navbar error: ", error);
  console.log("navbar loading: ", loading);
  console.log("navbar useInfo: ", userInfo);
  let temp = JSON.parse(localStorage.getItem("userInfo"));
  let history = useHistory();

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("userInfo"));
    console.log("temp: ", temp);
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
      //navbarLinks.classList.add("anime");
    });
  }, []);

  const goHome = () => {
    history.push("/");
  };
  const createMessage = () => {
    history.push("/messages");
  };
  const signoutHandler = () => {
    dispatch(signout());
    history.push("/");
  };
  const signinHandler = () => {
    history.push("/signin");
  };

  return (
    <body>
      <nav className="navbar">
        <div className="brand-title">Mariposaweb</div>
        <a href="#" class="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

        <div className="navbar-links">
          <ul>
            <li>
              <a onClick={goHome}>Home</a>
            </li>
            <li>
              <a onClick={createMessage}>Send Message</a>
            </li>
            {loading === false ? (
              <li>
                <a>{userInfo.data.name}</a>
              </li>
            ) : null}
            {userInfo ? (
              <li>
                <a onClick={signoutHandler}>Sign Out</a>
              </li>
            ) : null}
            {!userInfo ? (
              <li>
                <a onClick={signinHandler}>Sign In</a>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </body>
  );
}

export default Navbar;
