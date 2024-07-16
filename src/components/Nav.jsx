import { LinkBtn, loanTypesData, NavLoanLinks } from "../Index";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../css/nav.css";
import { NavLink } from "react-router-dom";
import { Contact } from "./Contact";
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowSrc, setArrowSrc] = useState("up-arrow.png");
  const menuRef = useRef(null);
  const hamburgerMenuRef = useRef(null);
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
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
              <LinkBtn className="nav-color" name="Home" navTo="/" />
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
              />
            </li>
            <li>
              <LinkBtn className="nav-color" name="About Us" navTo="/aboutUs" />
            </li>
            <li>
              <Contact />
            </li>
          </div>
        </div>
        <div id="hamburger" onClick={toggleMenu} ref={hamburgerMenuRef}>
          <div id="line1" className={`lines ${isOpen ? "line1" : ""}`}></div>
          <div id="line2" className={`lines ${isOpen ? "line2" : ""}`}></div>
          <div id="line3" className={`lines ${isOpen ? "line3" : ""}`}></div>
        </div>
        <div className={isOpen ? "menuActive" : "menuPage"} ref={menuRef}>
          <ul>
            <li>
              <LinkBtn className="" name="Home" navTo="/" />
            </li>
            <li>
              <p
                onClick={() => toggleSubMenu("loansSubMenu")}
                style={{ cursor: "pointer" }}
              >
                Loans
              </p>
            </li>
            <div
              className={`sub-menu ${subMenuOpen.loansSubMenu ? "show" : "hide"
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
              <LinkBtn className="" name="About Us" navTo="/aboutUs" />
            </li>
            <li>
              <Contact />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
