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
import AboutUsPage from "./pages/AboutUsPage";
import Homepage from "./pages/Homepage";
import LoanCalculatorPage from "./pages/LoanCalculatorPage";
export { LoanCalculatorPage, AboutUsPage, Homepage };

// Components
import NavLoanLinks from "./components/NavLoanLinks";
import Review from "./components/Review";
import LinkBtn from "./components/LinkBtn";
import Footer from "./components/Footer";
import Loans from "./components/Loans";
import Card from "./components/Card";
import Faq from "./components/Faq";
import Nav from "./components/Nav";
import LoanDetails from "./components/LoanDetails";

// utils
import { loanTypesData, reviewsData, faqsData } from "./utils/Data";
import { calculateEMI, calculateLoanDetails } from "./utils/LoanCalculator";

export {
  calculateEMI,
  calculateLoanDetails,
  LinkBtn,
  Loans,
  faqsData,
  Review,
  Faq,
  Nav,
  reviewsData,
  Card,
  loanTypesData,
  NavLoanLinks,
  Footer,
  LoanDetails,
};
