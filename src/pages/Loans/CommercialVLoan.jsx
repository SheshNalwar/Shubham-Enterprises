import { LoanDetails, loanDetails } from "../../Index";
const CommercialVLoan = () => {
  const firstLoanDetail = loanDetails[7];
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

export default CommercialVLoan;
