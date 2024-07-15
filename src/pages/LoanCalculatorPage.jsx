import { calculateLoanDetails, calculateEMI } from "../Index";
import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../css/loanCalculator.css";

const LoanCalculatorPage = () => {
  const [amount, setAmount] = useState(1000000);
  const [interest, setInterest] = useState(9);
  const [years, setYears] = useState(5);
  const [emi, setEmi] = useState(0);
  const [payableInterest, setPayableInterest] = useState(0);
  const pieChartRef = useRef(null);
  const pieInstanceRef = useRef(null);

  useEffect(() => {
    initialize();
  }, []);
  useEffect(() => {
    if (pieInstanceRef.current) {
      displayDetails();
    }
  }, [amount, interest, years]);
  const displayDetails = () => {
    const emi = calculateEMI(amount, interest, years);
    const payableInterest = calculateLoanDetails(amount, interest / 1200, emi);
    setEmi(emi);
    setPayableInterest(payableInterest);
    const opts = {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    };
    document.querySelector("#cp").innerText = amount.toLocaleString(
      "en-IN",
      opts
    );
    document.querySelector("#ci").innerText = payableInterest.toLocaleString(
      "en-IN",
      opts
    );
    document.querySelector("#ct").innerText = (
      amount + payableInterest
    ).toLocaleString("en-IN", opts);
    document.querySelector("#price").innerText = emi.toLocaleString(
      "en-IN",
      opts
    );
    const pie = pieInstanceRef.current;
    pie.data.datasets[0].data[0] = amount;
    pie.data.datasets[0].data[1] = payableInterest;
    pie.update();
  };
  const initialize = () => {
    if (pieInstanceRef.current) {
      pieInstanceRef.current.destroy();
    }
    const ctx = document.getElementById("pieChart").getContext("2d");
    const pie = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Principal", "Interest"],
        datasets: [
          {
            label: "Home Loan Details",
            data: [0, 0],
            backgroundColor: ["#70e000", "#0e3041"],
            hoverOffset: 4,
          },
        ],
      },
    });
    pieInstanceRef.current = pie;
    displayDetails();
  };

  return (
    <>
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
    </>
  );
};

export default LoanCalculatorPage;
