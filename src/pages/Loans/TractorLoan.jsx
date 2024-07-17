import { LoanDetails, loanDetails } from "../../Index";
const TractorLoan = () => {
  const firstLoanDetail = loanDetails[4];
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

export default TractorLoan;
