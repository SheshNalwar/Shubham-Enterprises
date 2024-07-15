import { loanTypesData, NavLoanLinks, LinkBtn } from "../Index";
import "../css/component styling/footer.css";
const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <button className="top-button" onClick={backToTop}>
        Back to Top
      </button>
      <div className="footer-lists">
        <ul className="footerUL">
          <b>Contact Us</b>
          <LinkBtn className="contact" name="Click Here" navTo="/contactUs" />
          <li>
            Address: 59/2, Old Santosh Nagar, Near Sudha Idli Gruh, Bijapur
            Road, Solapur -413 004
          </li>
        </ul>
        <ul className="footerUL">
          <b>Quick Links</b>
          <LinkBtn className="" name="Home" navTo="/" />
          <LinkBtn
            className="nav-color"
            name="Loan Calculator"
            navTo="/loanCalculator"
          />
          <LinkBtn className="nav-color" name="About Us" navTo="/aboutUs" />
          {/* <LinkBtn className="nav-color" name="Contact Us" navTo="/contactUs" /> */}
        </ul>
        <ul className="footerUL">
          <b>Our Services </b>
          {loanTypesData.map((loan, index) => (
            <NavLoanLinks
              navTo={loan.navigation}
              key={index}
              loanName={loan.loanName}
            />
          ))}
        </ul>

      </div>
      <div className="footer-bottom">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Copyright © 2024 Shubham Enterprises</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
