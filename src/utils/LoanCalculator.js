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
