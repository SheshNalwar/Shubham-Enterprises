import { useState, useEffect, useRef } from "react";
import {
  calculateEMI,
  displayDetails,
  initialize,
  calculateLoanDetails,
} from "../Index";

const useLoanCalculator = (amount, interest, years) => {
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

  return {
    emi,
    payableInterest,
    pieChartRef,
  };
};

export default useLoanCalculator;
