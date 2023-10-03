import logo from "./assets/investment-calculator-logo.png";

function App() {
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
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Contribution ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>

        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest ($, per year)</label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor"duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type"reset" className="buttonAlt">Reset</button>
          <button type="submit" className="button">Calculate</button>
        </p>
      </form>
      {/* todo: Show below table conditionally (only once result data is available) */}
      {/* todo: Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>YEAR NUMBER</th>
            <th>TOTAL SAVINGS END OF YEAR</th>
            <th>INTEREST GAINED IN YEAR</th>
            <th>TOTAL INTEREST GAINED</th>
            <th>TOTAL INVESTED CAPITAL</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;