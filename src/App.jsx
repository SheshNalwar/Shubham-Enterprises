import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AgriLoan,
  BusinessLoan,
  CarLoan,
  CommercialVLoan,
  Footer,
  HomeLoan,
  Homepage,
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
