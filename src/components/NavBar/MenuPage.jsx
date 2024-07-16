import { LinkBtn, NavLoanLinks, Contact, loanTypesData } from "../../Index";
import { useState } from "react";
const MenuPage = ({ op, rf }) => {
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
  return (
    <div className={op ? "menuActive" : "menuPage"} ref={rf}>
      <ul>
        <li>
          <LinkBtn className="" name="Home" navTo="/" />
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
            <NavLoanLinks
              key={index}
              loanName={loan.loanName}
              navTo={loan.navigation}
            />
          ))}
        </div>
        <li>
          <LinkBtn
            className=""
            name="Loan Calculator"
            navTo="/loanCalculator"
          />
        </li>
        <li>
          <LinkBtn className="" name="About Us" navTo="/aboutUs" />
        </li>
        <li>
          <Contact />
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;
