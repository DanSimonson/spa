import React, { Component } from "react";
import "./footer.css";

export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foot">
        <footer>
          <p>
            &copy;2021{" "}
            <a href="https://mariposaweb.net" target="_blank">
              @mariposaweb.net
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
export default Footer;
