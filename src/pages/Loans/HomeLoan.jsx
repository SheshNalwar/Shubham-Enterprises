import { LoanDetails, loanDetails } from "../../Index";
const HomeLoan = () => {
  const firstLoanDetail = loanDetails[2];
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
          documents={firstLoanDetail.documents}
        />
      }
    </div>
  );
};

export default HomeLoan;
