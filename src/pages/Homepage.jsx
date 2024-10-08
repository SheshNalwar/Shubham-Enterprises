import FaqColumn from "../components/FaqColumn";
import React, { useEffect } from "react";
import "../css/homepage.css";
import {
  Loans,
  loanTypesData,
  faqsData,
  LinkBtn,
  ReviewCarousel,
} from "../Index";

const Homepage = () => {
  const firstColumnFaqs = faqsData.slice(0, 7);
  const secondColumnFaqs = faqsData.slice(7, 14);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="landingPage">
        <div className="phuto">
          <img src="/group.jpeg" alt="landingPageImg" />
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
              navigation={loan.navigation}
              key={index}
              imgSrc={loan.imgSrc}
              financeigation={loan.financeigation}
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
          <FaqColumn coln={firstColumnFaqs} />
          <FaqColumn coln={secondColumnFaqs} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
