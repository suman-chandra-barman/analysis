import * as React from 'react';

export const IncomeContext = React.createContext();

function IncomeProvider({ children }) {
  const [incomesData, setIncomesData] = React.useState([]);
  const [expenseData, setExpenseData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:5000/incomes')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIncomesData(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  React.useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExpenseData(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(expenseData);
  const data = { incomesData, expenseData };
  return <IncomeContext.Provider value={data}>{children}</IncomeContext.Provider>;
}

export default IncomeProvider;
