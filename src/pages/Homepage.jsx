import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState } from "react";
import "../css/homepage.css";
import gsap from "gsap";
import {
  Loans,
  Review,
  loanTypesData,
  reviewsData,
  faqsData,
  LinkBtn,
} from "../Index";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const firstColumnFaqs = faqsData.slice(0, 7);
  const secondColumnFaqs = faqsData.slice(7, 14);

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
            <span className="finance">Quick Loans</span>, Easy Steps: Your Fast
            Track to Financial Ease!
            <img src="/img2.jpeg" alt="" />
            <img src="/img1.jpeg" alt="" />
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
