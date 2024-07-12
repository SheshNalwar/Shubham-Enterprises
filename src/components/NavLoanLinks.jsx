import { NavLink } from "react-router-dom";

const NavLoanLinks = ({ navTo, loanName }) => {
  return <NavLink to={navTo}>{loanName} Loan</NavLink>;
};

export default NavLoanLinks;
