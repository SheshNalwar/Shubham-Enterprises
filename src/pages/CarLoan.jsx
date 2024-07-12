import LoanDetails from "../components/LoanDetails";
import { loanDetails } from "../utils/Data"
const CarLoan = () => {
  const firstLoanDetail = loanDetails[3];
  return (
    <div style={{ paddingTop: "5rem" }}>
      {
        <LoanDetails
          title={firstLoanDetail.title}
          info={firstLoanDetail.info}
          features={firstLoanDetail.features}
          eligibility={firstLoanDetail.eligibility}
          process={firstLoanDetail.process}

        />
      }
    </div>

  );
};

export default CarLoan;

