import { NavLink } from "react-router-dom";

const NavLoanLinks = ({ navTo, loanName }) => {
  return <NavLink to={navTo} id="hamMenuH4">{loanName} Loan</NavLink>;
};

export default NavLoanLinks;
