import React, { useState, useEffect } from "react";
import "./navbar.css";
import { useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory();

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
    history.push("/message");
  };

  return (
    <body>
      <nav class="navbar">
        <div class="brand-title">Mariposaweb</div>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <li>
              <a onClick={goHome}>Home</a>
            </li>
            <li>
              <a onClick={createMessage}>Send Message</a>
            </li>
          </ul>
        </div>
      </nav>
    </body>
  );
}

export default Navbar;
