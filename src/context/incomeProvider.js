import * as React from 'react';

export const IncomeContext = React.createContext();
function IncomeProvider({ children }) {
  const data = { name: 'Suman' };
  return <IncomeContext.Provider value={data}>{children}</IncomeContext.Provider>;
}

export default IncomeProvider;
