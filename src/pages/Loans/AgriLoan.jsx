import { LoanDetails, loanDetails } from "../../Index";
const AgriLoan = () => {
  const firstLoanDetail = loanDetails[6];
  return (
    <div>
      {
        <LoanDetails
          title={firstLoanDetail.title}
          alt={firstLoanDetail.alt}
          imgSrc={firstLoanDetail.imgSrc}
          info={firstLoanDetail.info}
          features={firstLoanDetail.features}
          eligibility={firstLoanDetail.eligibility}
          process={firstLoanDetail.process}
        />
      }
    </div>
  );
};

export default AgriLoan;
