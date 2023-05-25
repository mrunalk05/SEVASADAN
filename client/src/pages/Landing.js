import React from "react";
import "./landing.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faCubes,
  faCoffee,
  faUserCircle,
  //   faLinkedin,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <header className="showcase">
        <div className="container showcase-inner">
          <h1 id="head">SEVASADAN LIFELINE</h1>
          <p style={{ color: "white" }}>
            <b>24/7 HEALTHCARE</b>
          </p>
          <Link to="/login" className="anchor mt-2">
            Login
          </Link>
        </div>
      </header>
    </>
  );
}

export default Landing;
