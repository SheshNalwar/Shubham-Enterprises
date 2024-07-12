import { LinkBtn, loanTypesData, NavLoanLinks } from "../Index";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import gsap from "gsap";
import "../css/nav.css";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowSrc, setArrowSrc] = useState("up-arrow.png");
  const handleMouseOver = () => {
    setArrowSrc("down-arrow.png");
  };
  const handleMouseOut = () => {
    setArrowSrc("up-arrow.png");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  gsap.to("nav", {
    backgroundColor: "#fff",
    borderBottom: "1px solid #D3D3D3",
    duration: 0.2,
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      start: "top -1%",
      end: "top -2%",
      scrub: 0.8,
    },
  });

  return (
    <>
      <nav>
        <div className="nav-brand">
          <img id="logo" src="Logo.png" alt="logo" />
          <h1>Shubham Enterprises</h1>
        </div>

        <div className="nav-menu">
          <li>
            <LinkBtn className="nav-color" name="Home" navTo="/" target="" />
          </li>
          <li
            id="dropdown"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <p>Loans</p>
            <img src={arrowSrc} alt="arrow" id="up-arrow" />
            <div className="dropdown-content">
              {loanTypesData.map((loan, index) => (
                <NavLoanLinks
                  key={index}
                  loanName={loan.loanName}
                  navTo={loan.navigation}
                />
              ))}
            </div>
          </li>
          <li>
            <LinkBtn
              className="nav-color"
              name="Loan Calculator"
              navTo="/loanCalculator"
              target=""
            />
          </li>
          <li>
            <LinkBtn
              className="nav-color"
              name="About Us"
              navTo="/aboutUs"
              target=""
            />
          </li>
          <li>
            <LinkBtn
              className="nav-color"
              name="Contact Us"
              navTo="https://www.google.com/"
              target="_blank"
            />
          </li>
        </div>

        <div id="hamburger" onClick={toggleMenu}>
          <div id="line1" className={`lines ${isOpen ? "line1" : ""}`}></div>
          <div id="line2" className={`lines ${isOpen ? "line2" : ""}`}></div>
          <div id="line3" className={`lines ${isOpen ? "line3" : ""}`}></div>
        </div>
      </nav>
      <div class="menuPage">
        <ul>
          <li>
            <LinkBtn className="" name="Home" navTo="/" target="" />
          </li>
          <li>
            <a href="#" onclick="toggleSubMenu('loansSubMenu')">
              Loans
            </a>
          </li>
          <div class="sub-menu" id="loansSubMenu">
            {loanTypesData.map((loan, index) => (
              <NavLoanLinks
                key={index}
                loanName={loan.loanName}
                navTo={loan.navigation}
              />
            ))}
          </div>
          <li>
            <a href="#" onclick="toggleSubMenu('calculatorSubMenu')">
              Loan Calculator
            </a>
          </li>
          <li>
            <LinkBtn className="" name="About Us" navTo="/aboutUs" target="" />
          </li>
          <li>
            <LinkBtn
              className=""
              name="Contact Us"
              navTo="https://www.google.com/"
              target="_blank"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
