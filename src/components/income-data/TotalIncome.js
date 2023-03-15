export const totalIncome = (incomes) => {
  let totalIncomeAmount = 0;
  incomes.forEach((income) => {
    totalIncomeAmount += +income.amount;
  });
  return totalIncomeAmount;
};
