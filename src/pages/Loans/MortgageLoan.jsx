import { LoanDetails, loanDetails } from "../../Index";
const MortgageLoan = () => {
  const firstLoanDetail = loanDetails[5];
  return (
    <div>
      {
        <LoanDetails
          title={firstLoanDetail.title}
          info={firstLoanDetail.info}
          imgSrc={firstLoanDetail.imgSrc}
          alt={firstLoanDetail.alt}
          features={firstLoanDetail.features}
          eligibility={firstLoanDetail.eligibility}
          process={firstLoanDetail.process}
        />
      }
    </div>
  );
};

export default MortgageLoan;
