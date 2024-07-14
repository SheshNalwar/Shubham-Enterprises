import { calculateLoanDetails, calculateEMI } from "../Index";
import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../css/loanCalculator.css";

const LoanCalculatorPage = () => {
  const [P, setP] = useState(0);
  const [R, setR] = useState(1);
  const [N, setN] = useState(1);
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
  }, [P, R, N]);
  const displayDetails = () => {
    const emi = calculateEMI(P, R, N);
    const payableInterest = calculateLoanDetails(P, R / 1200, emi);
    setEmi(emi);
    setPayableInterest(payableInterest);
    const opts = {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    };
    document.querySelector("#cp").innerText = P.toLocaleString("en-IN", opts);
    document.querySelector("#ci").innerText = payableInterest.toLocaleString(
      "en-IN",
      opts
    );
    document.querySelector("#ct").innerText = (
      P + payableInterest
    ).toLocaleString("en-IN", opts);
    document.querySelector("#price").innerText =
      emi.toLocaleString("en-IN", opts) + "/mo";
    const pie = pieInstanceRef.current;
    pie.data.datasets[0].data[0] = P;
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
            backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
            hoverOffset: 4,
          },
        ],
      },
    });
    pieInstanceRef.current = pie;
    displayDetails();
  };

  return (
    <div id="mainLoanPage">
      <div className="loanCalculatorPage">
        <div className="sub-container">
          <div className="view">
            <div className="details">
              <div>
                <div className="detail">
                  <p className="label">Amount</p>
                  <p id="loan-amt-text" className="value">
                    {P.toLocaleString("en-IN")}₹
                  </p>
                  <div className="amt">
                    <p>Min</p>
                    <p>Max</p>
                  </div>
                </div>
                <input
                  type="range"
                  id="loan-amount"
                  min="0"
                  max="10000000"
                  step="50000"
                  value={P}
                  onChange={(e) => setP(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <div className="detail">
                  <p className="label">Length</p>
                  <p id="loan-period-text" className="value">
                    {N} years
                  </p>
                </div>
                <input
                  type="range"
                  id="loan-period"
                  min="1"
                  max="15"
                  step=".1"
                  value={N}
                  onChange={(e) => setN(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <div className="detail">
                  <p className="label">% Interest</p>
                  <p id="interest-rate-text" className="value">
                    {R}%
                  </p>
                </div>
                <input
                  type="range"
                  id="interest-rate"
                  min="5"
                  max="15"
                  step="0.1"
                  value={R}
                  onChange={(e) => setR(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="footer">
              <p id="price-container">
                <span id="price">{emi.toLocaleString("en-IN")}₹ </span>
              </p>
            </div>
          </div>
          <div className="breakup">
            <canvas id="pieChart" ref={pieChartRef}></canvas>
          </div>
        </div>
        <div className="loan-details">
          <div className="chart-details">
            <p className="label">Principal</p>
            <p id="cp" className="value">
              {P.toLocaleString("en-IN")}₹
            </p>
          </div>
          <div className="chart-details">
            <p className="label">Interest</p>
            <p id="ci" className="value">
              {payableInterest.toLocaleString("en-IN")}₹
            </p>
          </div>
          <div className="chart-details">
            <p className="label">Total Payable</p>
            <p id="ct" className="value">
              {(P + payableInterest).toLocaleString("en-IN")}₹
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorPage;
