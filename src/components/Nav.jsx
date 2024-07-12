import { LinkBtn, loanTypesData, NavLoanLinks } from "../Index";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import gsap from "gsap";
import "../css/nav.css";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowSrc, setArrowSrc] = useState("up-arrow.png");
  const [subMenuOpen, setSubMenuOpen] = useState({
    loansSubMenu: false,
    calculatorSubMenu: false,
  });
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
  // const toggleMenu2 = () => {
  //   var menuOptions = document.querySelector(".menuPage");
  //   if (menuOptions) {
  //     menuOptions.style.display =
  //       menuOptions.style.display === "flex" ? "none" : "flex";
  //   }
  // };

  const toggleSubMenu = (menuId) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };
  return (
    <>
      <nav>
        <div className="navBar">
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
        </div>
        <div id="hamburger" onClick={toggleMenu}>
          <div id="line1" className={`lines ${isOpen ? "line1" : ""}`}></div>
          <div id="line2" className={`lines ${isOpen ? "line2" : ""}`}></div>
          <div id="line3" className={`lines ${isOpen ? "line3" : ""}`}></div>
        </div>
        <div className={isOpen ? "active" : "menuPage"}>
          <ul>
            <li>
              <LinkBtn className="" name="Home" navTo="/" target="" />
            </li>
            <li>
              <p onClick={() => toggleSubMenu("loansSubMenu")}>Loans</p>
            </li>
            <div
              className={`sub-menu ${
                subMenuOpen.loansSubMenu ? "show" : "hide"
              }`}
            >
              {loanTypesData.map((loan, index) => (
                <NavLoanLinks
                  key={index}
                  loanName={loan.loanName}
                  navTo={loan.navigation}
                />
              ))}
            </div>
            <li>
              <NavLink to="/loanCalculator">Loan Calculator</NavLink>
            </li>
            <li>
              <LinkBtn
                className=""
                name="About Us"
                navTo="/aboutUs"
                target=""
              />
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
      </nav>
    </>
  );
};

export default Nav;
