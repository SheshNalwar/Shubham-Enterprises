import React, { useState, useEffect, useRef } from "react";
import "../css/loanCalculator.css";
import {
  calculateLoanDetails,
  calculateEMI,
  displayDetails,
  initialize,
} from "../Index";

const LoanCalculatorPage = () => {
  const [amount, setAmount] = useState(1000000);
  const [interest, setInterest] = useState(9);
  const [years, setYears] = useState(5);
  const [emi, setEmi] = useState(0);
  const [payableInterest, setPayableInterest] = useState(0);
  const pieChartRef = useRef(null);
  const pieInstanceRef = useRef(null);

  useEffect(() => {
    initialize(
      pieInstanceRef,
      pieChartRef,
      displayDetails,
      calculateEMI,
      calculateLoanDetails,
      setEmi,
      setPayableInterest,
      amount,
      interest,
      years
    );
  }, []);

  useEffect(() => {
    if (pieInstanceRef.current) {
      displayDetails(
        calculateEMI,
        calculateLoanDetails,
        setEmi,
        setPayableInterest,
        amount,
        interest,
        years,
        pieInstanceRef
      );
    }
  }, [amount, interest, years]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="mainLoanPage">
      <h1 className="loanCalciH1">Loan Calculator</h1>
      <div className="loanCalculatorPage">
        <div className="sub-container">
          <div className="view">
            <div className="details">
              <div>
                <div className="detail">
                  <div className="totalSelected">
                    <p className="label">Amount</p>
                    <p id="loan-amt-text" className="amtvalue">
                      ₹ {amount.toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
                <input
                  type="range"
                  id="loan-amount"
                  min="0"
                  max="10000000"
                  step="50000"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <div className="detail">
                  <div className="totalSelected">
                    <p className="label">Length</p>
                    <p id="loan-period-text" className="amtvalue">
                      {years} years
                    </p>
                  </div>
                </div>
                <input
                  type="range"
                  id="loan-period"
                  min="1"
                  max="15"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <div className="detail">
                  <div className="totalSelected">
                    <p className="label">Interest</p>
                    <p id="interest-rate-text" className="amtvalue">
                      {interest}%
                    </p>
                  </div>
                </div>
                <input
                  type="range"
                  id="interest-rate"
                  min="5"
                  max="15"
                  step="0.1"
                  value={interest}
                  onChange={(e) => setInterest(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="emiDisplayer">
              <p id="price-container">
                You Will Pay
                <span id="price">₹ {emi.toLocaleString("en-IN")} </span>
                per month
              </p>
            </div>
          </div>
          <div className="breakup">
            <canvas id="pieChart" ref={pieChartRef}></canvas>
          </div>
        </div>
        <div className="loanCalDetails">
          <div className="chart-details">
            <p className="loanDetailsP">Principal</p>
            <p id="cp" className="value">
              {amount.toLocaleString("en-IN")}₹
            </p>
          </div>
          <div className="chart-details">
            <p className="loanDetailsP">Interest</p>
            <p id="ci" className="value">
              {payableInterest.toLocaleString("en-IN")}₹
            </p>
          </div>
          <div className="chart-details">
            <p className="loanDetailsP">Total Payable</p>
            <p id="ct" className="value">
              {(amount + payableInterest).toLocaleString("en-IN")}₹
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorPage;
