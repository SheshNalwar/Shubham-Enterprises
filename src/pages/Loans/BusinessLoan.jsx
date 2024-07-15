import LoanDetails from "../../components/LoanDetails";
import { loanDetails } from "../../utils/Data"
const BusinessLoan = () => {

  const firstLoanDetail = loanDetails[1];
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

export default BusinessLoan;
