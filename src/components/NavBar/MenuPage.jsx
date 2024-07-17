import { NavLink } from "react-router-dom";
import { Contact, loanTypesData } from "../../Index";
import { useState } from "react";
const MenuPage = ({ op, rf, toggleMenu }) => {
  const [subMenuOpen, setSubMenuOpen] = useState({
    loansSubMenu: false,
    calculatorSubMenu: false,
  });
  const toggleSubMenu = (menuId) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };
  const handleCloseMenu = () => {
    toggleMenu();
  };
  return (
    <div className={op ? "menuActive" : "menuPage"} ref={rf}>
      <ul>
        <li>
          <NavLink to="/" onClick={handleCloseMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <p
            onClick={() => toggleSubMenu("loansSubMenu")}
            style={{ cursor: "pointer" }}
          >
            Loans
          </p>
        </li>
        <div
          className={`sub-menu ${subMenuOpen.loansSubMenu ? "show" : "hide"}`}
        >
          {loanTypesData.map((loan, index) => (
            <NavLink
              key={index}
              to={loan.navigation}
              id="hamMenuH4"
              onClick={handleCloseMenu}
            >
              {loan.loanName} Loan
            </NavLink>
          ))}
        </div>
        <li>
          <NavLink to="/loanCalculator" onClick={handleCloseMenu}>
            Loan Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs" onClick={handleCloseMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <Contact />
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;
