import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
import "../css/homepage.css";
import gsap from "gsap";
import {
  Loans,
  loanTypesData,
  faqsData,
  LinkBtn,
  ReviewCarousel,
} from "../Index";

const Homepage = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const firstColumnFaqs = faqsData.slice(0, 7);
  const secondColumnFaqs = faqsData.slice(7, 14);
  const toggleAnswer = (id) => {
    setVisibleAnswer((prevId) => (prevId === id ? null : id));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="landingPage">
        <div className="phuto">
          <img src="/group.jpeg" alt="" />
        </div>
        <div className="content">
          <p className="slogan1">
            <span className="finance">Quick Loans</span>, Easy Steps: Your Fast
            Track to Financial Ease!
          </p>
          <p className="slogan">
            At SHUBHAM ENTERPRISES, we go beyond loans, we empower dreams. With
            a legacy of trust and financial expertise, we are your dedicated
            partner in achieving your goals and aspirations.
          </p>
          <LinkBtn className="homeAboutUs" name="About Us" navTo="/aboutUs" />
        </div>
      </section>

      <div className="page2">
        <div id="page2-heading">
          <h1>What We Provide</h1>
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
        <ReviewCarousel />
      </div>
      <div className="page4">
        <div className="page4-heading">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        <div className="faq-container">
          <div className="faq-column">
            {firstColumnFaqs.map((faq) => (
              <div key={faq.id}>
                <div
                  className={`question ${
                    visibleAnswer === faq.id ? "rotate" : ""
                  }`}
                  onClick={() => toggleAnswer(faq.id)}
                >
                  {faq.question}
                </div>
                <div
                  className={`answer ${visibleAnswer === faq.id ? "show" : ""}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="faq-column">
            {secondColumnFaqs.map((faq) => (
              <div key={faq.id}>
                <div
                  className={`question ${
                    visibleAnswer === faq.id ? "rotate" : ""
                  }`}
                  onClick={() => toggleAnswer(faq.id)}
                >
                  {faq.question}
                </div>
                <div
                  className={`answer ${visibleAnswer === faq.id ? "show" : ""}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
