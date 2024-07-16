import { LinkBtn, Contact, loanTypesData, NavLoanLinks } from "../../Index";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../../css/component styling/nav.css";
import Hamburger from "./Hamburger";
import MenuPage from "./MenuPage";
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowSrc, setArrowSrc] = useState("up-arrow.png");
  const menuRef = useRef(null);
  const hamburgerMenuRef = useRef(null);
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
        <Hamburger togMenu={toggleMenu} op={isOpen} rf={hamburgerMenuRef} />
        <MenuPage op={isOpen} rf={menuRef} />
      </nav>
    </>
  );
};

export default Nav;
