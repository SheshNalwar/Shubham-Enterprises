import LoanDetails from "../../components/LoanDetails";
import { loanDetails } from "../../utils/Data"
const CommercialVLoan = () => {
  const firstLoanDetail = loanDetails[7];
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

        />
      }
    </div>

  );
};

export default CommercialVLoan;
