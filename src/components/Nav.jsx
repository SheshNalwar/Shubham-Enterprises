import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import gsap from "gsap";
import "../css/nav.css";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  useEffect(() => {
    const dropDownBox = () => {
      let dropIcon = document.getElementById("dropdown");
      let dropIcon2 = document.getElementById("dropdown2");

      dropIcon.addEventListener("mouseover", () => {
        document.getElementById("up-arrow").src = "down-arrow.png";
      });
      dropIcon.addEventListener("mouseleave", () => {
        document.getElementById("up-arrow").src = "up-arrow.png";
      });
      dropIcon2.addEventListener("mouseover", () => {
        document.getElementById("up-arrow2").src = "down-arrow.png";
      });
      dropIcon2.addEventListener("mouseleave", () => {
        document.getElementById("up-arrow2").src = "up-arrow.png";
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
    document
      .getElementById("hamburger")
      .addEventListener("click", hamburgermenu);

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
            <a href="#" target="_blank" className="nav-color">
              Home
            </a>
          </li>
          <li id="dropdown">
            <p>Loans</p>
            <img src="up-arrow.png" alt="" id="up-arrow" />
            <div className="dropdown-content">
              <a href="" target="_blank">
                Personal Loans
              </a>
              <a href="" target="_blank">
                Business Loans
              </a>
              <a href="" target="_blank">
                Home Loans
                <br />
              </a>
              <a href="" target="_blank">
                Car Loans{" "}
              </a>
              <a href="" target="_blank">
                Commercial Vehicle Loans
              </a>
              <a href="" target="_blank">
                Tractor Loans
              </a>
              <a href="" target="_blank">
                Mortgage Loans
              </a>
              <a href="" target="_blank">
                Agri Loans
              </a>
            </div>
          </li>
          <li id="dropdown2">
            <p>Loan Calculator</p>
            <img src="up-arrow.png" alt="" id="up-arrow2" />
            <div className="dropdown-content">
              <a href="" target="_blank">
                Personal Loan Calculator
              </a>
              <a href="" target="_blank">
                Business Loan Calculator
              </a>
              <a href="" target="_blank">
                Home Loan Calculator
                <br />
              </a>
              <a href="" target="_blank">
                Car Loan Calculator
              </a>
              <a href="" target="_blank">
                Commercial Vehicle Loan Calculator
              </a>
              <a href="" target="_blank">
                Tractor Loan Calculator
              </a>
              <a href="" target="_blank">
                Mortgage Loan Calculator
              </a>
              <a href="" target="_blank">
                Agri Loan Calculator
              </a>
            </div>
          </li>
          <li>
            <a href="#" target="_blank" className="nav-color">
              About us
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="nav-color">
              Contact Us
            </a>
          </li>
        </div>

        <div id="hamburger">
          <div id="line1" className="lines"></div>
          <div id="line2" className="lines"></div>
          <div id="line3" className="lines"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
