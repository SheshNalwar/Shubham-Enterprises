import { useLoanCalculator, LoanCalDetails, ChartDetails } from "../Index";
import React, { useState, useEffect } from "react";
import "../css/loanCalculator.css";

const LoanCalculatorPage = () => {
  const [amount, setAmount] = useState(1000000);
  const [interest, setInterest] = useState(9);
  const [years, setYears] = useState(5);
  const { emi, payableInterest, pieChartRef } = useLoanCalculator(
    amount,
    interest,
    years
  );
  const stateSetters = {
    Amount: [amount, setAmount],
    Length: [years, setYears],
    Interest: [interest, setInterest],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="mainLoanPage">
      <h1 className="loanCalciH1">Loan Calculator</h1>
      <div className="loanCalculatorPage">
        <div className="sub-container">
          <div className="view">
            <LoanCalDetails stateSetters={stateSetters} />
            <div className="emiDisplayer">
              <p id="price-container">
                You Will Pay
                <span id="price">₹ {emi.toLocaleString("en-IN")} </span>
                per month
              </p>
            </div>
          </div>
          <div>
            <canvas id="pieChart" ref={pieChartRef}></canvas>
          </div>
        </div>
        <div className="loanCalDetails">
          <ChartDetails name="Principal" pId="cp" total={amount} />
          <ChartDetails name="Interest" pId="ci" total={payableInterest} />
          <ChartDetails
            name="Total Payable"
            pId="ct"
            total={amount + payableInterest}
          />
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorPage;
