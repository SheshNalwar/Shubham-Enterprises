// Loan Pages :
import CommercialVLoan from "./pages/Loans/CommercialVLoan";
import BusinessLoan from "./pages/Loans/BusinessLoan";
import MortgageLoan from "./pages/Loans/MortgageLoan";
import PersonalLoan from "./pages/Loans/PersonalLoan";
import TractorLoan from "./pages/Loans/TractorLoan";
import HomeLoan from "./pages/Loans/HomeLoan";
import AgriLoan from "./pages/Loans/AgriLoan";
import CarLoan from "./pages/Loans/CarLoan";
export {
  CommercialVLoan,
  BusinessLoan,
  MortgageLoan,
  PersonalLoan,
  TractorLoan,
  HomeLoan,
  AgriLoan,
  CarLoan,
};

// Pages :
import LoanCalculatorPage from "./pages/LoanCalculatorPage";
import AboutUsPage from "./pages/AboutUsPage";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
export { LoanCalculatorPage, AboutUsPage, Homepage, Page404 };

// Components
import DetailWithInput from "./components/LoanCalci/DetailWithInput";
import LoanCalDetails from "./components/LoanCalci/LoanCalDetails";
import ReviewCarousel from "./components/Review/ReviewCarousel";
import ChartDetails from "./components/LoanCalci/ChartDetails";
import NavLoanLinks from "./components/NavBar/NavLoanLinks";
import Hamburger from "./components/NavBar/Hamburger";
import MenuPage from "./components/NavBar/MenuPage";
import LoanDetails from "./components/LoanDetails";
import NavMenu from "./components/NavBar/NavMenu";
import Contact from "./components/Contact";
import LinkBtn from "./components/LinkBtn";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer";
import Loans from "./components/Loans";
import Faq from "./components/Faq";
export {
  Hamburger,
  MenuPage,
  NavMenu,
  Contact,
  LoanCalDetails,
  DetailWithInput,
  ChartDetails,
  ReviewCarousel,
  LinkBtn,
  Loans,
  Faq,
  Nav,
  NavLoanLinks,
  Footer,
  LoanDetails,
};

// utils
import useLoanCalculator from "./utils/useLoanCalculator";
import {
  loanTypesData,
  reviewsData,
  faqsData,
  loanDetails,
  inputDetails,
} from "./utils/Data";
import {
  calculateEMI,
  calculateLoanDetails,
  initialize,
  displayDetails,
} from "./utils/LoanCalculator";
export {
  useLoanCalculator,
  inputDetails,
  initialize,
  displayDetails,
  calculateEMI,
  loanDetails,
  calculateLoanDetails,
  faqsData,
  reviewsData,
  loanTypesData,
};
