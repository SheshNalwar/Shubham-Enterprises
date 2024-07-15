import { LoanDetails, loanDetails } from "../../Index";
const HomeLoan = () => {
  const firstLoanDetail = loanDetails[2];
  return (
    <div style={{ paddingTop: "5rem" }}>
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
