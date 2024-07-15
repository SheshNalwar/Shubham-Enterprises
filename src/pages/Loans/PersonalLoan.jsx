import LoanDetails from "../../components/LoanDetails";
import { loanDetails } from "../../utils/Data"

const PersonalLoan = () => {
  const firstLoanDetail = loanDetails[0];
  return (
    <div style={{ paddingTop: "5rem" }}>
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
