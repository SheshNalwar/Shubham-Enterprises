import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "../css/nav.css";
import { LinkBtn, loanTypesData, NavLoanLinks } from "../Index";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const dropDownBox = () => {
      let dropIcon = document.getElementById("dropdown");
      dropIcon.addEventListener("mouseover", () => {
        document.getElementById("up-arrow").src = "down-arrow.png";
      });
      dropIcon.addEventListener("mouseleave", () => {
        document.getElementById("up-arrow").src = "up-arrow.png";
      });
    };

    const hamburgermenu = () => {
      const line1 = document.getElementById("line1");
      const line2 = document.getElementById("line2");
      const line3 = document.getElementById("line3");
      const navin = document.querySelector(".menuPage");
      line1.classList.toggle("line1");
      line2.classList.toggle("line2");
      line3.classList.toggle("line3");
      navin.classList.toggle("active");
    };

    dropDownBox();

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

    return () => {
      document
        .getElementById("hamburger")
        .removeEventListener("click", hamburgermenu);
    };
  }, []);

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
          <li id="dropdown">
            <p>Loans</p>
            <img src="up-arrow.png" alt="" id="up-arrow" />
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
