import { useNavigate } from "react-router-dom";
const Loans = ({ imgSrc, alt, loanName, navigation }) => {
  const navigate = useNavigate();
  function navigateTo() {
    navigate(`/${navigation}`);
  }
  return (
    <div className="loans" onClick={navigateTo}>
      <img src={imgSrc} alt={alt} />
      <span>
        <h4>{loanName} Loans</h4>
      </span>
    </div>
  );
};

export default Loans;
