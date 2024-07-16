import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUsPage,
  AgriLoan,
  BusinessLoan,
  CarLoan,
  CommercialVLoan,
  Footer,
  HomeLoan,
  Homepage,
  LoanCalculatorPage,
  MortgageLoan,
  Nav,
  PersonalLoan,
  TractorLoan,
} from "./Index";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/loanCalculator" element={<LoanCalculatorPage />} />
          <Route path="/personalLoan" element={<PersonalLoan />} />
          <Route path="/homeLoan" element={<HomeLoan />} />
          <Route path="/agriLoan" element={<AgriLoan />} />
          <Route path="/carLoan" element={<CarLoan />} />
          <Route path="/businessLoan" element={<BusinessLoan />} />
          <Route path="/mortgageLoan" element={<MortgageLoan />} />
          <Route path="/tractorLoan" element={<TractorLoan />} />
          <Route path="/commercialVLoan" element={<CommercialVLoan />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
