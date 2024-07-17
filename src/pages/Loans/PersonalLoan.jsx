import { LoanDetails, loanDetails } from "../../Index";
const PersonalLoan = () => {
  const firstLoanDetail = loanDetails[0];
  return (
    <div>
      {
        <LoanDetails
          title={firstLoanDetail.title}
          imgSrc={firstLoanDetail.imgSrc}
          info={firstLoanDetail.info}
          alt={firstLoanDetail.alt}
          features={firstLoanDetail.features}
          eligibility={firstLoanDetail.eligibility}
          process={firstLoanDetail.process}
        />
      }
    </div>
  );
};

export default PersonalLoan;
