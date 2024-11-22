import { NavLink } from "react-router-dom";

const NavLoanLinks = ({ navTo, loanName, img, alt }) => {
  return (
    <NavLink to={navTo} id="hamMenuH4">
      <img src={img} alt={alt} id="navMenuImg"/>
      {loanName} Loan
    </NavLink>
  );
};

export default NavLoanLinks;
