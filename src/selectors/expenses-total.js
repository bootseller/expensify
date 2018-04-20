//get total amount of expenses

export const expensesTotalAmount = (expenses) => {
  return expenses.map(expense => expense.amount)
    .reduce((sum, value) => sum + value, 0)
};

export const expensesTotalNumber = (expenses) => {
  return expenses.length
};