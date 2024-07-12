import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import "../css/homepage.css";
import gsap from "gsap";
import { Loans, Review, loanTypesData } from "../Index";

gsap.registerPlugin(ScrollTrigger);
const Homepage = () => {
  useEffect(() => {
    const backToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    if (typeof window !== "undefined") {
      gsap.to("nav", {
        backgroundColor: "#fff",
        borderBottom: "1px solid #D3D3D3",
        duration: 0.2,
        scrollTrigger: {
          trigger: "#navbar",
          scroller: "body",
          start: "top -1%",
          end: "top -2%",
          scrub: 0.8,
        },
      });
    }

    const dropDownBox = () => {
      let dropIcon = document.getElementById("dropdown");
      if (dropIcon) {
        dropIcon.addEventListener("mouseover", () => {
          document.getElementById("up-arrow").src = "Covers/down-arrow.png";
        });
        dropIcon.addEventListener("mouseleave", () => {
          document.getElementById("up-arrow").src = "Covers/up-arrow.png";
        });
      }
      let dropIcon2 = document.getElementById("dropdown2");
      if (dropIcon2) {
        dropIcon2.addEventListener("mouseover", () => {
          document.getElementById("up-arrow2").src = "Covers/down-arrow.png";
        });
        dropIcon2.addEventListener("mouseleave", () => {
          document.getElementById("up-arrow2").src = "Covers/up-arrow.png";
        });
      }
    };

    const setUpBackToTop = () => {
      let btn = document.querySelector(".top-button");
      if (btn) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          backToTop();
        });
      }
    };

    dropDownBox();
    setUpBackToTop();

    return () => {
      let btn = document.querySelector(".top-button");
      if (btn) {
        btn.removeEventListener("click", backToTop);
      }
    };
  }, []);

  const toggleMenu = () => {
    var menuOptions = document.querySelector(".menuPage");
    if (menuOptions) {
      menuOptions.style.display =
        menuOptions.style.display === "flex" ? "none" : "flex";
    }
  };

  const toggleSubMenu = (subMenuId) => {
    var subMenu = document.getElementById(subMenuId);
    if (subMenu) {
      subMenu.style.display =
        subMenu.style.display === "flex" ? "none" : "flex";
    }
  };

  const toggleAnswer = (id) => {
    var question = document.getElementById(id).previousElementSibling;
    var answer = document.getElementById(id);
    if (answer && question) {
      if (answer.style.display === "block") {
        answer.style.display = "none";
        question.classList.remove("rotate");
      } else {
        document.querySelectorAll(".answer").forEach((ans) => {
          if (ans !== answer) {
            ans.style.display = "none";
          }
        });
        document.querySelectorAll(".question").forEach((q) => {
          if (q !== question) {
            q.classList.remove("rotate");
          }
        });
        answer.style.display = "block";
        question.classList.add("rotate");
      }
    }
  };

  return (
    <>
      <section id="landingPage">
        <div className="phuto">
          <img src="/img3.jpeg" alt="" />
        </div>
        <div className="content">
          <p className="slogan1">
            Quick Loans, Easy Steps: Your Fast Track to Financial Ease!
            <img src="/img2.jpeg" alt="" />
            <img src="/img1.jpeg" alt="" />
          </p>
          <p className="slogan">
            At SHUBHAM ENTERPRISES, we go beyond loans, we empower dreams. With
            a legacy of trust and financial expertise, we are your dedicated
            partner in achieving your goals and aspirations.
          </p>
          <button>About us</button>
        </div>
      </section>

      <div className="page2">
        <div id="page2-heading">
          <h1>OUR SERVICES</h1>
        </div>
        <div className="loan-types">
          {loanTypesData.map((loan, index) => (
            <Loans
              key={index}
              imgSrc={loan.imgSrc}
              navigation={loan.navigation}
              alt={loan.alt}
              loanName={loan.loanName}
            />
          ))}
        </div>
      </div>

      <div className="page3">
        <div className="page3-heading">
          <h2>" In the Words of Our Customers "</h2>
        </div>

        <div className="review-container">
          <Review
            imgSrc="img1.jpeg"
            alt="review1"
            name="A"
            className="review1"
          />
          <Review
            imgSrc="img2.jpeg"
            alt="review2"
            name="B"
            className="review2"
          />
          <Review
            imgSrc="img1.jpeg"
            alt="review3"
            name="C"
            className="review3"
          />
          <Review
            imgSrc="img2.jpeg"
            alt="review4"
            name="D"
            className="review4"
          />
        </div>
      </div>

      <div className="page4">
        <div className="page4-heading">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="faq-container">
          <div className="faq-column">
            <div className="question" onClick={() => toggleAnswer("q1")}>
              What is Lorem Ipsum?
            </div>
            <div className="answer" id="q1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>

            <div className="question" onClick={() => toggleAnswer("q2")}>
              Why do we use it?
            </div>
            <div className="answer" id="q2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>

            <div className="question" onClick={() => toggleAnswer("q3")}>
              Where does it come from?
            </div>
            <div className="answer" id="q3">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </div>
          </div>

          <div className="faq-column">
            <div className="question" onClick={() => toggleAnswer("q4")}>
              Where can I get some?
            </div>
            <div className="answer" id="q4">
              There are many variations of passages of Lorem Ipsum available.
            </div>

            <div className="question" onClick={() => toggleAnswer("q5")}>
              What is Lorem Ipsum?
            </div>
            <div className="answer" id="q5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>

            <div className="question" onClick={() => toggleAnswer("q6")}>
              Why do we use it?
            </div>
            <div className="answer" id="q6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
        </div>
      </div>

      <footer>
        <button className="top-button">Back to Top</button>
        <div className="footer-lists">
          <ul>
            <b>Quick Links</b>
            <li>Home</li>
            <li>Loans</li>
            <li>Loan Calculator</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <b>Our Services </b>
            <li>Personal Loan</li>
            <li>Business Loan</li>
            <li>Home Loan</li>
            <li>Car Loan</li>
            <li>Commercial vehicle Loan</li>
            <li>Tractor Loan</li>
            <li>Mortgage Loan</li>
            <li>Agri Loan</li>
          </ul>
          <ul>
            <b>Contact Us</b>
            <li>Phone: xxxxxxx199</li>
            <li>Email : xyz@gmail.com</li>
            <li>Address: Solapur</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Copyright © 2024 Shubham Enterprises</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
