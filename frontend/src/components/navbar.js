import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

function Navbar(props) {
  const { email, password } = props;
  let dispatch = useDispatch();
  let isAdmin = false;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const userRegister = useSelector((state) => state.userRegister);
  let user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (error === "Request failed with status code 401") {
      history.push("/signIn");
    }
  }, [error]);

  useEffect(() => {
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
      //navbarLinks.classList.add("anime");
    });
  }, []);

  if (user) {
    if (user.isAdmin === true) {
      isAdmin = true;
      userInfo.data = { name: userInfo.name };
    }
    if (user.isAdmin === false) {
      userInfo.data = { name: userInfo.name };
      isAdmin = false;
    }
  }

  if (userInfo) {
    if (userInfo.data) {
      if (userInfo.data.isAdmin === true) {
        isAdmin = true;
      }
    }
  }

  let history = useHistory();

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
            {isAdmin === false && userInfo ? (
              <>
                <li>{/* <a>{userInfo.data.name}</a> */}</li>
              </>
            ) : null}

            {isAdmin ? (
              <>
                <li>{/* <a>{userInfo.data.name}</a> */}</li>
              </>
            ) : null}
            {isAdmin ? (
              <Link to="/showMessages">
                <li>
                  <a>Show Messages</a>
                </li>
              </Link>
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
