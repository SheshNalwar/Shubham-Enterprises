import { LoanDetails } from "../Index";
const LoansPage = ({ loan }) => {
  return (
    <div>
      <LoanDetails
        title={loan.title}
        alt={loan.alt}
        imgSrc={loan.imgSrc}
        info={loan.info}
        features={loan.features}
        eligibility={loan.eligibility}
        process={loan.process}
      />
    </div>
  );
};

export default LoansPage;
