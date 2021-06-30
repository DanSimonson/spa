import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

function Navbar(props) {
  console.log("Navbar props: ", props);
  const { email, password } = props;
  console.log("email: ", email);
  console.log("password: ", password);

  let dispatch = useDispatch();
  let isAdmin;
  // const [go, setGo] = useState(false);
  // const [user, setUser] = useState();
  //const [isAdmin, setIsAdmin] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  if (userInfo) {
    if (userInfo.data.isAdmin === true) {
      isAdmin = true;
    }
  }
  let history = useHistory();
  if (error !== undefined) {
    window.history.back();
  }

  useEffect(() => {
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
            {loading === false && userInfo ? (
              <li>
                <a>{userInfo.data.name}</a>
              </li>
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
