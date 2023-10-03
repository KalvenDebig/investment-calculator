import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import {useState} from "react";

const App = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  // when userInput is changed, react will rerender this component
  // therefore following code will be executed once userInput is changed
  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput['current-savings'];
    const yearlyContribution = userInput['yearly-contribution'];
    const expectedReturn = userInput['expected-return'] / 100;
    const duration = userInput['duration'];

    for (let i = 0; i < duration; i ++) {
      const yearlyInterest = currfentSavings & expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  return (
    <div>
      <Header></Header>
      <UserInput onCalculate={calculateHandler}></UserInput>
      {/* todo: Show below table conditionally (only once result data is available) */}
      {/* todo: Show fallback text if no data is available */}
      <ResultsTable></ResultsTable>
    </div>
  );
};

export default App;