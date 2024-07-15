import React, { useEffect } from "react";
import "../css/component styling/loanDetail.css";
import { LinkBtn } from "../Index";

const LoanDetails = ({
  title,
  info,
  features,
  eligibility,
  process,
  imgSrc,
  alt,
  documents,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="loanDetails">
      <h1>{title}</h1>
      <div className="loan-info">
        <div className="info">
          <h3>What is {title}?</h3>
          <p>{info}</p>
        </div>
        <div className="img">
          <img src={imgSrc} alt={alt} />
        </div>
      </div>

      <h3>What are the benefits of {title}?</h3>
      <div className="features">
        {Object.entries(features).map(([key, value]) => (
          <div key={key} className="feature-step">
            <p>{key}</p>
            <p>. {value}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>What is the eligibility to get a {title}?</h3>
        <div className="eligibility">
          {eligibility.map((item, index) => (
            <div key={index} className="eligibility-step">
              <ul>
                {item.list.map((detail, idx) => (
                  <p key={idx}>
                    {idx + 1}. {detail}
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {process && (
        <>
          <h3>What is the process to get a {title}?</h3>
          <div className="process-steps">
            {Object.entries(process).map(([key, value]) => (
              <div key={key} className="process-step">
                <p>{key}</p>
                <p>. {value}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="document-requirements">
        {documents && <h3>Documents Required for {title}</h3>}
        {documents &&
          documents.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h4>{category.type}</h4>
              <ul className="document-list">
                {category.list.map((document, index) => (
                  <p key={index}>
                    {index + 1}. {document}
                  </p>
                ))}
              </ul>
            </div>
          ))}
      </div>

      <h3>Calculate your EMI with Loan Calculator</h3>
      <div className="calc-btn">
        <LinkBtn
          navTo={"/loanCalculator"}
          name={"Loan Calculator"}
          className={"link-btn"}
        />
      </div>
    </div>
  );
};

export default LoanDetails;
