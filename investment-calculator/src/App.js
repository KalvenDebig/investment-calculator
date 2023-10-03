import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";

const App = () => {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event

    const yearlyData = []; // per-year results
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest, etc
    for (let i = 0; i < duration; i ++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }

    // do something with yearlyData
  };

  return (
    <div>
      <Header></Header>
      <UserInput></UserInput>
      {/* todo: Show below table conditionally (only once result data is available) */}
      {/* todo: Show fallback text if no data is available */}
      <ResultsTable></ResultsTable>
    </div>
  );
};

export default App;