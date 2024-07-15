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
import ContactUsPage from "./pages/ContactUsPage";
import Homepage from "./pages/Homepage";
export { LoanCalculatorPage, AboutUsPage, Homepage, ContactUsPage };

// Components
import NavLoanLinks from "./components/NavLoanLinks";
import LoanDetails from "./components/LoanDetails";
import LinkBtn from "./components/LinkBtn";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Loans from "./components/Loans";
import Card from "./components/Card";
import Faq from "./components/Faq";
import Nav from "./components/Nav";
export {
  LinkBtn,
  Loans,
  Review,
  Faq,
  Nav,
  Card,
  NavLoanLinks,
  Footer,
  LoanDetails,
};

// utils
import {
  loanTypesData,
  reviewsData,
  faqsData,
  loanDetails,
} from "./utils/Data";
import {
  calculateEMI,
  calculateLoanDetails,
  initialize,
  displayDetails,
} from "./utils/LoanCalculator";
export {
  initialize,
  displayDetails,
  calculateEMI,
  loanDetails,
  calculateLoanDetails,
  faqsData,
  reviewsData,
  loanTypesData,
};
