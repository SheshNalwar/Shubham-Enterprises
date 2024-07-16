import { LinkBtn, loanTypesData, NavLoanLinks, Contact } from "../../Index";
import { useState } from "react";
const NavMenu = () => {
  const [arrowSrc, setArrowSrc] = useState("up-arrow.png");
  const handleMouseOver = () => {
    setArrowSrc("down-arrow.png");
  };
  const handleMouseOut = () => {
    setArrowSrc("up-arrow.png");
  };
  return (
    <div className="nav-menu">
      <li>
        <LinkBtn className="nav-color" name="Home" navTo="/" />
      </li>
      <li
        id="dropdown"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p>Loans</p>
        <img src={arrowSrc} alt="arrow" id="up-arrow" />
        <div className="dropdown-content">
          {loanTypesData.map((loan, index) => (
            <NavLoanLinks
              key={index}
              loanName={loan.loanName}
              navTo={loan.navigation}
            />
          ))}
        </div>
      </li>
      <li>
        <LinkBtn
          className="nav-color"
          name="Loan Calculator"
          navTo="/loanCalculator"
        />
      </li>
      <li>
        <LinkBtn className="nav-color" name="About Us" navTo="/aboutUs" />
      </li>
      <li>
        <Contact />
      </li>
    </div>
  );
};

export default NavMenu;
