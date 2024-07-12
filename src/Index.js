// Pages :
import CommercialVLoan from "./pages/CommercialVLoan";
import BusinessLoan from "./pages/BusinessLoan";
import MortgageLoan from "./pages/MortgageLoan";
import PersonalLoan from "./pages/PersonalLoan";
import AboutUsPage from "./pages/AboutUsPage";
import TractorLoan from "./pages/TractorLoan";
import HomeLoan from "./pages/HomeLoan";
import AgriLoan from "./pages/AgriLoan";
import Homepage from "./pages/Homepage";
import CarLoan from "./pages/CarLoan";

export {
  CommercialVLoan,
  BusinessLoan,
  MortgageLoan,
  PersonalLoan,
  TractorLoan,
  AboutUsPage,
  HomeLoan,
  Homepage,
  AgriLoan,
  CarLoan,
};

// Components
import NavLoanLinks from "./components/NavLoanLinks";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Loans from "./components/Loans";
import Card from "./components/Card";
import Faq from "./components/Faq";
import Nav from "./components/Nav";

// utils
import { loanTypesData, reviewsData } from "./utils/Data";

export {
  Loans,
  Review,
  Faq,
  Nav,
  reviewsData,
  Card,
  loanTypesData,
  NavLoanLinks,
  Footer,
};
