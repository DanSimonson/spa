import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

function Navbar(props) {
  console.log("Navbar props: ", props.user);
  //console.log("Navbar name: ", props.user.name);
  let dispatch = useDispatch();
  const [go, setGo] = useState(false);
  const [user, setUser] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading } = userSignin;
  let temp = JSON.parse(localStorage.getItem("userInfo"));
  let history = useHistory();

  useEffect(() => {
    renderA();
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
      //navbarLinks.classList.add("anime");
    });
  }, []);
  const renderA = () => {
    //alert("You'll only see this once!");
    if (userInfo) {
      //var locate = JSON.parse(localStorage.getItem("locate"));
      let temp = JSON.parse(localStorage.getItem("userInfo"));
      console.log("display userInfo:", userInfo.name);
      const a = <a>{userInfo.name}</a>;
    } else {
      console.log("no userInfo to display");
      const a = <a></a>;
    }
  };
  const goHome = () => {
    history.push("/");
  };
  const createMessage = () => {
    history.push("/messages");
  };
  const signoutHandler = () => {
    dispatch(signout());
    setUser("");
    history.push("/");
  };
  const signinHandler = () => {
    history.push("/signin");
    //window.location.reload();
  };
  const handleMouseEnter = () => {};

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

            {/* <div style={{ marginRight: "1rem" }}> */}
            {/* {userInfo ? ( */}
            {/* // <div className="dropdown">
                //    <Link to="#">
                //     {userInfo.name} {/*<i className="fa fa-caret-down"></i> 
                //   </Link>  */}
            {/* <div className="dropdown-content">
                    <Link
                      //className="signout"
                      //onMouseEnter={handleMouseEnter}
                      //to="/signin"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </div>

                  {/*<ul className="dropdown-content">
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
              </ul>*/}

            {/* ) : (
                <Link to="/signin">Sign In</Link>
              )} */}

            {/* </div> */}
          </ul>
        </div>
      </nav>
    </body>
  );
}

export default Navbar;
