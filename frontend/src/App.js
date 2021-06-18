import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Slider from "./components/slider/slider_images";
import "./App.css";
import styled from "styled-components";
const BodyWrap = styled.div``;
/**
 * height: 90vh;
  h1 {
    color: green;
    margin: 0 auto;
  }
 */
const App = () => {
  const [headerChange, setHeaderChange] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const parralax = document.querySelector("#parallax");
    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset;
      //console.log("offset: ", offset);
      //console.log("offest * 0.7" + offset * 0.7);
      parralax.style.backgroundPositionY = offset * 0.7 + "px";
    });
  }, []);

  const sendMessage = () => {
    //redirect the page
    //history.push("/messages");
  };

  return (
    <>
      <body>
        <div className="header" id="myHeader">
          <Navbar />
        </div>
        <BodyWrap>
          <div className="bodyDiv" id="parallax">
            <h2>Mariposa Therapeutic Spa</h2>
            <p>
              Enter the tranquility of the Hot Tub and immediately feel the
              accumulated stress of daily life begin to dissipate. Let the
              trained hands of our expert staff pamper your body, soothe your
              mind and re-energize your soul.
            </p>
          </div>
          <div className="bodyDiv" id="sectionTwo">
            <div className="firstColorSection">
              <h1>Therapeutic Massage</h1>
              <p>
                Our massages soothe the nervous system, relieve stress, and warm
                and loosen muscles. Choose from a variety of bodywork
                techniques, or ask one of our licensed massage therapists for a
                private consultation to aid in choosing the most beneficial
                massage for you.
              </p>
            </div>
            <div className="firstColorSection">
              <h1>body treatments</h1>
              <p>
                Our gentle body treatments hydrate, regenerate, and detoxify the
                body as well as exfoliate the skin, relieve tight muscles, and
                create an experience of deep relaxation.
              </p>
            </div>
            <div className="firstColorSection">
              <h1>skin care</h1>
              <p>
                Your personalized skin care clinician will help restore vitality
                to your skin through massages, masks, and hydration – resulting
                in skin that radiates beauty and health.
              </p>
            </div>
          </div>
          <div className="bodyDiv"></div>
          <div className="bodyDiv">
            <div>
              <Slider />
            </div>
          </div>
          <div className="bodyDiv"></div>
          <div className="bodyDiv">
            <h2>Appointments</h2>
            <p>
              Ready to make an appointment? Looking for more information about
              our services?
            </p>
            <h2>CALL 509-74-RELAX (509-747-3529)</h2>
            <p>Send us a message. Reserve a massage or treatment</p>
            <a onClick={sendMessage} className="myButton">
              Reserve your Place
            </a>
            <p>
              We make every attempt to confirm your appointment via text or
              email, and we rely on you to provide up to date correct and
              current information.
            </p>
          </div>
        </BodyWrap>
        <Footer />
      </body>
    </>
  );
};

export default App;
