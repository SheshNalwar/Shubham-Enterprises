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
        <ul>
          <b>Quick Links</b>
          {/* <LinkBtn className="" name="Home" navTo="/" /> */}
          <LinkBtn
            className="nav-color"
            name="Loan Calculator"
            navTo="/loanCalculator"
            target=""
          />
          <LinkBtn
            className="nav-color"
            name="About Us"
            navTo="/aboutUs"
            target=""
          />
          <LinkBtn
            className="nav-color"
            name="Contact Us"
            navTo="https://www.google.com/"
            target="_blank"
          />
        </ul>
        <ul>
          <b>Our Services </b>
          {loanTypesData.map((loan, index) => (
            <NavLoanLinks
              navTo={loan.navigation}
              key={index}
              loanName={loan.loanName}
            />
          ))}
        </ul>
        <ul>
          <b>Contact Us</b>
          <li>Phone: xxxxxxx199</li>
          <li>Email : xyz@gmail.com</li>
          <li>Address: Solapur</li>
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
