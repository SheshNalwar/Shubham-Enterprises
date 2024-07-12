import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import "../css/homepage.css";
import gsap from "gsap";
import { Loans, Review, loanTypesData, reviewsData, faqsData } from "../Index";

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

  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (id) => {
    setVisibleAnswer((prevId) => (prevId === id ? null : id));
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
          {reviewsData.map((review, index) => (
            <Review
              key={index}
              imgSrc={review.imgSrc}
              alt={review.alt}
              name={review.name}
              className={review.classNaav}
              content={review.content}
            />
          ))}
        </div>
      </div>

      <div className="page4">
        <div className="page4-heading">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="faq-container">
          {faqsData.map((faq) => (
            <div key={faq.id} className="faq-column">
              <div
                className={`question ${visibleAnswer === faq.id ? "rotate" : ""
                  }`}
                onClick={() => toggleAnswer(faq.id)}
              >
                {faq.question}
              </div>
              <div
                className="answer"
                id={faq.id}
                style={{ display: visibleAnswer === faq.id ? "block" : "none" }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
