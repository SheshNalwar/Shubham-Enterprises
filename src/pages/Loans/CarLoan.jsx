import { LoanDetails, loanDetails } from "../../Index";
const CarLoan = () => {
  const firstLoanDetail = loanDetails[3];
  return (
    <div style={{ paddingTop: "5rem" }}>
      {
        <LoanDetails
          title={firstLoanDetail.title}
          imgSrc={firstLoanDetail.imgSrc}
          alt={firstLoanDetail.alt}
          info={firstLoanDetail.info}
          features={firstLoanDetail.features}
          eligibility={firstLoanDetail.eligibility}
          process={firstLoanDetail.process}
          documents={firstLoanDetail.documents}
        />
      }
    </div>
  );
};

export default CarLoan;
