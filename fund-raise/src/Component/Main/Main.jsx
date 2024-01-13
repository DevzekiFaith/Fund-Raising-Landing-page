import React from "react";
import "./Main.css";
import image1 from "../../assets/logo.svg";

const Main = () => {
  return (
    <div>
      <div className="cc-container MainNav">
        <div className="MainNavContent">
          <div>
            <img src={image1} alt="" />
          </div>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discovered</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
