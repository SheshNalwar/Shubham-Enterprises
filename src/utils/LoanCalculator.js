import Chart from "chart.js/auto";
export const calculateLoanDetails = (P, R, emi) => {
  let totalInterest = 0;
  while (P > 0) {
    let interest = parseFloat(P) * parseFloat(R);
    P = parseFloat(P) - (parseFloat(emi) - interest);
    totalInterest += interest;
  }
  return totalInterest;
};

export const calculateEMI = (P, R, N) => {
  let r = parseFloat(R) / 1200;
  let n = parseFloat(N) * 12;
  let num = parseFloat(P) * r * Math.pow(1 + r, n);
  let denom = Math.pow(1 + r, n) - 1;
  let emi = parseFloat(num) / parseFloat(denom);
  return emi;
};

export const displayDetails = (
  calculateEMI,
  calculateLoanDetails,
  setEmi,
  setPayableInterest,
  amount,
  interest,
  years,
  pieInstanceRef
) => {
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

export const initialize = (
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
) => {
  if (pieInstanceRef.current) {
    pieInstanceRef.current.destroy();
  }
  const ctx = pieChartRef.current.getContext("2d");
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
};
