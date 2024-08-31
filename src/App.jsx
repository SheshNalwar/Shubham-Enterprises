import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUsPage,
  Footer,
  Homepage,
  Page404,
  LoanCalculatorPage,
  Nav,
  loanDetails,
  loanTypesData,
  LoansPage,
} from "./Index";
const mergedLoanData = loanTypesData
  .map((loanType) => {
    const loanDetail = loanDetails.find(
      (detail) => detail.alt === loanType.alt
    );
    if (loanDetail) {
      return { ...loanType, ...loanDetail };
    } else {
      console.warn(`No matching loan detail found for ${loanType.alt}`);
      return null;
    }
  })
  .filter((loan) => loan !== null);
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/loanCalculator" element={<LoanCalculatorPage />} />
          {mergedLoanData.map((loan) => (
            <Route
              key={loan.id || loan.navigation}
              path={`/${loan.navigation}`}
              element={<LoansPage loan={loan} />}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
